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
    id: "dronosaur",
    title: "Dronosaur",
    pitch: "A cinematic 3D experience merging drone tech with prehistoric themes.",
    highlight: "3D Visuals",
    talkingPoint: "High-performance rendering and immersive UI.",
    flex: "Uses React Three Fiber for WebGL rendering.",
    liveUrl: "https://dronosaur.in/",
    image: "/projects/dronosaur.png",
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
    id: "life-road-map",
    title: "Life Road Map",
    pitch: "A high-end parallax/starfield visualizer for tracking complex milestones.",
    highlight: "Animation",
    talkingPoint: "Mastering scroll-driven animations and GSAP timelines.",
    flex: "Custom GSAP parallax scrolling engine.",
    liveUrl: "https://life-s-road-map-final.vercel.app",
    image: "/projects/life-roadmap-final.png",
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
    liveUrl: "https://orionpulse.in/",
    image: "/projects/orion-pulse.png",
    buildSheet: {
      architecture: "Next.js App Router with Modular CSS",
      logic: "Token-based component architecture",
      design: "Minimalist enterprise aesthetic with premium typography",
    },
  },
  {
    id: "hulk-workzone",
    title: "Hulk's Workzone",
    pitch: "A high-intensity, dark-themed gym landing page designed for professional functional training centers.",
    highlight: "Visual Impact",
    talkingPoint: "Aggressive neon aesthetic with Scissor-Reveal animations.",
    flex: "Custom GSAP reveal effects and high-performance layout.",
    liveUrl: "https://hulk-s-work-zone.vercel.app/",
    image: "/projects/hulk-workzone.png",
    buildSheet: {
      architecture: "Next.js with CSS Modules",
      logic: "GSAP ScrollTrigger for text peeling and reveal effects",
      design: "Industrial Gym aesthetic: #00FF1F (Neon Green) on #0A0A0A",
    },
  },
  {
    id: "mlworkx",
    title: "MLWorkx",
    pitch: "Enterprise-grade platform for electronics manufacturing and technical automation solutions.",
    highlight: "Technical Depth",
    talkingPoint: "Professional B2B interface with clean data visualization.",
    flex: "Sophisticated architecture for industrial client portals.",
    liveUrl: "https://mlworkx.com",
    image: "/projects/mlworkx.png",
    buildSheet: {
      architecture: "Next.js 14 App Router",
      logic: "Scalable component-driven architecture for complex industries",
      design: "Clean, technical 'Space-Age' aesthetic with teal accents",
    },
  },
  {
    id: "terraforce",
    title: "TerraForce Construction",
    pitch: "A powerhouse digital presence for heavy-duty construction and industrial machinery services.",
    highlight: "Industrial Scale",
    talkingPoint: "Integrated project calculators and machinery fleet management UI.",
    flex: "Heavy-duty aesthetic with focus on site reliability and scale.",
    liveUrl: "https://construction-page-demo.vercel.app/",
    image: "/projects/terraforce.png",
    buildSheet: {
      architecture: "Next.js + Tailwind CSS for rapid scaling",
      logic: "Interactive material and project estimation calculators",
      design: "High-contrast Industrial Yellow (#FFD700) and Matte Black",
    },
  },
];
