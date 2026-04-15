import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'accent';
  padding?: 'normal' | 'large';
}

export default function Section({
  children,
  className = '',
  background = 'white',
  padding = 'large',
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary',
    accent: 'bg-accent',
  };

  const paddingClasses = {
    normal: 'py-12 md:py-16',
    large: 'py-16 md:py-24',
  };

  return (
    <section className={`${bgClasses[background]} ${paddingClasses[padding]} ${className}`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}
