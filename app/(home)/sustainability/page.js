import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/custom/ui/section";
import { Heading } from "@/components/custom/ui/heading";
import { 
  Leaf, 
  Recycle, 
  Droplets, 
  Shield, 
  TrendingUp, 
  Heart, 
  Globe,
  CheckCircle,
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

export default function SustainabilityPage() {
  // Hero section data
  const heroData = {
    title: "Sustainability",
    subtitle: "UMEDA SB Industries is committed to sustainable manufacturing practices that protect our environment while delivering exceptional quality socks to global markets.",
    tagline: "Responsible manufacturing for a sustainable future"
  };

  // Sustainable materials data
  const sustainableMaterials = [
    {
      icon: Leaf,
      title: "Organic Cotton",
      description: "Grown without harmful pesticides or synthetic fertilizers, reducing environmental footprint and supporting healthier ecosystems.",
      benefits: ["No harmful chemicals", "Biodegradable", "Soil health protection", "Farmer safety"],
      color: "bg-green-500"
    },
    {
      icon: Globe,
      title: "BCI Cotton",
      description: "Better Cotton Initiative certified cotton supporting sustainable farming practices that minimize water usage and reduce chemical inputs.",
      benefits: ["Water conservation", "Reduced chemicals", "Farmer well-being", "Sustainable practices"],
      color: "bg-blue-400"
    },
    {
      icon: Recycle,
      title: "Recycled Materials",
      description: "Using recycled cotton and polyester, including polyester made from recycled plastic bottles, giving new life to existing materials.",
      benefits: ["Waste reduction", "Landfill diversion", "Energy conservation", "Circular economy"],
      color: "bg-purple-500"
    }
  ];

  // Eco-friendly processes data
  const ecoProcesses = [
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Advanced water recycling systems and efficient dyeing processes minimize water consumption in our manufacturing operations."
    },
    {
      icon: Shield,
      title: "Anti-Microbial Finish",
      description: "Eco-friendly anti-microbial treatments that extend product life while maintaining safety for both users and environment."
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Ongoing investment in cleaner technologies and processes to reduce our environmental impact year over year."
    }
  ];

  // Packaging initiatives data
  const packagingInitiatives = [
    "Recyclable packaging materials",
    "Reduced plastic usage",
    "Biodegradable shipping materials",
    "Minimal packaging design",
    "Reusable packaging options",
    "Local sourcing to reduce transport emissions"
  ];

  // Environmental impact stats
  const environmentalStats = [
    { value: "-50%", label: "Plastic Reduction" },
    { value: "100%", label: "Recyclable" }
  ];

  // Product benefits data
  const productBenefits = [
    { title: "Extended", subtitle: "Product Life" },
    { title: "Eco-Safe", subtitle: "Treatment" }
  ];

  // Sustainability goals data
  const sustainabilityGoals = [
    { goal: "Carbon Footprint Reduction", target: "-30%" },
    { goal: "Water Usage Optimization", target: "-25%" },
    { goal: "Sustainable Materials", target: "75%" },
    { goal: "Waste Reduction", target: "-40%" }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section padding="lg" className="bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Leaf size={32} className="text-primary-foreground" />
            <Heading level={1} size="4xl">{heroData.title}</Heading>
          </div>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90">
            {heroData.subtitle}
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-primary-foreground font-medium">
              "{heroData.tagline}"
            </p>
          </div>
        </div>
      </Section>

      {/* Sustainable Materials */}
      <Section padding="lg">
        <div className="text-center space-y-4 mb-16 fade-in">
          <Heading level={2} size="lg" className="text-primary">Sustainable Materials</Heading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are proud to use sustainable materials in our products, supporting environmental 
            protection and responsible sourcing practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sustainableMaterials.map((material, index) => (
            <Card key={index} className="p-6 hover-lift">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${material.color} rounded-full flex items-center justify-center`}>
                    <material.icon size={28} className="text-primary-foreground" />
                  </div>
                  <Heading level={3} size="sm" className="text-card-foreground">{material.title}</Heading>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {material.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-card-foreground">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {material.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle size={14} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Eco-Friendly Processes */}
      <Section background="muted" padding="lg">
        <div className="text-center space-y-4 mb-16 fade-in">
          <Heading level={2} size="lg" className="text-primary">Eco-Friendly Manufacturing</Heading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our manufacturing processes prioritize environmental responsibility through 
            innovative technologies and sustainable practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecoProcesses.map((process, index) => (
            <div key={index} className="card-professional text-center hover-lift">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <process.icon size={28} className="text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-card-foreground">{process.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Sustainable Packaging */}
      <Section padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <Heading level={2} size="lg" className="text-primary">Sustainable Packaging</Heading>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our packaging solutions minimize environmental impact while ensuring 
                product protection and professional presentation for our B2B clients.
              </p>
            </div>

            <div className="space-y-4">
              <Heading level={3} size="sm" className="text-primary">Our Packaging Commitments</Heading>
              <div className="grid grid-cols-1 gap-3">
                {packagingInitiatives.map((initiative, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{initiative}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 slide-up">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Heart size={24} className="text-primary" />
                <Heading level={3} size="sm">Environmental Impact</Heading>
              </div>
              <p className="text-muted-foreground">
                By implementing sustainable packaging practices, we significantly reduce our 
                carbon footprint and contribute to a cleaner environment for future generations.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {environmentalStats.map((stat, index) => (
                  <div key={index} className="text-center bg-card rounded-lg p-4 border border-border">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Anti-Microbial & Innovation */}
      <Section padding="lg" className="bg-gradient-minimal text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <Heading level={2} size="lg" className="text-white">Innovation for Sustainability</Heading>
              <p className="text-xl text-white/90 leading-relaxed">
                Advanced treatments and continuous improvement drive our commitment 
                to sustainable innovation in sock manufacturing.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Heading level={3} size="sm" className="text-white mb-4">Anti-Microbial Finish</Heading>
                <p className="text-white/90 mb-4">
                  Our eco-friendly anti-microbial treatments extend product life, reduce washing 
                  frequency, and maintain safety for both users and the environment.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {productBenefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-primary-foreground">{benefit.title}</div>
                      <div className="text-sm text-white/80">{benefit.subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Heading level={3} size="sm" className="text-white mb-4">Continuous Improvement</Heading>
                <p className="text-white/90">
                  We invest continuously in cleaner technologies, process optimization, 
                  and sustainable innovations to minimize our environmental impact year over year.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-right slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Heading level={3} size="sm" className="text-white mb-6">Our Sustainability Goals</Heading>
              <div className="space-y-6">
                {sustainabilityGoals.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white/90">{item.goal}</span>
                    <span className="text-primary-foreground font-bold">{item.target}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section padding="lg">
        <div className="text-center space-y-8 fade-in">
          <Heading level={2} size="lg" className="text-primary">Partner with Sustainable Excellence</Heading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join UMEDA SB Industries in creating a more sustainable future through 
            responsible manufacturing and eco-friendly practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary group">
              <Link href="/contact">
                Discuss Sustainability
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/manufacturing">View Our Processes</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}