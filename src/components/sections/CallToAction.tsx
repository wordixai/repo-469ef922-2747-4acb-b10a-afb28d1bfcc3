import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <div className="container h-104 flex relative -mt-px border-t border-[hsl(var(--border-faint))]">
      <div className="flex-1 px-6 py-23 text-center relative -ml-px">
        <div className="h-full top-0 absolute w-full pointer-events-none left-0 border-x border-[hsl(var(--border-faint))]"></div>
        
        <div className="mb-5 mx-auto flex gap-2.5 bg-[hsl(var(--background-base))] relative w-max pb-4 items-center text-xs">
          <div className="h-px bottom-0 absolute w-full left-0 bg-[hsl(var(--border-faint))]"></div>
          <div className="text-[hsl(var(--black-alpha-16))] pointer-events-none select-none">//</div>
          <div className="relative flex gap-2.5 items-center">
            <div className="size-5 bg-[hsl(var(--heat-100))] rounded-full flex items-center justify-center">
              <div className="size-2 bg-white rounded-full"></div>
            </div>
            Get started
          </div>
          <div className="text-[hsl(var(--black-alpha-16))] pointer-events-none select-none scale-x-[-1]">//</div>
        </div>
        
        <div className="text-title-h3 mb-4">Ready to build?</div>
        <div className="text-body-large mb-8">
          Kick off your journey for free and scale seamlessly as your project expands.{' '}
          <span className="text-label-large">No credit card needed.</span>
        </div>
        
        <div className="flex gap-3 justify-center">
          <Button className="button-primary" asChild>
            <a href="/signin">Start for free</a>
          </Button>
          <Button className="button-secondary" asChild>
            <a href="/pricing">See our plans</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;