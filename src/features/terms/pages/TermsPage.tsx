import Navigation from "@/shared/components/layout/Navigation";
import Footer from "@/shared/components/layout/Footer";
import {
  TermsHero,
  TermsIntro,
  TermsSectionCard,
  TermsGoverningLaw,
  TermsContact,
} from "../components";
import { termsSections } from "../constants";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <TermsHero />

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <TermsIntro />

            {/* Terms Sections */}
            <div className="space-y-6">
              {termsSections.map((section, index) => (
                <TermsSectionCard key={index} section={section} />
              ))}
            </div>

            <TermsGoverningLaw />
            <TermsContact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
