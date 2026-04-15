import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  imagePath?: string;
  height?: 'full' | 'large' | 'medium';
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  imagePath = '/hero-bg.jpg',
  height = 'full',
}: HeroProps) {
  const heightClasses = {
    full: 'h-screen',
    large: 'h-[600px]',
    medium: 'h-[400px]',
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imagePath})`,
        }}
      />
      
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto animate-fade-in">
        {subtitle && (
          <p className="text-accent text-lg md:text-xl mb-4 font-medium tracking-wide">
            {subtitle}
          </p>
        )}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {primaryCTA.text}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
