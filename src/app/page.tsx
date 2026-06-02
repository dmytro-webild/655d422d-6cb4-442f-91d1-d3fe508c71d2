"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Leaf, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeLargeTitles"
        background="noise"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Our Story",
          id: "#about",
        },
        {
          name: "Gallery",
          id: "#gallery",
        },
        {
          name: "Awards",
          id: "#awards",
        },
        {
          name: "Visit Us",
          id: "#contact",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      button={{
        text: "Reserve a Table",
        href: "#contact",
      }}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=wgs06d"
      logoAlt="Mallow Restaurant Logo"
      brandName="Mallow"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "plain",
      }}
      title="London's Most Refined Plant-Based Dining Experience"
      description="Exceptional seasonal cuisine crafted from locally sourced ingredients in the heart of Borough Market."
      tag="MALLOW"
      tagAnimation="blur-reveal"
      buttons={[
        {
          text: "Reserve a Table",
          href: "#contact",
        },
        {
          text: "Explore Menu",
          href: "#menu",
        },
      ]}
      buttonAnimation="blur-reveal"
      mediaItems={[
        {
          videoSrc: "http://img.b2bpic.net/free-photo/view-chef-working-kitchen_23-2149728012.jpg",
          imageAlt: "Gourmet food preparation in slow motion",
          imageSrc: "http://img.b2bpic.net/free-photo/view-chef-working-kitchen_23-2149728012.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hand-plate-with-fish-cooked-fish-juicy-fish-plate-delicacy-seafood-lovers_639032-339.jpg",
          imageAlt: "Elegant fine dining setting",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-chef-kitchen-frying-food_23-2149720777.jpg",
          imageAlt: "Female chef in the kitchen frying food",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-chef-removing-apple-skin_23-2148763193.jpg",
          imageAlt: "Female chef removing apple skin",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-mushroom-frying-with-salt-fire-human-hand-pan_176474-3146.jpg",
          imageAlt: "Side view mushroom frying with salt and fire and human hand in pan",
        },
      ]}
      mediaAnimation="opacity"
      rating={5}
      ratingText="Michelin-Recommended Dining"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      tag="About Mallow"
      tagAnimation="blur-reveal"
      title="Our Story: A Culinary Journey in Borough Market"
      buttons={[
        {
          text: "Discover Our Philosophy",
          href: "#chef-experience",
        },
      ]}
      buttonAnimation="blur-reveal"
      description="Mallow redefines plant-based dining with a commitment to sustainable sourcing, seasonal ingredients, and local partnerships within the historic Borough Market. Our culinary craftsmanship transforms nature's bounty into exceptional dishes, reflecting a deep respect for both tradition and innovation."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "starter-one",
          name: "Heirloom Tomato Tartare",
          price: "£18",
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-egg-with-truffles-pita-high-angle_23-2149548075.jpg",
          imageAlt: "Heirloom Tomato Tartare",
        },
        {
          id: "seasonal-special",
          name: "Forager's Risotto",
          price: "£28",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-chef-preparing-dish_23-2148723309.jpg",
          imageAlt: "Forager's Risotto",
        },
        {
          id: "main-one",
          name: "Confit Aubergine",
          price: "£32",
          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-compost-made-rotten-food-with-copy-space_23-2149073773.jpg",
          imageAlt: "Confit Aubergine",
        },
        {
          id: "dessert-one",
          name: "Elderflower Panna Cotta",
          price: "£16",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-cupcake-with-copy-space_23-2148769222.jpg",
          imageAlt: "Elderflower Panna Cotta",
        },
        {
          id: "cocktail-one",
          name: "Borough Bloom Cocktail",
          price: "£15",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-granita-dessert-with-fruit-flavoring_23-2149431466.jpg",
          imageAlt: "Borough Bloom Cocktail",
        },
        {
          id: "wine-one",
          name: "Organic Chenin Blanc",
          price: "£55",
          imageSrc: "http://img.b2bpic.net/free-vector/pack-four-luxury-wine-labels_23-2147572524.jpg",
          imageAlt: "Organic Chenin Blanc",
        },
      ]}
      title="A Symphony of Seasonal Flavors"
      description="Explore Mallow's meticulously crafted plant-based menu, showcasing the freshest seasonal ingredients and culinary artistry."
      tag="Signature Menu"
      tagAnimation="blur-reveal"
    />
  </div>

  <div id="chef-experience" data-section="chef-experience">
      <TeamCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      members={[
        {
          id: "chef-1",
          name: "Chef Eleanor Vance",
          role: "Executive Chef",
          description: "Chef Vance masterfully blends traditional techniques with modern plant-based artistry, driving Mallow's culinary vision.",
          imageSrc: "http://img.b2bpic.net/free-photo/chef-preparing-recipe_23-2148145586.jpg",
          imageAlt: "Executive Chef Eleanor Vance",
        },
        {
          id: "chef-2",
          name: "Chef Julian Rossi",
          role: "Head of Seasonal Cuisine",
          description: "Chef Rossi's expertise in seasonal ingredients ensures every dish reflects the freshest produce from local partners.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-man-making-pasta_23-2149631682.jpg",
          imageAlt: "Head of Seasonal Cuisine Julian Rossi",
        },
        {
          id: "chef-3",
          name: "Chef Anya Sharma",
          role: "Pastry Chef",
          description: "Chef Sharma brings creativity and precision to our dessert menu, crafting plant-based sweet delights that enchant the senses.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-eating-chocolate-cake-decorated-with-strawberry-table_141793-3021.jpg",
          imageAlt: "Pastry Chef Anya Sharma",
        },
      ]}
      title="Meet Our Visionary Culinary Team"
      description="Our chefs, led by a passion for plant-based gastronomy, combine innovative techniques with sustainable practices to create an unforgettable dining experience."
      tag="The Mallow Craft"
      tagAnimation="blur-reveal"
    />
  </div>

  <div id="customer-experience" data-section="customer-experience">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Fine Dining Atmosphere",
          description: "Experience our elegant interiors, designed to evoke tranquility and sophistication, perfect for any occasion.",
          imageSrc: "http://img.b2bpic.net/free-photo/blend-minimal-nordic-interior-design-with-japanese-wabi-sabi-style_23-2151160205.jpg",
          imageAlt: "Elegant dining atmosphere",
        },
        {
          title: "Private Dining",
          description: "Our exclusive private dining rooms offer intimacy and bespoke service for your special celebrations or corporate gatherings.",
          imageSrc: "http://img.b2bpic.net/free-photo/life-style_1122-1851.jpg",
          imageAlt: "Luxury private dining room",
        },
        {
          title: "Seasonal Menus",
          description: "Our menus evolve with the seasons, ensuring a fresh and vibrant culinary adventure with every visit.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pumpkin-soup-with-copy-space_23-2148233924.jpg",
          imageAlt: "Seasonal plant-based menu dish",
        },
      ]}
      title="An Unforgettable Dining Experience"
      description="Immerse yourself in Mallow's world, where every detail from ambiance to private events is crafted for your pleasure."
      tag="Customer Journey"
      tagAnimation="blur-reveal"
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      features={[
        {
          title: "Restaurant Interiors",
          description: "Discover the sophisticated design that defines Mallow's inviting ambiance.",
          imageSrc: "http://img.b2bpic.net/free-photo/decorated-wedding-reception-venue-with-view-sea-through-windows_637285-1001.jpg",
          imageAlt: "Luxury restaurant interior",
        },
        {
          title: "Signature Dishes",
          description: "Marvel at the artistry of our plant-based creations, plated to perfection.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-elegant-plate-with-salad_23-2148517996.jpg",
          imageAlt: "Gourmet plant-based dish",
        },
        {
          title: "Crafted Cocktails",
          description: "Sip on our unique, botanical-infused cocktails, designed for every palate.",
          imageSrc: "http://img.b2bpic.net/free-photo/red-cocktail-with-lemon-berries_140725-9710.jpg",
          imageAlt: "Elegant crafted cocktail",
        },
      ]}
      title="A Glimpse into Mallow's World"
      description="Explore our curated gallery showcasing the exquisite interiors, artful dishes, and vibrant atmosphere of Mallow."
      tag="Visual Stories"
      tagAnimation="blur-reveal"
    />
  </div>

  <div id="awards" data-section="awards">
      <MetricCardThree
      animationType="opacity"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "award-michelin",
          icon: Award,
          title: "Michelin Recommended",
          value: "2023-2024",
        },
        {
          id: "award-sustainability",
          icon: Leaf,
          title: "Sustainable Restaurant Award",
          value: "Green Star",
        },
        {
          id: "award-satisfaction",
          icon: Star,
          title: "Customer Satisfaction",
          value: "5/5",
        },
      ]}
      title="Our Achievements and Accolades"
      description="Recognized for culinary excellence, sustainable practices, and outstanding guest satisfaction."
      tag="Awards & Recognition"
      tagAnimation="blur-reveal"
    />
  </div>

  <div id="sustainability" data-section="sustainability">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Local Sourcing",
          description: "We partner with local farms and suppliers in and around Borough Market to bring you the freshest ingredients.",
          imageSrc: "http://img.b2bpic.net/free-photo/mid-shot-father-son-looking-tablet_23-2148440993.jpg",
          imageAlt: "Local farm with fresh produce",
        },
        {
          title: "Ethical Operations",
          description: "Our kitchen operates with minimal waste and carbon footprint, prioritizing eco-friendly practices at every turn.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-female-chef-kitchen-holding-salad_23-2148763177.jpg",
          imageAlt: "Sustainable kitchen practices",
        },
        {
          title: "Seasonal Ingredients",
          description: "Our menu is a celebration of the seasons, highlighting the best produce available year-round.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-pear-female-hand-blurred-background-with-vegetables_169016-23990.jpg",
          imageAlt: "Vibrant seasonal produce",
        },
      ]}
      title="Our Commitment to a Greener Future"
      description="Mallow is dedicated to ethical practices, from sourcing to operation, ensuring every meal contributes positively to our planet."
      tag="Sustainability"
      tagAnimation="blur-reveal"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="\"Mallow is a triumph of plant-based cuisine, an exquisite journey for the senses. Every dish is a work of art, a testament to their dedication to flavor and sustainability. A true gem in London's dining scene.\""
      rating={5}
      author="Isabella Chen, Food Critic"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/positive-woman-with-short-hair-bright-lips-glasses-smiling-outside-trendy-lady-black-clothes-posing-stairs_197531-19325.jpg",
          alt: "Sarah Johnson",
        },
        {
          src: "http://img.b2bpic.net/free-photo/joyful-man-drinking-beer-pub_329181-18354.jpg",
          alt: "Michael Chen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-cleaning-woman-plaid-shirt-cap-holding-plate-sponge-looking-camera-happy-excited-standing-green-background_141793-111063.jpg",
          alt: "Emily Rodriguez",
        },
        {
          src: "http://img.b2bpic.net/free-vector/happy-new-year-background-with-zig-zag-stripes_23-2147722957.jpg",
          alt: "David Kim",
        },
        {
          src: "http://img.b2bpic.net/free-photo/handsome-man-thinking-using-digital-tablet-shopping-online-pondering-ideas-looking-upper_1258-160469.jpg",
          alt: "Laura White",
        },
      ]}
      ratingAnimation="reveal-blur"
      avatarsAnimation="reveal-blur"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      text="Visit Mallow: Discover our location in the heart of Borough Market, London, and secure your unforgettable dining experience."
      buttons={[
        {
          text: "Reserve Your Table Now",
          href: "#",
        },
        {
          text: "Get Directions",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Mallow",
          items: [
            {
              label: "Seasonal. Sustainable. Plant-Based.",
              href: "#",
            },
          ],
        },
        {
          title: "Quick Links",
          items: [
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Gallery",
              href: "#gallery",
            },
            {
              label: "Awards",
              href: "#awards",
            },
          ],
        },
        {
          title: "Contact Information",
          items: [
            {
              label: "Phone: +44 20 7123 4567",
              href: "tel:+442071234567",
            },
            {
              label: "Email: reservations@mallow.london",
              href: "mailto:reservations@mallow.london",
            },
            {
              label: "Address: 10 Borough Market, London, SE1 9AL",
              href: "#",
            },
          ],
        },
        {
          title: "Reservations & Hours",
          items: [
            {
              label: "Mon - Fri: 12 PM - 10 PM",
              href: "#",
            },
            {
              label: "Sat - Sun: 11 AM - 11 PM",
              href: "#",
            },
            {
              label: "Book Your Table",
              href: "#contact",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Mallow. All rights reserved."
      bottomRightText="Privacy Policy | Terms of Service | Cookie Policy"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
