export interface Project {
  title: string
  meta: string
  description: string
  href: string
  badge?: string
  mediaImage?: string
  mediaImageStyle?: string
  mediaBg?: string
  mediaSvg?: string
}


const auvSvg = `<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity:0.55">
  <circle cx="60" cy="60" r="18" stroke="#4dd0e1" stroke-width="1.5"/>
  <circle cx="60" cy="60" r="34" stroke="#4dd0e1" stroke-width="1" stroke-dasharray="3 4" opacity="0.6"/>
  <circle cx="60" cy="60" r="50" stroke="#4dd0e1" stroke-width="0.8" stroke-dasharray="2 5" opacity="0.35"/>
  <line x1="60" y1="10" x2="60" y2="110" stroke="#4dd0e1" stroke-width="0.6" opacity="0.3"/>
  <line x1="10" y1="60" x2="110" y2="60" stroke="#4dd0e1" stroke-width="0.6" opacity="0.3"/>
  <path d="M44 60 Q60 50 76 60 Q60 70 44 60Z" fill="#4dd0e1" opacity="0.7"/>
  <circle cx="71" cy="60" r="3" fill="#4dd0e1" opacity="0.9"/>
  <line x1="76" y1="57" x2="84" y2="55" stroke="#4dd0e1" stroke-width="1" opacity="0.6"/>
  <line x1="76" y1="63" x2="84" y2="65" stroke="#4dd0e1" stroke-width="1" opacity="0.6"/>
</svg>`

export const projects: Project[] = [
  {
    title: 'Informative Path Planning for an Underwater Robot',
    meta: 'ROS2 / Python / C++',
    description: 'Bachelor thesis: maximizing information gain about a static scalar field using a BlueROV, validated in Gazebo/RViz and real experiments.',
    href: '/projects/auv-thesis',
    badge: 'IN PROGRESS',
    mediaBg: 'linear-gradient(150deg, #061a2e 0%, #0b2d45 45%, #083d4f 75%, #07505e 100%)',
    mediaSvg: auvSvg,
  },
  {
    title: 'Seshlog - Pomodoro Work Session Tracker',
    meta: 'Python / TypeScript / FastAPI / PostgreSQL / Docker',
    description: 'Full-stack pomodoro style work session tracker with analytics. FastAPI REST API with JWT auth, many-to-many session tagging, and aggregation endpoints powering tag-filtered stats and a 30-day activity chart. Rate limiting, input validation, and security headers on every endpoint. TypeScript frontend, containerized with Docker.',
    href: 'https://github.com/Latfoo/pomodoro-app',
    mediaImage: '/pomodoro_screen.png',
    mediaImageStyle: 'object-position: top;',
  },
  {
    title: 'Real-Time Gravity Simulation',
    meta: 'C++ / OpenGL',
    description: '3D N-body simulator with gravitational interactions and elastic collisions, visualized with OpenGL.',
    href: 'https://github.com/Latfoo/gravitySimulator',
    mediaImage: 'https://Latfoo.github.io/gravitySimulator/preview.gif',
  },
  {
    title: 'Personal Portfolio Website',
    meta: 'Vue 3 / TypeScript / Vite',
    description: 'Portfolio site built with Vue 3 and TypeScript. Each page is a Vue single-file component; Vue Router handles client-side navigation and Vite bundles for production.',
    href: 'https://github.com/Latfoo/portfolio',
    mediaImage: '/portfolio_screen.png',
    mediaImageStyle: 'object-position: top;',
  },
]
