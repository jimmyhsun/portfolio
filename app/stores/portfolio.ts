import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// TypeScript Interfaces
export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'cloud'
  description: string
  proficiency: number // 1-100
}

export interface Project {
  id: string
  title: string
  problem: string
  solution: string
  techStack: string[]
  image?: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Profile {
  name: string
  title: string
  tagline: string
  bio: string
  email: string
  location: string
  availability: 'available' | 'limited' | 'unavailable'
  social: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

export const usePortfolioStore = defineStore('portfolio', () => {
  // Profile Data
  const profile = ref<Profile>({
    name: 'Jimmy',
    title: 'Senior Full-Stack Architect',
    tagline: 'Building scalable systems that drive business growth',
    bio: 'With over 8 years of experience in software architecture, I specialize in creating robust, scalable solutions that transform complex business requirements into elegant technical implementations. My expertise spans from frontend frameworks to cloud infrastructure, enabling me to deliver end-to-end solutions.',
    email: 'jimmywu0916@gmail.com',
    location: '台灣台北 / Taiwan, Taipei',
    availability: 'available',
    social: {
      github: 'https://github.com/jimmyhsun/portfolio',
    },
  })

  // Skills Data
  const skills = ref<Skill[]>([
    // Frontend
    {
      id: 'vue',
      name: 'Vue 3',
      category: 'frontend',
      description: 'Composition API, Reactivity System, Performance Optimization',
      proficiency: 95,
    },
    {
      id: 'nuxt',
      name: 'Nuxt',
      category: 'frontend',
      description: 'SSR, SSG, Hybrid Rendering, SEO Optimization',
      proficiency: 90,
    },
    {
      id: 'system-design',
      name: 'System Design',
      category: 'frontend',
      description: 'Component Architecture, State Management, Design Systems',
      proficiency: 88,
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'frontend',
      description: 'Type Safety, Generics, Advanced Patterns',
      proficiency: 92,
    },
    // Backend
    {
      id: 'python',
      name: 'Python',
      category: 'backend',
      description: 'FastAPI, Django, Data Processing, Automation',
      proficiency: 85,
    },
    {
      id: 'nestjs',
      name: 'NestJS',
      category: 'backend',
      description: 'Microservices, GraphQL, REST APIs, WebSockets',
      proficiency: 82,
    },
    // Cloud & DevOps
    {
      id: 'aws',
      name: 'AWS',
      category: 'cloud',
      description: 'EC2, Lambda, S3, RDS, CloudFront, ECS, DynamoDB, SQS, SNS',
      proficiency: 80,
    },
    {
      id: 'docker',
      name: 'Docker',
      category: 'cloud',
      description: 'Containerization, Docker Compose, Multi-stage Builds',
      proficiency: 85,
    },
  ])

  // Projects Data
  const projects = ref<Project[]>([
    {
      id: 'ecommerce-platform',
      title: 'Enterprise E-Commerce Platform',
      problem:
        "A retail company struggled with their legacy monolithic system that couldn't handle peak traffic during sales events, resulting in $2M+ in lost revenue annually.",
      solution:
        'Architected a microservices-based platform using Nuxt 3 for SSR storefront, NestJS for APIs, and AWS infrastructure with auto-scaling. Achieved 99.99% uptime and 3x improvement in page load speeds.',
      techStack: ['Nuxt 3', 'NestJS', 'PostgreSQL', 'Redis', 'AWS ECS', 'CloudFront'],
      featured: true,
    },
    {
      id: 'saas-dashboard',
      title: 'Real-Time Analytics Dashboard',
      problem:
        'A SaaS startup needed a real-time analytics dashboard that could process millions of events per day while maintaining sub-second query performance.',
      solution:
        'Built a Vue 3 dashboard with WebSocket integration for live updates, backed by a Python data pipeline using Apache Kafka and ClickHouse for analytics storage.',
      techStack: ['Vue 3', 'Python', 'Kafka', 'ClickHouse', 'Docker', 'Kubernetes'],
      featured: true,
    },
    {
      id: 'fintech-api',
      title: 'Payment Processing API',
      problem:
        'A fintech company required a PCI-compliant payment processing API that could handle high transaction volumes with strict security requirements.',
      solution:
        'Designed a secure API gateway using NestJS with comprehensive encryption, audit logging, and rate limiting. Containerized with Docker and deployed on AWS with multi-region failover.',
      techStack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS Lambda', 'API Gateway'],
      featured: true,
    },
  ])

  // Computed
  const frontendSkills = computed(() => skills.value.filter((s) => s.category === 'frontend'))
  const backendSkills = computed(() => skills.value.filter((s) => s.category === 'backend'))
  const cloudSkills = computed(() => skills.value.filter((s) => s.category === 'cloud'))
  const featuredProjects = computed(() => projects.value.filter((p) => p.featured))

  return {
    profile,
    skills,
    projects,
    frontendSkills,
    backendSkills,
    cloudSkills,
    featuredProjects,
  }
})
