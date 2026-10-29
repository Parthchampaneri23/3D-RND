import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-white">
      <SpaceBackground />
      <Navbar />
      
      <PageBanner
        title="OUR SERVICES"
        breadcrumb="SERVICES"
      />

      <main className="relative z-10">
        <section className="py-[50px] px-6 sm:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 font-[family-name:var(--font-jakarta)]">
              What We Offer
            </h2>
            <p className="text-white/70 font-[family-name:var(--font-jakarta)]">
              Services content goes here...
            </p>
          </div>
        </section>
      </main>

      <RnDFooter />
    </div>
  );
}
