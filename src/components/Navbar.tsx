import Link from "next/link";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={`${styles.nav} glass`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className="gradient-text">Developer</span>Hub
        </Link>
        <div className={styles.links}>
          <Link href="/#featured" className={styles.link}>[ Featured Projects ]</Link>
          <Link href="/tech-stack" className={styles.link}>[ Technical Stack ]</Link>
        </div>
      </div>
    </nav>
  );
};
