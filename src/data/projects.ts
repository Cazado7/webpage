export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    githubUrl: string;
    liveUrl?: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Portafolio Personal",
      description:
        "Mi primera página web usando Next.js, TypeScript y Material UI.",
      //para poner la imagen se accede desde la raiz "/"
        image: "/proyectos/webpage.png",
      githubUrl: "https://github.com/Cazado7/webpage",
      
    },
    {
        id: 2,
        title: "Calculadora",
        description:
          "Mi primera página web usando Next.js, TypeScript y Material UI.",
        image: "/projects/portfolio.png",
        githubUrl: "https://github.com/Cazado7/webpage",
        
      },
      {
        id: 3,
        title: "App",
        description:
          "Mi primera página web usando Next.js, TypeScript y Material UI.",
        image: "/projects/portfolio.png",
        githubUrl: "https://github.com/Cazado7/webpage",
        
      },
  ];
  