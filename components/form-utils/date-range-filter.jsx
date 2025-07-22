"use client";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon, X } from "lucide-react";

/**
 * DateRangeFilter Component
 * 
 * A component for selecting date ranges for filtering data
 * - Only applies filter when explicitly submitted
 * - Supports clearing filters
 * - Handles state internally
 * 
 * @param {Object} props
 * @param {Date} props.initialStartDate - Initial start date
 * @param {Date} props.initialEndDate - Initial end date
 * @param {Function} props.onFilter - Callback when filter is applied (receives startDate, endDate)
 * @param {Function} props.onClear - Callback when filter is cleared
 * @param {string} props.className - Additional classes for the container
 * @param {string} props.buttonClassName - Additional classes for trigger button
 * @param {string} props.label - Optional label for the filter
 * @param {boolean} props.compact - Use compact styling
 * @param {boolean} props.alignRight - Align popover to the right
 * @param {Date} props.minDate - Minimum selectable date
 * @param {Date} props.maxDate - Maximum selectable date
 */
export function DateRangeFilter({
  initialStartDate,
  initialEndDate,
  onFilter,
  onClear,
  className,
  buttonClassName,
  label = "Date Range",
  compact = false,
  alignRight = true,
  minDate,
  maxDate,
}) {
  // Internal filter state - separate from applied filter
  const [internalStartDate, setInternalStartDate] = useState(initialStartDate);
  const [internalEndDate, setInternalEndDate] = useState(initialEndDate);
  
  // Currently applied filter state for display
  const [appliedStartDate, setAppliedStartDate] = useState(initialStartDate);
  const [appliedEndDate, setAppliedEndDate] = useState(initialEndDate);
  
  // Popover open state
  const [isOpen, setIsOpen] = useState(false);

  // Update internal state when props change
  useEffect(() => {
    setInternalStartDate(initialStartDate);
    setInternalEndDate(initialEndDate);
    setAppliedStartDate(initialStartDate);
    setAppliedEndDate(initialEndDate);
  }, [initialStartDate, initialEndDate]);

  // Handle applying the filter
  const handleApplyFilter = () => {
    setAppliedStartDate(internalStartDate);
    setAppliedEndDate(internalEndDate);
    onFilter?.(internalStartDate, internalEndDate);
    setIsOpen(false);
  };

  // Handle clearing the filter
  const handleClearFilter = () => {
    setInternalStartDate(null);
    setInternalEndDate(null);
    setAppliedStartDate(null);
    setAppliedEndDate(null);
    onClear?.();
    setIsOpen(false);
  };

  // Format the display text for the button
  const getDisplayText = () => {
    if (!appliedStartDate && !appliedEndDate) {
      return compact ? "Date" : "Select date range";
    }
    
    const formatStr = compact ? "MM/dd" : "MMM d, yyyy";
    
    if (appliedStartDate && appliedEndDate) {
      return `${format(appliedStartDate, formatStr)} - ${format(appliedEndDate, formatStr)}`;
    } else if (appliedStartDate) {
      return `From ${format(appliedStartDate, formatStr)}`;
    } else if (appliedEndDate) {
      return `Until ${format(appliedEndDate, formatStr)}`;
    }
  };

  return (
    <div className={cn("relative", className)}>
      {!compact && label && (
        <div className="text-sm font-medium mb-1.5">{label}</div>
      )}
      
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "justify-start text-left font-normal h-9",
              (appliedStartDate || appliedEndDate) && "text-foreground",
              buttonClassName
            )}
            onClick={() => setIsOpen(true)}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span className="truncate">{getDisplayText()}</span>
            {(appliedStartDate || appliedEndDate) && (
              <X 
                className="ml-auto h-4 w-4 opacity-50 hover:opacity-100" 
                onClick={(e) => {
                  e.stopPropagation();
                  handleClearFilter();
                }}
              />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-auto p-0" 
          align={alignRight ? "end" : "start"}
          side="bottom"
        >
          <div className="p-3 space-y-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="space-y-2">
                <div className="text-sm font-medium">Start Date</div>
                <Calendar
                  mode="single"
                  selected={internalStartDate}
                  onSelect={setInternalStartDate}
                  disabled={(date) => 
                    (internalEndDate && date > internalEndDate) || 
                    (minDate && date < minDate) || 
                    (maxDate && date > maxDate)
                  }
                  initialFocus
                />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">End Date</div>
                <Calendar
                  mode="single"
                  selected={internalEndDate}
                  onSelect={setInternalEndDate}
                  disabled={(date) => 
                    (internalStartDate && date < internalStartDate) || 
                    (minDate && date < minDate) || 
                    (maxDate && date > maxDate)
                  }
                />
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex justify-between pt-2 border-t">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleClearFilter}
              >
                Clear
              </Button>
              <Button 
                size="sm" 
                onClick={handleApplyFilter}
                disabled={!internalStartDate && !internalEndDate}
              >
                Apply Filter
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
} 