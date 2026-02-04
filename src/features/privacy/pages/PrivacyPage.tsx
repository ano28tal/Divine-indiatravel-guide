import Navigation from "@/shared/components/layout/Navigation";
import Footer from "@/shared/components/layout/Footer";
import {
  PrivacyHero,
  PrivacyIntro,
  PrivacySectionCard,
  PrivacyContact,
} from "../components";
import { privacySections } from "../constants";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <PrivacyHero />

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <PrivacyIntro />

            {/* Policy Sections */}
            <div className="space-y-6">
              {privacySections.map((section, index) => (
                <PrivacySectionCard key={index} section={section} />
              ))}
            </div>

            <PrivacyContact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
