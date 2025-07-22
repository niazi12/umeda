import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { companyData, navigationData } from "@/data";


export default function Footer() {
  const { company, contact } = companyData;
  const { footerLinks } = navigationData;

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-primary-light">{company.shortName}</h3>
              <p className="text-sm text-muted-foreground">{company.name}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              {company.description}
            </p>
            <p className="text-sm font-medium text-accent">
              "{company.tagline}"
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  {contact.address.full}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href={`tel:${contact.phone}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={16} className="text-primary flex-shrink-0" />
                <a href={`https://${contact.website}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {contact.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 {company.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link, index) => (
                <Link key={index} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}