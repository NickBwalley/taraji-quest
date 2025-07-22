import React, { useState } from "react";
import "./App.css";
import noelImg from "./assets/noel-ikiara1.png";
import sherryImg from "./assets/sherry-seepersad1.jpg";
import kathyImg from "./assets/kathy-awuor(1).jpg";
import aidahImg from "./assets/aidahbani-wanjiru.jpg";
import nickImg from "./assets/nickbwalley-profile.jpg";
import oxyworldLogo from "./assets/oxyworld-psa-new-logo2.png";
import tarajiLogo from "./assets/taraji-quest-limited-logo-1.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import tarajiAgri1 from "./assets/taraji-agri/taraji-agri-2.jpg";
import tarajiAgri2 from "./assets/taraji-agri/taraji-agri-2.5.jpg";
import tarajiAgri3 from "./assets/taraji-agri/taraji-agri-3.jpg";
import tarajiAgri4 from "./assets/taraji-agri/taraji-agri-4.jpg";
import tarajiAgri5 from "./assets/taraji-agri/taraji-agri-5.jpg";
import tarajiAgri6 from "./assets/taraji-agri/taraji-agri-6.jpg";
import tarajiAgri8 from "./assets/taraji-agri/taraji-agri-8.jpg";
import tarajiAgri9 from "./assets/taraji-agri/taraji-agri-9.jpg";
import tarajiAgriVideo from "./assets/taraji-agri/taraji-agri-1.mp4";
import oxyworldPsaImg1 from "./assets/taraji-healthcare/oxyworld-psa-img1.png";
import sunlux1 from "./assets/taraji-sunlux-energy/taraji-sunlux-energy-1.jpg";
import sunlux2 from "./assets/taraji-sunlux-energy/taraji-sunlux-energy-2.jpg";
import sunlux3 from "./assets/taraji-sunlux-energy/taraji-sunlux-energy-3.jpg";
import foundationVid1 from "./assets/taraji-foundation/taraji-foundation-3.mp4";
import foundationVid2 from "./assets/taraji-foundation/taraji-foundation-3.mp4";
import tarajiAgri2_5 from "./assets/taraji-agri/taraji-agri-2.5.jpg";
import foundationImg2 from "./assets/taraji-foundation/taraji-foundation-2.jpg";
import foundationImg3 from "./assets/taraji-foundation/taraji-foundation-3.jpg";
import oxyworldPartner from "./assets/our-partners/oxyworld-partner.png";
import inluxSolarLogo from "./assets/our-partners/inlux-solar-partner.png";
import sunInOneLogo from "./assets/our-partners/sun-in-one-partner.png";
import maxInternationalLogo from "./assets/our-partners/max-international.png";
import tarajiEnergyBusinessPlan from "./assets/taraji-sunlux-energy/taraji-energy-business-plan.pdf";
import tarajiHealthcareVideo from "./assets/taraji-healthcare/taraji-healthcare-v1.mp4";
import tarajiHealthcarePresentation from "./assets/taraji-healthcare/taraji-healthcare-presentation.pdf";

// ScrollToTop component for route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

// Navigation Component
const Navigation = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPillarsDropdownOpen, setIsPillarsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to check if on homepage
  const isHome = location.pathname === "/";

  // Function to handle navigation clicks
  const handleHomeClick = () => {
    setIsMenuOpen(false);
    setIsPillarsDropdownOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Function to handle Our Team click
  const handleTeamClick = () => {
    setIsMenuOpen(false);
    setIsPillarsDropdownOpen(false);
    if (isHome) {
      const section = document.getElementById("team");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: "team" } });
    }
  };

  // Function to handle pillar page navigation
  const handlePillarNav = (path) => {
    setIsMenuOpen(false);
    setIsPillarsDropdownOpen(false);
    navigate(path);
  };

  // Determine navigation styling based on current section
  const getNavStyles = () => {
    if (currentSection === "home") {
      return {
        navClass:
          "fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm transition-all duration-300",
        textClass: "text-white",
        logoClass: "text-white",
        mobileMenuClass:
          "md:hidden bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 bg-opacity-95 rounded-lg mt-2 p-4",
      };
    } else {
      return {
        navClass:
          "fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 bg-opacity-95 backdrop-blur-sm transition-all duration-300",
        textClass: "text-white",
        logoClass: "text-white",
        mobileMenuClass:
          "md:hidden bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 bg-opacity-95 rounded-lg mt-2 p-4",
      };
    }
  };

  const styles = getNavStyles();

  return (
    <nav className={styles.navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={handleHomeClick}
          >
            {" "}
            {/* Make logo clickable */}
            <img
              src={tarajiLogo}
              alt="Taraji Quest"
              className="h-16 w-auto mr-0 drop-shadow-lg transition-all duration-300"
              style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.25))" }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <span
              onClick={handleHomeClick}
              className={`${styles.textClass} hover:text-blue-400 transition-colors duration-300 cursor-pointer`}
            >
              HOME
            </span>
            {/* Pillars Dropdown */}
            <div className="relative group">
              <button
                className={`${styles.textClass} hover:text-blue-400 transition-colors duration-300 flex items-center`}
                onClick={() => setIsPillarsDropdownOpen(!isPillarsDropdownOpen)}
              >
                PILLARS
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    isPillarsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 bg-opacity-95 backdrop-blur-sm rounded-lg shadow-xl border border-white border-opacity-20 transition-all duration-200 ${
                  isPillarsDropdownOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <div className="py-2">
                  <span
                    onClick={() => handlePillarNav("/taraji-healthcare")}
                    className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 cursor-pointer"
                  >
                    Taraji Health Care
                  </span>
                  <span
                    onClick={() => handlePillarNav("/taraji-foundations")}
                    className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 cursor-pointer"
                  >
                    Taraji Foundation
                  </span>
                  <span
                    onClick={() => handlePillarNav("/taraji-sunlux-energy")}
                    className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 cursor-pointer"
                  >
                    Taraji Sunlux Energy
                  </span>
                  <span
                    onClick={() => handlePillarNav("/taraji-agri")}
                    className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 cursor-pointer"
                  >
                    Taraji Agri
                  </span>
                  <span
                    onClick={() => handlePillarNav("/food-beverages")}
                    className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 cursor-pointer"
                  >
                    Food & Beverages
                  </span>
                </div>
              </div>
            </div>
            <span
              onClick={handleTeamClick}
              className={`${styles.textClass} hover:text-blue-400 transition-colors duration-300 cursor-pointer`}
            >
              CONTACT US
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${styles.textClass} focus:outline-none transition-transform duration-300`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="relative w-6 h-6 block">
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              ></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenuClass}>
            <span
              onClick={handleHomeClick}
              className="block py-2 text-white hover:text-blue-400 cursor-pointer"
            >
              HOME
            </span>
            {/* Mobile Pillars Dropdown */}
            <div className="border-t border-white border-opacity-20 mt-2 pt-2">
              <button
                onClick={() => setIsPillarsDropdownOpen(!isPillarsDropdownOpen)}
                className="flex items-center justify-between w-full py-2 text-white hover:text-blue-400"
              >
                <span>PILLARS</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isPillarsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isPillarsDropdownOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  <span
                    onClick={() => handlePillarNav("/taraji-healthcare")}
                    className="block py-1 text-white hover:text-blue-400 text-sm cursor-pointer"
                  >
                    Taraji Health Care
                  </span>
                  <span
                    onClick={() => handlePillarNav("/taraji-foundations")}
                    className="block py-1 text-white hover:text-blue-400 text-sm cursor-pointer"
                  >
                    Taraji Foundation
                  </span>
                  <span
                    onClick={() => handlePillarNav("/taraji-sunlux-energy")}
                    className="block py-1 text-white hover:text-blue-400 text-sm cursor-pointer"
                  >
                    Taraji Sunlux Energy
                  </span>
                  <span
                    onClick={() => handlePillarNav("/taraji-agri")}
                    className="block py-1 text-white hover:text-blue-400 text-sm cursor-pointer"
                  >
                    Taraji Agri
                  </span>
                  <span
                    onClick={() => handlePillarNav("/food-beverages")}
                    className="block py-1 text-white hover:text-blue-400 text-sm cursor-pointer"
                  >
                    Food & Beverages
                  </span>
                </div>
              )}
            </div>
            <span
              onClick={handleTeamClick}
              className="block py-2 text-white hover:text-blue-400 cursor-pointer"
            >
              CONTACT US
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [logoPopped, setLogoPopped] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLogoPopped(true), 200);
  }, []);
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-green-900"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1492496913980-501348b61469?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxzdXN0YWluYWJpbGl0eXxlbnwwfHx8Z3JlZW58MTc1MjM1MDgwNHww&ixlib=rb-4.1.0&q=85')`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* Oxyworld PSA Logo */}
        <div className="mb-8">
          <a
            href="https://www.oxyworldpsa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="flex items-center justify-center">
              <img
                src={oxyworldLogo}
                alt="Oxyworld PSA Medikal Medisam"
                className={`w-[48rem] h-64 object-contain drop-shadow-2xl transition-all duration-700 ease-out ${
                  logoPopped ? "scale-110 shadow-2xl" : "scale-90 opacity-80"
                }`}
                style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.35))" }}
              />
            </div>
          </a>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          TARAJI QUEST
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
          Quest for social & economic impact and community development through
          sustainable practices
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
                Founded in 2021, Taraji Quest Limited ("Taraji") is a
                multi-dimensional organization that seeks to make a social and
                economic impact on communities through sustainable practices in
                Agriculture, Energy, Healthcare, Hospitality and Conservation.
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

// SDG data for each pillar
const SDGS = {
  healthcare: ["SDG3: Free Oxygen for all.", "SDG8: Affordable Healthcare"],
  sunlux: [
    "SDG 7 – Affordable & Clean Energy",
    "SDG 9 – Industry, Innovation & Infrastructure",
    "SDG 13 – Climate Action",
  ],
  agri: [
    "SDG 1 – No Poverty",
    "SDG 2 – Zero Hunger",
    "SDG 12 – Responsible Consumption & Production",
    "SDG 15 – Life on Land",
  ],
  foundation: [
    "SDG 1 – No Poverty",
    "SDG 11 – Sustainable Cities & Communities",
    "SDG 8 – Decent Work & Economic Growth",
  ],
};

// SDG List Component
const SDGList = ({ sdgs }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 mt-8">
    {sdgs.map((sdg, idx) => (
      <div
        key={idx}
        className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border border-blue-100"
      >
        <p className="text-sm font-medium text-gray-700">{sdg}</p>
      </div>
    ))}
  </div>
);

// New Pages
const TarajiHealthCare = () => (
  <div className="App bg-gray-50">
    <Navigation currentSection={"taraji-healthcare"} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen pt-28">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Taraji Health Care
      </h1>
      <p className="mb-4 text-lg text-gray-700">
        Providing Quality and Affordable Healthcare throughout Africa with a
        vision for social and economic balance within the Community.
      </p>
      <SDGList sdgs={SDGS.healthcare} />
      {/* Download Presentation Button */}
      <div className="my-8 flex justify-start">
        <a
          href={tarajiHealthcarePresentation}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Download & View Our Presentation
        </a>
      </div>
      {/* Video Section */}
      <div className="mt-12 flex justify-center">
        <video
          controls
          className="rounded-2xl shadow-2xl max-w-2xl w-full border-4 border-blue-100"
        >
          <source src={tarajiHealthcareVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mt-12 flex justify-center">
        <img
          src={oxyworldPsaImg1}
          alt="Oxyworld PSA Healthcare"
          className="rounded-2xl shadow-2xl max-w-xl w-full object-cover border-4 border-blue-100"
        />
      </div>
    </div>
    <ContactSection
      contacts={[
        {
          name: "Kathy Awuor",
          role: "SALES & MARKETING EXECUTIVE",
          image: kathyImg,
          whatsapp: "+254 723 453 352",
          email: "k.awuor@taraji-quest.com",
        },
      ]}
    />
    <Footer />
  </div>
);
const TarajiSunluxEnergy = () => (
  <div className="App bg-gray-50">
    <Navigation currentSection={"taraji-sunlux-energy"} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen pt-28">
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Taraji Sunlux Energy
      </h1>
      <p className="mb-4 text-lg text-gray-700">
        Providing Quality Renewable Energy and Technology through renewable
        energy such as solar bio-fuel among other solutions.
      </p>
      <SDGList sdgs={SDGS.sunlux} />
      {/* Download Business Plan Button */}
      <div className="my-8 flex justify-start">
        <a
          href={tarajiEnergyBusinessPlan}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Download & View Our Business Plan
        </a>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <img
          src={sunlux1}
          alt="Sunlux Energy 1"
          className="rounded-xl shadow-lg object-contain w-full h-64 bg-white"
          style={{ background: "#fff" }}
        />
        <img
          src={sunlux2}
          alt="Sunlux Energy 2"
          className="rounded-xl shadow-lg object-cover w-full h-64"
        />
        <img
          src={sunlux3}
          alt="Sunlux Energy 3"
          className="rounded-xl shadow-lg object-cover w-full h-64"
        />
      </div>
    </div>
    <ContactSection
      contacts={[
        {
          name: "Sherry Seepersad",
          role: "Managing Director, Taraji Health Care",
          image: sherryImg,
          whatsapp: "+1(868)788-2753",
          linkedin: "https://www.linkedin.com/in/sherry-seepersad-38402049/",
          email: "s.seepersad@taraji-quest.com",
        },
      ]}
    />
    <Footer />
  </div>
);
const TarajiAgri = () => (
  <div className="App bg-gray-50">
    <Navigation currentSection={"taraji-agri"} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen pt-28">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Taraji Agri</h1>
      <p className="mb-4 text-lg text-gray-700">
        Optimizing agricultural productivity while preserving the natural
        environment, and ensuring the highest quality of agricultural products.
      </p>
      <SDGList sdgs={SDGS.agri} />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <img
          src={tarajiAgri1}
          alt="Taraji Agri 1"
          className="rounded-xl shadow-lg object-cover w-full h-64"
        />
        <img
          src={tarajiAgri2}
          alt="Taraji Agri 2"
          className="rounded-xl shadow-lg object-cover w-full h-64"
        />
        <img
          src={tarajiAgri3}
          alt="Taraji Agri 3"
          className="rounded-xl shadow-lg object-cover w-full h-64"
        />
        <img
          src={tarajiAgri4}
          alt="Taraji Agri 4"
          className="rounded-xl shadow-lg object-cover w-full h-64"
        />
        <img
          src={tarajiAgri5}
          alt="Taraji Agri 5"
          className="rounded-xl shadow-lg object-cover w-full h-64"
        />
        <img
          src={tarajiAgri6}
          alt="Taraji Agri 6"
          className="rounded-xl shadow-lg object-cover w-full h-64"
        />
        <img
          src={tarajiAgri8}
          alt="Taraji Agri 8"
          className="rounded-xl shadow-lg object-cover w-full h-64"
        />
        <img
          src={tarajiAgri9}
          alt="Taraji Agri 9"
          className="rounded-xl shadow-lg object-cover w-full h-64"
        />
      </div>
      <div className="mt-12 flex justify-center">
        <video
          controls
          className="rounded-2xl shadow-2xl max-w-2xl w-full border-4 border-green-100"
        >
          <source src={tarajiAgriVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <ContactSection
      contacts={[
        {
          name: "Sherry Seepersad",
          role: "Managing Director, Taraji Health Care",
          image: sherryImg,
          whatsapp: "+1(868)788-2753",
          linkedin: "https://www.linkedin.com/in/sherry-seepersad-38402049/",
          email: "s.seepersad@taraji-quest.com",
        },
      ]}
    />
    <Footer />
  </div>
);

// Custom Video Player (no download, play/pause only)
const CustomVideoPlayer = ({ src, poster, alt }) => {
  const videoRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  return (
    <div className="relative rounded-2xl shadow-2xl w-full h-96 object-cover border-4 border-blue-100 bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        tabIndex={-1}
        className="w-full h-full object-cover rounded-2xl"
        controlsList="nodownload"
        disablePictureInPicture
      />
      <button
        onClick={handlePlayPause}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
        style={{ zIndex: 2 }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

const TarajiFoundation = () => (
  <div className="App bg-gray-50">
    <Navigation currentSection={"taraji-foundations"} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen pt-28">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">
        Taraji Foundation
      </h1>
      <p className="mb-4 text-lg text-gray-700">
        Empowering communities by addressing their needs with a focus on food,
        employment, affordable energy and preventative healthcare.
      </p>
      <SDGList sdgs={SDGS.foundation} />
      {/* Images first */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={foundationImg3}
          alt="Taraji Foundation 3"
          className="rounded-2xl shadow-2xl w-full h-96 object-cover border-4 border-blue-100"
        />
        <img
          src={foundationImg2}
          alt="Taraji Foundation 2"
          className="rounded-2xl shadow-2xl w-full h-96 object-cover border-4 border-blue-100"
        />
      </div>
      {/* Videos after images */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <CustomVideoPlayer
          src={foundationVid1}
          alt="Taraji Foundation Video 1"
        />
        <CustomVideoPlayer
          src={foundationVid2}
          alt="Taraji Foundation Video 2"
        />
      </div>
    </div>
    <ContactSection
      contacts={[
        {
          name: "Noel Ikiara",
          role: "FOUNDER & Director",
          image: noelImg,
          whatsapp: "+254 722 283 442",
          linkedin:
            "https://www.linkedin.com/in/noel-ikiara-fcca-cpa-9333a52a/",
        },
        {
          name: "Sherry Seepersad",
          role: "Managing Director, Taraji Health Care",
          image: sherryImg,
          whatsapp: "+1(868)788-2753",
          linkedin: "https://www.linkedin.com/in/sherry-seepersad-38402049/",
          email: "s.seepersad@taraji-quest.com",
        },
      ]}
    />
    <Footer />
  </div>
);

// Pillars Section Component
const PillarsSection = () => {
  return (
    <section id="pillars" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
            Pillars
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">What We Do</h2>

          <div className="max-w-4xl mx-auto text-gray-600 space-y-4">
            <p>
              Taraji Quest envisions a sustainable future where agriculture,
              renewable energy, healthcare, hospitality and conservation efforts
              intersect to create thriving communities.
            </p>
            <p>
              By addressing crucial challenges in these pillars, the initiative
              seeks to empower individuals, protect the environment, and promote
              social & economic development.
            </p>
            {/* SDGs moved to respective pages */}
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Taraji Health care",
      description:
        "Providing Quality and Affordable Healthcare throughout Africa with a vision for social and economic balance within the Community.",
      image: oxyworldPsaImg1,
      gradient: "from-blue-500 to-cyan-500",
      link: "/taraji-healthcare",
    },
    {
      title: "Taraji Sunlux Energy",
      description:
        "Providing Quality Renewable Energy and Technology through renewable energy such as solar bio-fuel among other solutions.",
      image: sunlux1,
      gradient: "from-green-500 to-emerald-500",
      link: "/taraji-sunlux-energy",
    },
    {
      title: "Taraji Agri",
      description:
        "Optimizing agricultural productivity while preserving the natural environment, and ensuring the highest quality of agricultural products.",
      image: tarajiAgri2_5,
      gradient: "from-blue-500 to-green-500",
      link: "/taraji-agri",
    },
    {
      title: "Taraji Foundation",
      description:
        "Empowering communities by addressing their needs with a focus on food, employment, affordable energy and preventative healthcare.",
      image: foundationImg2,
      gradient: "from-emerald-500 to-blue-500",
      link: "/taraji-foundations",
    },
  ];

  return (
    <section id="services" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56 flex items-center justify-center bg-gradient-to-r from-blue-50 to-green-50">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-56 ${
                    service.title === "Taraji Sunlux Energy"
                      ? "object-contain bg-white"
                      : "object-cover"
                  } rounded-t-2xl shadow-md border-b-4 border-blue-100 transition-transform duration-300 hover:scale-105`}
                  style={
                    service.title === "Taraji Sunlux Energy"
                      ? { background: "#fff" }
                      : {}
                  }
                />
                <div
                  className={`absolute inset-0 rounded-t-2xl pointer-events-none`}
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(0,0,0,0.10) 0%,rgba(0,0,0,0.05) 100%)",
                  }}
                ></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300"
                  onClick={() => navigate(service.link)}
                >
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
      image: noelImg,
      // Contact info removed for Noel
    },
    {
      name: "Sherry Seepersad",
      role: "Managing Director, Taraji Health Care",
      image: sherryImg,
      whatsapp: "+1(868)788-2753",
      linkedin: "https://www.linkedin.com/in/sherry-seepersad-38402049/",
      email: "s.seepersad@taraji-quest.com",
    },
    {
      name: "Kathy Awuor",
      role: "SALES & MARKETING EXECUTIVE",
      image: kathyImg,
      whatsapp: "+254 723 453 352",
      linkedin: "https://www.linkedin.com/in/kathy-stacy-955461257/",
      email: "k.awuor@taraji-quest.com",
    },
    {
      name: "Aidahbani Wanjiru",
      role: "ACCOUNTING & FINANCE",
      image: aidahImg,
      whatsapp: "+254 725 889 853",
      linkedin: "https://www.linkedin.com/in/aidahbani-wanjiru-4a54b2247/",
      email: "a.wanjiru@taraji-quest.com",
    },
    {
      name: "Nicholas Bwalley",
      role: "SOFTWARE ENGINEER & WEBSITE DEVELOPER",
      image: nickImg,
      whatsapp: "+254 714 394 332",
      linkedin: "https://www.linkedin.com/in/nick-bwalley-49220a269/",
      email: "nickbiiybwalley@gmail.com",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {member.role}
              </p>
              {/* Contact Icons */}
              {member.name !== "Noel Ikiara" && (
                <div className="flex justify-center items-center gap-4 mt-4">
                  {/* WhatsApp Icon */}
                  {member.whatsapp && (
                    <a
                      href={`https://wa.me/${member.whatsapp.replace(
                        /[^\d]/g,
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md"
                      title={`Chat with ${member.name} on WhatsApp`}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                      </svg>
                    </a>
                  )}
                  {/* LinkedIn Icon */}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transition-colors shadow-md"
                      title={`View ${member.name} on LinkedIn`}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  {/* Email Icon */}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-md"
                      title={`Email ${member.name}`}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
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
    { name: "Oxyworld-psa Medisam Medikal", logo: oxyworldPartner },
    { name: "Inlux Solar Partner", logo: inluxSolarLogo },
    { name: "Sun-In-One", logo: sunInOneLogo },
    { name: "Max International", logo: maxInternationalLogo },
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 min-w-48 flex flex-col items-center border border-blue-100"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 w-auto object-contain mb-4 drop-shadow-md transition-transform duration-300 hover:scale-105"
                style={{ maxWidth: "180px" }}
              />
              <div className="text-center">
                <div className="text-lg font-bold text-gray-700">
                  {partner.name}
                </div>
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
    <section
      id="cta"
      className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready To Work with Us For Social and Economic Impact?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Value proposition to: Communities, Financiers, Donors Local and
          National Government
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
            <img
              src={tarajiLogo}
              alt="Taraji Quest Logo"
              className="h-12 w-auto mr-3 drop-shadow-lg"
              style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.25))" }}
            />
            <span className="text-2xl font-bold text-blue-400">
              Taraji Quest
            </span>
          </div>

          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Quest for social & economic impact and community development through
            sustainable practices
          </p>

          {/* Social Media */}
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://wa.me/+18687882753"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              title="Chat with us on WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sherry-seepersad-38402049/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              title="Follow us on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          <div className="text-gray-500 text-sm">
            © 2025 Taraji Quest. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

// Contact Section Component for Pillar Pages
const ContactSection = ({ contacts }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Contact Our Team
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with our experts for more information
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-blue-100"
            >
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
                  <img
                    src={contact.image}
                    alt={contact.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {contact.name}
                </h3>
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                  {contact.role}
                </p>
              </div>

              <div className="space-y-4">
                {contact.whatsapp && (
                  <a
                    href={`https://wa.me/${contact.whatsapp.replace(
                      /[^\d]/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-md"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                    </svg>
                    <span>WhatsApp: {contact.whatsapp}</span>
                  </a>
                )}

                {contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center justify-center gap-3 bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z" />
                    </svg>
                    <span>Email: {contact.email}</span>
                  </a>
                )}

                {contact.linkedin && (
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-blue-700 text-white px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300 shadow-md"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LinkedIn Profile</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main App Component
function MainApp() {
  const [currentSection, setCurrentSection] = useState("home");
  const location = useLocation();

  // Function to handle scroll and detect current section
  const handleScroll = () => {
    const sections = [
      "home",
      "about",
      "pillars",
      "services",
      "team",
      "partners",
      "cta",
      "contact",
    ];
    const scrollPosition = window.scrollY + 100; // Offset for better detection

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        setCurrentSection(sections[i]);
        break;
      }
    }
  };

  // Add scroll event listener
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to team if navigated with state
  React.useEffect(() => {
    if (location.state && location.state.scrollTo === "team") {
      const section = document.getElementById("team");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <div className="App">
      <Navigation currentSection={currentSection} />
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

const FoodAndBeverages = () => (
  <div className="App bg-gray-50">
    <Navigation currentSection={"food-beverages"} />
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmV2ZXJhZ2V8ZW58MHx8fHwxNzUyMzUwODA0fDA&ixlib=rb-4.1.0&q=85')`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Food & Beverages
        </h1>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white border-opacity-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Coming Soon
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            We're cooking up something amazing! Our Food & Beverages division is
            currently in development.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            Stay tuned for innovative culinary solutions and sustainable food
            practices.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/taraji-healthcare" element={<TarajiHealthCare />} />
        <Route path="/taraji-foundations" element={<TarajiFoundation />} />
        <Route path="/taraji-sunlux-energy" element={<TarajiSunluxEnergy />} />
        <Route path="/taraji-agri" element={<TarajiAgri />} />
        <Route path="/food-beverages" element={<FoodAndBeverages />} />
      </Routes>
    </Router>
  );
}

export default App;
