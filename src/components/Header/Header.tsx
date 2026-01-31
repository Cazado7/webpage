"use client";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import {LINKS} from "@/constants/links"
import Link from "next/link";

import { headerContainer, navLinks } from "../Header/Header.styles";

export default function Header() {
  return (
    <header>
      <Stack direction="row" sx={headerContainer}>
        <Typography variant="h6" fontWeight={600}>
          Carlos Zapateiro
        </Typography>

        {/* Navegación */}
        <Stack direction="row" sx={navLinks}>
          <Button color="inherit" LinkComponent={Link} href="/">Inicio</Button>
          <Button color="inherit" href="/projects">Proyectos</Button>
          <Button color="inherit">Contacto</Button>

          
      <Button
      sx={{textTransform:"none",
    "&:hover":{opacity:0.85,}}}
    target="_blank"
      href={LINKS.github} variant="contained" color="secondary" size="small" endIcon={<GitHubIcon/>} >GitHub</Button>

        </Stack>
      </Stack>
    </header>
  );
}
