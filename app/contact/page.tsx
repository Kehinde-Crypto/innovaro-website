"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Clock, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get In Touch</h1>
              <p className="text-xl text-foreground/70">
                We'd love to hear from you. Let's discuss how we can help transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="w-full py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="flex flex-col items-center text-center p-8 rounded-xl border border-border hover:border-accent/50 transition">
                <Mail className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-primary mb-2">Email</h3>
                <a
                  href="mailto:innovaroglobalservices@gmail.com"
                  className="text-foreground/70 hover:text-accent transition"
                >
                  innovaroglobalservices@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-8 rounded-xl border border-border hover:border-accent/50 transition">
                <Phone className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-primary mb-2">Phone</h3>
                <a href="tel:+2348053367426" className="text-foreground/70 hover:text-accent transition">
                  +234 80 5336 7426
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-8 rounded-xl border border-border hover:border-accent/50 transition">
                <Clock className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-primary mb-2">Response Time</h3>
                <p className="text-foreground/70">Within 24 hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="w-full py-20 md:py-28 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Send us a Message</h2>
                <p className="text-foreground/70">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-primary">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-primary">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-primary">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-primary">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+234 80 5336 7426"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-primary">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">Consulting Services</option>
                    <option value="digital">Digital Transformation</option>
                    <option value="implementation">Implementation Services</option>
                    <option value="support">Support & Maintenance</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-primary">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {submitted && (
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent text-accent">
                    <p className="font-medium">Thank you! We've received your message and will get back to you soon.</p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={submitted}
                >
                  {submitted ? "Message Sent!" : "Send Message"} <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ / Additional Info */}
        <section className="w-full py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "What's the typical response time?",
                    a: "We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly.",
                  },
                  {
                    q: "Do you offer free initial consultations?",
                    a: "Yes! We offer complimentary initial consultations to discuss your business needs and how we can help.",
                  },
                  {
                    q: "What industries do you serve?",
                    a: "We have expertise across 50+ industries including finance, tech, retail, manufacturing, healthcare, and more.",
                  },
                  {
                    q: "Can you work with businesses of any size?",
                    a: "Absolutely. From startups to Fortune 500 companies, we tailor our solutions to fit any organization.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-lg border border-border hover:border-accent/50 transition">
                    <h3 className="font-semibold text-primary mb-2 text-lg">{item.q}</h3>
                    <p className="text-foreground/70">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Contact us today and let's discuss how Innovaro Global Services can help you achieve your goals.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
