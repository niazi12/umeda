"use client";

import SelectInput from "@/components/form-utils/select-input";

export function SortFilter({ filters, onFilterChange, disabled = false, sortOptions = [] }) {
  const handleSortChange = (value) => {
    onFilterChange?.('sortBy', value === "default" ? "" : value);
  };

  return (
    <div className="space-y-3">
      <SelectInput
        items={sortOptions}
        value={filters.sortBy || "default"}
        onValueChange={handleSortChange}
        placeholder="Select sort order"
        label="Sort By"
        className="space-y-2"
        labelClassName="text-sm font-medium"
        triggerClassName="h-9"
        disabled={disabled}
      />
    </div>
  );
} 