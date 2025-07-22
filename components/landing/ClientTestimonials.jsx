import { CardWrapper } from "@/components/custom/ui/card-wrapper";
import { Icon } from "@/components/custom/ui/icon";
import { Section } from "@/components/custom/ui/section";
import { Heading } from "@/components/custom/ui/heading";
import { clients } from "@/data/clients";

export function ClientTestimonials() {
  return (
    <Section background="muted">
      <div className="text-center space-y-4 mb-16">
        <Heading level={2} size="2xl" gradient>
          What Our Clients Say
        </Heading>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.map((client, index) => (
          <CardWrapper 
            key={index} 
            className="bg-gradient-card border-white/10 hover:shadow-glow transition-all duration-300"
            hideHeader={true}
            size="default"
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="star" size={16} className="text-accent fill-current" />
              ))}
            </div>
            
            <blockquote className="text-muted-foreground mb-6 italic">
              "{client.testimonial}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{client.name}</div>
                <div className="text-sm text-muted-foreground">{client.industry}</div>
              </div>
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs font-medium text-center">
                  {client.name.split(' ').map(word => word[0]).join('')}
                </span>
              </div>
            </div>
          </CardWrapper>
        ))}
      </div>
    </Section>
  );
}