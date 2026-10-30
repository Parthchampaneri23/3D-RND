import SpaceBackground from "@/components/SpaceBackground";
import Navbar from "@/components/Navbar";
import GSAPScrollAnimations from "@/components/GSAPScrollAnimations";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import ServiceUniverseSection from "@/components/ServiceUniverseSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import IndustriesServedSection from "@/components/IndustriesServedSection";
import CosmicProcessSection from "@/components/CosmicProcessSection";
import ResultsTrustSection from "@/components/ResultsTrustSection";
import CreativeShowreelSection from "@/components/CreativeShowreelSection";
import InsightsSection from "@/components/InsightsSection";
import MissionCTASection from "@/components/MissionCTASection";
import RnDFooter from "@/components/RnDFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black">
      {/* Global GSAP ScrollTrigger Animations for Headings, Images & Grids */}
      <GSAPScrollAnimations />

      {/* Interactive Galactic Particle Starfield Canvas */}
      <SpaceBackground />

      {/* 1.1 Header: Logo, navigation, service mega-menu, contact CTA */}
      <Navbar />

      <main className="relative z-10">
        {/* 1.2 Hero section: Headline, supporting copy, astronaut mascot, animated orbital visuals, primary and secondary CTAs */}
        <HeroSection />

        {/* 1.3 Brand introduction: Brief introduction to RnD Technosoft and its integrated service model */}
        <AboutUsSection />

        {/* 1.4 Service universe: Technology, Digital Marketing, Branding & Design, Media Production */}
        <ServiceUniverseSection />

        {/* 1.5 Featured projects: Selected websites, applications, campaigns, branding and media projects */}
        <FeaturedProjectsSection />

        {/* 1.6 Why choose RnD: Differentiators, process, client collaboration and delivery approach */}
        <WhyChooseSection />

        {/* 1.7 Industries served: Industry cards linked to dedicated industry pages */}
        <IndustriesServedSection />

        {/* 1.8 Our process: Discover, strategize, create, develop, launch and optimize */}
        <CosmicProcessSection />

        {/* 1.9 Results and trust: Approved client logos, verified metrics, testimonials and experience */}
        {/* <ResultsTrustSection /> */}

        {/* 1.10 Creative showreel: Videography, photography, brand films and selected campaigns */}
        <CreativeShowreelSection />

        {/* 1.11 Insights: Latest blog posts and useful industry content */}
        <InsightsSection />

        {/* 1.12 CTA section: “Ready for Your Next Big Mission?” with enquiry button */}
        <MissionCTASection />
      </main>

      {/* 1.13 Footer: Service links, contact details, social links, policies and company information */}
      <RnDFooter />
    </div>
  );
}
