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
        technologies: ['React', 'TypeScript', 'D3.js', 'Node.js'],
        liveUrl: '#',
        githubUrl: '#',
        color: 'from-blue-500 to-cyan-600'
      },
      {
        title: 'Social Media Content Pack',
        description: 'Comprehensive content creation for Instagram, featuring custom graphics and video content.',
        image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Content Creation',
        technologies: ['Photoshop', 'After Effects', 'Figma'],
        liveUrl: '#',
        githubUrl: '#',
        color: 'from-pink-500 to-rose-600'
      },
      {
        title: 'Restaurant Mobile App',
        description: 'Cross-platform mobile application for food ordering with real-time tracking and payment integration.',
        image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Mobile Development',
        technologies: ['React Native', 'Firebase', 'Stripe', 'Google Maps'],
        liveUrl: '#',
        githubUrl: '#',
        color: 'from-emerald-500 to-teal-600'
      }
    ];

    await db.insert(projects).values(projectsData);
    console.log("✅ Projects seeded");

    // Seed testimonials
    const testimonialsData = [
      {
        name: 'Sarah Johnson',
        role: 'Marketing Director at TechStart',
        content: 'DigitalTeam transformed our brand identity completely. Their creative vision and attention to detail exceeded our expectations. The new branding has significantly improved our market presence.',
        rating: 5,
        image: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Michael Chen',
        role: 'CEO at InnovateCorp',
        content: 'The web development team delivered a stunning e-commerce platform that increased our online sales by 300%. Professional, efficient, and incredibly talented.',
        rating: 5,
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Emma Rodriguez',
        role: 'Content Creator',
        content: 'Their video editing skills are unmatched. Every project is delivered on time with exceptional quality. They understand our vision and bring it to life perfectly.',
        rating: 5,
        image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'David Park',
        role: 'Small Business Owner',
        content: 'Working with DigitalTeam was a game-changer for my business. Their comprehensive approach to digital marketing and branding helped me reach new customers.',
        rating: 5,
        image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ];

    await db.insert(testimonials).values(testimonialsData);
    console.log("✅ Testimonials seeded");

    console.log("🎉 Database seeding completed successfully!");
  } catch (error) {
    console.error("❌ Database seeding failed:", error);
    throw error;
  }
}