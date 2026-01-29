export default function Home() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-bold mb-4" >
          Hola, soy Carlos Zapateiro 👋
        </h1>
  
        <p className="text-lg text-gray-600 max-w-xl">
          Desarrollador web enfocado en React, Next.js y TypeScript.
          Este mi primer mi portafolio.
        </p>
  
        <div className="mt-6 flex gap-4">
          <a
            href="https://github.com/TU-USUARIO"
            className="px-6 py-2 bg-black text-white rounded-lg hover:opacity-80"
          >
            GitHub
          </a>
  
          <a
            href="#proyectos"
            className="px-6 py-2 border rounded-lg"
          >
            Proyectos
          </a>
        </div>
      </main>
    );
  }
  