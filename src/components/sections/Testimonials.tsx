import { ExternalLink } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      author: 'Morgan Linton',
      handle: '@morganlinton',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      content: 'If you\'re coding with AI, and haven\'t discovered @firecrawl_dev yet, prepare to have your mind blown 🤯',
      url: 'https://x.com/morganlinton/status/1839454165703204955',
    },
    {
      id: 2,
      author: 'Chris DeWeese',
      handle: '@chrisdeweese_',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      content: 'Started using @firecrawl_dev for a project, I wish I used this sooner.',
      url: 'https://x.com/chrisdeweese_/status/1853587120406876601',
    },
    {
      id: 3,
      author: 'Alex Reibman',
      handle: '@AlexReibman',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face',
      content: 'Moved our internal agent\'s web scraping tool from Apify to Firecrawl because it benchmarked 50x faster with AgentOps.',
      url: 'https://x.com/AlexReibman/status/1780299595484131836',
    },
    {
      id: 4,
      author: 'Tom - Morpho',
      handle: '@TomReppelin',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      content: 'I found gold today. Thank you @firecrawl_dev',
      url: 'https://x.com/TomReppelin/status/1844382491014201613',
    },
    {
      id: 5,
      author: 'Bardia',
      handle: '@thepericulum',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face',
      content: 'The Firecrawl team ships. I wanted types for their node SDK, and less than an hour later, I got them.',
      url: 'https://x.com/thepericulum/status/1781397799487078874',
    },
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
              <span>Community</span>
            </div>
            <div className="text-[hsl(var(--black-alpha-16))] pointer-events-none select-none scale-x-[-1]">//</div>
          </div>
          
          <div>
            <h2 className="lg:w-max relative mx-auto text-[hsl(var(--accent-black))] text-title-h2 pb-2 pt-3 px-5 text-center lg:max-w-[600px] lg:!text-title-h3 lg:!mx-0 lg:!text-start lg:!pt-0">
              People love <br /> building with <span className="text-heat">Firecrawl</span>
            </h2>
            <div className="max-w-96 px-5 py-2 relative w-full mx-auto text-[hsl(var(--black-alpha-72))] text-body-large text-center mb-8 lg:!mx-0 lg:!text-start lg:!max-w-none">
              Discover why developers choose Firecrawl every day.
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative -mt-px">
          <div className="w-full overflow-hidden">
            <div className="flex w-max">
              {/* First row */}
              <div className="flex w-max">
                {testimonials.map((testimonial) => (
                  <a
                    key={testimonial.id}
                    href={testimonial.url}
                    target="_blank"
                    className="w-82 lg:w-90 relative group block hover:bg-[hsl(var(--black-alpha-4))] transition-all duration-200"
                  >
                    <div className="left-0 w-[calc(100%+1px)] border-x border-[hsl(var(--border-faint))] absolute top-0 h-full"></div>
                    <div className="h-6 w-0.5 transition-all duration-200 scale-x-0 origin-left group-hover:scale-x-100 absolute left-0 top-8 bg-[hsl(var(--heat-100))]"></div>
                    
                    <div className="px-7 py-5 lg:p-6 flex-1 lg:pl-8 border-b border-[hsl(var(--border-faint))] flex gap-4 items-center">
                      <div className="size-10 rounded-full bg-[hsl(var(--background-base))] relative border border-[hsl(var(--black-alpha-5))] overflow-hidden">
                        <img 
                          alt={testimonial.author}
                          className="size-10 object-cover"
                          src={testimonial.avatar}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{testimonial.author}</div>
                        <div className="text-sm text-[hsl(var(--black-alpha-56))]">{testimonial.handle}</div>
                      </div>
                      <div className="-translate-x-0.5 translate-y-0.5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200">
                        <ExternalLink className="size-4 text-[hsl(var(--heat-100))]" />
                      </div>
                    </div>
                    
                    <div className="h-53 lg:h-36 p-7 lg:px-8 lg:py-6 text-lg leading-relaxed">
                      "{testimonial.content.replace('@firecrawl_dev', '').replace('Firecrawl', '')}"
                      <span className="text-heat">@firecrawl_dev</span> / <span className="text-heat">Firecrawl</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;