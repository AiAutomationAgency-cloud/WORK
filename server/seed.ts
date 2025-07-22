import { db } from "./db";
import { services, teamMembers, projects, testimonials } from "@shared/schema";

export async function seedDatabase() {
  console.log("🌱 Seeding database...");

  try {
    // Clear existing data
    await db.delete(testimonials);
    await db.delete(projects);
    await db.delete(teamMembers);
    await db.delete(services);

    // Seed services
    const servicesData = [
      {
        title: 'Web Development',
        description: 'Custom websites and web applications built with modern technologies and best practices.',
        features: ['React & Next.js', 'Node.js & Express', 'Database Design', 'API Development'],
        gradient: 'from-blue-500 to-indigo-600',
        bgPattern: 'from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20',
        icon: 'Code'
      },
      {
        title: 'Video Editing',
        description: 'Professional video editing services for marketing, social media, and corporate content.',
        features: ['Motion Graphics', 'Color Grading', 'Audio Enhancement', 'Social Media Formats'],
        gradient: 'from-purple-500 to-pink-600',
        bgPattern: 'from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20',
        icon: 'Video'
      },
      {
        title: 'Image Editing',
        description: 'High-quality photo editing and graphic design for all your visual content needs.',
        features: ['Photo Retouching', 'Background Removal', 'Brand Graphics', 'Social Media Assets'],
        gradient: 'from-orange-500 to-red-600',
        bgPattern: 'from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20',
        icon: 'Image'
      },
      {
        title: 'Personal Branding',
        description: 'Complete branding solutions to help you stand out and build a strong digital presence.',
        features: ['Logo Design', 'Brand Guidelines', 'Social Media Strategy', 'Content Planning'],
        gradient: 'from-green-500 to-teal-600',
        bgPattern: 'from-green-50 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20',
        icon: 'Sparkles'
      }
    ];

    await db.insert(services).values(servicesData);
    console.log("✅ Services seeded");

    // Seed team members
    const teamData = [
      {
        name: 'Prince Mehta',
        role: 'CEO & Director',
        bio: 'Visionary leader managing operations and client success.',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        skills: ['Leadership', 'Strategic Planning', 'Client Relations', 'Business Development'],
        linkedinUrl: '#',
        githubUrl: '#',
        twitterUrl: '#'
      },
      {
        name: 'Somadeep Roy',
        role: 'Marketing Head',
        bio: 'Handles digital marketing strategies, outreach, and audience engagement.',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        skills: ['Digital Marketing', 'SEO/SEM', 'Social Media Strategy', 'Content Marketing', 'Analytics'],
        linkedinUrl: '#',
        githubUrl: '#',
        twitterUrl: '#'
      },
      {
        name: 'Rahul Prasad',
        role: 'Creative Video Editor',
        bio: 'Expert in editing high-impact content for social media and brands.',
        image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=400',
        skills: ['Video Editing', 'Motion Graphics', 'Adobe Premiere', 'After Effects', 'Color Grading'],
        linkedinUrl: '#',
        githubUrl: '#',
        twitterUrl: '#'
      }
    ];

    await db.insert(teamMembers).values(teamData);
    console.log("✅ Team members seeded");

    // Seed projects
    const projectsData = [
      {
        title: 'E-Commerce Platform',
        description: 'Modern, responsive e-commerce website with advanced filtering, payment integration, and admin dashboard.',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Web Development',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        liveUrl: '#',
        githubUrl: '#',
        color: 'from-blue-500 to-indigo-600'
      },
      {
        title: 'Brand Identity Package',
        description: 'Complete visual identity redesign including logo, color palette, typography, and brand guidelines.',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Branding',
        technologies: ['Figma', 'Illustrator', 'Photoshop'],
        liveUrl: '#',
        githubUrl: '#',
        color: 'from-purple-500 to-pink-600'
      },
      {
        title: 'Marketing Video Campaign',
        description: 'High-impact promotional videos with motion graphics, professional editing, and compelling storytelling.',
        image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Video Production',
        technologies: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
        liveUrl: '#',
        githubUrl: '#',
        color: 'from-orange-500 to-red-600'
      },
      {
        title: 'SaaS Dashboard',
        description: 'Intuitive dashboard design with data visualization, user management, and real-time analytics.',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Web Development',
        technologies: ['Vue.js', 'D3.js', 'Firebase', 'Tailwind'],
        liveUrl: '#',
        githubUrl: '#',
        color: 'from-green-500 to-teal-600'
      }
    ];

    await db.insert(projects).values(projectsData);
    console.log("✅ Projects seeded");

    // Seed testimonials
    const testimonialsData = [
      {
        name: 'Sarah Johnson',
        role: 'CEO, TechStart Inc.',
        content: 'DigitalTeam transformed our online presence completely. Their attention to detail and creative approach exceeded all our expectations. The website they built for us has increased our conversions by 150%.',
        rating: 5,
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Michael Chen',
        role: 'Marketing Director, GrowthCo',
        content: 'The video content DigitalTeam created for our campaign was absolutely phenomenal. Their storytelling ability and technical expertise helped us achieve 300% more engagement than our previous campaigns.',
        rating: 5,
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ];

    await db.insert(testimonials).values(testimonialsData);
    console.log("✅ Testimonials seeded");

    console.log("🎉 Database seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}

// Only run seeding if this file is executed directly
// Note: import.meta.main is not available in all environments
// Using process.argv[1] as alternative
if (process.argv[1]?.endsWith('seed.ts')) {
  seedDatabase()
    .then(() => {
      console.log("Seeding finished");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Seeding failed:", error);
      process.exit(1);
    });
}