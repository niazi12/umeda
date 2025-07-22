import { Button } from "@/components/ui/button";



export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  className = "" 
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "ghost"}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className="text-xs"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}