import { Section } from "@/components/custom/ui/section";
import { Heading } from "@/components/custom/ui/heading";
import { BlogGrid } from "./blog-grid";


export function BlogSection({ 
  title, 
  description, 
  posts, 
  variant = "grid", 
  background = "default",
  emptyMessage 
}) {
  if (posts.length === 0 && !emptyMessage) {
    return null;
  }

  return (
    <Section background={background}>
      {(title || description) && (
        <div className="space-y-4 mb-12">
          {title && (
            <Heading level={2} size="xl">
              {title}
            </Heading>
          )}
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      
      <BlogGrid 
        posts={posts} 
        variant={variant} 
        emptyMessage={emptyMessage}
      />
    </Section>
  );
}