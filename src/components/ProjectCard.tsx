"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt={project.title}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {project.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          startIcon={<GitHubIcon />}
          href={project.githubUrl}
          target="_blank"
        >
          GitHub
        </Button>

        {project.liveUrl && (
          <Button
            size="small"
            startIcon={<LaunchIcon />}
            href={project.liveUrl}
            target="_blank"
          >
            Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
