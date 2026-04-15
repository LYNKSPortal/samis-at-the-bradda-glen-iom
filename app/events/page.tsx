import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import CTABlock from '@/components/ui/CTABlock';

export const metadata = {
  title: "Corporate Events | Sami's at the Bradda Glen",
  description: "Host your corporate events, team celebrations, and business dinners at Sami's. Flexible event spaces with stunning views.",
};

export default function EventsPage() {
  return (
    <>
      <Hero
        title="Corporate Events"
        subtitle="Impress Your Guests"
        description="Host memorable corporate gatherings in our stunning venue with flexible layouts and exceptional catering"
        primaryCTA={{ text: 'Book an Event', href: '/contact' }}
        height="large"
        imagePath="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
      />

      <Section background="white">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Perfect for Business
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you&apos;re planning a team celebration, client dinner, product launch, or 
              corporate retreat, Sami&apos;s provides the perfect setting to impress and inspire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                Event Types
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <span>Corporate dinners & lunches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <span>Team building events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <span>Product launches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <span>Business meetings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <span>Networking events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <span>Client entertainment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <span>Award ceremonies</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                What We Offer
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <span>Flexible seating arrangements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <span>AV equipment available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <span>Customisable menus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <span>Private or semi-private spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <span>Dedicated event coordinator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <span>Stunning bay views</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <span>Professional service team</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary text-white p-8 md:p-12 rounded-lg mb-16">
            <h3 className="font-serif text-3xl font-bold mb-6 text-center">
              Capacity & Layout Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">80</div>
                <div className="text-lg">Seated Dining</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">120</div>
                <div className="text-lg">Standing Reception</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">40</div>
                <div className="text-lg">Boardroom Style</div>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <h3 className="font-serif text-3xl font-bold text-primary mb-6">
              Why Choose Sami&apos;s for Your Event?
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Stunning Location:</strong> Impress your guests with panoramic views of 
                Port Erin Bay and the dramatic Bradda Glen coastline. Our unique setting provides 
                a memorable backdrop that sets us apart from typical corporate venues.
              </p>
              <p>
                <strong>Exceptional Catering:</strong> Our Mediterranean and Middle Eastern inspired 
                menu offers something for everyone. We work with you to create a bespoke menu that 
                suits your event, dietary requirements, and budget.
              </p>
              <p>
                <strong>Flexible Spaces:</strong> Whether you need an intimate boardroom setup for 
                12 or a grand reception for 120, our versatile venue can be configured to match 
                your vision perfectly.
              </p>
              <p>
                <strong>Professional Service:</strong> Our experienced events team handles every 
                detail, from initial planning to the final farewell, ensuring your event runs 
                smoothly and exceeds expectations.
              </p>
            </div>
          </div>
      </Section>

      <Section background="gray">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Event Packages
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We offer tailored packages to suit different needs and budgets
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="font-serif text-2xl font-bold text-primary mb-3">Essential</h4>
              <p className="text-gray-600 mb-4">Perfect for smaller gatherings</p>
              <ul className="text-left space-y-2 text-gray-700 text-sm">
                <li>• Venue hire (4 hours)</li>
                <li>• Set menu options</li>
                <li>• Basic AV setup</li>
                <li>• Standard service</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-accent">
              <div className="text-accent text-sm font-bold mb-2">MOST POPULAR</div>
              <h4 className="font-serif text-2xl font-bold text-primary mb-3">Premium</h4>
              <p className="text-gray-600 mb-4">Ideal for most corporate events</p>
              <ul className="text-left space-y-2 text-gray-700 text-sm">
                <li>• Venue hire (6 hours)</li>
                <li>• Custom menu design</li>
                <li>• Full AV package</li>
                <li>• Dedicated coordinator</li>
                <li>• Welcome drinks</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="font-serif text-2xl font-bold text-primary mb-3">Exclusive</h4>
              <p className="text-gray-600 mb-4">Full venue hire experience</p>
              <ul className="text-left space-y-2 text-gray-700 text-sm">
                <li>• Full day venue hire</li>
                <li>• Bespoke menu creation</li>
                <li>• Premium AV & tech</li>
                <li>• Event manager</li>
                <li>• Entertainment options</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <CTABlock
        title="Ready to Plan Your Event?"
        description="Get in touch with our events team to discuss your requirements and receive a tailored proposal. Limited availability - book early to secure your preferred date."
        ctaText="Request Event Quote"
        ctaHref="/contact"
        background="primary"
      />
    </>
  );
}
