import { ArrowRight } from 'lucide-react';

const AnnouncementBanner = () => {
  return (
    <div className="container p-12 relative z-50">
      <div className="p-10 rounded-xl overflow-hidden relative text-center bg-[hsl(var(--black-alpha-4))] text-[hsl(var(--accent-black))]">
        {/* ASCII Art Decorations */}
        <div className="absolute -top-24 -left-52 w-[577px] h-[190px] overflow-hidden pointer-events-none select-none hidden lg:block text-[hsl(var(--heat-100))]">
          <div className="font-mono text-xs leading-tight opacity-20">
            {Array.from({ length: 15 }, (_, i) => (
              <div key={i} className="whitespace-pre">
                {i === 7 ? "                    .-'^^^'-." : ""}
                {i === 8 ? "                  .'         '." : ""}
                {i === 9 ? "                 /             \\" : ""}
                {i === 10 ? "                |  FIRECRAWL   |" : ""}
                {i === 11 ? "                 \\             /" : ""}
                {i === 12 ? "                  '.         .'" : ""}
                {i === 13 ? "                    '-...-'" : ""}
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute -top-24 -right-52 w-[577px] h-[190px] overflow-hidden pointer-events-none select-none hidden lg:block text-[hsl(var(--heat-100))] scale-x-[-1]">
          <div className="font-mono text-xs leading-tight opacity-20">
            {Array.from({ length: 15 }, (_, i) => (
              <div key={i} className="whitespace-pre">
                {i === 7 ? "                    .-'^^^'-." : ""}
                {i === 8 ? "                  .'         '." : ""}
                {i === 9 ? "                 /             \\" : ""}
                {i === 10 ? "                |  FIRECRAWL   |" : ""}
                {i === 11 ? "                 \\             /" : ""}
                {i === 12 ? "                  '.         .'" : ""}
                {i === 13 ? "                    '-...-'" : ""}
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10">
          We just raised our Series A and shipped Firecrawl v2 🎉.{' '}
          <a 
            className="text-sm font-medium text-[hsl(var(--heat-100))] hover:underline" 
            href="/blog/firecrawl-v2-series-a-announcement"
          >
            Read the blog.
          </a>
        </div>
      </div>
      
      {/* Corner decorations */}
      <svg className="absolute -bottom-2.5 -left-2.5 pointer-events-none" width="22" height="21" viewBox="0 0 22 21" fill="none">
        <path d="M10.5 4C10.5 7.31371 7.81371 10 4.5 10H0.5V11H4.5C7.81371 11 10.5 13.6863 10.5 17V21H11.5V17C11.5 13.6863 14.1863 11 17.5 11H21.5V10H17.5C14.1863 10 11.5 7.31371 11.5 4V0H10.5V4Z" fill="#EDEDED"/>
      </svg>
      <svg className="absolute -bottom-2.5 -right-2.5 pointer-events-none" width="22" height="21" viewBox="0 0 22 21" fill="none">
        <path d="M10.5 4C10.5 7.31371 7.81371 10 4.5 10H0.5V11H4.5C7.81371 11 10.5 13.6863 10.5 17V21H11.5V17C11.5 13.6863 14.1863 11 17.5 11H21.5V10H17.5C14.1863 10 11.5 7.31371 11.5 4V0H10.5V4Z" fill="#EDEDED"/>
      </svg>
    </div>
  );
};

export default AnnouncementBanner;