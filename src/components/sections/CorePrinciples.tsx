const CorePrinciples = () => {
  const benchmarks = [
    { name: 'Firecrawl', percentage: 96, color: 'heat' },
    { name: 'Puppeteer', percentage: 79, color: 'gray' },
    { name: 'cURL', percentage: 75, color: 'gray' },
  ];

  const performanceData = [
    { url: 'firecrawl.dev/docs', crawl: 746, scrape: 772 },
    { url: 'firecrawl.dev/blog', crawl: 707, scrape: 702 },
    { url: 'firecrawl.dev/features', crawl: 753, scrape: 747 },
    { url: 'firecrawl.dev/pricing', crawl: 51, scrape: 52 },
    { url: 'firecrawl.dev/changelog', crawl: 49, scrape: 52 },
  ];

  return (
    <section className="container -mt-px">
      <div className="relative py-22 lg:py-36 overflow-clip z-10">
        {/* Section Header */}
        <div className="relative lg:max-w-[736px] lg:mx-auto lg:flex justify-between">
          <div className="mx-auto px-3 pt-4 h-max lg:!mx-0 flex gap-2.5 bg-[hsl(var(--background-base))] relative w-max pb-4 items-center text-xs">
            <div className="h-px bottom-0 absolute w-full left-0 bg-[hsl(var(--border-faint))]"></div>
            <div className="text-[hsl(var(--black-alpha-16))] pointer-events-none select-none">//</div>
            <div className="relative flex gap-2.5 items-center">
              <div className="size-5 bg-[hsl(var(--heat-100))] rounded-full flex items-center justify-center">
                <div className="size-2 bg-white rounded-full"></div>
              </div>
              <span>Built to outperform</span>
            </div>
            <div className="text-[hsl(var(--black-alpha-16))] pointer-events-none select-none scale-x-[-1]">//</div>
          </div>
          
          <div>
            <h2 className="lg:w-max relative mx-auto text-[hsl(var(--accent-black))] text-title-h2 pb-2 pt-3 px-5 text-center lg:max-w-[600px] lg:!text-title-h3 lg:!mx-0 lg:!text-start lg:!pt-0">
              Core principles, <br /> proven <span className="text-heat">performance</span>
            </h2>
            <div className="max-w-96 px-5 py-2 relative w-full mx-auto text-[hsl(var(--black-alpha-72))] text-body-large text-center mb-8 lg:!mx-0 lg:!text-start lg:!max-w-none">
              Built from the ground up to outperform traditional scrapers.
            </div>
          </div>
        </div>

        {/* Reliability Section */}
        <div className="relative lg:flex gap-4 -mt-px">
          <div className="relative flex-1">
            <div className="p-8 lg:pt-15 lg:pb-14 lg:pl-16 lg:pr-22 w-full border-t z-20 border-[hsl(var(--border-faint))] relative">
              <div className="flex gap-2 items-center text-sm text-[hsl(var(--black-alpha-64))] mb-4">
                <div className="size-5 bg-[hsl(var(--heat-100))] rounded-full flex items-center justify-center">
                  <div className="size-2 bg-white rounded-full"></div>
                </div>
                No proxy headaches
              </div>
              <div className="text-xl text-[hsl(var(--black-alpha-64))]">
                <span className="text-lg text-[hsl(var(--accent-black))] font-semibold">Reliable.</span>{' '}
                Covers 96% of the web, <br className="lg-max:hidden" /> including JS-heavy and protected pages. No proxies, no puppets, just clean data.
              </div>
            </div>
            
            <div className="flex w-full -mt-px relative lg:h-86">
              <div className="h-px absolute top-0 bg-[hsl(var(--border-faint))] w-full left-0"></div>
              
              <div className="w-full space-y-4 p-6">
                {benchmarks.map((benchmark, index) => (
                  <div key={benchmark.name} className="flex items-center gap-4 lg:gap-12">
                    <div className="flex gap-3 lg:gap-4 w-35 lg:w-34 items-center">
                      <div className="size-10 flex items-center justify-center relative border border-[hsl(var(--border-faint))] rounded-full">
                        {benchmark.name === 'Firecrawl' && (
                          <div className="size-6 bg-[hsl(var(--heat-100))] rounded-full flex items-center justify-center">
                            <div className="size-2 bg-white rounded-full"></div>
                          </div>
                        )}
                        {benchmark.name === 'Puppeteer' && <span className="text-sm">🎭</span>}
                        {benchmark.name === 'cURL' && <span className="text-sm">💻</span>}
                      </div>
                      <div className="text-body-large">{benchmark.name}</div>
                    </div>
                    
                    <div className="flex-1 rounded-full p-0.5 h-10 border border-[hsl(var(--border-faint))] relative">
                      <div 
                        className={`h-full relative rounded-full overflow-clip ${
                          benchmark.color === 'heat' 
                            ? 'bg-[hsl(var(--heat-100))]' 
                            : 'bg-[hsl(var(--black-alpha-12))]'
                        }`}
                        style={{ width: `${benchmark.percentage}%` }}
                      >
                        {benchmark.name === 'Firecrawl' && (
                          <div className="absolute right-16 w-180 -top-47 h-100 pointer-events-none select-none opacity-40">
                            <div className="font-mono text-[hsl(var(--accent-white))] text-xs leading-tight">
                              {Array.from({ length: 8 }, (_, i) => (
                                <div key={i}>
                                  {'                    '.repeat(10)}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="absolute top-1.5 right-1.5 rounded-full py-0.5 w-12 text-center text-xs font-mono bg-white/20 border border-white/30 text-[hsl(var(--accent-white))]">
                          {benchmark.percentage}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Section */}
          <div className="relative flex-1 lg:-ml-px">
            <div className="p-8 lg:pt-15 lg:pb-14 lg:pl-16 lg:pr-22 w-full border-t z-20 border-[hsl(var(--border-faint))] relative">
              <div className="flex gap-2 items-center text-sm text-[hsl(var(--black-alpha-64))] mb-4">
                <div className="size-5 bg-[hsl(var(--heat-100))] rounded-full flex items-center justify-center">
                  <div className="size-2 bg-white rounded-full"></div>
                </div>
                Speed that feels invisible
              </div>
              <div className="text-xl text-[hsl(var(--black-alpha-64))]">
                <span className="text-lg text-[hsl(var(--accent-black))] font-semibold">Blazingly fast.</span>{' '}
                Delivers results in less than 1 second, fast for real-time agents<br className="lg-max:hidden" /> and dynamic apps.
              </div>
            </div>
            
            <div className="flex w-full -mt-px relative lg:h-86">
              <div className="h-px absolute top-0 bg-[hsl(var(--border-faint))] w-full left-0"></div>
              
              <div className="w-full">
                <div className="px-5 lg:px-16 py-3.5 border-b border-[hsl(var(--border-faint))] flex lg:gap-12 text-sm text-[hsl(var(--black-alpha-48))]">
                  <div className="flex-1">URL</div>
                  <div className="w-18">Crawl</div>
                  <div className="w-18">Scrape</div>
                </div>
                
                <div className="relative overflow-hidden -mt-px lg-max:h-61">
                  <div className="space-y-0">
                    {performanceData.map((item, index) => (
                      <div key={index} className="px-5 lg:px-16 h-10 flex items-center border-b border-[hsl(var(--border-faint))] lg:gap-12 text-sm text-[hsl(var(--black-alpha-48))]">
                        <div className="flex-1">
                          <div>
                            <span className="text-[hsl(var(--black-alpha-32))]">firecrawl.dev</span>
                            <span className="text-[hsl(var(--accent-black))]">{item.url.replace('firecrawl.dev', '')}</span>
                          </div>
                        </div>
                        <div className="w-18">
                          <span className="w-4 inline-block">{item.crawl}</span>{' '}
                          <span className="text-[hsl(var(--black-alpha-32))] ml-1.5">ms</span>
                        </div>
                        <div className="w-18">
                          <span className="w-4 inline-block">{item.scrape}</span>{' '}
                          <span className="text-[hsl(var(--black-alpha-32))] ml-1.5">ms</span>
                        </div>
                      </div>
                    ))}
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

export default CorePrinciples;