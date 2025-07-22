import { 
  type Service, type InsertService,
  type TeamMember, type InsertTeamMember,
  type Project, type InsertProject,
  type Testimonial, type InsertTestimonial
} from "@shared/schema";

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

export class MemStorage implements IStorage {
  private services: Map<number, Service>;
  private teamMembers: Map<number, TeamMember>;
  private projects: Map<number, Project>;
  private testimonials: Map<number, Testimonial>;
  private currentServiceId: number;
  private currentTeamMemberId: number;
  private currentProjectId: number;
  private currentTestimonialId: number;

  constructor() {
    this.services = new Map();
    this.teamMembers = new Map();
    this.projects = new Map();
    this.testimonials = new Map();
    this.currentServiceId = 1;
    this.currentTeamMemberId = 1;
    this.currentProjectId = 1;
    this.currentTestimonialId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }

  private async initializeData() {
    // Initialize services
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

    for (const service of servicesData) {
      await this.createService(service);
    }

    // Initialize team members
    const teamData = [
      {
        name: 'Prince Mehta',
        role: 'Founder & Lead Developer',
        bio: 'Computer Science student at NIT JSR with a passion for creating innovative web solutions. Specializes in full-stack development and system architecture.',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        skills: ['React', 'Node.js', 'Python', 'System Design'],
        linkedinUrl: '#',
        githubUrl: '#',
        twitterUrl: '#'
      },
      {
        name: 'Shoumyadeep Ray',
        role: 'Creative Director',
        bio: 'Visionary designer and video editor who brings brands to life through compelling visual storytelling and innovative design solutions.',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        skills: ['UI/UX Design', 'Video Editing', 'Motion Graphics', 'Branding'],
        linkedinUrl: '#',
        githubUrl: '#',
        twitterUrl: '#'
      },
      {
        name: 'Rahul Kumar',
        role: 'Digital Strategy Specialist',
        bio: 'Strategic thinker who helps businesses navigate the digital landscape and develop comprehensive growth strategies that deliver results.',
        image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=400',
        skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Analytics'],
        linkedinUrl: '#',
        githubUrl: '#',
        twitterUrl: '#'
      }
    ];

    for (const member of teamData) {
      await this.createTeamMember(member);
    }

    // Initialize projects
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

    for (const project of projectsData) {
      await this.createProject(project);
    }

    // Initialize testimonials
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

    for (const testimonial of testimonialsData) {
      await this.createTestimonial(testimonial);
    }
  }

  // Services
  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = this.currentServiceId++;
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }

  // Team Members
  async getTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values());
  }

  async getTeamMember(id: number): Promise<TeamMember | undefined> {
    return this.teamMembers.get(id);
  }

  async createTeamMember(insertTeamMember: InsertTeamMember): Promise<TeamMember> {
    const id = this.currentTeamMemberId++;
    const teamMember: TeamMember = { 
      ...insertTeamMember, 
      id,
      linkedinUrl: insertTeamMember.linkedinUrl || null,
      githubUrl: insertTeamMember.githubUrl || null,
      twitterUrl: insertTeamMember.twitterUrl || null
    };
    this.teamMembers.set(id, teamMember);
    return teamMember;
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      project => project.category === category
    );
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { 
      ...insertProject, 
      id,
      liveUrl: insertProject.liveUrl || null,
      githubUrl: insertProject.githubUrl || null
    };
    this.projects.set(id, project);
    return project;
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
