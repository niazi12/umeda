import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/custom/ui/icon";
import { Section } from "@/components/custom/ui/section";
import { Heading } from "@/components/custom/ui/heading";

export function CallToAction() {
  return (
    <Section background="card" className="text-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative space-y-8">
        <div className="space-y-4">
          <Heading level={2} size="2xl" gradient>
            Ready to Transform Your Business?
          </Heading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join 500+ companies that trust Neurasys to deliver innovative technology solutions. 
            Let's discuss how we can accelerate your digital transformation journey.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" asChild>
            <Link href="/contact">
              Start Your Project
              <Icon name="arrowRight" size={24} />
            </Link>
          </Button>
          <Button variant="glass" size="xl" asChild>
            <Link href="/services">
              Explore Services
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="phone" size={24} className="text-white" />
            </div>
            <div className="text-sm text-muted-foreground">Call us directly</div>
            <div className="font-semibold">+44 20 7946 0958</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="mail" size={24} className="text-white" />
            </div>
            <div className="text-sm text-muted-foreground">Email us</div>
            <div className="font-semibold">hello@neurasys.co.uk</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="calendar" size={24} className="text-white" />
            </div>
            <div className="text-sm text-muted-foreground">Book a meeting</div>
            <div className="font-semibold">Free consultation</div>
          </div>
        </div>
      </div>
    </Section>
  );
}