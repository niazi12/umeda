import { BlogCard } from "./blog-card";

const gridVariants = {
  featured: "grid grid-cols-1 lg:grid-cols-2 gap-8",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  related: "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
};

export function BlogGrid({ 
  posts, 
  variant = "grid", 
  emptyMessage = "No posts found.",
  className = ""
}) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`${gridVariants[variant]} ${className}`}>
      {posts.map((post) => (
        <BlogCard 
          key={post.id} 
          post={post} 
          variant={variant}
        />
      ))}
    </div>
  );
}