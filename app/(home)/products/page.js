import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/custom/ui/section";
import { Heading } from "@/components/custom/ui/heading";
import { PageHero } from "@/components/custom/ui/page-hero";
import { DynamicTabs, TabContent } from "@/components/custom/ui/tabs-wrapper";
import { Palette, Layers, Target, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  // Hero section data
  const heroData = {
    title: "Premium Socks Manufacturing",
    description: "Comprehensive B2B solutions for plain socks, terry socks, and our specialty toe socks. Quality manufacturing with custom design services for global markets.",
    buttons: [
      { text: "Request Quote", href: "/contact", variant: "primary" },
      { text: "View Manufacturing", href: "/manufacturing", variant: "outline" }
    ]
  };

  // Product categories data
  const productCategories = [
    {
      id: "plain",
      title: "Plain Socks",
      capacity: "4.2M pairs/year",
      image: "/assets/socks-collection.jpg",
      description: "Premium quality plain socks designed for everyday comfort and durability",
      features: [
        "Multiple color options",
        "Various size ranges", 
        "Bulk order capabilities",
        "Custom branding available",
        "International quality standards",
        "Fast production turnaround"
      ],
      specifications: {
        "Materials": "Cotton, Polyester, Nylon blends",
        "Sizes": "XS to XXL available",
        "Colors": "20+ standard colors, custom colors available",
        "MOQ": "1,000 pairs per design",
        "Lead Time": "2-3 weeks",
        "Quality": "International standards"
      }
    },
    {
      id: "terry",
      title: "Terry Socks",
      capacity: "4.2M pairs/year",
      image: "/assets/socks-collection.jpg",
      description: "Soft, absorbent terry socks perfect for comfort, sports, and performance activities",
      features: [
        "Superior moisture absorption",
        "Enhanced comfort cushioning",
        "Athletic performance focus",
        "Durable construction",
        "Anti-bacterial treatment",
        "Long-lasting quality"
      ],
      specifications: {
        "Materials": "Terry cotton, Performance blends",
        "Thickness": "Light, Medium, Heavy cushioning",
        "Applications": "Sports, Casual, Professional",
        "MOQ": "1,000 pairs per design",
        "Lead Time": "2-3 weeks",
        "Features": "Moisture-wicking, Anti-odor"
      }
    },
    {
      id: "toe",
      title: "Toe Socks",
      capacity: "2.04M pairs/year",
      image: "/assets/toe-socks-feature.jpg",
      description: "Innovative toe socks with individual toe compartments for enhanced comfort and foot health",
      features: [
        "Individual toe pockets",
        "Enhanced blood circulation",
        "Blister prevention technology",
        "Superior toe movement",
        "Specialized comfort design",
        "Unique market positioning"
      ],
      specifications: {
        "Materials": "Premium cotton, Bamboo fiber, Synthetic blends",
        "Toe Pockets": "5 individual compartments",
        "Benefits": "Improved circulation, Blister prevention",
        "MOQ": "500 pairs per design",
        "Lead Time": "3-4 weeks",
        "Specialty": "Patented comfort technology"
      },
      highlighted: true
    }
  ];

  // Custom services data
  const customServices = [
    {
      icon: Palette,
      title: "Custom Design",
      description: "Professional design consultation to bring your ideas to life"
    },
    {
      icon: Layers,
      title: "Material Selection",
      description: "Wide range of premium materials and blends available"
    },
    {
      icon: Target,
      title: "Brand Integration",
      description: "Custom branding, labels, and packaging solutions"
    },
    {
      icon: Sparkles,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control throughout production"
    }
  ];

  // Design process steps
  const designProcess = [
    {
      step: 1,
      title: "Consultation",
      description: "Discuss your vision and requirements"
    },
    {
      step: 2,
      title: "Design",
      description: "Create detailed design mockups"
    },
    {
      step: 3,
      title: "Approval",
      description: "Review and finalize designs"
    },
    {
      step: 4,
      title: "Production",
      description: "Begin manufacturing process"
    }
  ];

  // Raw materials data
  const rawMaterials = [
    { 
      name: "Cotton", 
      source: "Premium imported from India", 
      quality: "Best material for socks",
      description: "Natural comfort and breathability, widely considered the premium choice for sock manufacturing",
      isPremium: true
    },
    { 
      name: "Wool Yarn", 
      source: "High-grade imported", 
      quality: "Widely used premium material",
      description: "Natural warmth and moisture-wicking properties, excellent for comfort socks",
      isPremium: true
    },
    { 
      name: "Viscose", 
      source: "International suppliers from India", 
      quality: "Luxury feel",
      description: "Smooth texture with excellent drape and comfort properties"
    },
    { 
      name: "Poly Yarn", 
      source: "Durable synthetic from India", 
      quality: "Long-lasting",
      description: "Enhanced durability and shape retention for extended wear"
    },
    { 
      name: "Nylon", 
      source: "Strength enhancement", 
      quality: "Added durability",
      description: "Provides strength and elasticity to sock construction"
    },
    { 
      name: "Acrylic", 
      source: "Soft synthetic from India", 
      quality: "Comfort blend",
      description: "Lightweight and warm, ideal for blended fabric compositions"
    },
    { 
      name: "Polyester", 
      source: "Performance grade from India", 
      quality: "Moisture management",
      description: "Quick-dry properties and color retention for active wear"
    },
    { 
      name: "Olefin", 
      source: "Lightweight from India", 
      quality: "Quick-dry",
      description: "Moisture-resistant and lightweight for performance applications"
    },
    { 
      name: "Lycra", 
      source: "Stretch technology from India", 
      quality: "Perfect fit",
      description: "Superior stretch and recovery for comfortable, form-fitting socks"
    },
    { 
      name: "Spandex", 
      source: "Elasticity from India", 
      quality: "Flexible comfort",
      description: "Excellent elasticity and shape retention for athletic and comfort socks"
    }
  ];

  // Material focus data
  const materialFocus = [
    { name: "Cotton", status: "Best Choice" },
    { name: "Wool", status: "Widely Used" },
    { name: "Blended Fabrics", status: "Optimized Performance" }
  ];

  // Transform product categories into tabs format
  const productTabs = productCategories.map(category => ({
    value: category.id,
    label: (
      <div className="text-center space-y-1 px-2">
        <div className="font-medium text-sm">{category.title}</div>
        <div className="text-xs opacity-70">{category.capacity}</div>
      
      </div>
    ),
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative rounded-2xl overflow-hidden hover-lift">
            <img 
              src={category.image} 
              alt={category.title} 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  {category.highlighted && (
                    <Badge className="bg-primary text-primary-foreground">
                      Specialty
                    </Badge>
                  )}
                </div>
                <p className="text-sm opacity-90">Annual Capacity: {category.capacity}</p>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Heading level={3} size="md" className="text-primary">{category.title}</Heading>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-card-foreground">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-card-foreground">Specifications</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(category.specifications).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <div className="text-sm font-medium text-primary">{key}</div>
                    <div className="text-sm text-muted-foreground">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }));

  return (
    <>
      {/* Hero Section */}
              <PageHero
          title={heroData.title}
          description={heroData.description}
          buttons={heroData.buttons}
          variant="violet"
        />

      {/* Product Categories */}
      <Section padding="lg">
        <div className="text-center space-y-4 mb-16 fade-in">
          <Heading level={2} size="lg" className="text-primary">Our Product Range</Heading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three specialized product categories designed to meet diverse market needs 
            with consistent quality and reliable production capacity.
          </p>
        </div>

        <DynamicTabs
          tabs={productTabs}
          defaultValue="plain"
          variant="primary"
          className="w-full"
        />
      </Section>

      {/* Custom Design Services */}
      <Section background="muted" padding="lg">
        <div className="text-center space-y-4 mb-16 fade-in">
          <Heading level={2} size="lg" className="text-primary">Custom Design Services</Heading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How to customize socks styles easily and quickly? We are dedicated to this problem 
            and bring the best outcome. Shape your ideas into visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {customServices.map((service, index) => (
            <div key={index} className="card-professional text-center hover-lift">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <service.icon size={28} className="text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-card-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Design Process */}
        <Card className="p-8">
          <div className="space-y-6">
            <Heading level={3} size="sm" className="text-center text-primary">Our Design Process</Heading>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {designProcess.map((process, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold">
                    {process.step}
                  </div>
                  <h4 className="font-medium">{process.title}</h4>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      {/* Raw Materials with Enhanced Details */}
      <Section padding="lg">
        <div className="text-center space-y-4 mb-16 fade-in">
          <Heading level={2} size="lg" className="text-primary">Premium Raw Materials</Heading>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            When choosing socks, the first factor we consider after length is fabric content. 
            Most socks are made using a blend of various fabrics, and all our materials are 
            imported according to design category requirements.
          </p>
        </div>

        {/* Material Selection Philosophy */}
        <div className="bg-muted border border-primary/20 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Heading level={3} size="md" className="text-primary">Material Selection Excellence</Heading>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  All our raw materials are imported from India, ensuring consistent quality and 
                  reliable supply chains. We carefully select materials based on specific design 
                  categories and performance requirements.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When choosing socks, knowing the fabric content comes in handy. While there are 
                  many materials used in making socks, <strong className="text-primary">cotton and wool 
                  are widely considered the best materials</strong> for premium sock manufacturing.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-card-foreground mb-4">Premium Material Focus</h4>
              <div className="space-y-3">
                {materialFocus.map((material, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{material.name}</span>
                    <span className="text-sm text-primary font-semibold">{material.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rawMaterials.map((material, index) => (
            <Card key={index} className="p-6 hover-lift">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-card-foreground">{material.name}</h4>
                  {material.isPremium && (
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                      Premium
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-primary font-medium">{material.source}</p>
                  <p className="text-sm text-primary font-medium">{material.quality}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{material.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            All materials are carefully selected and tested to meet international quality standards
          </p>
          <Button asChild className="btn-primary group w-full sm:w-auto">
            <Link href="/contact" className="flex items-center justify-center">
              <span>Discuss Material Options</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Call to Action */}
      <Section padding="lg" className="bg-gradient-secondary text-white">
        <div className="text-center space-y-8 fade-in">
          <Heading level={2} size="lg">Ready to Start Your Project?</Heading>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Let's discuss your socks manufacturing needs. Our team is ready to provide 
            comprehensive solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
            <Button asChild size="lg" variant="glass" >
              <Link href="/manufacturing">Tour Our Facility</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
