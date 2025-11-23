import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-6 px-6">
          <h1 className="text-2xl font-bold text-gray-900">Salala Mobiles</h1>
          <nav className="space-x-6 font-medium">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About Us</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#blog" className="hover:text-blue-600">Blog</a>
            <a href="#contact" className="hover:text-blue-600">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main id="home" className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Salala Mobiles</h2>
        <p className="text-lg md:text-xl mb-8 max-w-lg">
          Your trusted mobile shop for sales, services, and repairs. We provide the latest devices and expert solutions for all your mobile needs.
        </p>
        <a
          href="#services"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          Our Services
        </a>
        <div className="mt-12 w-full max-w-md">
          <Image
            src="/images/phone-hero.jpg" // replace with your free stock mobile image
            alt="Mobile showcase"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-12">Our Services</h3>
        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Mobile Sales</h4>
            <p>Explore the latest smartphones at the best prices.</p>
            <Image
              src="/images/mobile-sale.jpg" // placeholder image for sale
              alt="Mobile Sale"
              width={300}
              height={200}
              className="rounded mt-4"
            />
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Repair & Service</h4>
            <p>Expert mobile repair services and accessories replacement.</p>
            <Image
              src="/images/mobile-repair.jpg" // placeholder image for repair
              alt="Mobile Repair"
              width={300}
              height={200}
              className="rounded mt-4"
            />
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Accessories</h4>
            <p>High-quality mobile accessories for your devices.</p>
            <Image
              src="/images/mobile-accessories.jpg" // placeholder image for accessories
              alt="Mobile Accessories"
              width={300}
              height={200}
              className="rounded mt-4"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">About Salala Mobiles</h3>
            <p>
              Salala Mobiles is a trusted shop for mobile sales, repair, and services. Our team of experts ensures the best quality service for all your smartphone needs.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/phone-about.jpg" // placeholder image
              alt="About Salala Mobiles"
              width={500}
              height={300}
              className="rounded shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-12">Latest Blog Posts</h3>
        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Smartphone Maintenance Tips</h4>
            <p>Learn how to take care of your phone and keep it running smoothly.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Top Smartphones This Year</h4>
            <p>Discover the best devices currently available in the market.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Accessories to Enhance Your Phone</h4>
            <p>Check out must-have accessories for protection and convenience.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
        <p className="mb-8">For inquiries, visit our shop or reach out via email at Salala Mobiles.</p>
        <a
          href="mailto:info@salalamobiles.com"
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          Email Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-inner text-center py-6 text-gray-600">
        &copy; {new Date().getFullYear()} Salala Mobiles. All rights reserved.
      </footer>
    </div>
  );
}
