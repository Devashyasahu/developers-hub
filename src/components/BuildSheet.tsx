"use client";

import { useEffect, useState } from "react";
import styles from "./BuildSheet.module.css";
import { BuildSheet as BuildSheetType } from "@/data/projects";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: BuildSheetType;
  projectTitle: string;
}

export const BuildSheet = ({ isOpen, onClose, data, projectTitle }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} glass`} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>&times;</button>
        <div className={styles.header}>
          <h3 className={styles.title}>{projectTitle}</h3>
          <p className={styles.subtitle}>Build Sheet</p>
        </div>
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h4>Architecture</h4>
            <div className={styles.box}>{data.architecture}</div>
          </section>
          
          <section className={styles.section}>
            <h4>Logic</h4>
            <div className={styles.box}>{data.logic}</div>
          </section>
          
          <section className={styles.section}>
            <h4>Design</h4>
            <div className={styles.box}>{data.design}</div>
          </section>
        </div>
      </div>
    </div>
  );
};
