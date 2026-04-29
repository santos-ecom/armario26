const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-8">
        <h1 className="text-4xl font-bold text-pink-500">Espazie</h1>
      </header>

      {/* Main Content */}
      <main className="px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Arquivos</h2>
          
          <article className="mb-8">
            <h3 className="text-2xl font-bold text-pink-500 mb-4">Hello world!</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to WordPress. This is your first post. Edit or delete it, then start writing!
            </p>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-6 right-6">
        <p className="text-gray-500 text-sm">Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default HomePage;