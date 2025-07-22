import { CardWrapper } from "@/components/custom/ui/card-wrapper";
import { Icon } from "../custom/ui/icon";
import { Section } from "../custom/ui/section";
import { Heading } from "../custom/ui/heading";

const features = [
  {
    title: "Expert Team",
    description: "Our certified professionals bring years of experience across diverse industries and technologies.",
    icon: "award",
    stats: "150+ Experts"
  },
  {
    title: "Proven Track Record",
    description: "Over 1,200 successful projects delivered on time and within budget for satisfied clients.",
    icon: "target",
    stats: "1,200+ Projects"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support ensuring your systems run smoothly and issues are resolved quickly.",
    icon: "headphones",
    stats: "24/7 Available"
  },
  {
    title: "Latest Technologies",
    description: "We stay ahead of the curve, implementing the most advanced and effective technology solutions.",
    icon: "zap",
    stats: "Cutting-Edge Tech"
  },
  {
    title: "Security First",
    description: "Enterprise-grade security measures to protect your data and maintain compliance standards.",
    icon: "shield",
    stats: "100% Secure"
  },
  {
    title: "Scalable Solutions",
    description: "Future-proof solutions that grow with your business, adapting to your evolving needs.",
    icon: "building",
    stats: "Infinitely Scalable"
  }
];

export function WhyChooseUs() {
  return (
    <Section>
      <div className="text-center space-y-4 mb-16">
        <Heading level={2} size="2xl">
          Why Choose Neurasys?
        </Heading>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We combine technical expertise with business acumen to deliver solutions that drive real results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <CardWrapper
            key={index}
            title={
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <Icon name={feature.icon} size={28} className="text-white" />
                  </div>
                  <div className="text-sm font-bold text-primary">
                    {feature.stats}
                  </div>
                </div>
                <span className="text-xl">{feature.title}</span>
              </div>
            }
            className="group hover:shadow-glow transition-all duration-300 hover:scale-105 bg-gradient-card border-white/10"
          >
            <p className="text-muted-foreground">{feature.description}</p>
          </CardWrapper>
        ))}
      </div>
    </Section>
  );
}