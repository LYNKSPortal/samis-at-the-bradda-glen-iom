import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import CTABlock from '@/components/ui/CTABlock';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero
        title="Mediterranean flavours. Island views. Unforgettable moments."
        subtitle="Welcome to Sami's at the Bradda Glen"
        description="Experience the warmth of Mediterranean and Middle Eastern cuisine in the heart of Port Erin Bay, Isle of Man."
        primaryCTA={{ text: 'Make a Booking', href: '/book-table' }}
        secondaryCTA={{ text: 'View Menus', href: '/menus' }}
        imagePath="/tables-setup-at-samis.jpg"
      />

      <Section background="white">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            About Sami&apos;s
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Named in loving memory of Sami Benbatoul, our restaurant celebrates warmth, generosity, 
            and the joy of bringing people together. Nestled in the stunning Bradda Glen overlooking 
            Port Erin Bay, we offer a unique dining experience that blends Mediterranean and Middle 
            Eastern flavours with breathtaking Isle of Man coastal views.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you&apos;re joining us for a relaxed daytime meal, an elegant evening dinner, or 
            celebrating life&apos;s special moments, Sami&apos;s provides the perfect setting for 
            unforgettable experiences.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            The Sami&apos;s Experience
          </h2>
          <p className="text-lg text-gray-600">
            From intimate dinners to grand celebrations, discover what makes Sami&apos;s special
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Exceptional Dining"
            description="Savour authentic Mediterranean and Middle Eastern dishes crafted with fresh, locally-sourced ingredients and traditional recipes passed down through generations."
            imagePath="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069"
          />
          <Card
            title="Stunning Location"
            description="Dine with panoramic views of Port Erin Bay and the dramatic Bradda Glen coastline. Our scenic setting creates the perfect backdrop for any occasion."
            imagePath="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070"
          />
          <Card
            title="Warm Hospitality"
            description="Experience the genuine warmth and attentive service that defines Sami's. We treat every guest like family, ensuring memorable moments from arrival to departure."
            imagePath="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
          />
        </div>
      </Section>

      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Events & Celebrations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Make your special occasions truly extraordinary
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Weddings"
            description="Create your dream wedding in our exclusive venue. Fully customisable space with breathtaking views for your perfect day."
            imagePath="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070"
            href="/weddings"
            ctaText="Plan Your Wedding"
          />
          <Card
            title="Corporate Events"
            description="Host impressive corporate gatherings, team celebrations, or business dinners in our flexible event spaces."
            imagePath="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
            href="/events"
            ctaText="Book an Event"
          />
          <Card
            title="Private Functions"
            description="Celebrate birthdays, anniversaries, and special occasions in style. Our team will help create unforgettable memories."
            imagePath="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070"
            href="/functions"
            ctaText="Book a Function"
          />
        </div>
      </Section>

      <CTABlock
        title="Ready to Experience Sami's?"
        description="Book your table today and enjoy great food with stunning views. We recommend booking ahead, especially for weekends and special occasions."
        ctaText="Make a Reservation"
        ctaHref="/book-table"
        background="accent"
      />
    </>
  );
}
