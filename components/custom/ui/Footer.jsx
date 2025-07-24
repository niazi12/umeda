import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from "lucide-react";
import { companyData, navigationData } from "@/data";
import { Logo } from "../nav/logo";

export default function Footer() {
  const { company, contact } = companyData;
  const { footerLinks } = navigationData;

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t">
      <div className="container-width px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Company Info */}
          <div className="space-y-3 lg:col-span-1">
            <div className="space-y-2">
              <Logo />
              <p className="text-xs text-muted-foreground mt-0.5">{company.name}</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {company.description}
            </p>
            <div className="pt-1">
              <p className="text-sm font-medium text-foreground/80 italic">
                "{company.tagline}"
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Navigation</h4>
            <nav className="grid grid-cols-2 gap-1.5">
              {footerLinks.quickLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {link.name}
                  </span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-2.5">
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(contact.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin size={14} className="text-primary" />
                </div>
                <span className="flex-1 leading-relaxed">{contact.address.full}</span>
              </a>
              
              <a 
                href={`tel:${contact.phone}`} 
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                <span>{contact.phone}</span>
              </a>
              
              <a 
                href={`mailto:${contact.email}`} 
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={14} className="text-primary" />
                </div>
                <span>{contact.email}</span>
              </a>
              
              <a 
                href={`https://${contact.website}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Globe size={14} className="text-primary" />
                </div>
                <span>{contact.website}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Simplified */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}