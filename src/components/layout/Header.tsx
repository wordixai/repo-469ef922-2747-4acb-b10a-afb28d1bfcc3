import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, Star, Github } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-[hsl(var(--background-base))]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl border-x border-[hsl(var(--border-faint))] h-full pointer-events-none"></div>
      
      {/* Border line */}
      <div className="h-px bg-[hsl(var(--border-faint))] w-full absolute bottom-0"></div>
      
      <div className="container">
        <div className="flex justify-between items-center py-5 lg:py-8">
          {/* Logo and Navigation */}
          <div className="flex gap-6 items-center">
            <div className="relative">
              <a href="/" className="flex items-center gap-2 relative">
                <div className="size-8 bg-[hsl(var(--heat-100))] rounded-full flex items-center justify-center">
                  <div className="size-4 bg-white rounded-full"></div>
                </div>
                <span className="text-xl font-bold">Firecrawl</span>
              </a>
            </div>
            
            <div className="text-[hsl(var(--black-alpha-16))] text-sm select-none lg-max:hidden">·</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-2">
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-[hsl(var(--accent-black))] hover:bg-[hsl(var(--black-alpha-4))] transition-colors">
                Products
                <ChevronDown className="size-4 opacity-56" />
              </button>
              <a href="/playground" className="px-3 py-2 rounded-lg text-sm font-medium text-[hsl(var(--accent-black))] hover:bg-[hsl(var(--black-alpha-4))] transition-colors">
                Playground
              </a>
              <a href="/docs" className="px-3 py-2 rounded-lg text-sm font-medium text-[hsl(var(--accent-black))] hover:bg-[hsl(var(--black-alpha-4))] transition-colors">
                Docs
              </a>
              <a href="/pricing" className="px-3 py-2 rounded-lg text-sm font-medium text-[hsl(var(--accent-black))] hover:bg-[hsl(var(--black-alpha-4))] transition-colors">
                Pricing
              </a>
              <a href="/blog" className="px-3 py-2 rounded-lg text-sm font-medium text-[hsl(var(--accent-black))] hover:bg-[hsl(var(--black-alpha-4))] transition-colors">
                Blog
              </a>
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-[hsl(var(--accent-black))] hover:bg-[hsl(var(--black-alpha-4))] transition-colors">
                Extract
                <ChevronDown className="size-4 opacity-56" />
              </button>
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-[hsl(var(--accent-black))] hover:bg-[hsl(var(--black-alpha-4))] transition-colors">
                Resources
                <ChevronDown className="size-4 opacity-56" />
              </button>
            </nav>
          </div>

          {/* Right side buttons */}
          <div className="flex gap-2">
            <div className="hidden lg:flex gap-2">
              <Button variant="ghost" className="button-tertiary flex items-center gap-2" asChild>
                <a href="https://github.com/firecrawl/firecrawl" target="_blank">
                  <Github className="size-4" />
                  52.7K
                </a>
              </Button>
              <Button className="button-secondary" asChild>
                <a href="/signup">Sign up</a>
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              className="lg:hidden button-tertiary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;