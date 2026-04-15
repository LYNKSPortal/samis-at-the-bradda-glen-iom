import Link from 'next/link';

export const metadata = {
  title: "Thank You | Sami's at the Bradda Glen",
  description: "Thank you for contacting Sami's at the Bradda Glen",
};

export default function ThankYouPage() {
  return (
    <div className="py-20 md:py-32 flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <svg
            className="mx-auto h-16 w-16 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
          Thank You!
        </h1>

        <p className="text-xl text-gray-700 mb-4">
          We've received your submission and will be in touch shortly.
        </p>

        <p className="text-gray-600 mb-8">
          A confirmation email has been sent to your email address. Our team will review your request and respond within 24 hours.
        </p>

        <p className="text-gray-600 mb-8">
          If you have any urgent questions, please call us at{' '}
          <a href="tel:01624837713" className="text-accent hover:text-accent-dark font-semibold">
            01624 837713
          </a>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors duration-200 font-semibold"
          >
            Return Home
          </Link>
          <Link
            href="/menus"
            className="inline-block bg-accent text-white px-8 py-3 rounded-md hover:bg-accent-dark transition-colors duration-200 font-semibold"
          >
            View Our Menus
          </Link>
        </div>
      </div>
    </div>
  );
}
