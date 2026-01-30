'use client'
import styles from "../styles/components/home.module.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LINKS } from "@/constants/links";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Hola, soy Carlos Zapateiro 👋</h1>
      <p className={styles.description}>
        Este es mi primer portfolio con Next.js, TypeScript y pnpm.
      </p>
      <Stack spacing={2} direction="row">
      <Button
      sx={{textTransform:"none",
    "&:hover":{opacity:0.85,}}}
    target="_blank"
      href={LINKS.github} variant="contained" color="secondary" size="small" endIcon={<GitHubIcon/>} >GitHub</Button>
    </Stack>


    </main>
  );
}
