import { 
  type Service, type InsertService,
  type TeamMember, type InsertTeamMember,
  type Project, type InsertProject,
  type Testimonial, type InsertTestimonial,
  services, teamMembers, projects, testimonials
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Services
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;

  // Team Members
  getTeamMembers(): Promise<TeamMember[]>;
  getTeamMember(id: number): Promise<TeamMember | undefined>;
  createTeamMember(teamMember: InsertTeamMember): Promise<TeamMember>;

  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class DatabaseStorage implements IStorage {
  // Services
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getService(id: number): Promise<Service | undefined> {
    const [service] = await db.select().from(services).where(eq(services.id, id));
    return service || undefined;
  }

  async createService(insertService: InsertService): Promise<Service> {
    const [service] = await db
      .insert(services)
      .values(insertService)
      .returning();
    return service;
  }

  // Team Members
  async getTeamMembers(): Promise<TeamMember[]> {
    return await db.select().from(teamMembers);
  }

  async getTeamMember(id: number): Promise<TeamMember | undefined> {
    const [teamMember] = await db.select().from(teamMembers).where(eq(teamMembers.id, id));
    return teamMember || undefined;
  }

  async createTeamMember(insertTeamMember: InsertTeamMember): Promise<TeamMember> {
    const [teamMember] = await db
      .insert(teamMembers)
      .values(insertTeamMember)
      .returning();
    return teamMember;
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project || undefined;
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return await db.select().from(projects).where(eq(projects.category, category));
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db
      .insert(projects)
      .values(insertProject)
      .returning();
    return project;
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    const [testimonial] = await db.select().from(testimonials).where(eq(testimonials.id, id));
    return testimonial || undefined;
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db
      .insert(testimonials)
      .values(insertTestimonial)
      .returning();
    return testimonial;
  }
}

export class MemoryStorage implements IStorage {
  private services: Service[] = [];
  private teamMembers: TeamMember[] = [];
  private projects: Project[] = [];
  private testimonials: Testimonial[] = [];
  private nextServiceId = 1;
  private nextTeamMemberId = 1;
  private nextProjectId = 1;
  private nextTestimonialId = 1;

  // Services
  async getServices(): Promise<Service[]> {
    return [...this.services];
  }

  async getService(id: number): Promise<Service | undefined> {
    return this.services.find(service => service.id === id);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const service: Service = {
      id: this.nextServiceId++,
      ...insertService
    };
    this.services.push(service);
    return service;
  }

  // Team Members
  async getTeamMembers(): Promise<TeamMember[]> {
    return [...this.teamMembers];
  }

  async getTeamMember(id: number): Promise<TeamMember | undefined> {
    return this.teamMembers.find(member => member.id === id);
  }

  async createTeamMember(insertTeamMember: InsertTeamMember): Promise<TeamMember> {
    const teamMember: TeamMember = {
      id: this.nextTeamMemberId++,
      ...insertTeamMember,
      linkedinUrl: insertTeamMember.linkedinUrl || null,
      githubUrl: insertTeamMember.githubUrl || null,
      twitterUrl: insertTeamMember.twitterUrl || null
    };
    this.teamMembers.push(teamMember);
    return teamMember;
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return [...this.projects];
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.find(project => project.id === id);
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return this.projects.filter(project => project.category === category);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const project: Project = {
      id: this.nextProjectId++,
      ...insertProject,
      liveUrl: insertProject.liveUrl || null,
      githubUrl: insertProject.githubUrl || null
    };
    this.projects.push(project);
    return project;
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return [...this.testimonials];
  }

  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.find(testimonial => testimonial.id === id);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const testimonial: Testimonial = {
      id: this.nextTestimonialId++,
      ...insertTestimonial
    };
    this.testimonials.push(testimonial);
    return testimonial;
  }

  // Utility method to seed initial data
  async seedData() {
    // Clear existing data
    this.services = [];
    this.teamMembers = [];
    this.projects = [];
    this.testimonials = [];
    this.nextServiceId = 1;
    this.nextTeamMemberId = 1;
    this.nextProjectId = 1;
    this.nextTestimonialId = 1;

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

    for (const serviceData of servicesData) {
      await this.createService(serviceData);
    }

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

    for (const teamMemberData of teamData) {
      await this.createTeamMember(teamMemberData);
    }

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

    for (const projectData of projectsData) {
      await this.createProject(projectData);
    }

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

    for (const testimonialData of testimonialsData) {
      await this.createTestimonial(testimonialData);
    }

    console.log("✅ In-memory storage seeded with portfolio data");
  }
}

// Use DatabaseStorage for the main application
export const storage = new DatabaseStorage();