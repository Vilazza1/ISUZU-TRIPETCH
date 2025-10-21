export function HomePage() {
    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center bg-[url('/images/Banner.svg')]">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl text-white font-bold mb-2">ISUZU TRIPETCH</h1> 
          <h2 className="text-4xl text-white mb-10">Make anything possible</h2> 
          <button className="text-base bg-[var(--primary-red)] text-white rounded-3xl w-52 h-11 cursor-pointer">
            Discover Our Company
          </button>
        </div>
      </div>
    );
  }