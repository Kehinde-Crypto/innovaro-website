import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Zap, Target, Users } from "lucide-react"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
                    Welcome to Innovaro
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
                    Global Solutions for Enterprise Growth
                  </h1>
                  <p className="text-lg text-foreground/70 max-w-lg">
                    We deliver innovative consulting and comprehensive services to transform your business and drive
                    success on a global scale.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                      Get Started <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-accent mb-4">IN</div>
                    <p className="text-primary font-semibold">Innovaro Global Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Innovaro?</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                We combine expertise, innovation, and dedication to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Fast & Efficient",
                  description: "Quick implementation and rapid deployment of solutions without compromising quality.",
                },
                {
                  icon: Target,
                  title: "Goal-Oriented",
                  description: "We focus on your business objectives and deliver measurable results every time.",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description:
                    "Highly skilled professionals with years of industry experience and proven track records.",
                },
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all"
                  >
                    <Icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Join hundreds of satisfied clients who have partnered with Innovaro for their global consulting needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Start Your Journey <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
