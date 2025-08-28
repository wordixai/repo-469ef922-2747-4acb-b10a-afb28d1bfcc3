const Features = () => {
  const features = [
    {
      icon: '📄',
      title: 'Docs to data',
      subtitle: 'Media parsing.',
      description: 'Firecrawl can parse and output content from web hosted pdfs, docx, and more.',
    },
    {
      icon: '⏱️',
      title: 'Knows the moment',
      subtitle: 'Smart wait.',
      description: 'Firecrawl intelligently waits for content to load, making scraping faster and more reliable.',
    },
    {
      icon: '🔄',
      title: 'Scrapes the real thing',
      subtitle: 'Cached, when you need it.',
      description: 'Selective caching, you choose your caching patterns, growing web index.',
    },
    {
      icon: '🎯',
      title: 'Invisible access',
      subtitle: 'Stealth mode.',
      description: 'Crawls the web without being blocked, mimics real users to access protected or dynamic content.',
    },
    {
      icon: '🖱️',
      title: 'Interactive scraping',
      subtitle: 'Actions.',
      description: 'Click, scroll, write, wait, press and more before extracting content.',
    },
  ];

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
              <div>Zero configuration</div>
            </div>
            <div className="text-[hsl(var(--black-alpha-16))] pointer-events-none select-none scale-x-[-1]">//</div>
          </div>
          
          <div>
            <h2 className="lg:w-max relative mx-auto text-[hsl(var(--accent-black))] text-title-h2 pb-2 pt-3 px-5 text-center">
              We handle the <span className="text-heat">hard stuff</span>
            </h2>
            <div className="max-w-96 px-5 py-2 relative w-full mx-auto text-[hsl(var(--black-alpha-72))] text-body-large text-center mb-8">
              Rotating proxies, orchestration, rate limits, js-blocked content and more.
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="lg:grid grid-cols-2 relative gap-4">
          <div className="h-px bg-[hsl(var(--border-faint))] w-full absolute bottom-0 left-0"></div>
          
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className={`-mt-px p-8 lg:pt-15 lg:pb-12 lg:pl-16 lg:pr-18 w-full border-t z-20 border-[hsl(var(--border-faint))] relative ${index % 2 === 1 ? 'lg:border-l' : ''}`}>
                <div className="flex gap-2 items-center text-sm text-[hsl(var(--black-alpha-64))] mb-4">
                  <span className="text-xl">{feature.icon}</span>
                  {feature.title}
                </div>
                <div className="text-xl max-w-88 text-[hsl(var(--black-alpha-64))]">
                  <span className="text-lg text-[hsl(var(--accent-black))] font-semibold">{feature.subtitle}</span>{' '}
                  {feature.description}
                </div>
              </div>
              
              {/* Feature visualization area */}
              <div className="flex w-full -mt-px relative h-88">
                <div className="h-px absolute top-0 bg-[hsl(var(--border-faint))] w-full left-0"></div>
                
                <div className="w-full p-8 flex items-center justify-center">
                  {/* Placeholder for feature demo */}
                  <div className="size-24 bg-[hsl(var(--black-alpha-4))] rounded-2xl flex items-center justify-center text-2xl border border-[hsl(var(--border-faint))]">
                    {feature.icon}
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

export default Features;