import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import CTABlock from '@/components/ui/CTABlock';

export const metadata = {
  title: "Menus | Sami's at the Bradda Glen",
  description: "Explore our Mediterranean and Middle Eastern inspired menus. Daytime dining 10:00-16:00, Evening dining 18:00-22:00.",
};

export default function MenusPage() {
  return (
    <>
      <Hero
        title="Our Menus"
        subtitle="Mediterranean & Middle Eastern Cuisine"
        description="Discover our carefully crafted dishes, inspired by the flavours of the Mediterranean and Middle East"
        height="medium"
        imagePath="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
      />

      <Section background="white">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Dining Times
            </h2>
            <p className="text-lg text-gray-600">
              We offer two distinct dining experiences throughout the day
            </p>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="font-serif text-4xl font-bold text-primary mb-2">
                Daytime Menu
              </h3>
              <p className="text-accent text-xl font-semibold">10:00 - 16:00</p>
            </div>

            {/* Drinks Section */}
            <div className="mb-12">
              <h4 className="font-serif text-3xl font-bold text-primary mb-6 text-center">Drinks</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Hot Drinks */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="font-serif text-2xl font-bold text-primary mb-4">Hot Drinks</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span>Classic Tea</span><span className="font-semibold">£3.50</span></div>
                    <div className="flex justify-between"><span>Herbal Infusion</span><span className="font-semibold">£3.50</span></div>
                    <div className="flex justify-between"><span>Americano</span><span className="font-semibold">£3.50</span></div>
                    <div className="flex justify-between"><span>Café Latte</span><span className="font-semibold">£4.00</span></div>
                    <div className="flex justify-between"><span>Cappuccino</span><span className="font-semibold">£4.00</span></div>
                    <div className="flex justify-between"><span>Cortado</span><span className="font-semibold">£4.00</span></div>
                    <div className="flex justify-between"><span>Flat White</span><span className="font-semibold">£4.00</span></div>
                    <div className="flex justify-between"><span>Mocha</span><span className="font-semibold">£4.00</span></div>
                    <div className="flex justify-between"><span>Single Espresso</span><span className="font-semibold">£2.50</span></div>
                    <div className="flex justify-between"><span>Double Espresso</span><span className="font-semibold">£4.00</span></div>
                    <div className="flex justify-between"><span>Luxury Hot Chocolate</span><span className="font-semibold">£4.00</span></div>
                    <div className="flex justify-between"><span>Spiced Chai Latte</span><span className="font-semibold">£4.00</span></div>
                  </div>
                </div>

                {/* Cold Drinks */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="font-serif text-2xl font-bold text-primary mb-4">Cold Drinks</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span>Chocolate Fudge Frappé</span><span className="font-semibold">£5.50</span></div>
                    <div className="flex justify-between"><span>Iced Café Latte</span><span className="font-semibold">£4.50</span></div>
                    <div className="flex justify-between"><span>Flavoured Iced Latte</span><span className="font-semibold">£5.50</span></div>
                    <div className="flex justify-between"><span>Fresh Iced Tea</span><span className="font-semibold">£4.50</span></div>
                    <div className="flex justify-between"><span>Homemade Peach Iced Tea</span><span className="font-semibold">£5.50</span></div>
                    <div className="flex justify-between"><span>Homemade Lemon Iced Tea</span><span className="font-semibold">£5.50</span></div>
                    <div className="flex justify-between"><span>Homemade Mango Iced Tea</span><span className="font-semibold">£5.50</span></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 italic">Add ons — £0.50</p>
                </div>
              </div>
            </div>

            {/* Breakfast & Brunch */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
              <h5 className="font-serif text-2xl font-bold text-primary mb-4">Breakfast & Brunch</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex justify-between"><span>Buttered Toast</span><span className="font-semibold">£3.00</span></div>
                <div className="flex justify-between"><span>Toasted Teacake</span><span className="font-semibold">£3.50</span></div>
                <div className="flex justify-between"><span>Toasted English Muffin</span><span className="font-semibold">£3.00</span></div>
                <div className="flex justify-between"><span>All-Butter Croissant</span><span className="font-semibold">£3.50</span></div>
                <div className="flex justify-between"><span>Chocolate-Filled Croissant</span><span className="font-semibold">£4.00</span></div>
                <div className="flex justify-between"><span>Ham & Cheese Croissant</span><span className="font-semibold">£9.95</span></div>
                <div className="flex justify-between"><span>Cumberland Sausage Bap</span><span className="font-semibold">£7.50</span></div>
                <div className="flex justify-between"><span>Crispy Bacon Bap</span><span className="font-semibold">£7.50</span></div>
                <div className="flex justify-between"><span>Smoked Salmon & Avocado Croissant</span><span className="font-semibold">£13.50</span></div>
                <div className="flex justify-between"><span>Creamy Scrambled Eggs on Toast</span><span className="font-semibold">£7.50</span></div>
                <div className="flex justify-between"><span>Free-Range Fried Eggs on Toast</span><span className="font-semibold">£7.50</span></div>
                <div className="flex justify-between"><span>Golden French Toast</span><span className="font-semibold">£7.50</span></div>
                <div className="flex justify-between"><span>Classic Omelette</span><span className="font-semibold">£12.00</span></div>
                <div className="flex justify-between"><span>Cheese Omelette</span><span className="font-semibold">£13.00</span></div>
                <div className="flex justify-between"><span>Vegetarian Breakfast Plate</span><span className="font-semibold">£14.75</span></div>
                <div className="flex justify-between"><span>Traditional Full English Breakfast</span><span className="font-semibold">£14.75</span></div>
              </div>
              <p className="text-sm text-gray-600 mt-4 italic">Add ons — £2.50</p>
            </div>

            {/* Cakes & Traybakes */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h5 className="font-serif text-2xl font-bold text-primary mb-4">Cakes & Traybakes</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex justify-between"><span>Classic Banana Cake</span><span className="font-semibold">£5.50</span></div>
                <div className="flex justify-between"><span>Spiced Carrot Cake</span><span className="font-semibold">£5.50</span></div>
                <div className="flex justify-between"><span>Red Velvet Cake</span><span className="font-semibold">£5.50</span></div>
                <div className="flex justify-between"><span>Rich Chocolate Fudge Cake</span><span className="font-semibold">£5.50</span></div>
                <div className="flex justify-between"><span>Lemon Drizzle Loaf</span><span className="font-semibold">£5.50</span></div>
                <div className="flex justify-between"><span>Classic Victoria Sponge</span><span className="font-semibold">£5.50</span></div>
                <div className="flex justify-between"><span>Chocolate Brownie</span><span className="font-semibold">£4.50</span></div>
                <div className="flex justify-between"><span>Millionaire's Shortbread</span><span className="font-semibold">£4.50</span></div>
                <div className="flex justify-between"><span>Salted Caramel Bakewell</span><span className="font-semibold">£4.50</span></div>
                <div className="flex justify-between"><span>Raspberry & Almond Bake</span><span className="font-semibold">£4.50</span></div>
                <div className="flex justify-between"><span>Cherry Bakewell</span><span className="font-semibold">£4.50</span></div>
                <div className="flex justify-between"><span>White Chocolate Chip Cookie</span><span className="font-semibold">£3.50</span></div>
                <div className="flex justify-between"><span>Dark Chocolate Chip Cookie</span><span className="font-semibold">£3.50</span></div>
              </div>
            </div>

            {/* Lunch */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
              <h5 className="font-serif text-2xl font-bold text-primary mb-4">Lunch</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex justify-between"><span>Homemade Soup of the Day</span><span className="font-semibold">£7.50</span></div>
                <div className="flex justify-between"><span>Eggs Benedict with Honey-Cured Ham</span><span className="font-semibold">£11.95</span></div>
                <div className="flex justify-between"><span>Eggs Benedict with Smoked Salmon</span><span className="font-semibold">£12.95</span></div>
                <div className="flex justify-between"><span>Toasted Tuna Melt Panini</span><span className="font-semibold">£10.95</span></div>
                <div className="flex justify-between"><span>Mozzarella, Tomato & Pesto Panini</span><span className="font-semibold">£10.95</span></div>
                <div className="flex justify-between"><span>Ham & Cheese Panini</span><span className="font-semibold">£10.95</span></div>
                <div className="flex justify-between"><span>Chicken & Brie Panini</span><span className="font-semibold">£10.95</span></div>
                <div className="flex justify-between"><span>Classic Chicken Caesar Salad</span><span className="font-semibold">£11.95</span></div>
                <div className="flex justify-between"><span>Traditional Greek Salad</span><span className="font-semibold">£10.95</span></div>
                <div className="flex justify-between"><span>Cheeseburger with Fries & Onion Rings</span><span className="font-semibold">£14.95</span></div>
                <div className="flex justify-between"><span>Homemade Lasagne Al Forno</span><span className="font-semibold">£14.95</span></div>
                <div className="flex justify-between"><span>Homemade Chicken Curry</span><span className="font-semibold">£14.95</span></div>
                <div className="flex justify-between"><span>House Moussaka</span><span className="font-semibold">£14.95</span></div>
              </div>
              <p className="text-sm text-gray-600 mt-4 italic">Add ons — £2.50</p>
            </div>

            {/* Afternoon Tea */}
            <div className="bg-accent/10 p-8 rounded-lg border-2 border-accent">
              <h5 className="font-serif text-2xl font-bold text-primary mb-4 text-center">Afternoon Tea</h5>
              <p className="text-center text-2xl font-bold text-accent mb-6">£25 per person</p>
              <p className="text-center font-semibold text-gray-700 mb-4">Unlimited Tea or Coffee</p>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Sandwiches:</strong> Cucumber & Cream Cheese, Coronation Chicken, Smoked Salmon, Egg & Cress and Ham & Mustard
                </p>
                <p>
                  <strong>Sweet Treats:</strong> Macarons, Victoria Sponge, Chocolate Fudge Cake, Battenberg, Freshly baked scones served with Cornish clotted cream and jam or marmalade
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-accent/30">
                <h6 className="font-semibold text-gray-700 mb-3">Extras</h6>
                <div className="space-y-1 text-gray-700">
                  <div className="flex justify-between"><span>Prosecco</span><span className="font-semibold">£7.50 Per Glass</span></div>
                  <div className="flex justify-between"><span>Champagne</span><span className="font-semibold">£15.00 Per Glass</span></div>
                  <div className="flex justify-between"><span>Homemade Waffles & Crêpes</span><span className="font-semibold">£6.00 Per Person</span></div>
                </div>
              </div>
            </div>
          </div>

            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="font-serif text-4xl font-bold text-primary mb-2">
                  Evening Menu
                </h3>
                <p className="text-accent text-xl font-semibold">18:00 - 22:00</p>
              </div>

              {/* Starters & Tapas */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h5 className="font-serif text-2xl font-bold text-primary mb-4">Starters & Tapas</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Garlic Bread (v)</span>
                        <p className="text-sm text-gray-600">with basil</p>
                      </div>
                      <span className="font-semibold ml-4">£7</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Garlic Cheese Bread (v)</span>
                        <p className="text-sm text-gray-600">with mozzarella</p>
                      </div>
                      <span className="font-semibold ml-4">£8</span>
                    </div>
                  </div>
                  <div className="flex justify-between"><span>Mixed Olives (v)</span><span className="font-semibold">£5</span></div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Bruschetta (v)</span>
                        <p className="text-sm text-gray-600">with tomato and basil</p>
                      </div>
                      <span className="font-semibold ml-4">£8</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Soup of the Day (v)</span>
                        <p className="text-sm text-gray-600">our homemade soup (please ask the waiter)</p>
                      </div>
                      <span className="font-semibold ml-4">£8</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Baba Ganoush (v)</span>
                        <p className="text-sm text-gray-600">grilled aubergines with tahini and garlic</p>
                      </div>
                      <span className="font-semibold ml-4">£8</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Garlic Mushrooms (v)</span>
                        <p className="text-sm text-gray-600">sautéed in butter & garlic</p>
                      </div>
                      <span className="font-semibold ml-4">£8</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Patatas Bravas (v)</span>
                        <p className="text-sm text-gray-600">spicy potatoes in tomato sauce</p>
                      </div>
                      <span className="font-semibold ml-4">£8</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Honey Glazed Halloumi (v)</span>
                        <p className="text-sm text-gray-600">served with sesame seeds and honey</p>
                      </div>
                      <span className="font-semibold ml-4">£8</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Taktouka (v, vegan)</span>
                        <p className="text-sm text-gray-600">grilled mixed peppers and tomatoes, diced with garlic, olive oil & smoked paprika</p>
                      </div>
                      <span className="font-semibold ml-4">£8</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Hummus (v)</span>
                        <p className="text-sm text-gray-600">served with warm homemade bread</p>
                      </div>
                      <span className="font-semibold ml-4">£8</span>
                    </div>
                  </div>
                  <div className="flex justify-between"><span>Mixed Charcuterie Platter</span><span className="font-semibold">£12</span></div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Grilled Sardines</span>
                        <p className="text-sm text-gray-600">with sea salt</p>
                      </div>
                      <span className="font-semibold ml-4">£9</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Calamari</span>
                        <p className="text-sm text-gray-600">deep-fried squid</p>
                      </div>
                      <span className="font-semibold ml-4">£9</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Mussels Marinière</span>
                        <p className="text-sm text-gray-600">mussels in white wine, garlic & cream sauce</p>
                      </div>
                      <span className="font-semibold ml-4">£9</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Fried Whitebait</span>
                        <p className="text-sm text-gray-600">served with tartare sauce</p>
                      </div>
                      <span className="font-semibold ml-4">£9</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Prawns Peri-Peri</span>
                        <p className="text-sm text-gray-600">in a tomato & chilli sauce</p>
                      </div>
                      <span className="font-semibold ml-4">£9</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* From The Grill */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <h5 className="font-serif text-2xl font-bold text-primary mb-4">From The Grill</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Sirloin Steak (10oz)</span>
                        <p className="text-sm text-gray-600">premium sirloin, grilled</p>
                      </div>
                      <span className="font-semibold ml-4">£29</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Grilled Kofta Kebabs</span>
                        <p className="text-sm text-gray-600">minced lamb & beef spiced with Moroccan herbs</p>
                      </div>
                      <span className="font-semibold ml-4">£29</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Lamb Cutlets</span>
                        <p className="text-sm text-gray-600">marinated in rosemary & mint oil, grilled</p>
                      </div>
                      <span className="font-semibold ml-4">£29</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Grilled T-Bone Steak</span>
                        <p className="text-sm text-gray-600">served with tomato and mushrooms</p>
                      </div>
                      <span className="font-semibold ml-4">£32</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Roast Chicken</span>
                        <p className="text-sm text-gray-600">½ roast chicken</p>
                      </div>
                      <span className="font-semibold ml-4">£25</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Mixed Grill</span>
                        <p className="text-sm text-gray-600">an assortment of meats in garlic & pesto sauce</p>
                      </div>
                      <span className="font-semibold ml-4">£35</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Grilled Fish of the Day</span>
                        <p className="text-sm text-gray-600">stuffed with lemon & Mediterranean herbs</p>
                      </div>
                      <span className="font-semibold ml-4">£29</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Cheeseburger</span>
                        <p className="text-sm text-gray-600">homemade beef patty in a brioche bun with cheddar</p>
                      </div>
                      <span className="font-semibold ml-4">£19</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Pasta of the Day</span>
                        <p className="text-sm text-gray-600">please ask your server</p>
                      </div>
                      <span className="font-semibold ml-4">£19</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Moussaka (v)</span>
                        <p className="text-sm text-gray-600">aubergine, courgette, potato, lentils & cheese</p>
                      </div>
                      <span className="font-semibold ml-4">£25</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h6 className="font-semibold text-gray-700 mb-2">Sauces — £4.50 each</h6>
                  <p className="text-sm text-gray-600">Garlic • Tzatziki • Peppercorn • Chilli • Gravy • Mushroom • Blue Cheese</p>
                </div>
              </div>

              {/* Tagines */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h5 className="font-serif text-2xl font-bold text-primary mb-4">Tagines</h5>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Lamb Shank</span>
                        <p className="text-sm text-gray-600">with cinnamon & dried fruits</p>
                      </div>
                      <span className="font-semibold ml-4">£32</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Meatballs</span>
                        <p className="text-sm text-gray-600">with chilli tomato & eggs</p>
                      </div>
                      <span className="font-semibold ml-4">£28</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Fish</span>
                        <p className="text-sm text-gray-600">with lemon & ginger</p>
                      </div>
                      <span className="font-semibold ml-4">£32</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Chicken</span>
                        <p className="text-sm text-gray-600">with preserved lemons & saffron</p>
                      </div>
                      <span className="font-semibold ml-4">£32</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold">Vegetable (v)</span>
                        <p className="text-sm text-gray-600">with tomato & basil</p>
                      </div>
                      <span className="font-semibold ml-4">£26</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <span className="font-semibold text-lg">Couscous Royale</span>
                      <p className="text-sm text-gray-600">lamb and chicken with 7 vegetables in saffron semolina</p>
                      <p className="text-xs text-gray-500 mt-1">(24-hour pre-order – £60)</p>
                    </div>
                    <span className="font-semibold ml-4">£30pp<br/><span className="text-sm text-gray-600">(For 2)</span></span>
                  </div>
                </div>
              </div>

              {/* Sides */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <h5 className="font-serif text-2xl font-bold text-primary mb-4">Sides</h5>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
                  <div className="flex justify-between"><span>House Mixed Salad</span><span className="font-semibold">£7</span></div>
                  <div className="flex justify-between"><span>French Fries</span><span className="font-semibold">£4</span></div>
                  <div className="flex justify-between"><span>Sweet Potato Fries</span><span className="font-semibold">£4.50</span></div>
                  <div className="flex justify-between"><span>Rosemary Roast Potatoes</span><span className="font-semibold">£5</span></div>
                  <div className="flex justify-between"><span>Onion Rings</span><span className="font-semibold">£4</span></div>
                </div>
              </div>

              {/* Desserts */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h5 className="font-serif text-2xl font-bold text-primary mb-4">Desserts</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  <div className="flex justify-between"><span>Baklava</span><span className="font-semibold">£7</span></div>
                  <div className="flex justify-between"><span>Tiramisu</span><span className="font-semibold">£7</span></div>
                  <div className="flex justify-between"><span>Chocolate Fudge Cake</span><span className="font-semibold">£7</span></div>
                  <div className="flex justify-between"><span>Roasted Banana & Rum Cheesecake</span><span className="font-semibold">£7</span></div>
                  <div className="flex justify-between"><span>Deluxe Manx Ice Creams & Sorbets</span><span className="font-semibold">£7</span></div>
                  <div className="flex justify-between"><span>Manx Continental Mixed Cheese Board</span><span className="font-semibold">£12</span></div>
                </div>
              </div>
            </div>

          <div className="bg-primary text-white p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Dietary Requirements
            </h3>
            <p className="mb-4 leading-relaxed">
              We cater to various dietary needs including vegetarian, vegan, and gluten-free 
              options. Please inform our staff of any allergies or dietary restrictions when 
              booking or ordering, and we&apos;ll be happy to accommodate you.
            </p>
            <p className="text-sm opacity-90">
              Our kitchen handles various allergens. While we take precautions, we cannot 
              guarantee completely allergen-free meals.
            </p>
          </div>
      </Section>

      <Section background="gray">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Drinks & Beverages
          </h2>
          <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 mb-8 max-w-3xl mx-auto">
            <p className="text-lg font-semibold text-primary mb-2">
              Currently BYOB (Bring Your Own Bottle)
            </p>
            <p className="text-gray-700">
              We are in the process of obtaining our liquor license. In the meantime, you&apos;re welcome to bring your own wine and beverages. 
              Once licensed, we&apos;ll offer an extensive selection of wines, cocktails, and specialty drinks.
            </p>
          </div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Complement your meal with fresh juices and premium coffee. Coming soon: our carefully selected wine list, craft cocktails, 
            and traditional Middle Eastern beverages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md opacity-75">
              <h4 className="font-serif text-xl font-bold text-primary mb-2">Wine List</h4>
              <p className="text-gray-600 mb-2">Mediterranean & international selections</p>
              <span className="text-xs text-accent font-semibold">Coming Soon</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md opacity-75">
              <h4 className="font-serif text-xl font-bold text-primary mb-2">Cocktails</h4>
              <p className="text-gray-600 mb-2">Classic & signature creations</p>
              <span className="text-xs text-accent font-semibold">Coming Soon</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-serif text-xl font-bold text-primary mb-2">Hot Drinks</h4>
              <p className="text-gray-600">Premium coffee & specialty teas</p>
            </div>
          </div>
        </div>
      </Section>

      <CTABlock
        title="Ready to Dine With Us?"
        description="Reserve your table and experience the finest Mediterranean cuisine on the Isle of Man."
        ctaText="Make a Reservation"
        ctaHref="/contact"
        background="accent"
      />
    </>
  );
}
