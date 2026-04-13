"use client";

import { useState } from "react";
import Image from "next/image";
import { Project, ProjectVersion } from "@/data/projects";
import styles from "./ProjectCard.module.css";
import { BuildSheet } from "./BuildSheet";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  const [activeVersion, setActiveVersion] = useState<ProjectVersion | undefined>(
    project.versions?.[2] || project.versions?.[0]
  );
  const [isBuildSheetOpen, setIsBuildSheetOpen] = useState(false);

  return (
    <>
      <div className={`${styles.card} glass fade-in`}>
        <div className={styles.imageWrapper}>
          <div className={styles.overlay}>
             <span className={styles.highlight}>{project.highlight}</span>
          </div>
          {project.image ? (
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className={styles.projectImage}
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div 
              className={styles.imagePlaceholder} 
              style={{ 
                background: project.id === 'dronosour' ? 'radial-gradient(circle at top right, #00FFC2, #050505)' :
                            project.id === 'life-road-map' ? 'radial-gradient(circle at top right, #0085FF, #050505)' :
                            project.id === 'orion-pulse' ? 'radial-gradient(circle at top right, #FF00C1, #050505)' :
                            'radial-gradient(circle at top right, #FFD700, #050505)'
              }}
            >
              <h4 className={styles.placeholderTitle}>{project.title}</h4>
            </div>
          )}
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.title}>{project.title}</h3>
            {project.versions && (
              <div className={styles.versionToggle}>
                {project.versions.map((v) => (
                  <button
                    key={v.id}
                    className={`${styles.versionBtn} ${activeVersion?.id === v.id ? styles.active : ""}`}
                    onClick={() => setActiveVersion(v)}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <p className={styles.pitch}>
            {activeVersion ? activeVersion.description : project.pitch}
          </p>
          
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Version Talking Point:</span>
              <span className={styles.value}>
                {activeVersion ? activeVersion.talkingPoint : project.talkingPoint}
              </span>
            </div>
          </div>

          <div className={styles.actions}>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
              Visit Live Site
            </a>
            <button className={styles.secondaryBtn} onClick={() => setIsBuildSheetOpen(true)}>
              Build Sheet
            </button>
          </div>
        </div>
      </div>

      <BuildSheet 
        isOpen={isBuildSheetOpen} 
        onClose={() => setIsBuildSheetOpen(false)} 
        data={project.buildSheet}
        projectTitle={project.title}
      />
    </>
  );
};
