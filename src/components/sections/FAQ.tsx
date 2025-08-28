import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqCategories = [
    {
      title: 'General',
      questions: [
        {
          q: 'What is Firecrawl?',
          a: 'Firecrawl is a powerful web scraping and crawling API that converts any website into clean, LLM-ready data formats like markdown, JSON, and more.',
        },
        {
          q: 'What sites work?',
          a: 'Firecrawl works with 96% of websites including JavaScript-heavy sites, SPAs, protected content, and dynamic pages that traditional scrapers struggle with.',
        },
        {
          q: 'Who can benefit from using Firecrawl?',
          a: 'Developers building AI applications, data scientists, researchers, businesses needing web data, and anyone who wants reliable web scraping without the complexity.',
        },
        {
          q: 'Is Firecrawl open-source?',
          a: 'Yes! Firecrawl is open-source and available on GitHub. You can self-host it or use our hosted version for convenience.',
        },
      ],
    },
    {
      title: 'Scraping & Crawling',
      questions: [
        {
          q: 'How does Firecrawl handle dynamic content?',
          a: 'Firecrawl intelligently waits for content to load, executes JavaScript, and handles dynamic elements automatically.',
        },
        {
          q: 'Why is it not crawling all the pages?',
          a: 'This could be due to rate limits, blocked pages, or crawl configuration. Check your settings and ensure the pages are accessible.',
        },
      ],
    },
    {
      title: 'API Related',
      questions: [
        {
          q: 'Where can I find my API key?',
          a: 'You can find your API key in your dashboard after signing up for a Firecrawl account.',
        },
      ],
    },
    {
      title: 'Billing',
      questions: [
        {
          q: 'Is Firecrawl free?',
          a: 'Yes, we offer a free tier with 500 credits to get you started. No credit card required.',
        },
        {
          q: 'Do credits roll over?',
          a: 'No, credits reset monthly with your billing cycle.',
        },
      ],
    },
  ];

  return (
    <section className="container -mt-px">
      <div className="relative py-22 lg:py-36 overflow-clip z-10 !py-27">
        {/* Section Header */}
        <div className="relative lg:max-w-[736px] lg:mx-auto lg:flex justify-between">
          <div className="mx-auto px-3 pt-4 h-max lg:!mx-0 flex gap-2.5 bg-[hsl(var(--background-base))] relative w-max pb-4 items-center text-xs">
            <div className="h-px bottom-0 absolute w-full left-0 bg-[hsl(var(--border-faint))]"></div>
            <div className="text-[hsl(var(--black-alpha-16))] pointer-events-none select-none">//</div>
            <div className="relative flex gap-2.5 items-center">
              <div className="size-5 bg-[hsl(var(--heat-100))] rounded-full flex items-center justify-center">
                <div className="size-2 bg-white rounded-full"></div>
              </div>
              <span>FAQ</span>
            </div>
            <div className="text-[hsl(var(--black-alpha-16))] pointer-events-none select-none scale-x-[-1]">//</div>
          </div>
          
          <div>
            <h2 className="lg:w-max relative mx-auto text-[hsl(var(--accent-black))] text-title-h2 pb-2 pt-3 px-5 text-center lg:max-w-[600px] lg:!text-title-h3 lg:!mx-0 lg:!text-start lg:!pt-0">
              Frequently <br /> asked <span className="text-heat">questions</span>
            </h2>
            <div className="max-w-96 px-5 py-2 relative w-full mx-auto text-[hsl(var(--black-alpha-72))] text-body-large text-center mb-8 lg:!mx-0 lg:!text-start lg:!max-w-none">
              Everything you need to know about Firecrawl.
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="relative -mt-px">
          <div className="lg:flex relative -mt-px">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.title} className="text-xl flex-1 relative">
                <div className="px-5 lg:px-16 py-6 lg:py-10 relative border-t border-[hsl(var(--border-faint))]">
                  {category.title}
                </div>
                
                <div className="lg:flex-1 lg:pt-28 lg:-ml-px relative lg-max:-mt-px">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItem === globalIndex;
                    
                    return (
                      <div key={itemIndex} className="border-b border-[hsl(var(--border-faint))] relative">
                        <button 
                          onClick={() => setOpenItem(isOpen ? null : globalIndex)}
                          className="text-lg w-full p-5 lg:px-16 py-5 flex relative gap-4 items-center cursor-pointer text-left"
                        >
                          <div className="flex-1 min-w-0">{item.q}</div>
                          <div className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                            <ChevronDown className="size-4.5 text-[hsl(var(--black-alpha-56))]" />
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-5 lg:px-16 pb-5 text-base text-[hsl(var(--black-alpha-72))]">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;