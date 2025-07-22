import { Building2, MapPin, TrendingUp } from "lucide-react";
import { Section } from "@/components/custom/ui/section";

const ClientsSection = () => {
  const clients = [
    {
      name: "Captain.Yu Co., Ltd.",
      country: "Japan",
      type: "Premium Retailer"
    },
    {
      name: "Daiso",
      country: "Japan",
      type: "Retail Chain"
    },
    {
      name: "GSI Creos Corporation",
      country: "Japan",
      type: "Industrial Partner"
    },
    {
      name: "DSI Korea",
      country: "Korea",
      type: "Distribution Partner"
    }
  ];

  const markets = [
    { country: "Japan", flag: "🇯🇵", description: "Premium quality market focus" },
    { country: "Korea", flag: "🇰🇷", description: "Strategic partnership base" },
    { country: "Canada", flag: "🇨🇦", description: "North American expansion" }
  ];

  return (
    <Section background="muted">
      <div className="container-width">
        <div className="text-center space-y-4 mb-16 fade-in">
          <h2 className="heading-lg text-primary">Global Partnerships</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading companies across three continents. Our established relationships 
            demonstrate our commitment to quality and reliability.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clients.map((client, index) => (
            <div key={index} className="card-professional text-center hover-lift">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Building2 size={24} className="text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-card-foreground">{client.name}</h3>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    <span>{client.country}</span>
                  </div>
                  <p className="text-sm text-accent font-medium">{client.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Export Markets with Vibrant Design */}
        <div className="bg-gradient-primary rounded-3xl p-8 text-white relative overflow-hidden slide-up">
          <div className="relative z-10">
            <div className="space-y-8">
              <div className="text-center space-y-3">
                <h3 className="heading-md text-white flex items-center justify-center">
                  <TrendingUp className="mr-3" size={28} />
                  Global Export Markets
                </h3>
                <p className="text-white/90 text-lg">
                  Successfully serving diverse markets with tailored solutions and reliable delivery
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {markets.map((market, index) => (
                  <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
                    <div className="text-5xl mb-4">{market.flag}</div>
                    <h4 className="text-xl font-semibold text-white mb-2">{market.country}</h4>
                    <p className="text-sm text-white/80">{market.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center pt-6 border-t border-white/20">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block">
                  <p className="text-white/90 font-medium">
                    <strong className="text-accent-secondary">Proven Track Record:</strong> Established relationships 
                    with trusted partners across multiple international markets
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </Section>
  );
};

export default ClientsSection;