import React, { useState } from 'react';
import './App.css';

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-green-400 rounded-lg flex items-center justify-center mr-3">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
                <path fill="currentColor" d="M12,2L4.5,6.5V17.5L12,22L19.5,17.5V6.5L12,2M12,4.4L17.3,7.5L12,10.6L6.7,7.5L12,4.4M6.5,9L11,11.4V19.1L6.5,16.7V9M13,11.4L17.5,9V16.7L13,19.1V11.4Z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-white">TARAJI QUEST</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-blue-400 transition-colors duration-300">HOME</a>
            <a href="#pillars" className="text-white hover:text-blue-400 transition-colors duration-300">PILLARS</a>
            <a href="#contact" className="text-white hover:text-blue-400 transition-colors duration-300">CONTACT US</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 rounded-lg mt-2 p-4">
            <a href="#home" className="block py-2 text-white hover:text-blue-400">HOME</a>
            <a href="#pillars" className="block py-2 text-white hover:text-blue-400">PILLARS</a>
            <a href="#contact" className="block py-2 text-white hover:text-blue-400">CONTACT US</a>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-green-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1492496913980-501348b61469?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxzdXN0YWluYWJpbGl0eXxlbnwwfHx8Z3JlZW58MTc1MjM1MDgwNHww&ixlib=rb-4.1.0&q=85')`
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* Oxyworld PSA Logo */}
        <div className="mb-8">
          <a href="https://www.oxyworldpsa.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="w-32 h-20 mx-auto flex items-center justify-center">
                <div className="text-blue-400 font-bold text-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg mr-2"></div>
                    <span>oxyworld-PSA</span>
                  </div>
                  <div className="text-sm text-gray-300 mt-1">medisam medikal</div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          TARAJI QUEST
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
          Quest for social & economic impact and community development through sustainable practices
        </p>

        {/* CTA Button */}
        <a 
          href="#about" 
          className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Learn more
        </a>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
              Social and Economic Impact
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Founded in 2021, Taraji Quest Limited ("Taraji") is a multi-dimensional organization that seeks to make a social and economic impact on communities through sustainable practices in Agriculture, Energy, Healthcare, Hospitality and Conservation.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <p className="font-semibold text-gray-900">
                  Noel Ikiara, FCCA, CPA Founder & Director
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1495584816685-4bdbf1b5057e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxzdXN0YWluYWJpbGl0eXxlbnwwfHx8Z3JlZW58MTc1MjM1MDgwNHww&ixlib=rb-4.1.0&q=85"
                alt="Sustainability"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-green-500 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pillars Section Component
const PillarsSection = () => {
  return (
    <section id="pillars" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
            Pillars
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">What We Do</h2>
          
          <div className="max-w-4xl mx-auto text-gray-600 space-y-4">
            <p>
              Taraji Quest envisions a sustainable future where agriculture, renewable energy, healthcare, hospitality and conservation efforts intersect to create thriving communities.
            </p>
            <p>
              By addressing crucial challenges in these pillars, the initiative seeks to empower individuals, protect the environment, and promote social & economic development.
            </p>
            <p className="font-semibold text-gray-900">
              Our purpose aligns with the Sustainable Development Goals (SDGs) including:
            </p>
          </div>
        </div>

        {/* SDG Goals */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {[
            'SDG 1 – No Poverty',
            'SDG 2 – Zero Hunger', 
            'SDG 3 – Good Health & Well-being',
            'SDG 7 – Affordable & Clean Energy',
            'SDG 8 – Decent Work & Economic Growth',
            'SDG 9 – Industry, Innovation & Infrastructure',
            'SDG 11 – Sustainable Cities & Communities',
            'SDG 12 – Responsible Consumption & Production',
            'SDG 13 – Climate Action',
            'SDG 15 – Life on Land'
          ].map((sdg, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border border-blue-100">
              <p className="text-sm font-medium text-gray-700">{sdg}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      title: "Taraji Health care",
      description: "Providing Quality and Affordable Healthcare throughout Africa with a vision for social and economic balance within the Community.",
      image: "https://images.unsplash.com/photo-1594058573823-d8edf1ad3380?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MXwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eXxlbnwwfHx8Z3JlZW58MTc1MjM1MDgwNHww&ixlib=rb-4.1.0&q=85",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Taraji Sunlux Energy",
      description: "Providing Quality Renewable Energy and Technology through renewable energy such as solar bio-fuel among other solutions.",
      image: "https://images.unsplash.com/photo-1662601311085-e5747d08992a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneXxlbnwwfHx8Z3JlZW58MTc1MjM1MDgxM3ww&ixlib=rb-4.1.0&q=85",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Taraji Agri",
      description: "Optimizing agricultural productivity while preserving the natural environment, and ensuring the highest quality of agricultural products.",
      image: "https://images.unsplash.com/photo-1522315710315-bb232602118a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxzb2xhciUyMGVuZXJneXxlbnwwfHx8Z3JlZW58MTc1MjM1MDgxM3ww&ixlib=rb-4.1.0&q=85",
      gradient: "from-blue-500 to-green-500"
    },
    {
      title: "Community Development",
      description: "Empowering communities by addressing their needs with a focus on food, employment, affordable energy and preventative healthcare.",
      image: "https://images.unsplash.com/photo-1654419189892-d8814766c4fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxzb2xhciUyMGVuZXJneXxlbnwwfHx8Z3JlZW58MTc1MjM1MDgxM3ww&ixlib=rb-4.1.0&q=85",
      gradient: "from-emerald-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-80`}></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Section Component
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Noel Ikiara",
      role: "FOUNDER & Director",
      image: "https://images.pexels.com/photos/27113617/pexels-photo-27113617.jpeg"
    },
    {
      name: "Sherry Seepersad",
      role: "Managing Director, Taraji Sunlux Energy",
      image: "https://images.pexels.com/photos/31155304/pexels-photo-31155304.jpeg"
    },
    {
      name: "Kathy Awuor",
      role: "SALES & MARKETING EXECUTIVE",
      image: "https://images.pexels.com/photos/14146609/pexels-photo-14146609.jpeg"
    },
    {
      name: "Aidah Bani Wanjiru",
      role: "ACCOUNTING & FINANCE",
      image: "https://images.unsplash.com/photo-1495584816685-4bdbf1b5057e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxzdXN0YWluYWJpbGl0eXxlbnwwfHx8Z3JlZW58MTc1MjM1MDgwNHww&ixlib=rb-4.1.0&q=85"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Partners Section Component
const PartnersSection = () => {
  const partners = [
    { name: "Inlux Solar Partner", logo: "INLUX SOLAR" },
    { name: "Sun-In-One", logo: "Sun-In-One" },
    { name: "Max International", logo: "MAX INTERNATIONAL" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 min-w-48">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-700">{partner.logo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready To Work with Us For Social and Economic Impact?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Value proposition to: Communities, Financiers, Donors Local and National Government
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-400 rounded-lg flex items-center justify-center mr-3">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path fill="currentColor" d="M12,2L4.5,6.5V17.5L12,22L19.5,17.5V6.5L12,2M12,4.4L17.3,7.5L12,10.6L6.7,7.5L12,4.4M6.5,9L11,11.4V19.1L6.5,16.7V9M13,11.4L17.5,9V16.7L13,19.1V11.4Z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-blue-400">Taraji Quest</span>
          </div>

          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Quest for social & economic impact and community development through sustainable practices
          </p>

          {/* Social Media */}
          <div className="flex justify-center space-x-4 mb-8">
            <a href="#" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>

          <div className="text-gray-500 text-sm">
            © 2024 Taraji Quest. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <ServicesSection />
      <TeamSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;