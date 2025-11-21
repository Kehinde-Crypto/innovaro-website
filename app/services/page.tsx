import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase, BarChart3, Zap, Shield, Users, Cloud, Code, TrendingUp, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Briefcase,
      title: "Strategic Consulting",
      description: "Expert guidance for business transformation, market expansion, and competitive positioning.",
      features: ["Business Strategy", "Market Analysis", "Growth Planning"],
    },
    {
      icon: BarChart3,
      title: "Digital Transformation",
      description: "Comprehensive solutions to modernize operations and embrace digital-first approaches.",
      features: ["Process Automation", "Cloud Migration", "Digital Integration"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Streamline operations and maximize efficiency through data-driven improvements.",
      features: ["Efficiency Analysis", "Cost Optimization", "Performance Metrics"],
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify and mitigate enterprise risks with comprehensive compliance frameworks.",
      features: ["Risk Assessment", "Compliance Audit", "Security Planning"],
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Guide your organization through transitions with proven change management methodologies.",
      features: ["Organizational Change", "Training Programs", "Change Strategy"],
    },
    {
      icon: Cloud,
      title: "IT Infrastructure",
      description: "Modern, scalable IT solutions designed for enterprise growth and reliability.",
      features: ["Cloud Architecture", "System Integration", "Tech Infrastructure"],
    },
  ]

  const additionalServices = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom applications and enterprise solutions built with cutting-edge technology stack.",
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Data-driven insights and analytics platforms to support informed decision-making.",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Services</h1>
              <p className="text-xl text-foreground/70">
                Comprehensive consulting and technology solutions tailored to drive your business forward.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="w-full py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">Core Services</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, idx) => {
                const Icon = service.icon
                return (
                  <div
                    key={idx}
                    className="bg-card border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-lg transition-all group"
                  >
                    <Icon className="w-14 h-14 text-accent mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                    <p className="text-foreground/70 mb-6">{service.description}</p>

                    <div className="space-y-2 pt-6 border-t border-border/50">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-sm text-foreground/60">
                          <CheckCircle size={16} className="text-accent flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="w-full py-20 md:py-28 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">Specialized Solutions</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {additionalServices.map((service, idx) => {
                const Icon = service.icon
                return (
                  <div
                    key={idx}
                    className="bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-all"
                  >
                    <Icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                    <p className="text-foreground/70">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="w-full py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Our Service Process</h2>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    description: "Understand your business, challenges, and goals",
                  },
                  {
                    step: "02",
                    title: "Strategy",
                    description: "Develop tailored solutions and roadmap",
                  },
                  {
                    step: "03",
                    title: "Implementation",
                    description: "Execute with precision and expertise",
                  },
                  {
                    step: "04",
                    title: "Optimization",
                    description: "Monitor, refine, and ensure success",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="bg-card border-2 border-accent/30 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-accent mb-3">{item.step}</div>
                      <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                      <p className="text-sm text-foreground/70">{item.description}</p>
                    </div>
                    {idx < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-accent/30"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Services */}
        <section className="w-full py-20 md:py-28 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Why Choose Our Services?
              </h2>

              <div className="space-y-4">
                {[
                  "Proven methodologies from years of enterprise experience",
                  "Dedicated teams focused on your specific challenges",
                  "Measurable outcomes and clear success metrics",
                  "Seamless integration with your existing systems",
                  "Ongoing support and continuous improvement",
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-lg bg-background border border-border/50 hover:border-accent/50 transition"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our services can transform your business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
