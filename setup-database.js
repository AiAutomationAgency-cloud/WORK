#!/usr/bin/env node

/**
 * Database Setup Script
 * This script helps set up and verify your database configuration
 */

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

async function setupDatabase() {
  log('\n🔧 Database Setup Script', colors.blue);
  log('=============================', colors.blue);

  // Check environment variables
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    log('\n❌ DATABASE_URL not found!', colors.red);
    log('\nPlease set your DATABASE_URL environment variable:', colors.yellow);
    log('- For Neon: postgresql://user:password@host/database?sslmode=require');
    log('- For Supabase: postgresql://postgres.xxx:password@xxx.pooler.supabase.com:6543/postgres');
    log('- For local: postgresql://postgres:password@localhost:5432/database_name');
    process.exit(1);
  }

  log(`\n✅ Found DATABASE_URL: ${databaseUrl.replace(/:[^:]*@/, ':****@')}`, colors.green);

  try {
    // Test database connection
    log('\n🔗 Testing database connection...', colors.cyan);
    const client = postgres(databaseUrl, {
      max: 1,
      idle_timeout: 20,
      connect_timeout: 10
    });
    
    const db = drizzle(client);

    // Test basic connection
    await client`SELECT 1 as test`;
    log('✅ Database connection successful!', colors.green);

    // Check if tables exist
    log('\n📋 Checking database schema...', colors.cyan);
    
    const tables = await client`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('services', 'team_members', 'projects', 'testimonials')
    `;

    const tableNames = tables.map(t => t.table_name);
    const expectedTables = ['services', 'team_members', 'projects', 'testimonials'];
    
    log(`Found tables: ${tableNames.join(', ') || 'none'}`, colors.yellow);

    if (tableNames.length === 0) {
      log('\n⚠️  No tables found. You need to push the schema:', colors.yellow);
      log('Run: npm run db:push', colors.cyan);
    } else if (tableNames.length < expectedTables.length) {
      log('\n⚠️  Some tables missing. You may need to push schema updates:', colors.yellow);
      log('Run: npm run db:push', colors.cyan);
    } else {
      log('✅ All required tables exist!', colors.green);
    }

    // Check data
    log('\n📊 Checking database data...', colors.cyan);
    try {
      const services = await client`SELECT COUNT(*) as count FROM services`;
      const teamMembers = await client`SELECT COUNT(*) as count FROM team_members`;
      const projects = await client`SELECT COUNT(*) as count FROM projects`;
      const testimonials = await client`SELECT COUNT(*) as count FROM testimonials`;

      log('✅ Database contains data!', colors.green);
      log(`   Services: ${services[0].count}`);
      log(`   Team members: ${teamMembers[0].count}`);
      log(`   Projects: ${projects[0].count}`);
      log(`   Testimonials: ${testimonials[0].count}`);
    } catch (error) {
      log('⚠️  Could not check data (tables may not exist yet)', colors.yellow);
    }

    await client.end();

    log('\n🎉 Database setup check complete!', colors.green);
    log('\nNext steps:', colors.blue);
    log('1. If tables are missing: npm run db:push', colors.cyan);
    log('2. Start development: npm run dev', colors.cyan);
    log('3. For deployment: Set DATABASE_URL in your hosting platform', colors.cyan);

  } catch (error) {
    log('\n❌ Database connection failed!', colors.red);
    log(`Error: ${error.message}`, colors.red);
    
    log('\nPossible solutions:', colors.yellow);
    log('1. Check if DATABASE_URL is correct');
    log('2. Verify database is running and accessible');
    log('3. Check network connectivity');
    log('4. Ensure database allows external connections');
    
    if (error.message.includes('timeout')) {
      log('\nTip: Database might be sleeping (common with free tiers)', colors.cyan);
    }
    
    process.exit(1);
  }
}

// Run the setup
setupDatabase().catch(console.error);