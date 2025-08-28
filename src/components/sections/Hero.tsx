import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Globe, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [url, setUrl] = useState('');
  const [activeTab, setActiveTab] = useState('scrape');

  const tabs = [
    { id: 'scrape', label: 'Scrape', icon: '🔗' },
    { id: 'search', label: 'Search', icon: '🔍', isNew: true },
    { id: 'map', label: 'Map', icon: '🗺️' },
    { id: 'crawl', label: 'Crawl', icon: '🕷️' },
  ];

  return (
    <section className="overflow-x-clip" id="hero">
      <div className="pt-28 lg:pt-64 pb-28 relative">
        {/* Promotional link */}
        <div className="container px-4 relative">
          <a 
            href="/pricing" 
            className="p-4 rounded-full flex w-max mx-auto mb-12 lg:mb-16 items-center relative border border-[hsl(var(--border-faint))] group hover:border-[hsl(var(--heat-100))] transition-colors"
          >
            <div className="px-8 text-xs">2 Months Free — Annually</div>
            <div className="p-1">
              <div className="size-4 bg-[hsl(var(--accent-black))] flex items-center justify-center rounded-full group-hover:bg-[hsl(var(--heat-100))] transition-all group-hover:w-8">
                <ArrowRight className="size-2 text-white transition-all -translate-x-0.5 group-hover:translate-x-0" />
              </div>
            </div>
          </a>

          {/* Main heading */}
          <h1 className="text-title-h1 mx-auto text-center mb-12 lg:mb-16">
            Turn websites into <br className="lg-max:hidden" />
            <span className="text-heat">LLM-ready</span> data
          </h1>

          {/* Subheading */}
          <p className="text-center text-body-large mb-16">
            Power your AI apps with clean data crawled<br className="lg-max:hidden" />
            from any website.
            <a 
              className="bg-[hsl(var(--black-alpha-4))] hover:bg-[hsl(var(--black-alpha-6))] lg:ml-4 rounded-lg px-4 lg:px-3 text-base lg-max:py-2 h-8 lg:h-6 block lg-max:mt-8 lg-max:mx-auto lg-max:w-max lg:inline-block gap-1 transition-all"
              target="_blank"
              href="https://github.com/firecrawl/firecrawl"
            >
              It's also open source.
            </a>
          </p>
        </div>

        {/* Interactive Input Section */}
        <div className="container lg:contents !px-4 relative -mt-20">
          <div className="max-w-[552px] mx-auto w-full relative z-10 rounded-2xl lg:-mt-16">
            <div 
              className="bg-[hsl(var(--accent-white))] rounded-2xl"
              style={{
                boxShadow: '0px 0px 44px 0px rgba(0, 0, 0, 0.02), 0px 88px 56px -20px rgba(0, 0, 0, 0.03), 0px 56px 56px -20px rgba(0, 0, 0, 0.02), 0px 32px 32px -20px rgba(0, 0, 0, 0.03), 0px 16px 24px -12px rgba(0, 0, 0, 0.03), 0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 0px 0px 10px #F9F9F9'
              }}
            >
              {/* URL Input */}
              <label className="p-4 flex gap-2 items-center w-full relative border-b border-[hsl(var(--black-alpha-5))]">
                <Globe className="size-6 text-[hsl(var(--black-alpha-32))]" />
                <Input 
                  className="w-full bg-transparent text-base text-[hsl(var(--accent-black))] placeholder:text-[hsl(var(--black-alpha-48))] border-none focus:ring-0 px-0"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </label>

              {/* Controls */}
              <div className="p-2.5 flex justify-between items-center relative">
                {/* Desktop Tabs */}
                <div className="hidden lg:flex bg-[hsl(var(--black-alpha-4))] items-center rounded-2xl p-0.5 relative">
                  <div 
                    className="absolute top-0.5 left-0.5 h-8 bg-[hsl(var(--accent-white))] rounded-lg transition-all duration-300"
                    style={{
                      width: '87px',
                      transform: `translateX(${tabs.findIndex(t => t.id === activeTab) * 95}px)`
                    }}
                  />
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`text-sm px-3 py-2 relative transition-all group flex items-center gap-2 ${
                        activeTab === tab.id 
                          ? 'text-[hsl(var(--accent-black))]' 
                          : 'text-[hsl(var(--black-alpha-56))]'
                      }`}
                    >
                      <span className="text-base">{tab.icon}</span>
                      <span>{tab.label}</span>
                      {tab.isNew && (
                        <span className="py-0.5 px-1.5 rounded text-xs font-medium bg-[hsl(var(--black-alpha-4))] text-[hsl(var(--black-alpha-56))]">
                          New
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Mobile Dropdown */}
                <button className="lg:hidden py-2 px-2.5 flex items-center rounded-2xl border border-[hsl(var(--black-alpha-4))] gap-1">
                  <span className="text-base">{tabs.find(t => t.id === activeTab)?.icon}</span>
                  <div className="px-1.5 text-sm font-medium">{tabs.find(t => t.id === activeTab)?.label}</div>
                  <ChevronDown className="size-6 text-[hsl(var(--black-alpha-48))]" />
                </button>

                {/* Action Button */}
                <Button className="button-primary rounded-2xl p-2 gap-0.5" asChild>
                  <a href={`/playground?endpoint=${activeTab}&url=${encodeURIComponent(url)}&autorun=true`}>
                    <div className="overflow-hidden w-15">
                      <div className="w-max whitespace-nowrap">
                        <div className="w-15 py-2 flex items-center justify-center">
                          <ArrowRight className="size-5" />
                        </div>
                      </div>
                    </div>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Browser Window */}
        <div className="container relative mt-14">
          <div className="rounded-t-4xl lg:h-96 relative">
            {/* Browser chrome */}
            <div className="absolute top-4 left-4 flex gap-2 items-center z-10">
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--border-muted))]"></div>
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--border-muted))]"></div>
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--border-muted))]"></div>
            </div>

            {/* Content area */}
            <div className="bg-[hsl(var(--accent-white))] rounded-t-4xl lg:h-96 border border-[hsl(var(--border-faint))] overflow-hidden">
              <div className="border-b border-[hsl(var(--border-faint))] p-7 flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="size-6 rounded-full bg-[hsl(var(--border-muted))]"></div>
                  <div className="w-16 h-3 rounded-full bg-[hsl(var(--border-muted))]"></div>
                </div>
                <div className="text-xs font-mono text-[hsl(var(--black-alpha-20))]">[ .JSON ]</div>
              </div>

              {/* Code Preview */}
              <div className="p-6 font-mono text-sm">
                <pre className="text-left">
                  <code>{`[
  {
    "url": "https://example.com",
    "markdown": "# Example Page Content",
    "json": { "title": "Example", "docs": "..." },
    "screenshot": "data:image/png;base64..."
  }
]`}</code>
                </pre>
              </div>

              {/* Loading indicator */}
              <div className="absolute right-5 bottom-5 flex gap-1.5 p-1.5 pr-0 rounded-full border border-[hsl(var(--border-faint))] text-xs font-mono text-[hsl(var(--accent-black))]">
                <div className="size-5 relative">
                  <div className="absolute top-0 left-0 size-5 animate-spin">
                    <div className="size-full rounded-full border-2 border-[hsl(var(--border-faint))] border-t-[hsl(var(--heat-100))]"></div>
                  </div>
                </div>
                <div className="overflow-hidden w-24">
                  <div className="w-max whitespace-nowrap">
                    <div className="pr-3">Scraping...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;