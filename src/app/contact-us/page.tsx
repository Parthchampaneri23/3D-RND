import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import ContactSection from "@/components/ContactSection";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CursorGlow from "@/components/CursorGlow";

export default function ContactUsPage() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-white">
      {/* Interactive Cursor Follower Effect */}
      <CursorGlow />

      <SpaceBackground />
      <Navbar />
      
      <PageBanner
        title="GET IN TOUCH"
        breadcrumb="CONTACT US"
      />

      <main className="relative z-10">
        <ContactSection />
      </main>

      <RnDFooter />
    </div>
  );
}
