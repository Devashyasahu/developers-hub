export interface BuildSheet {
  architecture: string;
  logic: string;
  design: string;
}

export interface ProjectVersion {
  id: string;
  label: string;
  description: string;
  talkingPoint: string;
}

export interface Project {
  id: string;
  title: string;
  pitch: string;
  versions?: ProjectVersion[];
  talkingPoint: string;
  flex: string;
  highlight: string;
  buildSheet: BuildSheet;
  liveUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "dronosour",
    title: "Dronosour",
    pitch: "A cinematic 3D experience merging drone tech with prehistoric themes.",
    highlight: "3D Visuals",
    talkingPoint: "High-performance rendering and immersive UI.",
    flex: "Uses React Three Fiber for WebGL rendering.",
    liveUrl: "https://dronosour-demo.vercel.app",
    image: "/projects/dronosour.jpg",
    versions: [
      { 
        id: "v1", 
        label: "MVP", 
        description: "Initial 3D model visualization with basic lighting.",
        talkingPoint: "Stable 30FPS rendering on mobile devices."
      },
      { 
        id: "v2", 
        label: "3D Enhanced", 
        description: "Integrated custom shaders and environment maps.",
        talkingPoint: "Advanced WebGL global illumination."
      },
      { 
        id: "v3", 
        label: "Current", 
        description: "Full cinematic experience with interactive audio and VR support.",
        talkingPoint: "Physically-based rendering (PBR) and post-processing."
      },
    ],
    buildSheet: {
      architecture: "Next.js App Router with React Three Fiber",
      logic: "Custom shader hooks for environment lighting",
      design: "Cyber-prehistoric aesthetic with high-density UI",
    },
  },
  {
    id: "workzone",
    title: "WorkZone",
    pitch: "A complete task and productivity management ecosystem.",
    highlight: "Tooling / Logic",
    talkingPoint: "State management, user workflow, and B2B utility.",
    flex: "Built for enterprise task management.",
    liveUrl: "https://workzone-saas.vercel.app",
    image: "/projects/workzone.jpg",
    versions: [
      { 
        id: "v1", 
        label: "MVP", 
        description: "Core task management with local storage persistence.",
        talkingPoint: "Zero-latency UI with optimistic updates."
      },
      { 
        id: "v2", 
        label: "Logic+", 
        description: "Cloud sync engine with team collaboration features.",
        talkingPoint: "Conflict resolution for real-time multiplayer editing."
      },
      { 
        id: "v3", 
        label: "Enterprise", 
        description: "Full B2B suite with custom reporting and SSO integration.",
        talkingPoint: "Scalable microservices backend for 10k+ concurrent users."
      },
    ],
    buildSheet: {
      architecture: "Next.js + Redux Toolkit for complex state",
      logic: "Optimistic UI updates with real-time WebSockets",
      design: "8-point grid system with focus on clarity and speed",
    },
  },
  {
    id: "life-road-map",
    title: "Life Road Map",
    pitch: "A high-end parallax/starfield visualizer for tracking complex milestones.",
    highlight: "Animation",
    talkingPoint: "Mastering scroll-driven animations and GSAP timelines.",
    flex: "Custom GSAP parallax scrolling engine.",
    liveUrl: "https://life-roadmap.vercel.app",
    image: "/projects/roadmap.jpg",
    buildSheet: {
      architecture: "Next.js with GSAP ScrollTrigger",
      logic: "Timeline-based animation sequence manager",
      design: "Immersive dark-sky parallax with fluid transitions",
    },
  },
  {
    id: "orion-pulse",
    title: "Orion Pulse",
    pitch: "Clean, enterprise-level UI design with a focus on speed and typography.",
    highlight: "UI/UX Design",
    talkingPoint: "Adherence to the 8-point typography system and professional alignment.",
    flex: "Pixel-perfect alignment and typography.",
    liveUrl: "https://orion-pulse.vercel.app",
    image: "/projects/orion.jpg",
    buildSheet: {
      architecture: "Next.js App Router with Modular CSS",
      logic: "Token-based component architecture",
      design: "Minimalist enterprise aesthetic with premium typography",
    },
  },
  {
    id: "mlworkx",
    title: "MLWorkx",
    pitch: "Where web development meets machine learning or technical automation.",
    highlight: "Technical Depth",
    talkingPoint: "Integration of complex APIs and technical data visualization.",
    flex: "Handling complex data structures efficiently.",
    liveUrl: "https://mlworkx-ai.vercel.app",
    image: "/projects/mlworkx.jpg",
    buildSheet: {
      architecture: "Next.js with D3.js for data visualization",
      logic: "Async API data streaming and processing",
      design: "Data-heavy dashboard with clear visual hierarchy",
    },
  },
];
