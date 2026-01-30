import styles from "../styles/components/home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Hola, soy Carlos Zapateiro 👋</h1>
      <p className={styles.description}>
        Este es mi primer portfolio con Next.js, TypeScript y pnpm.
      </p>
    </main>
  );
}
