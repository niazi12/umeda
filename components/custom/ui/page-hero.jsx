"use client";
import { cn } from "@/lib/utils";
import { Section } from "./section";
import { Heading } from "./heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PatternBackground } from "./pattern-background";
import { GradientBackground } from "./gradient-background";
import { 
  Factory, Award, Target, Leaf, Globe, Shield,
  Sparkles, Zap, Rocket, Star, TrendingUp, Users 
} from "lucide-react";

// Icon mapping
const iconMap = {
  factory: Factory,
  award: Award,
  target: Target,
  leaf: Leaf,
  globe: Globe,
  shield: Shield,
  sparkles: Sparkles,
  zap: Zap,
  rocket: Rocket,
  star: Star,
  trending: TrendingUp,
  users: Users,
};

// Static color presets
const staticColors = {
  blue: "bg-blue-600",
  indigo: "bg-indigo-600",
  purple: "bg-purple-600",
  pink: "bg-pink-600",
  red: "bg-red-600",
  orange: "bg-orange-600",
  yellow: "bg-yellow-600",
  green: "bg-green-600",
  teal: "bg-teal-600",
  cyan: "bg-cyan-600",
  gray: "bg-gray-600",
  slate: "bg-slate-600",
  zinc: "bg-zinc-600",
  neutral: "bg-neutral-600",
  stone: "bg-stone-600",
  dark: "bg-gray-900",
  black: "bg-black"
};

export function PageHero({ 
  title, 
  description, 
  tagline,
  buttons = [], 
  stats = [],
  backgroundImage,
  variant = "aurora", // For backward compatibility
  gradient, // New cleaner prop name
  staticColor, // New prop for static colors
  usePattern = false, // New prop to enable pattern background
  patternVariant = "circles", // Pattern type for PatternBackground
  showWave = false,
  className 
}) {
  const selectedStaticColor = staticColors[staticColor];
  const hasBackgroundImage = !!backgroundImage;
  const hasStaticColor = !!staticColor && !!selectedStaticColor;
  
  // Use gradient prop if provided, otherwise fall back to variant for backward compatibility
  const gradientVariant = gradient || variant;

  // Determine background type priority: image > static color > gradient
  const backgroundType = hasBackgroundImage ? 'image' : (hasStaticColor ? 'static' : 'gradient');

  const renderContent = () => (
    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="text-center space-y-8">
        {/* Main content */}
        <div className="space-y-6">
          <Heading 
            level={1} 
            size="4xl" 
            className="text-white font-bold tracking-tight"
          >
            {title}
          </Heading>
          
          {description && (
            <p className="text-xl md:text-2xl leading-relaxed text-white/90 max-w-4xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Tagline */}
        {tagline && (
          <div className="inline-block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 hover:bg-white/15 transition-all duration-300">
              <p className="text-white font-medium">
                {tagline}
              </p>
            </div>
          </div>
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <Button 
                key={index}
                asChild 
                size="lg" 
                variant={button.variant || "default"}
                className={cn(
                  "min-w-[160px] font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5",
                  button.variant === "outline" 
                    ? "bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900"
                    : "bg-white text-gray-900 hover:bg-white/90"
                )}
              >
                <Link href={button.href}>
                  {button.icon && <button.icon className="mr-2" size={18} />}
                  {button.text}
                </Link>
              </Button>
            ))}
          </div>
        )}

        {/* Stats Grid */}
        {stats.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                {stat.iconName && iconMap[stat.iconName] && (
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {(() => {
                        const Icon = iconMap[stat.iconName];
                        return <Icon size={24} className="text-white" />;
                      })()}
                    </div>
                  </div>
                )}
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className={cn("relative", className)}>
      {/* Static color with optional pattern */}
      {backgroundType === 'static' && usePattern ? (
        <PatternBackground
          backgroundColor={selectedStaticColor}
          variant={patternVariant}
          rounded={false}
          className="min-h-0"
        >
          <Section padding="lg" className="relative overflow-hidden text-white">
            {/* Simple background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 -left-48 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 -right-48 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            </div>
            {renderContent()}
          </Section>
        </PatternBackground>
      ) : backgroundType === 'gradient' ? (
        /* Gradient background using GradientBackground component */
        <GradientBackground
          gradient={gradientVariant}
          padding="lg"
          className="text-white"
        >
          {renderContent()}
        </GradientBackground>
      ) : (
        /* Static color or image background */
        <Section 
          padding="lg" 
          className={cn(
            "relative overflow-hidden text-white",
            backgroundType === 'image' && "bg-gray-900",
            backgroundType === 'static' && selectedStaticColor
          )}
        >
          {/* Background Image with Overlay */}
          {backgroundType === 'image' && (
            <div className="absolute inset-0">
              <img 
                src={backgroundImage} 
                alt="" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
            </div>
          )}

          {/* Simple background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 -left-48 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -right-48 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>

          {renderContent()}
        </Section>
      )}

      {/* Wave Decoration - Outside of Section to avoid shadow */}
      {showWave && (
        <div className="relative -mt-1">
          <svg 
            viewBox="0 0 1440 60" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
            style={{ height: '60px' }}
          >
            <path 
              d="M0,20 C480,60 960,60 1440,20 L1440,60 L0,60 Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </div>
  );
} 