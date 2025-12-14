import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-heading text-2xl font-bold text-foreground hover:opacity-80 transition-opacity">
          Prateek Karn
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/mywork" className="text-sm font-medium text-foreground transition-colors">
            My Work
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
