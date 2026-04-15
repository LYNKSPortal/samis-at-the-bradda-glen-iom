import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import CTABlock from '@/components/ui/CTABlock';

export const metadata = {
  title: "Weddings | Sami's at the Bradda Glen",
  description: "Create your dream wedding at Sami's. Exclusive venue hire with stunning Port Erin Bay views and fully customisable spaces.",
};

export default function WeddingsPage() {
  return (
    <>
      <Hero
        title="Your Dream Wedding"
        subtitle="Exclusive Venue Hire"
        description="Say 'I do' with breathtaking views of Port Erin Bay. Create unforgettable memories in our stunning, fully customisable venue"
        primaryCTA={{ text: 'Book Your Wedding', href: '/contact' }}
        height="large"
        imagePath="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070"
      />

      <Section background="white">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              A Wedding to Remember
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Sami&apos;s, we believe your wedding day should be as unique as your love story. 
              Our exclusive venue hire ensures complete privacy and personalisation, allowing you 
              to create the wedding of your dreams against the stunning backdrop of the Isle of Man&apos;s 
              most beautiful coastline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div
              className="h-96 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070)',
              }}
            />
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-3xl font-bold text-primary mb-4">
                Exclusive Venue Hire
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you choose Sami&apos;s for your wedding, the entire venue becomes yours for 
                the day. No other events, no distractions - just you, your loved ones, and the 
                celebration of your lifetime.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">♥</span>
                  <span>Complete venue exclusivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">♥</span>
                  <span>Ceremony & reception in one location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">♥</span>
                  <span>Flexible timing and layout</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">♥</span>
                  <span>Stunning photo opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary text-white p-8 md:p-12 rounded-lg mb-16">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center">
              Wedding Capacity
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-3">80</div>
                <div className="text-xl mb-2">Seated Wedding Breakfast</div>
                <p className="text-sm opacity-90">
                  Intimate dining with all your closest family and friends
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-3">120</div>
                <div className="text-xl mb-2">Evening Reception</div>
                <p className="text-sm opacity-90">
                  Celebrate into the night with extended guest list
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
            What&apos;s Included
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-xl text-primary mb-4">Venue & Setup</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Exclusive venue hire for the day</li>
                <li>✓ Ceremony space setup</li>
                <li>✓ Reception area configuration</li>
                <li>✓ Tables, chairs & linens</li>
                <li>✓ Decorative lighting</li>
                <li>✓ Dance floor</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-xl text-primary mb-4">Catering & Service</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Bespoke menu design</li>
                <li>✓ Canapés & welcome drinks</li>
                <li>✓ Three-course wedding breakfast</li>
                <li>✓ Evening buffet option</li>
                <li>✓ Professional waiting staff</li>
                <li>✓ Bar service</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-xl text-primary mb-4">Planning & Coordination</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Dedicated wedding coordinator</li>
                <li>✓ Pre-wedding venue visits</li>
                <li>✓ Menu tasting session</li>
                <li>✓ Timeline planning</li>
                <li>✓ Supplier coordination</li>
                <li>✓ Day-of management</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-xl text-primary mb-4">Special Touches</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Cake table & knife</li>
                <li>✓ Gift table setup</li>
                <li>✓ Place cards & menus</li>
                <li>✓ Complimentary bridal suite</li>
                <li>✓ Accommodation assistance</li>
                <li>✓ Stunning bay views</li>
              </ul>
            </div>
          </div>

          <div className="prose max-w-none">
            <h3 className="font-serif text-3xl font-bold text-primary mb-6">
              Your Perfect Day, Your Way
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Every couple is unique, and so is every wedding at Sami&apos;s. We work closely 
                with you to understand your vision and bring it to life. From intimate ceremonies 
                to grand celebrations, traditional elegance to modern style, we adapt to your 
                preferences.
              </p>
              <p>
                Our experienced wedding coordinator will guide you through every step of the 
                planning process, from your first visit to the final dance. We&apos;ll help you 
                choose the perfect menu, coordinate with your suppliers, and ensure every detail 
                is exactly as you imagined.
              </p>
              <p>
                The stunning natural beauty of Port Erin Bay provides a breathtaking backdrop 
                for your ceremony and photos. Whether you choose to marry indoors with views of 
                the bay or outdoors in our scenic grounds (weather permitting), your wedding 
                photos will be truly spectacular.
              </p>
            </div>
          </div>
      </Section>

      <Section background="gray">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Testimonials
          </h2>
          <div className="space-y-8">
            <blockquote className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                &quot;Sami&apos;s gave us the wedding of our dreams. The views were stunning, the 
                food was incredible, and the team made everything so easy. Our guests are still 
                talking about it!&quot;
              </p>
              <footer className="text-primary font-semibold">
                - Sarah & James, August 2024
              </footer>
            </blockquote>
            <blockquote className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                &quot;From our first visit to the big day, the team at Sami&apos;s were amazing. 
                They helped us create a truly personal celebration that reflected who we are as 
                a couple.&quot;
              </p>
              <footer className="text-primary font-semibold">
                - Emma & Tom, June 2024
              </footer>
            </blockquote>
          </div>
        </div>
      </Section>

      <CTABlock
        title="Start Planning Your Perfect Day"
        description="Book a viewing and menu tasting to experience Sami's for yourself. Our wedding coordinator is ready to help you create the celebration of your dreams. Peak season dates fill quickly - enquire today."
        ctaText="Arrange a Viewing"
        ctaHref="/contact"
        background="accent"
      />
    </>
  );
}
