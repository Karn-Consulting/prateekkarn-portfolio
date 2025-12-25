import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full py-4 sm:py-5 md:py-6 px-4 sm:px-6 lg:px-8 bg-[#f5f5f0] border-b border-[#e8e6e1]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-heading text-lg sm:text-xl md:text-2xl text-[#1a1a1a] hover:text-[#4a4a4a] transition-colors"
        >
          Prateek Karn
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6 md:gap-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${
              isActive('/') ? 'text-[#1a1a1a]' : 'text-[#8b8578] hover:text-[#1a1a1a]'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/mywork" 
            className={`text-sm font-medium transition-colors ${
              isActive('/mywork') ? 'text-[#1a1a1a]' : 'text-[#8b8578] hover:text-[#1a1a1a]'
            }`}
          >
            My Work
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden p-2 -mr-2 text-[#1a1a1a]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="sm:hidden mt-4 pt-4 border-t border-[#e8e6e1] flex flex-col gap-3">
          <Link 
            to="/" 
            className={`text-sm font-medium py-2 transition-colors ${
              isActive('/') ? 'text-[#1a1a1a]' : 'text-[#8b8578]'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/mywork" 
            className={`text-sm font-medium py-2 transition-colors ${
              isActive('/mywork') ? 'text-[#1a1a1a]' : 'text-[#8b8578]'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            My Work
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
