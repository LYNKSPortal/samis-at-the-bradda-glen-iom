import { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  imagePath: string;
  href: string;
  ctaText?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  imagePath,
  href,
  ctaText = 'Learn More',
  className = '',
}: CardProps) {
  const content = (
    <>
      <div
        className="h-64 bg-cover bg-center rounded-t-lg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imagePath})`,
        }}
      />
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        {href && (
          <span className="inline-flex items-center text-accent hover:text-accent-dark font-semibold transition-colors duration-200">
            {ctaText}
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      {content}
    </div>
  );
}
