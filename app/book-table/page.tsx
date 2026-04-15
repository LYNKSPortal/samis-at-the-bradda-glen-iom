'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/ui/Map'), {
  ssr: false,
  loading: () => (
    <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

export default function BookTablePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/book-table', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Redirect to thank you page
        router.push('/thank-you');
      } else {
        setSubmitMessage('Sorry, there was an error sending your request. Please call us at 01624 837713.');
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your request. Please call us at 01624 837713.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Hero
        title="Book a Table"
        subtitle="Reserve Your Dining Experience"
        description="Join us for an unforgettable Mediterranean dining experience at Sami's"
        height="medium"
        imagePath="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
      />

      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Reserve Your Table
            </h2>
            <p className="text-gray-700">
              Please fill out the form below to book your table. We'll confirm your reservation as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="07624 123456"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">
                  Preferred Time *
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a time</option>
                  <option value="10:00">10:00</option>
                  <option value="10:30">10:30</option>
                  <option value="11:00">11:00</option>
                  <option value="11:30">11:30</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="14:00">14:00</option>
                  <option value="14:30">14:30</option>
                  <option value="15:00">15:00</option>
                  <option value="15:30">15:30</option>
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                  <option value="21:30">21:30</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="guests" className="block text-gray-700 font-semibold mb-2">
                Number of Guests *
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select number of guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7">7 Guests</option>
                <option value="8">8 Guests</option>
                <option value="9+">9+ Guests</option>
              </select>
            </div>

            <div>
              <label htmlFor="specialRequests" className="block text-gray-700 font-semibold mb-2">
                Special Requests or Dietary Requirements
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Please let us know of any allergies, dietary requirements, or special occasions..."
              />
            </div>

            {submitMessage && (
              <div className={`p-4 rounded-md ${submitMessage.includes('Thank you') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {submitMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Request Booking'}
            </button>

            <p className="text-sm text-gray-600 text-center">
              We'll confirm your booking within 24 hours. For same-day reservations, please call us at 01624 837713.
            </p>
          </form>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-primary mb-4">
            Important Information
          </h3>
          <div className="space-y-4 text-gray-700 text-left">
            <p>
              <strong>Opening Hours:</strong> Tuesday - Saturday: 10:00 - 22:00 | Sunday: 10:00 - 17:00 | Monday: Closed
            </p>
            <p>
              <strong>Large Groups:</strong> For parties of 9 or more, please call us directly to discuss your requirements.
            </p>
            <p>
              <strong>Cancellations:</strong> Please give us at least 24 hours notice if you need to cancel or modify your booking.
            </p>
            <p>
              <strong>Dietary Requirements:</strong> We cater to various dietary needs. Please inform us of any allergies or requirements when booking.
            </p>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
            Find Us
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Located in the stunning Bradda Glen overlooking Port Erin Bay
          </p>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-video">
              <Map />
            </div>
          </div>
          <p className="text-gray-600 mt-4 mb-2">
            If you would like to view this on your mobile properly, please click on the button here:
          </p>
          <a
            href="https://www.google.com/maps?q=54.091629,-4.764755"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors duration-200 font-semibold mb-8"
          >
            Open in Maps
          </a>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-primary mb-2">By Car</h4>
              <p className="text-gray-600 text-sm">
                Free parking available on site. Follow signs to Bradda Glen from Port Erin.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-primary mb-2">By Bus</h4>
              <p className="text-gray-600 text-sm">
                Regular bus services to Port Erin. Short walk to Bradda Glen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-primary mb-2">Accessibility</h4>
              <p className="text-gray-600 text-sm">
                Wheelchair accessible entrance and facilities available.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
