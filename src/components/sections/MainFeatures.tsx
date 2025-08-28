import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const MainFeatures = () => {
  const [activeFeature, setActiveFeature] = useState('scrape');
  const [activeLanguage, setActiveLanguage] = useState('python');

  const features = [
    {
      id: 'scrape',
      icon: '🔗',
      title: 'Scrape',
      description: 'Get llm-ready data from websites. Markdown, JSON, screenshot, etc.',
    },
    {
      id: 'search',
      title: 'Search',
      icon: '🔍',
      description: 'Search the web and get full content from results.',
      isNew: true,
    },
    {
      id: 'crawl',
      title: 'Crawl',
      icon: '🕷️',
      description: 'Crawl all the pages on a website and get data for each page.',
    },
  ];

  const languages = [
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'nodejs', name: 'Node.js', icon: '🟢' },
    { id: 'curl', name: 'Curl', icon: '💻' },
  ];

  const codeExamples = {
    python: `# pip install firecrawl-py
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-YOUR_API_KEY")

# Scrape a website:
app.scrape('firecrawl.dev')`,
    nodejs: `// npm install @firecrawl/firecrawl-js
import { FirecrawlApp } from '@firecrawl/firecrawl-js';

const app = new FirecrawlApp({apiKey: "fc-YOUR_API_KEY"});

// Scrape a website:
await app.scrapeUrl('https://firecrawl.dev');`,
    curl: `curl -X POST https://api.firecrawl.dev/v0/scrape \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -d '{"url": "https://firecrawl.dev"}'`,
  };

  return (
    <section className="container -mt-px">
      <div className="relative py-22 lg:py-36 overflow-clip z-10">
        {/* Section Header */}
        <div className="relative">
          <div className="mx-auto px-3 pt-4 flex gap-2.5 bg-[hsl(var(--background-base))] relative w-max pb-4 items-center text-xs">
            <div className="h-px bottom-0 absolute w-full left-0 bg-[hsl(var(--border-faint))]"></div>
            <div className="text-[hsl(var(--black-alpha-16))] pointer-events-none select-none">//</div>
            <div className="relative flex gap-2.5 items-center">
              <div className="size-5 bg-[hsl(var(--heat-100))] rounded-full flex items-center justify-center">
                <div className="size-2 bg-white rounded-full"></div>
              </div>
              <div>Developer First</div>
            </div>
            <div className="text-[hsl(var(--black-alpha-16))] pointer-events-none select-none scale-x-[-1]">//</div>
          </div>
          
          <div>
            <h2 className="lg:w-max relative mx-auto text-[hsl(var(--accent-black))] text-title-h2 pb-2 pt-3 px-5 text-center">
              Start <span className="text-heat">scraping</span> <br className="lg:hidden" /> today
            </h2>
            <div className="max-w-96 px-5 py-2 relative w-full mx-auto text-[hsl(var(--black-alpha-72))] text-body-large text-center mb-8">
              Enhance your apps with industry leading web scraping and crawling capabilities.
            </div>
          </div>
        </div>

        {/* Feature Tabs */}
        <div className="relative lg:contents z-10">
          <div className="overflow-x-scroll hide-scrollbar py-8 -my-8 lg:contents relative">
            <div className="flex lg:grid grid-cols-3 lg-max:w-max relative">
              <div className="h-px bottom-0 left-0 absolute bg-[hsl(var(--border-faint))] w-full"></div>
              
              {/* Active indicator */}
              <div 
                className="absolute lg:top-3 lg:translate-x-3 top-2 translate-x-2 left-0 z-20 inset-y-2 lg:inset-y-3 bg-[hsl(var(--white-alpha-72))] rounded-3xl lg:rounded-5xl backdrop-blur-sm transition-transform duration-300"
                style={{
                  width: '138px',
                  transform: `translateX(${features.findIndex(f => f.id === activeFeature) * 146 + 8}px)`,
                  boxShadow: '0px 40px 48px -20px rgba(0, 0, 0, 0.02), 0px 32px 32px -20px rgba(0, 0, 0, 0.03), 0px 16px 24px -12px rgba(0, 0, 0, 0.03), 0px 0px 0px 1px rgba(0, 0, 0, 0.03)'
                }}
              />
              
              {features.map((feature) => (
                <div key={feature.id} className="relative p-2 lg:p-3 group">
                  <div className="h-full w-px right-0 absolute bg-[hsl(var(--border-faint))] top-0"></div>
                  <button 
                    onClick={() => setActiveFeature(feature.id)}
                    className="py-4 lg-max:pl-5 lg-max:pr-6 lg:py-8 text-center lg-max:flex lg-max:items-center gap-3 block w-full relative z-30 rounded-3xl lg:rounded-5xl"
                  >
                    <div className="lg-max:contents flex justify-center">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <div className="text-label-medium justify-center text-[hsl(var(--accent-black))] lg:mt-5 lg:mb-2 flex gap-2 items-center">
                      {feature.title}
                      {feature.isNew && (
                        <div className="py-0.5 px-1.5 text-heat bg-[hsl(var(--heat-12))] rounded text-xs font-medium">
                          New
                        </div>
                      )}
                    </div>
                    <div className="text-[hsl(var(--black-alpha-72))] lg-max:hidden text-body-medium max-w-58 mx-auto">
                      {feature.description}
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Language Tabs */}
        <div className="relative -mt-px flex z-10 justify-between">
          <div className="h-px bottom-0 left-0 absolute bg-[hsl(var(--border-faint))] w-full"></div>
          
          <div className="overflow-x-scroll whitespace-nowrap hide-scrollbar lg:contents py-8 -my-8">
            <div className="flex relative">
              <div 
                className="absolute top-3 left-0 z-20 inset-y-3 bg-[hsl(var(--white-alpha-72))] rounded-full backdrop-blur-sm transition-transform duration-300"
                style={{
                  width: '125px',
                  transform: `translateX(${languages.findIndex(l => l.id === activeLanguage) * 133 + 12}px)`,
                  boxShadow: 'rgba(0, 0, 0, 0.03) 0px 24px 32px -12px, rgba(0, 0, 0, 0.03) 0px 16px 24px -8px, rgba(0, 0, 0, 0.03) 0px 8px 16px -4px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px'
                }}
              />
              
              {languages.map((language) => (
                <div key={language.id} className="relative p-3 group">
                  <div className="h-full w-px right-0 absolute bg-[hsl(var(--border-faint))] top-0"></div>
                  <button 
                    onClick={() => setActiveLanguage(language.id)}
                    className={`py-3 px-6 flex gap-1 justify-center items-center w-full relative z-30 transition-colors rounded-full ${
                      activeLanguage === language.id 
                        ? 'text-[hsl(var(--accent-black))]' 
                        : 'text-[hsl(var(--black-alpha-64))] hover:text-[hsl(var(--black-alpha-88))]'
                    }`}
                  >
                    <span>{language.icon}</span>
                    <div className="px-1 text-sm font-medium">{language.name}</div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Copy button */}
          <div className="py-3 px-4 border-l border-[hsl(var(--border-faint))] relative lg-max:hidden">
            <Button variant="outline" className="rounded-full">
              <Copy className="size-4 mr-2 text-[hsl(var(--black-alpha-64))]" />
              Copy code
            </Button>
          </div>
        </div>

        {/* Code Display */}
        <div className="lg:pt-3 lg:pl-7 -mt-px w-full lg:pb-8 relative">
          <div className="relative lg:contents">
            <div className="bg-[hsl(var(--accent-white))] border border-[hsl(var(--border-faint))] rounded-2xl overflow-hidden">
              <div className="border-b border-[hsl(var(--border-faint))] p-3 flex justify-between items-center">
                <div className="flex gap-2.5 items-center">
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--border-muted))]"></div>
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--border-muted))]"></div>
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--border-muted))]"></div>
                </div>
                <div className="text-xs font-mono text-[hsl(var(--black-alpha-20))]">[ .PY ]</div>
              </div>
              
              <div className="overflow-x-scroll lg-max:pb-5 lg-max:pr-5">
                <pre className="prismjs p-4">
                  <code className="language-python whitespace-pre">
                    {codeExamples[activeLanguage as keyof typeof codeExamples]}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Output window */}
          <div className="lg:w-[472px] lg:absolute lg-max:-mt-px lg-max:border-t border-[hsl(var(--border-faint))] z-20 top-0 right-0 lg:h-86 flex bg-[hsl(var(--background-base))]">
            <div className="h-px top-0 absolute left-0 w-full bg-[hsl(var(--border-faint))]"></div>
            <div className="h-px bottom-0 absolute left-0 w-full bg-[hsl(var(--border-faint))]"></div>
            <div className="h-full top-0 absolute left-0 w-px bg-[hsl(var(--border-faint))]"></div>
            
            <div className="flex-1 relative min-w-0 lg-max:-mt-px">
              <div className="border-b border-[hsl(var(--border-faint))] p-3 flex justify-between items-center">
                <div className="flex gap-2.5 items-center">
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--border-muted))]"></div>
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--border-muted))]"></div>
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--border-muted))]"></div>
                </div>
                <div className="text-xs font-mono text-[hsl(var(--black-alpha-20))]">[ .MD ]</div>
              </div>
              
              <div className="overflow-x-scroll lg-max:pb-5 lg-max:pr-5">
                <pre className="prismjs p-4">
                  <code className="language-markdown whitespace-pre">{`# Firecrawl

Firecrawl is a powerful web scraping
library that makes it easy to extract
data from websites.

## Installation

To install Firecrawl, run:`}</code>
                </pre>
              </div>
              <div className="h-12 border-t border-[hsl(var(--border-faint))] lg:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;