"use client";
import { useState, useRef } from "react";
import { X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BaseFormField from "./base-form-field";

const TagInput = ({
  control,
  name,
  label,
  description,
  placeholder = "Add tag...",
  required,
  disabled,
  className,
  labelClassName,
  inputClassName,
  maxTags,
  allowDuplicates = false,
  // For direct usage without form
  value: propValue = [],
  onChange: propOnChange,
  onValueChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleAddTag = (tags, newTag, field) => {
    if (!newTag.trim()) return tags;
    
    const trimmedTag = newTag.trim();
    
    // Check for duplicates if not allowed
    if (!allowDuplicates && tags.includes(trimmedTag)) {
      return tags;
    }
    
    // Check max tags limit
    if (maxTags && tags.length >= maxTags) {
      return tags;
    }
    
    const updatedTags = [...tags, trimmedTag];
    
    if (field) {
      field.onChange(updatedTags);
    } else if (propOnChange) {
      propOnChange(updatedTags);
    }
    
    onValueChange?.(updatedTags);
    setInputValue("");
    
    return updatedTags;
  };

  const handleRemoveTag = (tags, indexToRemove, field) => {
    const updatedTags = tags.filter((_, index) => index !== indexToRemove);
    
    if (field) {
      field.onChange(updatedTags);
    } else if (propOnChange) {
      propOnChange(updatedTags);
    }
    
    onValueChange?.(updatedTags);
    
    return updatedTags;
  };

  const handleKeyDown = (e, tags, field) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      handleAddTag(tags, inputValue, field);
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      e.preventDefault();
      handleRemoveTag(tags, tags.length - 1, field);
    }
  };

  const renderTagInput = ({ field, disabled: isDisabled }) => {
    const tags = field ? field.value || [] : propValue || [];
    
    return (
      <div className={cn("min-h-[2.5rem] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2", inputClassName)}>
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="flex items-center gap-1 px-2 py-1"
            >
              <span>{tag}</span>
              {!isDisabled && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground"
                  onClick={() => handleRemoveTag(tags, index, field)}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </Badge>
          ))}
        </div>
        
        {!isDisabled && (!maxTags || tags.length < maxTags) && (
          <div className="flex items-center gap-2">
            <Input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, tags, field)}
              placeholder={tags.length === 0 ? placeholder : "Add another..."}
              className="border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
              disabled={isDisabled}
              {...props}
            />
            {inputValue.trim() && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-auto p-1 text-muted-foreground hover:text-foreground"
                onClick={() => handleAddTag(tags, inputValue, field)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            )}
          </div>
        )}
        
        {maxTags && (
          <div className="text-xs text-muted-foreground mt-1">
            {tags.length}/{maxTags} tags
          </div>
        )}
      </div>
    );
  };

  return (
    <BaseFormField
      control={control}
      name={name}
      label={label}
      description={description}
      required={required}
      disabled={disabled}
      className={className}
      labelClassName={labelClassName}
      value={propValue}
      onChange={propOnChange}
    >
      {renderTagInput}
    </BaseFormField>
  );
};

export default TagInput; 