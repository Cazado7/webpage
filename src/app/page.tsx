// src/app/page.tsx

import Header from "@/components/Header"; // La @ apunta a src/ por defecto

// La función principal de la página (un Server Component por defecto en Next.js App Router)
export default function HomePage() {
  return (
    <main>
      {/* Usamos el componente Header y le pasamos las props tipadas */}
      <Header
        title="Bienvenido a mi Web con Next.js y TS"
        subtitle="Este es un proyecto inicial paso a paso."
      />

      <section style={{ padding: '20px' }}>
        <h2>Contenido Principal</h2>
        <p>
          El estilo global está importado en <code>layout.tsx</code> y el
          estilo del Header usa <strong>CSS Modules</strong> para ser
          local y evitar conflictos.
        </p>
      </section>
    </main>
  );
}