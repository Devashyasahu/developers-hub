import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} fade-in`}>
            Engineering <span className="gradient-text">Excellence</span>
          </h1>
          <p className={`${styles.subtitle} fade-in`}>
            A curated collection of high-performance digital products, 3D environments, and enterprise solutions.
          </p>
        </div>
      </header>

      <section id="featured" className={styles.projectsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className={styles.presentationScript}>
        <div className={styles.scriptContainer}>
          <h3 className={styles.scriptTitle}>Friendly Presentation Guide</h3>
          <div className={`${styles.scriptGrid} glass`}>
            <div className={styles.scriptHeader}>Project</div>
            <div className={styles.scriptHeader}>What to Highlight</div>
            <div className={styles.scriptHeader}>The "Flex"</div>
            
            {projects.map((p) => (
              <div key={p.id} style={{ display: "contents" }}>
                <div className={styles.scriptCell}><strong>{p.title}</strong></div>
                <div className={styles.scriptCell}>{p.highlight}</div>
                <div className={styles.scriptCell}>{p.flex}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2026 Developer Hub | Built for Performance</p>
      </footer>
    </main>
  );
}
