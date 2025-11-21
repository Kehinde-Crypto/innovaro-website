import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent">
                <span className="text-primary font-bold">IN</span>
              </div>
              <span className="font-bold text-lg">Innovaro</span>
            </div>
            <p className="text-sm opacity-90">Professional consulting and global services for enterprise solutions.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-80 hover:opacity-100 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="opacity-80 hover:opacity-100 transition">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/team" className="opacity-80 hover:opacity-100 transition">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-accent" />
                <a href="mailto:innovaroglobalservices@gmail.com" className="opacity-80 hover:opacity-100 transition">
                  innovaroglobalservices@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-accent" />
                <a href="tel:+2348053367426" className="opacity-80 hover:opacity-100 transition">
                  +234 80 5336 7426
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>&copy; {currentYear} Innovaro Global Services. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
