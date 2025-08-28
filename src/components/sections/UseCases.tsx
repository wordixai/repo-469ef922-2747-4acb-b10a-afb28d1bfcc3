import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      title: 'Smarter AI chats',
      subtitle: 'Chat with context',
      description: 'Power your AI assistants with real-time, accurate web content.',
      buttonText: 'View docs',
      href: '/docs',
    },
    {
      title: 'Lead enrichment',
      subtitle: 'Know your leads',
      description: 'Enhance your sales data with web information.',
      buttonText: 'Check out Extract',
      href: '/extract',
    },
    {
      title: 'MCPs',
      subtitle: 'Know your leads',
      description: 'Add powerful scraping to your code editors.',
      buttonText: 'Get started',
      href: '/mcp-server',
    },
    {
      title: 'AI platforms',
      subtitle: 'Build with context',
      description: 'Let your customers build AI apps with web data.',
      buttonText: 'Check out Map',
      href: '/map',
    },
    {
      title: 'Deep research',
      subtitle: 'No insight missed',
      description: 'Extract comprehensive information for in-depth research.',
      buttonText: 'Build your own with Search',
      href: '/search',
    },
  ];

  return (
    <section className="container -mt-px">
      <div className="relative py-22 lg:py-36 overflow-clip z-10 lg-max:!py-16">
        {/* Section Header */}
        <div className="relative">
          <div className="mx-auto px-3 pt-4 flex gap-2.5 bg-[hsl(var(--background-base))] relative w-max pb-4 items-center text-xs">
            <div className="h-px bottom-0 absolute w-full left-0 bg-[hsl(var(--border-faint))]"></div>
            <div className="text-[hsl(var(--black-alpha-16))] pointer-events-none select-none">//</div>
            <div className="relative flex gap-2.5 items-center">
              <div className="size-5 bg-[hsl(var(--heat-100))] rounded-full flex items-center justify-center">
                <div className="size-2 bg-white rounded-full"></div>
              </div>
              <span>Use cases</span>
            </div>
            <div className="text-[hsl(var(--black-alpha-16))] pointer-events-none select-none scale-x-[-1]">//</div>
          </div>
          
          <div>
            <h2 className="lg:w-max relative mx-auto text-[hsl(var(--accent-black))] text-title-h2 pb-2 pt-3 px-5 text-center max-w-[650px]">
              Transform <br className="lg:hidden" /> web data into <br className="lg:hidden" />{' '}
              <span className="text-heat">AI-powered</span> solutions
            </h2>
            <div className="max-w-96 px-5 py-2 relative w-full mx-auto text-[hsl(var(--black-alpha-72))] text-body-large text-center mb-8 lg-max:px-6">
              Discover how Firecrawl customers are getting the most out of our API.
            </div>
            <Button className="button-primary mx-auto" asChild>
              <a href="/use-cases">View all use cases</a>
            </Button>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="space-y-0 mt-16">
          {useCases.map((useCase, index) => (
            <div key={index} className="relative lg:flex lg:h-100">
              <div className="p-8 lg:px-16 lg:py-15 z-20 lg:w-[454px] relative flex flex-col h-full border-t border-[hsl(var(--border-faint))]">
                <div className="flex gap-2 items-center text-sm text-[hsl(var(--black-alpha-64))] mb-4">
                  <span className="text-xl">✨</span>
                  {useCase.subtitle}
                </div>
                <div className="text-xl max-w-88 mb-3">{useCase.title}</div>
                <div className="text-lg">{useCase.description}</div>
                <div className="flex-1 mb-6"></div>
                <Button className="button-secondary w-max group" asChild>
                  <a href={useCase.href}>
                    {useCase.buttonText}
                    <ArrowRight className="size-5 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </Button>
              </div>
              
              <div className="flex-1 -mt-px lg:-ml-px relative border-t border-[hsl(var(--border-faint))]">
                <div className="absolute lg-max:w-full lg-max:h-px left-0 h-full w-px bg-[hsl(var(--border-faint))] top-0"></div>
                
                {/* Use case demo area */}
                <div className="lg-max:h-110 lg-max:relative p-8 flex items-center justify-center">
                  <div className="size-20 lg:size-25 rounded-full bg-[#FDFDFD] flex items-center justify-center border border-[hsl(var(--border-faint))]"
                       style={{ boxShadow: '0px 24px 32px -12px rgba(0, 0, 0, 0.03), 0px 16px 24px -8px rgba(0, 0, 0, 0.03), 0px 8px 16px -4px rgba(0, 0, 0, 0.03), 0px 0px 0px 1px rgba(0, 0, 0, 0.03)' }}>
                    <div className="size-8 lg:size-10 bg-[hsl(var(--heat-100))] rounded-full flex items-center justify-center">
                      <div className="size-3 lg:size-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;