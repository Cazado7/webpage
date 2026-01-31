import { Typography, Container } from "@mui/material";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import styles from "@/styles/components/projects.module.css";

export default function ProjectsPage() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Proyectos
      </Typography>

      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectItem}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Container>
  );
}
