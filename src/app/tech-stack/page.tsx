import { Navbar } from "@/components/Navbar";
import styles from "./TechStack.module.css";

const tech = [
  { category: "Frontend", items: ["Next.js 14", "React 18", "TypeScript", "Three.js / Fiber", "GSAP ScrollTrigger"] },
  { category: "State & Logic", items: ["Redux Toolkit", "React Query", "Custom Hooks", "Zustand"] },
  { category: "Design & UI", items: ["Modular CSS", "Figma-to-Code", "8-point Grid System", "Adobe After Effects (Motion)"] },
  { category: "Backend & Data", items: ["Vercel Edge Runtime", "WebSocket / Socket.io", "D3.js Data Processing API", "RESTful Integration"] },
];

export default function TechStack() {
  return (
    <main className={styles.main}>
      <Navbar />
      <header className={styles.header}>
        <h1 className={`${styles.title} gradient-text`}>Technical Stack</h1>
        <p className={styles.subtitle}>The architecture behind the performance.</p>
      </header>

      <section className={styles.stackSection}>
        <div className={styles.grid}>
          {tech.map((group) => (
            <div key={group.category} className={`${styles.card} glass`}>
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item} className={styles.item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Built with Next.js & Optimism.</p>
      </footer>
    </main>
  );
}
