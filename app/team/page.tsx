import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"

export default function TeamPage() {
  const executives = [
    {
      id: 1,
      name: "TonyeWinston",
      role: "Chief Executive Officer",
      bio: "5+ years of strategic leadership in global distribution with expertise in strategic operations and global business expansion. Proven track record in leading software and operational excellence across international markets.",
      expertise: ["Strategic Leadership", "Global Operations", "Software Infrastructure"],
      image: "/olubunmi-browns-kehinde.jpg",
    },
    {
      id: 2,
      name: "Olubunmi-Browns Kehinde",
      role: "Blockchain Engineer, AI Engineer & Cloud Engineer",
      bio: "4+ years of expertise in blockchain technology with 1 year specialized in AI. Technical proficiency in smart contract development with Solidity and Rust, combined with cloud infrastructure expertise.",
      expertise: ["Blockchain", "Smart Contracts", "AI/ML", "Cloud Engineering"],
      image: "/tonye-winston-ceo.jpg",
    },
    {
      id: 3,
      name: "Amas Albert",
      role: "Game Developer",
      bio: "Experienced game developer with expertise in Unity framework development. Proficient in C# and C++ programming languages, creating immersive gaming experiences across multiple platforms.",
      expertise: ["Unity Framework", "C#", "C++", "Game Development"],
      image: "/amas-albert-game-developer.jpg",
    },
  ]

  const team = [
    {
      id: 4,
      name: "Wisdom Chizoba",
      role: "Full-Stack Web Developer",
      bio: "Expert full-stack developer specializing in modern web technologies. Proficient in Next.js for frontend development and Node.js for backend development with comprehensive knowledge of development tools and frameworks.",
      expertise: ["Next.js", "Node.js", "Full-Stack Development", "Web Technologies"],
      image: "/wisdom-chizoba-web-developer.jpg",
    },
    {
      id: 5,
      name: "Iseleye",
      role: "Cybersecurity Specialist",
      expertise: ["Network Security", "Penetration Testing", "Threat Analysis"],
      image: "/images/photo-2025-11-23-17-19-24.jpg",
    },
    {
      id: 6,
      name: "Simon Ani",
      role: "Full-Stack & Software Engineer",
      bio: "Versatile full-stack software engineer with comprehensive expertise in both frontend and backend technologies. Skilled in building scalable applications with modern development practices and clean code architecture.",
      expertise: ["Full-Stack Development", "Software Architecture", "Clean Code", "DevOps"],
      image: "/images/photo-2025-11-23-17-19-27.jpg",
    },
    {
      id: 7,
      name: "Ayendi Simeon",
      role: "Backend Engineer",
      bio: "Specialized backend engineer focused on building robust, scalable server-side applications. Expert in API development, database optimization, and system architecture for enterprise solutions.",
      expertise: ["Backend Development", "API Design", "Database Architecture", "System Design"],
      image: "/images/photo-2025-11-23-17-19-30.jpg",
    },
    {
      id: 8,
      name: "Emma Davis",
      role: "Senior Data Scientist",
      expertise: ["Data Science", "Analytics", "Machine Learning"],
      image: "/professional-woman-scientist.jpg",
    },
    {
      id: 9,
      name: "Robert Kumar",
      role: "Infrastructure Engineer",
      expertise: ["Cloud Infrastructure", "DevOps", "Security"],
      image: "/professional-man-engineer.jpg",
    },
    {
      id: 10,
      name: "Jennifer Park",
      role: "Customer Success Director",
      expertise: ["Client Relations", "Implementation", "Support"],
      image: "/professional-woman-customer-success.jpg",
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Meet Our Team</h1>
              <p className="text-xl text-foreground/70">
                Talented professionals dedicated to delivering exceptional results and transforming businesses
                worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Executive Team */}
        <section className="w-full py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">Leadership Team</h2>

            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20">
              {executives.map((executive) => (
                <div key={executive.id} className="group">
                  {/* Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-accent/20 to-primary/20">
                    <img
                      src={executive.image || "/placeholder.svg"}
                      alt={executive.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="flex gap-3">
                        <button className="p-2 rounded-full bg-accent text-accent-foreground hover:scale-110 transition">
                          <Linkedin size={18} />
                        </button>
                        <button className="p-2 rounded-full bg-accent text-accent-foreground hover:scale-110 transition">
                          <Mail size={18} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-2xl font-bold text-primary mb-1">{executive.name}</h3>
                  <p className="text-accent font-semibold mb-3">{executive.role}</p>
                  <p className="text-foreground/70 text-sm mb-4">{executive.bio}</p>

                  {/* Expertise */}
                  <div className="flex flex-wrap gap-2">
                    {executive.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Team */}
        <section className="w-full py-20 md:py-28 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">More Team Members</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 hover:shadow-lg transition-all group"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-accent font-semibold text-sm mb-4">{member.role}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="w-full py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">What Drives Us</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Collaboration",
                  description:
                    "We work together across teams and with clients to achieve shared goals and drive innovation.",
                },
                {
                  title: "Excellence",
                  description:
                    "We pursue the highest standards in everything we do, from project delivery to customer service.",
                },
                {
                  title: "Growth",
                  description:
                    "We foster continuous learning and professional development for our team members and clients.",
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl border border-border bg-card hover:border-accent/50 transition text-center"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="w-full py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              We're always looking for talented professionals excited about making an impact. Check out our career
              opportunities.
            </p>
            <a
              href="mailto:innovaroglobalservices@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition font-medium"
            >
              View Career Opportunities
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
