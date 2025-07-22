// Import all organized components from toolsUi
import {
  // Main UI components

  SearchingIndicator,
 
  
  // Message parts
  TextPart,
  ReasoningPart,
  SourceUrlPart,
  SourceDocumentPart,
  ErrorPart,
  
  // Tool components
  ToolWrapper,
  GenericTool,
  
  // Data components
  GenericDataPart,
  
  // Debug components
  UnknownPart,
} from "@/components/chat/toolsUi";

// Message part renderers registry
const messagePartRenderers = {
  // Text parts with streaming support
  text: (part, props) => <TextPart part={part} props={props} />,

  // Reasoning parts with streaming support  
  reasoning: (part, props) => <ReasoningPart part={part} props={props} />,



  "tool-executeQuery": (part) => (
    <ToolWrapper part={part}>
      {part.state === "output-available" ? (
        <SearchingIndicator state="complete" />
      ) : (
        <SearchingIndicator state="searching" />
      )}
    </ToolWrapper>
  ),


  // Custom data parts - these don't have state
  "data-stream-init": (part) => null, // Don't show stream init info

  // Step boundaries - Don't render visible UI for step boundaries  
  "step-start": () => null,

  // Source parts - these don't have state
  "source-url": (part) => <SourceUrlPart part={part} />,

  "source-document": (part) => <SourceDocumentPart part={part} />,

  // Error handling - this is for tool parts with output-error state
  "output-error": (part) => <ErrorPart part={part} />,
};

// Generic renderers for dynamic parts
const renderGenericToolPart = (part, type) => <GenericTool part={part} type={type} />;

// Data parts don't have streaming states
const renderGenericDataPart = (part, type) => <GenericDataPart part={part} type={type} />;

// Main part renderer function
export const renderMessagePart = (part, index, messageId, props) => {
  // Include part state and text length in key to ensure React detects streaming changes
  const streamingKey = part.state === "streaming" || part.state === "input-streaming" 
    ? `-${part.state}-${part.text?.length || 0}` 
    : "";
  
  // Special key handling for progress parts to ensure they're treated as the same component
  let key;
  if (part.type === "data-tool-progress") {
    key = `message-${messageId}-progress`;
  } else {
    key = `message-${messageId}-part-${index}${streamingKey}`;
  }
  
  const { type } = part;

  // Check if we have a specific renderer
  if (messagePartRenderers[type]) {
    const rendered = messagePartRenderers[type](part, props);

    // If renderer returns null, don't render anything
    if (rendered === null) {
      return null;
    }

    return <div key={key}>{rendered}</div>;
  }

  // Handle dynamic tool parts
  if (type.startsWith("tool-")) {
    return <div key={key}>{renderGenericToolPart(part, type)}</div>;
  }

  // Handle dynamic data parts
  if (type.startsWith("data-")) {
    return <div key={key}>{renderGenericDataPart(part, type)}</div>;
  }

  // Unknown part type - show debug info in development
  if (process.env.NODE_ENV === "development") {
    return <div key={key}><UnknownPart part={part} type={type} /></div>;
  }

  // Production: return null for unknown parts
  return null;
};

// Utility to add new message part renderers
export const addMessagePartRenderer = (type, renderer) => {
  messagePartRenderers[type] = renderer;
};

// Utility to get all registered renderer types
export const getRegisteredRendererTypes = () => {
  return Object.keys(messagePartRenderers);
};

// Utility to check if a renderer exists for a type
export const hasRenderer = (type) => {
  return messagePartRenderers.hasOwnProperty(type);
};

// Export the renderers registry for advanced usage
export { messagePartRenderers };
