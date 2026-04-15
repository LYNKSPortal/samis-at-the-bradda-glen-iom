import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import CTABlock from '@/components/ui/CTABlock';

export const metadata = {
  title: "Private Functions | Sami's at the Bradda Glen",
  description: "Celebrate birthdays, anniversaries, and special occasions at Sami's. Flexible layouts and exceptional catering for your private function.",
};

export default function FunctionsPage() {
  return (
    <>
      <Hero
        title="Private Functions"
        subtitle="Celebrate in Style"
        description="From birthdays to anniversaries, make your special occasion unforgettable at Sami's"
        primaryCTA={{ text: 'Book a Function', href: '/contact' }}
        height="large"
        imagePath="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070"
      />

      <Section background="white">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Every Celebration Deserves Something Special
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you&apos;re marking a milestone birthday, celebrating an anniversary, hosting 
              a family reunion, or throwing a festive party, Sami&apos;s provides the perfect setting 
              for your private function. Our flexible spaces and exceptional service ensure your 
              celebration is exactly as you envision it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🎂</div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Birthdays</h3>
              <p className="text-gray-600">
                Milestone celebrations from 18th to 80th and everything in between
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🎄</div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Christmas Parties</h3>
              <p className="text-gray-600">
                Festive celebrations for families, friends, and groups
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">💝</div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Anniversaries</h3>
              <p className="text-gray-600">
                Romantic celebrations for couples and family gatherings
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Family Reunions</h3>
              <p className="text-gray-600">
                Bring the family together in our welcoming venue
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Graduations</h3>
              <p className="text-gray-600">
                Celebrate academic achievements with style
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Special Occasions</h3>
              <p className="text-gray-600">
                Retirements, engagements, and any reason to celebrate
              </p>
            </div>
          </div>

          <div className="bg-primary text-white p-8 md:p-12 rounded-lg mb-16">
            <h3 className="font-serif text-3xl font-bold mb-6 text-center">
              Flexible Capacity Options
            </h3>
            <p className="text-center mb-8 opacity-90">
              We can accommodate groups of all sizes with various layout options
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">20-40</div>
                <div className="text-lg">Intimate Gatherings</div>
                <p className="text-sm mt-2 opacity-90">Perfect for small family celebrations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">40-80</div>
                <div className="text-lg">Medium Functions</div>
                <p className="text-sm mt-2 opacity-90">Ideal for most private parties</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">80-120</div>
                <div className="text-lg">Large Celebrations</div>
                <p className="text-sm mt-2 opacity-90">Grand events with exclusive hire</p>
              </div>
            </div>
          </div>

          <h3 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
            What We Provide
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h4 className="font-semibold text-xl text-primary mb-4">Venue & Setup</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Private or semi-private dining areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Flexible seating arrangements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Decorative table settings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Sound system for music/speeches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Stunning bay views</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xl text-primary mb-4">Food & Drink</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Customisable menu options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Buffet or seated dining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Canapés and appetizers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Full bar service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Dietary requirements catered for</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              Planning Your Function
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Step 1: Get in Touch</strong><br />
                Contact us to discuss your requirements, preferred date, and guest numbers. 
                We&apos;ll check availability and provide initial information.
              </p>
              <p>
                <strong>Step 2: Visit & Plan</strong><br />
                Arrange a visit to see the venue and meet our team. We&apos;ll discuss menu 
                options, layout preferences, and any special requirements.
              </p>
              <p>
                <strong>Step 3: Confirm Details</strong><br />
                Once you&apos;re happy with the plan, we&apos;ll confirm your booking with a 
                deposit. We&apos;ll stay in touch as your event approaches to finalise details.
              </p>
              <p>
                <strong>Step 4: Enjoy Your Day</strong><br />
                On the day, our team handles everything. You and your guests simply relax and 
                enjoy the celebration.
              </p>
            </div>
          </div>
      </Section>

      <Section background="gray">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Function Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="font-serif text-2xl font-bold text-primary mb-6">Bronze</h4>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>✓ Buffet menu selection</li>
                <li>✓ 3-hour venue hire</li>
                <li>✓ Basic table setup</li>
                <li>✓ Soft drinks included</li>
              </ul>
              <p className="text-xs text-gray-500">Minimum 20 guests</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-accent">
              <div className="text-accent text-sm font-bold mb-2">MOST POPULAR</div>
              <h4 className="font-serif text-2xl font-bold text-primary mb-6">Silver</h4>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>✓ Two-course seated meal</li>
                <li>✓ 4-hour venue hire</li>
                <li>✓ Premium table setup</li>
                <li>✓ Welcome drink</li>
                <li>✓ Bar tab option</li>
              </ul>
              <p className="text-xs text-gray-500">Minimum 30 guests</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="font-serif text-2xl font-bold text-primary mb-6">Gold</h4>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>✓ Three-course meal</li>
                <li>✓ 5-hour venue hire</li>
                <li>✓ Exclusive area/venue</li>
                <li>✓ Welcome drinks & canapés</li>
                <li>✓ Dedicated coordinator</li>
              </ul>
              <p className="text-xs text-gray-500">Minimum 40 guests</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8">
            All packages can be customised to suit your needs. Contact us for a bespoke quote.
          </p>
      </Section>

      <CTABlock
        title="Ready to Celebrate?"
        description="Get in touch to discuss your function and receive a personalised quote. Our team is here to help make your celebration perfect."
        ctaText="Enquire Now"
        ctaHref="/contact"
        background="primary"
      />
    </>
  );
}
