// src/components/Header.tsx (Actualizado para CSS Modules)

"use client";
import React from 'react';
// Importa el módulo de estilos
import styles from '../styles/header.module.css';
import Button from '@mui/material/Button';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    // Aplica el estilo importado: styles.mainHeader
    <header className={styles.mainHeader}>
        <div className={styles.headerContent}>
           <img src="#" alt="Logo" className={styles.logo} />
           
           <nav className={styles.navigation}>
            <ul>
                <li><a href="#">Servicios</a></li>
                <li>Beneficios</li>
                <li>Contacto</li>
            </ul>
        </nav>
        
        </div>
        <div className={styles.buttonContainer}>
        <Button variant="contained" size="small" color="primary">COTIZAR</Button>
        </div>
    </header>
  );
};

export default Header;