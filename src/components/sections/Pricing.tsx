import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free Plan',
      description: 'A lightweight way to try scraping.',
      subdescription: 'No cost, no card, no hassle.',
      credits: '500 credits',
      price: 0,
      period: 'one-time',
      features: [
        'Scrape 500 pages',
        '2 concurrent requests',
        'Low rate limits',
      ],
      buttonText: 'Get started',
      buttonVariant: 'secondary' as const,
    },
    {
      name: 'Hobby',
      description: 'Great for side projects and small tools.',
      subdescription: 'Fast, simple, no overkill.',
      credits: '3,000 credits',
      price: 16,
      period: '/monthly',
      features: [
        'Scrape 3,000 pages',
        '5 concurrent requests',
        'Standard support',
      ],
      buttonText: 'Subscribe',
      buttonVariant: 'secondary' as const,
      isPopular: true,
    },
    {
      name: 'Standard',
      description: 'Perfect for scaling with less effort.',
      subdescription: 'Simple, solid, dependable.',
      credits: '100,000 credits',
      price: 83,
      period: '/monthly',
      features: [
        'Scrape 100,000 pages',
        '50 concurrent requests',
        'Standard support',
      ],
      buttonText: 'Subscribe',
      buttonVariant: 'primary' as const,
      isPopular: true,
    },
    {
      name: 'Growth',
      description: 'Built for high volume and speed.',
      subdescription: 'Firecrawl at full force.',
      credits: '500,000 credits',
      price: 333,
      period: '/monthly',
      features: [
        'Scrape 500,000 pages',
        '100 concurrent requests',
        'Priority support',
      ],
      buttonText: 'Subscribe',
      buttonVariant: 'secondary' as const,
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
              <span>Transparent</span>
            </div>
            <div className="text-[hsl(var(--black-alpha-16))] pointer-events-none select-none scale-x-[-1]">//</div>
          </div>
          
          <div>
            <h2 className="lg:w-max relative mx-auto text-[hsl(var(--accent-black))] text-title-h2 pb-2 pt-3 px-5 text-center">
              Flexible <span className="text-heat">pricing</span>
            </h2>
            <div className="max-w-[450px] px-5 py-2 relative w-full mx-auto text-[hsl(var(--black-alpha-72))] text-body-large text-center mb-8">
              Explore transparent pricing built for real-world scraping.{' '}
              <span className="text-label-large">Start for free, then scale as you grow.</span>
            </div>
          </div>
        </div>

        {/* Pricing Toggle */}
        <div className="lg:w-max lg:mx-auto flex justify-center relative mb-8">
          <div className="absolute top-3 left-0 z-20 inset-y-3 bg-[hsl(var(--white-alpha-72))] rounded-full w-[calc(50%-24px)] lg:w-39 backdrop-blur-sm transition-transform duration-300" 
               style={{ transform: 'translateX(calc(100% + 36px))' }} />
          
          <div className="p-3 border-x lg-max:flex-1 border-[hsl(var(--border-faint))]">
            <button className="w-full lg:w-39 py-3 flex items-center justify-center relative z-20 gap-1">
              <span className="px-1 text-sm font-medium text-[hsl(var(--black-alpha-64))]">Monthly</span>
            </button>
          </div>
          <div className="p-3 border-x lg-max:flex-1 border-[hsl(var(--border-faint))] -ml-px">
            <button className="w-full lg:w-39 py-3 flex items-center justify-center relative z-20 gap-1">
              <span className="px-1 text-sm font-medium text-[hsl(var(--accent-black))]">Annual</span>
              <span className="py-0.5 px-1.5 text-heat bg-[hsl(var(--heat-12))] rounded text-xs font-medium">20% off</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="lg:flex relative -mt-px">
          {plans.slice(0, 3).map((plan, index) => (
            <div key={plan.name} className={`flex-1 lg:border-x border-[hsl(var(--border-faint))] lg-max:-mt-px lg:-ml-px ${index === 0 ? 'first:ml-0' : ''} relative`}>
              <div className="px-6 xl:px-7 pt-6 xl:pt-7 text-lg mb-2 flex gap-2 items-center">
                {plan.name}
                {plan.isPopular && (
                  <div className="px-1.5 py-0.5 text-heat text-xs font-medium bg-[hsl(var(--heat-12))] rounded">
                    Most popular
                  </div>
                )}
              </div>
              
              <div className="pl-6 xl:min-h-10 lg:min-h-15 xl:pl-7 pr-6 text-[hsl(var(--black-alpha-72))] text-base mb-5 xl:mb-8">
                {plan.description}{' '}
                <div className="text-sm font-medium">{plan.subdescription}</div>
              </div>
              
              <div className="px-7 pb-8 items-center border-b border-[hsl(var(--border-faint))] flex gap-2 xl:gap-3">
                <div className="size-5 bg-[hsl(var(--heat-100))] rounded-full flex items-center justify-center">
                  <div className="size-2 bg-white rounded-full"></div>
                </div>
                <div className="text-base">{plan.credits}</div>
              </div>
              
              <div className="p-6 xl:p-7 border-b border-[hsl(var(--border-faint))] relative">
                <div className="mb-6">
                  <div className="flex gap-2">
                    <div className="text-3xl h-11">
                      <div className="-mt-1.5">${plan.price}</div>
                    </div>
                  </div>
                  <div className="text-[hsl(var(--black-alpha-40))] pt-5.5 text-base">{plan.period}</div>
                </div>
              </div>
              
              <div className="p-6 xl:p-7">
                <Button 
                  className={`w-full z-10 ${plan.buttonVariant === 'primary' ? 'button-primary' : 'button-secondary'}`}
                >
                  {plan.buttonText}
                </Button>
              </div>
              
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex gap-3 items-center px-6 xl:px-7 py-4 border-b border-[hsl(var(--border-faint))] text-base text-[hsl(var(--black-alpha-72))]">
                  <Check className="size-5 text-[hsl(var(--black-alpha-64))]" />
                  <div className="relative">{feature}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="p-6 lg:p-8 relative -mt-px flex lg-max:flex-col lg-max:text-center gap-2 items-center justify-center border-t border-[hsl(var(--border-faint))]">
          <div className="size-5 bg-[hsl(var(--heat-100))] rounded-full flex items-center justify-center">
            <div className="size-2 bg-white rounded-full"></div>
          </div>
          <div className="text-base text-[hsl(var(--black-alpha-64))]">
            Additional <span className="text-[hsl(var(--accent-black))]">1000</span> credits available{' '}
            <br className="lg:hidden" /> for <span>$9/month.</span>{' '}
            <a className="text-heat inline-flex items-center gap-1 hover:cursor-pointer hover:underline">
              Purchase <span>↗</span>
            </a>
          </div>
        </div>

        {/* Enterprise Card */}
        <div className="grid lg:grid-cols-2 relative -mt-px border-t border-[hsl(var(--border-faint))]">
          <div className="p-6 lg:px-16 lg:py-14 flex flex-col relative overflow-hidden">
            <div className="text-xl mb-4">Enterprise</div>
            <div className="text-lg">Power at your pace</div>
            <div className="text-base font-medium">Unlimited credits. Custom RPMs.</div>
            <div className="flex-1 min-h-20"></div>
            <Button className="button-primary w-max relative z-20">
              Contact sales
            </Button>
          </div>
          
          <div className="grid grid-cols-2 relative lg-max:border-t border-[hsl(var(--border-faint))]">
            {[
              { icon: '💰', text: 'Bulk discounts' },
              { icon: '🎧', text: 'Top priority support' },
              { icon: '🎯', text: 'Custom concurrency limits' },
              { icon: '🛡️', text: 'Improved stealth proxies' },
              { icon: '📋', text: 'SLAs' },
              { icon: '🔒', text: 'Advanced security & controls' },
            ].map((item, index) => (
              <div key={index} className="p-6 lg:p-7 border-b border-[hsl(var(--border-faint))] border-l">
                <span className="text-xl">{item.icon}</span>
                <div className="text-base mt-5">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;