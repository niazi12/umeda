import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/custom/ui/icon";
import Link from "next/link";



const cardVariants = {
  featured: {
    cardClass: "group hover:shadow-glow transition-all duration-300 bg-gradient-card border-white/10",
    titleClass: "text-xl group-hover:text-primary transition-colors",
    descriptionClass: "text-base",
    avatarSize: { icon: 16, container: "w-8 h-8" },
    showFullMeta: true,
    showReadMoreButton: true
  },
  grid: {
    cardClass: "group hover:shadow-glow transition-all duration-300 bg-gradient-card border-white/10",
    titleClass: "text-lg group-hover:text-primary transition-colors line-clamp-2",
    descriptionClass: "text-sm line-clamp-3",
    avatarSize: { icon: 12, container: "w-6 h-6" },
    showFullMeta: false,
    showReadMoreButton: false
  },
  related: {
    cardClass: "p-6 hover:shadow-lg transition-shadow",
    titleClass: "text-lg hover:text-primary transition-colors",
    descriptionClass: "text-sm text-muted-foreground mb-4",
    avatarSize: { icon: 12, container: "w-6 h-6" },
    showFullMeta: false,
    showReadMoreButton: false
  }
};

export function BlogCard({ 
  post, 
  variant = "grid", 
  showAuthor = true, 
  showExcerpt = true, 
  showReadMore = true 
}) {
  const config = cardVariants[variant];

  return (
    <Card className={config.cardClass}>
      {variant === "related" && (
        <div className="mb-4">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Icon name="calendar" size={14} className="mr-1" />
              {new Date(post.publishedAt).toLocaleDateString()}
            </span>
            {config.showFullMeta && (
              <span className="flex items-center">
                <Icon name="clock" size={14} className="mr-1" />
                {post.readTime}
              </span>
            )}
          </div>
          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
            {post.category}
          </span>
        </div>
        
        <CardTitle className={config.titleClass}>
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </CardTitle>
        
        {showExcerpt && (
          <CardDescription className={config.descriptionClass}>
            {post.excerpt}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between">
          {showAuthor && (
            <div className="flex items-center space-x-3">
              <div className={`${config.avatarSize.container} bg-gradient-primary rounded-full flex items-center justify-center`}>
                <Icon name="user" size={config.avatarSize.icon} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">
                  {variant === "featured" ? post.author.role : `${post.readTime} min read`}
                </p>
              </div>
            </div>
          )}
          
          {showReadMore && (
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/blog/${post.id}`}>
                {config.showReadMoreButton ? "Read More" : ""}
                <Icon name="arrowRight" size={16} className={config.showReadMoreButton ? "ml-2" : ""} />
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}