import Navigation from "@/shared/components/layout/Navigation";
import Footer from "@/shared/components/layout/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  ContactHero,
  ContactInfoCard,
  ContactForm,
  SuccessMessage,
} from "../components";
import { contactInfoItems, contactPageContent } from "../constants";
import { useContactForm } from "../hooks";

const ContactPage = () => {
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm,
    validateField,
  } = useContactForm();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <ContactHero />

        {/* Contact Content */}
        <section className="py-16 px-4">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfoItems.map((item) => (
                  <ContactInfoCard key={item.id} item={item} />
                ))}
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-gradient-card border-border shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      {contactPageContent.form.title}
                    </CardTitle>
                    <CardDescription>
                      {contactPageContent.form.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <SuccessMessage onReset={resetForm} />
                    ) : (
                      <ContactForm
                        formData={formData}
                        errors={errors}
                        isSubmitting={isSubmitting}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        onBlur={validateField}
                      />
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
