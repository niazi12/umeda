import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/custom/ui/card-wrapper";
import { PatternBackground } from "@/components/custom/ui/pattern-background";
import { Factory, Cog, BarChart3, Clock, Award, Users, Zap, Target, Layers, Shield, Gauge } from "lucide-react";
import { Section } from "@/components/custom/ui/section";
import { Heading } from "@/components/custom/ui/heading";
import { PageHero } from "@/components/custom/ui/page-hero";
import Link from "next/link";

export default function ManufacturingPage() {
  // Hero statistics data
  const heroStats = [
    { value: "6.24M+", label: "Total Annual Capacity", iconName: "factory" },
    { value: "100%", label: "Quality Assured", iconName: "award" },
    { value: "3", label: "Export Markets", iconName: "target" }
  ];

  // Production capabilities data
  const capabilities = [
    {
      icon: Factory,
      title: "Terry & Plain Socks",
      capacity: "4,200,000 pairs/year",
      description: "High-volume production of comfortable terry and plain socks with consistent quality",
      features: ["Automated knitting", "Quality control", "Multiple colors", "Various sizes"],
      color: "bg-blue-500"
    },
    {
      icon: Target,
      title: "Toe Socks Specialization",
      capacity: "2,040,000 pairs/year",
      description: "Specialized manufacturing of innovative toe socks with individual toe compartments",
      features: ["Advanced machinery", "Precision knitting", "Comfort engineering", "Unique design"],
      color: "bg-purple-500"
    }
  ];

  // Safety equipment data
  const safetyEquipment = [
    "CO2 Fire Extinguishers",
    "Dry Chemical Type",
    "Powder Extinguishers",
    "Foam Type",
    "Water Type Systems"
  ];

  const safetyTraining = [
    "Quarterly equipment checks",
    "Regular equipment updates",
    "Employee equipment training",
    "Emergency signal awareness"
  ];

  const safetyStats = [
    { value: "100%", label: "Coverage" },
    { value: "24/7", label: "Monitoring" }
  ];

  // Machinery systems data
  const machinery = [
    { name: "Knitting Machines", count: "Advanced automated systems", purpose: "High-speed sock production", icon: Cog },
    { name: "Quality Control", count: "Integrated monitoring", purpose: "Consistent product standards", icon: BarChart3 },
    { name: "Finishing Equipment", count: "Professional grade", purpose: "Perfect finishing touches", icon: Zap },
    { name: "Packaging Systems", count: "Automated packaging", purpose: "Efficient order fulfillment", icon: Layers }
  ];

  // Quality standards data
  const qualityStandards = [
    {
      icon: Award,
      title: "RAJUK Approved",
      description: "Government certified facility meeting international standards",
      color: "bg-yellow-500"
    },
    {
      icon: Cog,
      title: "Global Engineering",
      description: "Factory designed by world-class engineering company",
      color: "bg-blue-500"
    },
    {
      icon: BarChart3,
      title: "Quality Control",
      description: "Rigorous testing and monitoring throughout production",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with international manufacturing experience",
      color: "bg-purple-500"
    }
  ];

  // Innovation features data
  const innovationFeatures = [
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Continuous development and adoption of the latest manufacturing technology to stay ahead in the global market."
    },
    {
      icon: Clock,
      title: "Efficient Production",
      description: "Streamlined processes ensure timely delivery while maintaining the highest quality standards for all orders."
    }
  ];

  // Summary statistics data
  const summaryStats = [
    { value: "139", label: "Total Machines", icon: Factory },
    { value: "57", label: "Spare Cylinders", icon: Layers },
    { value: "5", label: "Countries", icon: Target },
    { value: "24/7", label: "Operations", icon: Clock }
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Manufacturing Excellence"
        description="State-of-the-art facility engineered for precision, quality, and scale. Our advanced manufacturing capabilities deliver 6.24+ million pairs annually."
        stats={heroStats}
        backgroundImage="/assets/hero-manufacturing.jpg"
        variant="image"
      />

      {/* Production Capabilities */}
      <Section className="bg-gray-50 dark:bg-gray-900" padding="xl">
        <div className="text-center space-y-6 mb-16">
          <Heading level={2} size="2xl" className="text-gray-900 dark:text-white">Production Capabilities</Heading>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Advanced manufacturing systems designed for high-volume production
            while maintaining exceptional quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <CardWrapper
              key={index}
              variant="default"
              size="lg"
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${capability.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <capability.icon size={32} className="text-white" />
                  </div>
                  <div>
                    <Heading level={3} size="lg" className="text-gray-900 dark:text-white">
                      {capability.title}
                    </Heading>
                    <p className="text-lg font-semibold text-primary">
                      {capability.capacity}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {capability.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardWrapper>
          ))}
        </div>
      </Section>

      {/* Fire Safety Policy Section */}
      <Section className="bg-white dark:bg-gray-900" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
                <Heading level={2} size="2xl" className="text-gray-900 dark:text-white">Safety & Compliance</Heading>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed pl-7">
                Safety is our top priority at UMEDA SB Industries. We maintain
                comprehensive safety protocols and equipment to ensure the
                wellbeing of all stakeholders.
              </p>
            </div>

            <div className="space-y-6 pl-7">
              <Heading level={3} size="xl" className="text-red-600">Fire Safety Policy</Heading>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To prevent fire, at USB, for the safety of all concerned,
                suitable firefighting equipment based on the needs of
                departments are installed on every floor. A water hydrant
                with a separate tank is also installed for firefighting
                operations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CardWrapper
                  title="Equipment Types"
                  variant="outline"
                  size="sm"
                  className="border-red-200 dark:border-red-800"
                >
                  <ul className="space-y-3">
                    {safetyEquipment.map((equipment, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{equipment}</span>
                      </li>
                    ))}
                  </ul>
                </CardWrapper>

                <CardWrapper
                  title="Maintenance & Training"
                  variant="outline"
                  size="sm"
                  className="border-red-200 dark:border-red-800"
                >
                  <ul className="space-y-3">
                    {safetyTraining.map((training, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{training}</span>
                      </li>
                    ))}
                  </ul>
                </CardWrapper>
              </div>
            </div>
          </div>

          <CardWrapper
            variant="primary"
            size="lg"
            className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800"
          >
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                  <Shield size={32} className="text-white" />
                </div>
                <div>
                  <Heading level={3} size="xl" className="text-red-600">Safety Excellence</Heading>
                  <p className="text-gray-600 dark:text-gray-400">
                    Comprehensive safety measures for secure operations
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {safetyStats.map((stat, index) => (
                  <div key={index} className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-white/40 dark:bg-gray-800/40 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-white">Trained Personnel:</strong> All employees are
                  well-versed in the use of firefighting equipment and
                  emergency procedures.
                </p>
              </div>
            </div>
          </CardWrapper>
        </div>
      </Section>

      {/* Quality Standards */}
      <Section className="bg-gradient-to-br from-gray-900 to-gray-800" padding="xl">
        <div className="text-center space-y-6 mb-16">
          <Heading level={2} size="2xl" className="text-white">Quality & Standards</Heading>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence is backed by international
            certifications and world-class engineering standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityStandards.map((standard, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 ${standard.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <standard.icon size={28} className="text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-white text-lg">
                    {standard.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Machinery & Technology */}
      <Section className="bg-gray-50 dark:bg-gray-900" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                <Heading level={2} size="2xl" className="text-gray-900 dark:text-white">Advanced Machinery</Heading>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed pl-7">
                Our facility features cutting-edge manufacturing equipment
                designed for precision, efficiency, and consistent quality
                output.
              </p>
            </div>

            <div className="space-y-4 pl-7">
              {machinery.map((machine, index) => (
                <CardWrapper
                  key={index}
                  variant="outline"
                  size="sm"
                  className="hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <machine.icon size={20} className="text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {machine.name}
                      </h4>
                      <p className="text-sm text-blue-600 font-medium">
                        {machine.count}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {machine.purpose}
                      </p>
                    </div>
                  </div>
                </CardWrapper>
              ))}
            </div>
          </div>

          <CardWrapper
            variant="primary"
            size="lg"
            className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800"
          >
            <div className="space-y-8">
              {innovationFeatures.map((feature, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <feature.icon size={24} className="text-white" />
                    </div>
                    <Heading level={3} size="lg" className="text-blue-600">{feature.title}</Heading>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}

              <div className="pt-6 border-t border-blue-200 dark:border-blue-700">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/contact">Request Factory Tour</Link>
                </Button>
              </div>
            </div>
          </CardWrapper>
        </div>
      </Section>

      {/* Equipment Summary */}
      <Section className="bg-white dark:bg-gray-900" padding="xl">
        <div className="text-center space-y-6 mb-16">
          <Heading level={2} size="2xl" className="text-gray-900 dark:text-white">Manufacturing Statistics</Heading>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our state-of-the-art machinery from leading manufacturers ensures
            precision, quality, and efficiency in every production run.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {summaryStats.map((stat, index) => (
            <CardWrapper
              key={index}
              variant="elevated"
              size="default"
              className="text-center group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={28} className="text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            </CardWrapper>
          ))}
        </div>

        <CardWrapper
          title="Complete Manufacturing Overview"
          description="Detailed breakdown of our production capabilities and equipment inventory"
          variant="outline"
          size="lg"
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-blue-200 dark:border-blue-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Gauge size={20} className="text-blue-600" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Production Capacity</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Terry & Plain Socks</span>
                  <span className="font-semibold text-blue-600">4.2M pairs/year</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Toe Socks Capacity</span>
                  <span className="font-semibold text-purple-600">2.04M pairs/year</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Total Annual Output</span>
                  <span className="font-semibold text-green-600">6.24M+ pairs</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Factory size={20} className="text-blue-600" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Equipment Overview</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Total Machines</span>
                  <span className="font-semibold text-blue-600">139 units</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Spare Cylinders</span>
                  <span className="font-semibold text-purple-600">57 units</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Manufacturing Origin</span>
                  <span className="font-semibold text-green-600">5 countries</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-center space-x-3 mb-4">
              <Award size={24} className="text-blue-600" />
              <h4 className="font-semibold text-gray-900 dark:text-white text-lg">International Standards</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our facility operates with machinery from leading international manufacturers including 
              Korea (Hyung Jea, T&K), China (Hanshin), and Japan (Shima Seiki), ensuring world-class 
              production quality and reliability.
            </p>
          </div>
        </CardWrapper>
      </Section>

      {/* Call to Action */}
      <PatternBackground className="py-16" backgroundColor="bg-blue-600" rounded={false}>
        <div className="container-width">
          <div className="text-center space-y-8">
            <Heading level={2} size="2xl" className="text-white">
              Experience Our Manufacturing Excellence
            </Heading>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Partner with UMEDA SB Industries for reliable, high-quality socks
              manufacturing backed by advanced technology and proven expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Link href="/contact">Start Partnership</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </PatternBackground>
    </>
  );
}
