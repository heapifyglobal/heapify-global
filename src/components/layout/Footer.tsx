import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter, Youtube, Mail, Facebook } from "lucide-react";
import logoImage from "@/assets/heapifyglobal.jpeg";
import { SOCIAL_LINKS } from "@/config/links";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Internships", path: "/internships" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src={logoImage}
                alt="Heapify Global"
                className="h-9 w-9 rounded-lg"
              />
              <span className="text-xl font-bold">
                Heapify <span className="text-primary">Global</span>
              </span>
            </Link>

            <p className="text-sm text-muted-foreground/80 max-w-xs mb-4">
              Product Engineering & Talent Innovation Company.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted/10 hover:bg-primary hover:text-primary-foreground transition"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground/80 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="flex items-center gap-2 text-sm text-muted-foreground/80">
              <Mail className="h-4 w-4" />
              heapifyglobal@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-muted/20 text-sm text-muted-foreground/60 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p>© 2026 Heapify Global. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-primary transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
