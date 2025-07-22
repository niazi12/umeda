import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Icon } from "@/components/custom/ui/icon";
import { Section } from "@/components/custom/ui/section";
import { Heading } from "@/components/custom/ui/heading";
import { companyData } from "@/data";
import { ContactForm } from "@/components/landing/contact/ContactForm";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: "mapPin",
    title: "Address",
    details: companyData.contact.address.full,
    action: "View on Map",
    actionLink: `https://maps.google.com?q=${encodeURIComponent(companyData.contact.address.full)}`
  },
  {
    icon: "phone",
    title: "Phone",
    details: companyData.contact.phone,
    action: "Call Now",
    actionLink: `tel:${companyData.contact.phone}`
  },
  {
    icon: "mail",
    title: "Email",
    details: companyData.contact.email,
    action: "Send Email",
    actionLink: `mailto:${companyData.contact.email}`
  },
  {
    icon: "globe",
    title: "Website",
    details: companyData.contact.website,
    action: "Visit Website",
    actionLink: `https://${companyData.contact.website}`
  }
];

const quickFacts = [
  {
    title: "6.24M+ pairs annually",
    subtitle: "High production capacity",
    value: companyData.production.totalAnnualCapacity,
    icon: "trendingUp"
  },
  {
    title: "Global export experience",
    subtitle: `${companyData.production.exportMarkets} international markets`,
    value: "3 Markets",
    icon: "globe"
  },
  {
    title: "Premium raw materials",
    subtitle: "Quality sourcing from trusted suppliers",
    value: `${companyData.production.rawMaterials} Materials`,
    icon: "package"
  },
  {
    title: "RAJUK approved facility",
    subtitle: "Government certified manufacturing",
    value: "Certified",
    icon: "shield"
  }
];

export default function Contact() {
  return (
    <>
      {/* Hero Section with Background Boxes */}
      <Section padding="xl" className="relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-20">
          <Heading level={1} size="3xl" className={cn("text-white")}>
            Contact {companyData.company.name}
          </Heading>
          <p className="text-xl md:text-2xl leading-relaxed text-neutral-300">
            Get in touch with our team to discuss your socks manufacturing requirements. 
            We're here to provide comprehensive B2B solutions tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-300">
            <span className="flex items-center gap-2">
              <Icon name="checkCircle" size={16} className="text-blue-400" />
              24-hour response guarantee
            </span>
            <span className="flex items-center gap-2">
              <Icon name="checkCircle" size={16} className="text-blue-400" />
              Free consultation
            </span>
            <span className="flex items-center gap-2">
              <Icon name="checkCircle" size={16} className="text-blue-400" />
              Custom solutions
            </span>
          </div>
        </div>
      </Section>

      {/* Contact Information Cards */}
      <Section className="bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="group text-center hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:scale-105 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                  <Icon name={info.icon} size={28} className="text-white" />
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{info.details}</p>
                <Button variant="outline" size="sm" asChild className="text-xs group-hover:bg-primary group-hover:text-white transition-colors">
                  <a href={info.actionLink} target="_blank" rel="noopener noreferrer">
                    {info.action}
                    <Icon name="externalLink" size={14} className="ml-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Main Content Section */}
      <Section className="bg-gray-50 dark:bg-gray-900/50">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form - Takes up 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-primary mb-4">Let's Start a Conversation</h2>
                  <p className="text-muted-foreground text-lg">
                    Tell us about your manufacturing needs and we'll create a custom solution for your business.
                  </p>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>

          {/* Information Panel - Takes up 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Business Hours */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mr-3">
                  <Icon name="clock" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {companyData.contact.businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-blue-200/50 dark:border-blue-700/50 last:border-0">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{schedule.day}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center mr-3">
                  <Icon name="trendingUp" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Capabilities</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="text-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">6.24M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Annual Production</div>
                </div>
                <div className="text-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Export Markets</div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 border border-orange-200 dark:border-orange-800">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mr-3">
                  <Icon name="zap" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Need Immediate Help?</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                For urgent inquiries, reach out to us directly:
              </p>
              <div className="space-y-3">
                <a 
                  href={`tel:${companyData.contact.phone}`}
                  className="flex items-center space-x-3 text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors group"
                >
                  <Icon name="phone" size={16} className="group-hover:scale-110 transition-transform" />
                  <span>{companyData.contact.phone}</span>
                </a>
                <a 
                  href={`mailto:${companyData.contact.email}`}
                  className="flex items-center space-x-3 text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors group"
                >
                  <Icon name="mail" size={16} className="group-hover:scale-110 transition-transform" />
                  <span>{companyData.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-white dark:bg-gray-900">
        <div className="text-center mb-12">
          <Heading level={2} size="2xl" className="text-gray-900 dark:text-white mb-4">
            Why Choose {companyData.company.shortName}?
          </Heading>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {companyData.company.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickFacts.map((fact, index) => (
            <div key={index} className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={fact.icon} size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{fact.title}</h4>
              <p className="text-sm text-muted-foreground">{fact.subtitle}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications Section */}
      <Section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="text-center mb-12">
          <Heading level={2} size="2xl" className="text-white mb-4">
            Our Certifications & Standards
          </Heading>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We maintain the highest standards in manufacturing with official certifications and global engineering partnerships.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {companyData.certifications.map((cert, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="award" size={24} className="text-white" />
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white text-lg">{cert.name}</h4>
                <p className="text-gray-300">{cert.description}</p>
                <span className="inline-block text-xs bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full border border-yellow-400/30">
                  {cert.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Production Capacity Highlight */}
      <Section className="bg-primary text-white">
        <div className="text-center space-y-8">
          <Heading level={2} size="3xl" className="text-white">
            Production Capacity & Expertise
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4 p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/20">
              <div className="text-4xl font-bold text-white">{companyData.production.terryPlainCapacity.toLocaleString()}</div>
              <p className="text-primary-foreground/80">Terry & Plain Socks Annual Capacity</p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/20">
              <div className="text-4xl font-bold text-white">{companyData.production.toeSocketsCapacity.toLocaleString()}</div>
              <p className="text-primary-foreground/80">Toe Socks Annual Capacity</p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/20">
              <div className="text-4xl font-bold text-white">{companyData.production.exportMarkets}+</div>
              <p className="text-primary-foreground/80">International Export Markets</p>
            </div>
          </div>
          <Button size="lg" variant="secondary" className="mt-8">
            Learn More About Our Capabilities
            <Icon name="arrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </Section>
    </>
  );
}