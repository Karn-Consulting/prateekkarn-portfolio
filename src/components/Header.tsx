import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-6 px-6 lg:px-8 bg-[#f5f5f0] border-b border-[#e8e6e1]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="font-heading text-xl md:text-2xl text-[#1a1a1a] hover:text-[#4a4a4a] transition-colors"
        >
          Prateek Karn
        </Link>
        <nav className="flex gap-8">
          <Link 
            to="/" 
            className="text-sm font-medium text-[#8b8578] hover:text-[#1a1a1a] transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/mywork" 
            className="text-sm font-medium text-[#1a1a1a] transition-colors"
          >
            My Work
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
