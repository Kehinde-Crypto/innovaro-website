import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Lightbulb, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Innovaro Global Services</h1>
              <p className="text-xl text-foreground/70">
                Leading the transformation of global enterprises through innovative consulting and comprehensive
                solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="w-full py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Journey</h2>
                <p className="text-foreground/70 leading-relaxed">
                  Founded with a vision to revolutionize enterprise consulting, Innovaro Global Services has established
                  itself as a trusted partner for organizations worldwide. We combine cutting-edge expertise with
                  innovative methodologies to deliver transformative solutions.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Our commitment to excellence and customer success has enabled us to work with Fortune 500 companies,
                  ambitious startups, and organizations across multiple industries and continents.
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-bold text-accent mb-4 opacity-50">IN</div>
                  <p className="text-primary font-semibold text-lg">Global Reach</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="w-full py-20 md:py-28 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Mission & Values</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition">
                <Lightbulb className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Innovation</h3>
                <p className="text-foreground/70">
                  We continuously seek new solutions and approaches to solve complex business challenges with creativity
                  and forward-thinking strategies.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition">
                <Globe className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Global Excellence</h3>
                <p className="text-foreground/70">
                  Operating across multiple markets, we deliver world-class solutions tailored to local needs with
                  international standards of quality.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition">
                <CheckCircle className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Integrity</h3>
                <p className="text-foreground/70">
                  We build lasting relationships based on trust, transparency, and unwavering commitment to our clients'
                  success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Why Choose Innovaro?</h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Proven Track Record",
                    description:
                      "Successfully completed 200+ projects across diverse industries with consistent delivery of measurable ROI.",
                  },
                  {
                    title: "Expert Team",
                    description:
                      "Our consultants bring decades of combined experience from leading global organizations and specialized domains.",
                  },
                  {
                    title: "Customized Solutions",
                    description:
                      "We don't believe in one-size-fits-all approaches. Every strategy is tailored to your unique business needs.",
                  },
                  {
                    title: "24/7 Support",
                    description:
                      "Our dedicated support team ensures seamless implementation and ongoing success of all our engagements.",
                  },
                  {
                    title: "Technology-Driven",
                    description:
                      "Leveraging AI, analytics, and cloud technologies to accelerate transformation and drive competitive advantage.",
                  },
                  {
                    title: "Scalable Impact",
                    description:
                      "From startups to enterprises, our solutions scale with your business growth and evolving requirements.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-6 rounded-lg border border-border/50 hover:border-accent/50 transition"
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Ready to partner with Innovaro for your next transformation initiative?
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get In Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
