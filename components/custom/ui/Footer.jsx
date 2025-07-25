import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowUpRight,
  Factory,
  Zap,
} from "lucide-react";
import { companyData, navigationData } from "@/data";
import { Logo } from "../nav/logo";

export default function Footer() {
  const { company, contact, production } = companyData;
  const { footerLinks } = navigationData;

  return (
    <footer className="border-t bg-gray-50">
      <div className="container-width px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info - Enhanced */}
          <div className="space-y-4 lg:col-span-1">
            <div className="space-y-3">
              <Logo />
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-primary/80">
                  <Factory size={12} />
                  <span>Bangladesh-Korea Joint Venture</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {company.description}
            </p>
            <div className="pt-2">
              <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                <Zap size={14} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm font-medium text-foreground/90 italic leading-relaxed">
                  "{company.tagline}"
                </p>
              </div>
            </div>
          </div>

          {/* Navigation - Single Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
              <div className="w-1 h-4 bg-primary rounded-full"></div>
              Navigation
            </h4>
            <nav className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 py-1"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 group-hover:bg-primary transition-colors duration-200"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {link.name}
                  </span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
              <div className="w-1 h-4 bg-primary rounded-full"></div>
              Our Services
            </h4>
            <div className="space-y-2">
              {footerLinks.services.slice(0, 4).map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground py-1"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{service}</span>
                </div>
              ))}
              <div className="pt-1">
                <div className="flex items-center gap-2 text-xs text-primary/70 font-medium">
                  <Factory size={12} />
                  <span>
                    Annual Capacity: {production.totalAnnualCapacity} pairs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info - Enhanced */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
              <div className="w-1 h-4 bg-primary rounded-full"></div>
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  contact.address.full
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted/50"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <MapPin size={14} className="text-primary" />
                </div>
                <span className="flex-1 leading-relaxed">
                  {contact.address.full}
                </span>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted/50"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                <span className="font-medium">{contact.phone}</span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted/50"
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
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted/50"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Globe size={14} className="text-primary" />
                </div>
                <span>{contact.website}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section - Enhanced */}
      <div className="mt-4 pt-8">
        <div className="bg-slate-900 p-4 dark:bg-slate-950 text-center">
          <p className="text-xs text-slate-300">
            © {new Date().getFullYear()} Powered by{" "}
            <Link
              href="https://www.nurasys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover transition-colors"
            >
              NURASYS
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
