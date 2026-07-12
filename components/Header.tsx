export default function Header() {
    return (
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="/" className="text-xl font-bold tracking-tight">
            Milan <span className="text-red-600">Red Line</span>
          </a>
  
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#">Apartments</a>
            <a href="#">Location</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>
    );
  }