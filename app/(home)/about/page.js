import { Building2, Users, Award, Target, Globe, Zap } from "lucide-react";
import { Section } from "@/components/custom/ui/section";
import { Heading } from "@/components/custom/ui/heading";


export default function About() {
 
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Commitment to international quality standards and continuous improvement in all processes.",
      color: "bg-blue-500"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuous development and adoption of cutting-edge manufacturing technology.",
      color: "bg-yellow-500"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Supporting our partners at every step through collaboration and expertise.",
      color: "bg-green-500"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Dedicated focus on meeting specific client needs with tailored solutions.",
      color: "bg-purple-500"
    }
  ];

  const milestones = [
    {
      year: "Establishment",
      title: "Joint Venture Formation",
      description: "Bangladesh-Korea joint venture established with international expertise",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      year: "RAJUK Approval",
      title: "Government Certification",
      description: "Factory approved by Capital Development Authority of Bangladesh",
      gradient: "from-green-500 to-green-600"
    },
    {
      year: "Global Engineering",
      title: "World-Class Design",
      description: "Factory designed and engineered by global engineering company",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      year: "Export Success",
      title: "International Markets",
      description: "Successful export operations to Japan, Korea, and Canada",
      gradient: "from-orange-500 to-orange-600"
    }
  ];
  
    return (
      <>
        {/* Hero Section */}
        <Section padding="xl" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="relative z-10 space-y-8 text-center">
            <div className="space-y-6">
              <Heading level={1} size="3xl" className="text-white">
                About UMEDA SB Industries
              </Heading>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                A Bangladesh Korea joint venture private limited company dedicated to professional 
                business-to-business solutions in socks manufacturing for the global market.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 inline-block border border-white/20">
              <p className="text-2xl text-white font-medium italic">
                "Being smart is the new business plan."
              </p>
              <p className="text-blue-200 text-sm mt-2">— UMEDA SB Industries</p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">6.24M+</div>
                <div className="text-blue-200 text-sm">Annual Capacity</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">3+</div>
                <div className="text-blue-200 text-sm">Export Markets</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">B2B</div>
                <div className="text-blue-200 text-sm">Focused Solutions</div>
              </div>
            </div>
          </div>
        </Section>
  
        {/* Mission & Vision */}
        <Section className="bg-gray-50 dark:bg-gray-900" padding="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                  <Heading level={2} size="2xl" className="text-primary">Our Mission</Heading>
                </div>
                <div className="space-y-4 pl-7">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our mission is to continue the contribution in high quality socks production in the B2B sector. 
                    We consider high dedication with a constantly developing and renewing structure according to 
                    the needs and demands of our stakeholders as our most important responsibility.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    On this roadmap drawn by our mission, by constantly speeding up our efforts, we give our best 
                    to achieve successful business relationships with companies operating in the international arena. 
                    We do this with an understanding respectful to society and environment.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-12 bg-gradient-to-b from-emerald-500 to-emerald-500/50 rounded-full"></div>
                  <Heading level={3} size="xl" className="text-emerald-600">Our Vision</Heading>
                </div>
                <div className="space-y-4 pl-7">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    With upcoming innovation and success in managing projects and processes including all of production, 
                    products and services, we have a wide vision and structure built on a solid foundation. We are 
                    preparing ourselves for the future from today to reach faster customer demand and satisfaction.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    While supporting our faith for always doing better with sustainable success, we are taking solid 
                    steps to become a part of the global market.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-600">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                    <Globe size={24} className="text-white" />
                  </div>
                  <Heading level={3} size="lg" className="text-gray-900 dark:text-white">Global Standards</Heading>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our factory meets international standards, designed by global engineering experts 
                  and approved by RAJUK (Capital Development Authority of Bangladesh).
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">Stakeholder-Focused Development</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-emerald-500/5 rounded-lg">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">International Business Relations</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-500/5 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">Environmental Responsibility</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-500/5 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">Sustainable Success Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
  
        {/* Core Values */}
        <Section className="bg-white dark:bg-gray-900" padding="xl">
          <div className="text-center space-y-6 mb-16">
            <Heading level={2} size="2xl" className="text-gray-900 dark:text-white">Our Core Values</Heading>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The principles that guide our operations and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-600">
                <div className="space-y-6 text-center">
                  <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <value.icon size={28} className="text-white" />
                  </div>
                  <div className="space-y-3">
                    <Heading level={3} size="lg" className="text-gray-900 dark:text-white">{value.title}</Heading>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
  
        {/* Our Journey */}
        <Section className="bg-gradient-to-br from-gray-900 to-gray-800" padding="xl">
          <div className="text-center space-y-6 mb-16">
            <Heading level={2} size="2xl" className="text-white">Our Journey</Heading>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones that shaped UMEDA SB Industries into a trusted global partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 bg-gradient-to-r ${milestone.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <span className="text-lg font-bold text-white">{index + 1}</span>
                      </div>
                      <div className="text-sm font-medium text-gray-300 bg-white/10 px-3 py-1 rounded-full">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-white text-lg">{milestone.title}</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Connection line for desktop */}
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/30 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </Section>

         {/* Contact CTA */}
        <Section padding="xl" className="bg-gradient-to-r from-primary via-primary/90 to-primary text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="relative z-10 text-center space-y-8">
            <Heading level={2} size="2xl" className="text-white">Ready to Partner With Us?</Heading>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how UMEDA SB Industries can support your business with our 
              comprehensive manufacturing solutions and global expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a 
                href="/contact" 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get in Touch
              </a>
              <a 
                href="/products" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                View Our Products
              </a>
            </div>
          </div>
        </Section>
      </>
    );
  }