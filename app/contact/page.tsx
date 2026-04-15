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

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
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
        setSubmitMessage('Sorry, there was an error sending your enquiry. Please call us at 01624 837713.');
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your enquiry. Please call us at 01624 837713.');
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
        title="Event Enquiries"
        subtitle="Contact Sami's"
        description="Planning a wedding, function, or special event? Get in touch with our team"
        height="medium"
        imagePath="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074"
      />

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-semibold text-xl text-primary mb-2">Phone</h3>
                  <a
                    href="tel:01624837713"
                    className="text-lg text-gray-700 hover:text-accent transition-colors duration-200 block"
                  >
                    📞 01624 837713 (Restaurant)
                  </a>
                  <a
                    href="tel:07624259500"
                    className="text-lg text-gray-700 hover:text-accent transition-colors duration-200 block mt-2"
                  >
                    📱 07624 259500 (WhatsApp or Call)
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-xl text-primary mb-2">Email</h3>
                  <a
                    href="mailto:bookings@samis.im"
                    className="text-lg text-gray-700 hover:text-accent transition-colors duration-200"
                  >
                    bookings@samis.im
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-xl text-primary mb-2">Address</h3>
                  <p className="text-lg text-gray-700">
                    Samis at the Bradda Glen<br />
                    Bradda Glen, Port Erin<br />
                    IM9 6PJ<br />
                    Isle of Man
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl text-primary mb-2">Opening Hours</h3>
                  <div className="text-gray-700 space-y-1">
                    <p><strong>Monday:</strong> Closed</p>
                    <p><strong>Tuesday - Saturday:</strong> 10:00 - 22:00</p>
                    <p><strong>Sunday:</strong> 10:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                Event Enquiry Form
              </h2>
              <p className="text-gray-700 mb-6">
                Fill out the form below for weddings, corporate events, private functions, or any special occasion enquiries.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div>
                  <label htmlFor="eventType" className="block text-gray-700 font-semibold mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="private">Private Function</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                    Preferred Event Date *
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
                  <label htmlFor="guests" className="block text-gray-700 font-semibold mb-2">
                    Expected Number of Guests *
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g. 50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Tell Us About Your Event *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Please provide details about your event, any special requirements, catering preferences, etc."
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
                  {isSubmitting ? 'Sending...' : 'Send Event Enquiry'}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  For table bookings, please visit our <a href="/book-table" className="text-primary hover:text-accent underline">Book a Table</a> page.
                </p>
              </form>
            </div>
        </div>
      </Section>

      <Section background="gray">
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
