import Link from 'next/link';

interface CTABlockProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  background?: 'primary' | 'accent' | 'dark';
}

export default function CTABlock({
  title,
  description,
  ctaText,
  ctaHref,
  background = 'primary',
}: CTABlockProps) {
  const bgClasses = {
    primary: 'bg-primary',
    accent: 'bg-accent',
    dark: 'bg-gray-900',
  };

  const buttonClasses = {
    primary: 'bg-accent hover:bg-accent-dark',
    accent: 'bg-primary hover:bg-primary-dark',
    dark: 'bg-accent hover:bg-accent-dark',
  };

  return (
    <div className={`${bgClasses[background]} text-white py-16 md:py-20`}>
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
          {description}
        </p>
        <Link
          href={ctaHref}
          className={`inline-block ${buttonClasses[background]} text-white px-10 py-4 rounded-md text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg`}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
