import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Financial Services Transformation",
      category: "Digital Transformation",
      description:
        "Comprehensive digital overhaul for a major financial institution, resulting in 40% operational efficiency improvement.",
      tags: ["Cloud Migration", "Process Automation", "Analytics"],
      impact: "40% efficiency increase",
      client: "Global Finance Corp",
    },
    {
      id: 2,
      title: "E-Commerce Platform Scaling",
      category: "Technology",
      description:
        "Built and scaled an enterprise e-commerce platform supporting 10M+ daily transactions across multiple regions.",
      tags: ["Scalability", "Architecture", "Performance"],
      impact: "10M transactions/day",
      client: "Global Retail Solutions",
    },
    {
      id: 3,
      title: "Enterprise Resource Planning",
      category: "Implementation",
      description:
        "Implemented integrated ERP system for manufacturing conglomerate, streamlining supply chain operations.",
      tags: ["ERP Implementation", "Integration", "Change Management"],
      impact: "25% cost savings",
      client: "Industrial Manufacturing Inc",
    },
    {
      id: 4,
      title: "AI-Powered Analytics Platform",
      category: "Innovation",
      description:
        "Developed cutting-edge analytics platform leveraging machine learning for predictive business insights.",
      tags: ["Machine Learning", "Data Science", "Analytics"],
      impact: "Enhanced decision-making",
      client: "Data Tech Solutions",
    },
    {
      id: 5,
      title: "Cybersecurity Infrastructure",
      category: "Security",
      description:
        "Designed and implemented comprehensive security framework protecting multi-national organization's digital assets.",
      tags: ["Security", "Compliance", "Infrastructure"],
      impact: "Zero breaches",
      client: "Enterprise Security Corp",
    },
    {
      id: 6,
      title: "Customer Experience Modernization",
      category: "Strategy",
      description:
        "Transformed customer journey across all touchpoints, resulting in 35% increase in satisfaction scores.",
      tags: ["UX/UI", "Strategy", "Implementation"],
      impact: "35% satisfaction increase",
      client: "Service Industry Leader",
    },
  ]

  const categories = [
    "All",
    "Digital Transformation",
    "Technology",
    "Implementation",
    "Innovation",
    "Security",
    "Strategy",
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Portfolio</h1>
              <p className="text-xl text-foreground/70">
                Explore our track record of transformative projects and successful client partnerships across
                industries.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="w-full py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">Featured Projects</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 hover:shadow-lg transition-all group"
                >
                  {/* Project Header */}
                  <div className="h-32 bg-gradient-to-br from-accent/30 to-primary/20 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                      <div className="absolute top-4 right-4 w-20 h-20 bg-accent rounded-full mix-blend-multiply filter blur-lg"></div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <Badge variant="outline" className="border-accent/50 text-accent text-xs">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-primary leading-snug">{project.title}</h3>
                    </div>

                    <p className="text-sm text-foreground/70">{project.description}</p>

                    {/* Impact */}
                    <div className="pt-3 border-t border-border/50">
                      <p className="text-sm font-medium text-accent mb-3">Key Impact: {project.impact}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Client & CTA */}
                    <div className="pt-3 flex items-center justify-between">
                      <p className="text-xs text-foreground/60">{project.client}</p>
                      <ExternalLink size={16} className="text-accent opacity-60 group-hover:opacity-100 transition" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="w-full py-20 md:py-28 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">Our Impact by Numbers</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    number: "200+",
                    label: "Successful Projects",
                  },
                  {
                    number: "95%",
                    label: "Client Satisfaction",
                  },
                  {
                    number: "50+",
                    label: "Industries Served",
                  },
                  {
                    number: "15+",
                    label: "Countries Worldwide",
                  },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                    <p className="text-foreground/70 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Experience */}
        <section className="w-full py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Industry Expertise</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                "Financial Services",
                "Technology & SaaS",
                "Retail & E-Commerce",
                "Manufacturing",
                "Healthcare",
                "Telecommunications",
                "Energy & Utilities",
                "Government & Public Sector",
              ].map((industry, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 hover:bg-accent/5 transition text-center"
                >
                  <p className="font-medium text-primary">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Let's discuss how our proven expertise can deliver measurable impact for your organization.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition font-medium">
                Start Your Project <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
