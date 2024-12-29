import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">🚀 Startups.ad</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/boost" className="text-foreground hover:underline">
              Boost
            </Link>
            <Link
              to="https://tally.so/r/mV92zJ"
              className="px-4 py-2 text-foreground font-medium rounded-lg border border-foreground"
            >
              + Submit
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-foreground focus:outline-none"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-2">
            <Link to="/boost" className="block text-foreground hover:underline">
              Boost
            </Link>
            <Link
              to="https://saasdirectories.fyi"
              className="block px-4 py-2 text-foreground font-medium rounded-lg border border-foreground text-center"
            >
              + Submit
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}