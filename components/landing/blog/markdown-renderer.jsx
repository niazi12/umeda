import React from 'react';
import { Badge } from "@/components/ui/badge";

// Individual component for each markdown element
const MarkdownHeading = ({ level, children, className = "" }) => {
  const baseClasses = "font-semibold text-foreground";
  const levelClasses = {
    1: "text-3xl font-bold mb-8 mt-12",
    2: "text-2xl font-semibold mb-6 mt-10", 
    3: "text-xl font-semibold mb-4 mt-8"
  };

  const Tag = `h${level}`;
  return (
    <Tag className={`${baseClasses} ${levelClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
};

const MarkdownParagraph = ({ children, className = "" }) => (
  <p className={`mb-4 text-foreground leading-relaxed ${className}`}>
    {children}
  </p>
);

const MarkdownList = ({ children, className = "" }) => (
  <ul className={`mb-6 space-y-2 ${className}`}>
    {children}
  </ul>
);

const MarkdownListItem = ({ children, className = "" }) => (
  <li className={`ml-6 text-foreground flex items-start ${className}`}>
    <span className="mr-3 mt-2 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
    <span>{children}</span>
  </li>
);

const MarkdownStrong = ({ children, className = "" }) => (
  <strong className={`font-semibold text-foreground ${className}`}>
    {children}
  </strong>
);

const MarkdownEmphasis = ({ children, className = "" }) => (
  <em className={`italic ${className}`}>
    {children}
  </em>
);

const MarkdownCode = ({ children, className = "" }) => (
  <code className={`bg-muted px-2 py-1 rounded text-sm font-mono text-foreground ${className}`}>
    {children}
  </code>
);

// Main parser function that converts markdown text to React components
export const parseMarkdownToComponents = (content) => {
  if (!content) return [];

  const lines = content.split('\n');
  const components = [];
  let currentParagraph = [];
  let currentList = [];
  let key = 0;

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const paragraphText = currentParagraph.join(' ').trim();
      if (paragraphText.length > 0) {
        const paragraphContent = processInlineMarkdown(paragraphText);
        components.push(
          <MarkdownParagraph key={key++}>
            {paragraphContent}
          </MarkdownParagraph>
        );
      }
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (currentList.length > 0) {
      components.push(
        <MarkdownList key={key++}>
          {currentList.map((item, index) => (
            <MarkdownListItem key={index}>
              {processInlineMarkdown(item)}
            </MarkdownListItem>
          ))}
        </MarkdownList>
      );
      currentList = [];
    }
  };

  const processInlineMarkdown = (text) => {
    if (!text) return '';
    
    const parts = [];
    let workingText = text;
    let partKey = 0;

    // Process multiple types of inline markdown
    const patterns = [
      { regex: /\*\*(.*?)\*\*/g, component: MarkdownStrong },
      { regex: /\*(.*?)\*/g, component: MarkdownEmphasis },
      { regex: /`(.*?)`/g, component: MarkdownCode }
    ];

    // Split text by all patterns
    const segments = [];
    let lastIndex = 0;

    // Find all matches for all patterns
    const allMatches = [];
    patterns.forEach((pattern, patternIndex) => {
      const regex = new RegExp(pattern.regex.source, pattern.regex.flags);
      let match;
      while ((match = regex.exec(text)) !== null) {
        allMatches.push({
          start: match.index,
          end: regex.lastIndex,
          content: match[1],
          component: pattern.component,
          patternIndex
        });
      }
    });

    // Sort matches by position
    allMatches.sort((a, b) => a.start - b.start);

    // Process matches in order, avoiding overlaps
    let currentIndex = 0;
    allMatches.forEach(match => {
      if (match.start >= currentIndex) {
        // Add text before match
        if (match.start > currentIndex) {
          segments.push(text.slice(currentIndex, match.start));
        }
        
        // Add formatted element
        const Component = match.component;
        segments.push(
          <Component key={partKey++}>
            {match.content}
          </Component>
        );
        
        currentIndex = match.end;
      }
    });

    // Add remaining text
    if (currentIndex < text.length) {
      segments.push(text.slice(currentIndex));
    }

    return segments.length > 0 ? segments : text;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip empty lines but flush current paragraph/list
    if (line === '') {
      flushParagraph();
      flushList();
      continue;
    }

    // Headers (check in order from most specific to least)
    if (line.startsWith('### ')) {
      flushParagraph();
      flushList();
      components.push(
        <MarkdownHeading key={key++} level={3}>
          {processInlineMarkdown(line.substring(4))}
        </MarkdownHeading>
      );
    } else if (line.startsWith('## ')) {
      flushParagraph();
      flushList();
      components.push(
        <MarkdownHeading key={key++} level={2}>
          {processInlineMarkdown(line.substring(3))}
        </MarkdownHeading>
      );
    } else if (line.startsWith('# ')) {
      flushParagraph();
      flushList();
      components.push(
        <MarkdownHeading key={key++} level={1}>
          {processInlineMarkdown(line.substring(2))}
        </MarkdownHeading>
      );
    }
    // List items
    else if (line.startsWith('- ')) {
      flushParagraph();
      currentList.push(line.substring(2).trim());
    }
    // Regular paragraph text
    else {
      flushList();
      // Only add non-empty lines to paragraph
      if (line.length > 0) {
        currentParagraph.push(line);
      }
    }
  }

  // Flush any remaining content
  flushParagraph();
  flushList();

  return components;
};

// Main markdown renderer component
export const MarkdownRenderer = ({ content, className = "" }) => {
  const components = parseMarkdownToComponents(content);

  return (
    <div className={`prose prose-slate max-w-none ${className}`}>
      {components}
    </div>
  );
};

export default MarkdownRenderer; 