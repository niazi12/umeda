"use client";
import { useState } from "react";
import { X, ZoomIn, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/custom/ui/section";
import { Heading } from "@/components/custom/ui/heading";
import { PageHero } from "@/components/custom/ui/page-hero";

export default function MediaPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Hero section data
  const heroData = {
    title: "Media Gallery",
    description:
      "Explore UMEDA SB Industries through our visual journey. From advanced manufacturing processes to premium product showcases - witness our commitment to excellence.",
    tagline: "Showcasing 6.24M+ pairs of annual manufacturing excellence",
  };

  // Gallery images data
  const galleryImages = [
    {
      src: "/assets/gallery/manufacturing-facility.jpg",
      title: "Manufacturing Facility",
      description:
        "State-of-the-art production floor with advanced knitting machinery",
      category: "Facility",
    },
    {
      src: "/assets/gallery/knitting-machine.jpg",
      title: "Advanced Knitting Technology",
      description: "Close-up of our precision knitting machines in action",
      category: "Technology",
    },
    {
      src: "/assets/gallery/premium-socks.jpg",
      title: "Premium Product Range",
      description: "High-quality socks showcasing our manufacturing excellence",
      category: "Products",
    },
    {
      src: "/assets/gallery/quality-control.jpg",
      title: "Quality Assurance",
      description:
        "Rigorous quality control ensures every pair meets our standards",
      category: "Quality",
    },
    {
      src: "/assets/gallery/warehouse-export.jpg",
      title: "Export Operations",
      description: "Organized warehouse ready for global distribution",
      category: "Logistics",
    },
    {
      src: "/assets/gallery/design-team.jpg",
      title: "Design Innovation",
      description: "Our creative team developing new sock designs and patterns",
      category: "Design",
    },
    {
      src: "/assets/gallery/raw-materials.jpg",
      title: "Premium Materials",
      description: "High-quality raw materials imported from trusted suppliers",
      category: "Materials",
    },
    {
      src: "/assets/gallery/packaging-process.jpg",
      title: "Professional Packaging",
      description: "Custom branding and packaging for B2B clients",
      category: "Branding",
    },
  ];

  // Gallery statistics data
  const galleryStats = [
    { value: galleryImages.length, label: "Gallery Images" },
    {
      value: Array.from(new Set(galleryImages.map((img) => img.category)))
        .length,
      label: "Categories",
    },
    { value: "100%", label: "Quality Focus" },
    { value: "24/7", label: "Production" },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(galleryImages.map((img) => img.category))),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={heroData.title}
        description={heroData.description}
        tagline={heroData.tagline}
        gradient="default"
      />

      {/* Gallery Section */}
      <Section padding="lg">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover-lift"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium bg-primary px-2 py-1 rounded text-primary-foreground">
                      {image.category}
                    </span>
                    <ZoomIn size={18} className="text-white/80" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                  <p className="text-xs text-white/80 line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-card rounded-2xl p-8">
          <div className="text-center space-y-4 mb-8">
            <Heading level={3} size="md" className="text-primary">
              Visual Excellence
            </Heading>
            <p className="text-muted-foreground">
              Our gallery showcases the dedication and precision behind every
              pair of socks we manufacture
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ←
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              →
            </Button>

            {/* Image */}
            <div
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium bg-primary px-3 py-1 rounded text-primary-foreground">
                    {filteredImages[selectedImage].category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                    >
                      <Download size={18} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                    >
                      <Share2 size={18} />
                    </Button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-white/80">
                  {filteredImages[selectedImage].description}
                </p>
                <p className="text-sm text-white/60 mt-2">
                  {selectedImage + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
