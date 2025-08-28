const TrustedBy = () => {
  const logos = Array.from({ length: 21 }, (_, i) => ({
    id: i + 1,
    name: `Logo ${i + 1}`,
    src: `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=96&fit=crop&crop=center`,
  }));

  return (
    <div className="relative container">
      <div className="lg:flex relative">
        <div className="p-4 lg-max:text-center lg:p-10 relative">
          <div className="text-body-large text-[hsl(var(--accent-black))]">
            Trusted by{' '}
            <span className="text-label-large text-heat">5000+ <br className="lg:hidden" /> companies</span>{' '}
            of all sizes
          </div>
        </div>
        
        {/* Logo cloud */}
        <div className="flex-1 lg-max:h-24 min-w-0 relative lg:-ml-px lg-max:-mt-px">
          <div className="h-full left-0 top-0 w-px bg-[hsl(var(--border-faint))] absolute lg-max:w-full lg-max:h-px"></div>
          
          <div className="w-full h-full overflow-x-clip">
            <div className="flex h-full logo-cloud">
              {/* First set */}
              <div className="flex h-full">
                {logos.map((logo) => (
                  <div key={`first-${logo.id}`} className="h-full aspect-[204/96] lg:aspect-[204/128] -ml-px relative w-max">
                    <img 
                      alt={logo.name}
                      className="absolute object-cover w-full h-full opacity-60"
                      src={logo.src}
                    />
                    <div className="absolute inset-0 border-x border-[hsl(var(--border-faint))]"></div>
                  </div>
                ))}
              </div>
              
              {/* Second set for seamless loop */}
              <div className="flex h-full">
                {logos.map((logo) => (
                  <div key={`second-${logo.id}`} className="h-full aspect-[204/96] lg:aspect-[204/128] -ml-px relative w-max">
                    <img 
                      alt={logo.name}
                      className="absolute object-cover w-full h-full opacity-60"
                      src={logo.src}
                    />
                    <div className="absolute inset-0 border-x border-[hsl(var(--border-faint))]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;