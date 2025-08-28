import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="container -mt-px">
      <div className="lg:flex relative -mt-px border-t border-[hsl(var(--border-faint))]">
        <div className="flex-1 relative">
          <div className="lg-max:pb-19 p-8 lg:px-16 lg:py-14 h-full relative">
            <div className="flex items-center gap-2 mb-8">
              <div className="size-8 bg-[hsl(var(--heat-100))] rounded-full flex items-center justify-center">
                <div className="size-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold">Firecrawl</span>
            </div>
            <div className="text-lg font-semibold">
              The easiest way to extract <br />data from the web
            </div>
          </div>
        </div>
        
        <div className="flex-1 lg:-ml-px flex lg-max:border-t lg-max:-mt-px border-[hsl(var(--border-faint))] relative">
          <div className="flex-1 border-l border-[hsl(var(--border-faint))]">
            <div className="py-4 px-5 lg:p-7 h-42 lg:h-48">
              <div className="mb-5 lg:mb-7 text-[hsl(var(--black-alpha-64))] text-base">Backed by</div>
              <div className="flex gap-4">
                <div className="size-5 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Y</span>
                </div>
                <div className="text-base whitespace-nowrap">Y Combinator</div>
              </div>
            </div>
            
            <a 
              className="text-base group flex gap-4 items-center text-[hsl(var(--black-alpha-72))] relative hover:text-heat transition-colors duration-200 py-4 px-5 lg:px-7 border-t border-[hsl(var(--border-faint))]"
              target="_blank"
              href="https://www.linkedin.com/company/firecrawl"
            >
              <span className="text-xl">📧</span>
              LinkedIn
            </a>
            
            <a 
              className="text-base group flex gap-4 items-center text-[hsl(var(--black-alpha-72))] relative hover:text-heat transition-colors duration-200 py-4 px-5 lg:px-7 border-t border-[hsl(var(--border-faint))] -mt-px"
              target="_blank"
              href="https://github.com/firecrawl/firecrawl"
            >
              <span className="text-xl">⭐</span>
              Github
            </a>
          </div>
          
          <div className="flex-1 -ml-px border-l border-[hsl(var(--border-faint))]">
            <div className="py-4 px-5 lg:p-7 h-42 lg:h-48 relative">
              <div className="mb-7 text-[hsl(var(--black-alpha-64))] flex gap-2 items-center text-base">
                <span>SOC II · Type 2</span>
                <span className="text-xl">🛡️</span>
              </div>
              
              <div className="size-22 relative p-2">
                <div className="size-18 text-center rounded-full pt-5 bg-gradient-to-b from-white/80 to-white/40"
                     style={{ boxShadow: '0px 16px 24px -6px rgba(0, 0, 0, 0.04), 0px 8px 12px -4px rgba(0, 0, 0, 0.04), 0px 4px 8px -2px rgba(0, 0, 0, 0.03), 0px 0px 0px 1px rgba(0, 0, 0, 0.03)' }}>
                  <div className="text-xs font-medium text-heat">AICPA</div>
                  <div className="text-[hsl(var(--black-alpha-40))] text-xs font-medium">SOC 2</div>
                </div>
              </div>
            </div>
            
            <a 
              className="text-base group flex gap-4 items-center text-[hsl(var(--black-alpha-72))] relative hover:text-heat transition-colors duration-200 py-4 px-5 lg:px-7 border-t border-[hsl(var(--border-faint))]"
              target="_blank"
              href="https://x.com/firecrawl_dev"
            >
              <span className="text-xl">🐦</span>
              <div>X <span className="opacity-56">(Twitter)</span></div>
            </a>
            
            <a 
              className="text-base group flex gap-4 items-center text-[hsl(var(--black-alpha-72))] relative hover:text-heat transition-colors duration-200 py-4 px-5 lg:px-7 border-t border-[hsl(var(--border-faint))] -mt-px"
              target="_blank"
              href="https://discord.gg/gSmWdAkdwd"
            >
              <span className="text-xl">💬</span>
              Discord
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap relative pl-px -mt-px border-t border-[hsl(var(--border-faint))]">
        <div className="lg-max:w-[calc(50%+1px)] lg:flex-1 lg-max:-mt-px -ml-px">
          <div className="text-sm py-4 px-5 lg:p-7 relative border border-[hsl(var(--border-faint))]">Products</div>
          {['Playground', 'Extract', 'Pricing', 'Templates', 'Changelog'].map((item) => (
            <a key={item} className="text-base group flex gap-4 items-center text-[hsl(var(--black-alpha-72))] relative hover:text-heat transition-colors duration-200 py-4 px-5 lg:px-7 border border-[hsl(var(--border-faint))] -mt-px" href={`/${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
        
        <div className="lg-max:w-[calc(50%+1px)] lg:flex-1 lg-max:-mt-px -ml-px">
          <div className="text-sm py-4 px-5 lg:p-7 relative border border-[hsl(var(--border-faint))]">Use Cases</div>
          {['AI Platforms', 'Lead Enrichment', 'SEO Platforms', 'Deep Research'].map((item) => (
            <a key={item} className="text-base group flex gap-4 items-center text-[hsl(var(--black-alpha-72))] relative hover:text-heat transition-colors duration-200 py-4 px-5 lg:px-7 border border-[hsl(var(--border-faint))] -mt-px" target="_blank" href={`/use-cases/${item.toLowerCase().replace(' ', '-')}`}>
              {item}
            </a>
          ))}
        </div>
        
        <div className="lg-max:w-[calc(50%+1px)] lg:flex-1 lg-max:-mt-px -ml-px">
          <div className="text-sm py-4 px-5 lg:p-7 relative border border-[hsl(var(--border-faint))]">Documentation</div>
          {['Getting started', 'API Reference', 'Integrations', 'Examples', 'SDKs'].map((item) => (
            <a key={item} className="text-base group flex gap-4 items-center text-[hsl(var(--black-alpha-72))] relative hover:text-heat transition-colors duration-200 py-4 px-5 lg:px-7 border border-[hsl(var(--border-faint))] -mt-px" target="_blank" href={`/docs/${item.toLowerCase().replace(' ', '-')}`}>
              {item}
            </a>
          ))}
        </div>
        
        <div className="lg-max:w-[calc(50%+1px)] lg:flex-1 lg-max:-mt-px -ml-px">
          <div className="text-sm py-4 px-5 lg:p-7 relative border border-[hsl(var(--border-faint))]">Company</div>
          {['Blog', 'Careers', 'Creator & OSS program', 'Student program'].map((item) => (
            <a key={item} className="text-base group flex gap-4 items-center text-[hsl(var(--black-alpha-72))] relative hover:text-heat transition-colors duration-200 py-4 px-5 lg:px-7 border border-[hsl(var(--border-faint))] -mt-px" href={`/${item.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}`}>
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex text-base pl-px flex-wrap whitespace-nowrap relative border-t border-[hsl(var(--border-faint))] -mt-px">
        <div className="px-4 lg:px-7 py-4 text-[hsl(var(--black-alpha-20))] -mt-px -ml-px w-[calc(50%+1px)] lg:flex-1 relative border border-[hsl(var(--border-faint))]">
          © 2025 Firecrawl
        </div>
        {['Terms of Service', 'Privacy Policy', 'Report Abuse'].map((item) => (
          <a key={item} className="text-base group flex gap-4 items-center text-[hsl(var(--black-alpha-72))] relative hover:text-heat transition-colors duration-200 py-4 px-5 lg:px-7 border border-[hsl(var(--border-faint))] -ml-px -mt-px w-[calc(50%+1px)] lg:flex-1" href={`/${item.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}`}>
            {item}
          </a>
        ))}
      </div>

      {/* Status */}
      <div className="p-4 lg:p-6 text-base -mt-px relative border-t border-[hsl(var(--border-faint))]">
        <Button className="button-tertiary" asChild>
          <a href="https://firecrawl.betteruptime.com/" target="_blank">
            <div className="size-5 flex items-center justify-center">
              <div className="size-1.5 bg-blue-500 rounded-full"></div>
            </div>
            <span className="text-blue-500">All systems normal</span>
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;