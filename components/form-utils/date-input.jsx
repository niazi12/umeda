// components/form-utils/date-input.jsx
"use client";
import { Input } from "@/components/ui/input";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import BaseFormField from "./base-form-field";

const DateInput = ({
  control,
  name,
  label,
  description,
  placeholder,
  required,
  disabled,
  className,
  labelClassName,
  inputClassName,
  minDate,
  maxDate,
  onValueChange,
  // For direct usage without form
  value: propValue,
  onChange: propOnChange,
  Icon = CalendarIcon,
  ...props
}) => {
  // Convert ISO date string to YYYY-MM-DD format for input type="date"
  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    // If it's already in YYYY-MM-DD format, return as is
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return dateString;
    
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "";
      
      return date.toISOString().split('T')[0];
    } catch (e) {
      return "";
    }
  };
  
  // Handle change event
  const handleChange = (e, field) => {
    const newValue = e.target.value;
    const dateValue = newValue ? new Date(newValue) : null;

    if (field) {
      field.onChange(dateValue);
    } else if (propOnChange) {
      propOnChange(dateValue);
    }

    onValueChange?.(dateValue);
  };

  const renderDateInput = ({ field, disabled: isDisabled }) => {
    // Get value from either form field or direct props
    const value = field ? field.value : propValue;
    const formattedValue = formatDateForInput(value);
    
    return (
      <div className="flex items-center border rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-primary">
        <span className="px-3 py-2 bg-muted">
          <Icon className="h-4 w-4 text-primary" />
        </span>
        <Input
          type="date"
          className={cn(
            "border-0 focus-visible:ring-0",
            // Hide the browser's native calendar icon
            "[&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer",
            inputClassName
          )}
          disabled={isDisabled}
          value={formattedValue}
          onChange={(e) => handleChange(e, field)}
          min={minDate ? formatDateForInput(minDate) : undefined}
          max={maxDate ? formatDateForInput(maxDate) : undefined}
          {...props}
        />
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
      {renderDateInput}
    </BaseFormField>
  );
};

export default DateInput;