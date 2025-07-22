"use client";

import TagChoiceInput from "@/components/form-utils/tag-choice-input";
import { PLATFORMS } from "@/constants/platform-constants";

export function PlatformFilter({ filters, onFilterChange, disabled = false }) {
  const platformOptions = [
    { value: PLATFORMS.STOCKX, label: "StockX" },
    { value: PLATFORMS.GOAT, label: "GOAT" },
    { value: PLATFORMS.EXTERNAL, label: "External" },
  ];

  const handlePlatformChange = (value) => {
    onFilterChange?.('platformsFilter', value);
  };

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <label className="text-sm font-medium">Platforms</label>
        <TagChoiceInput
          value={filters.platformsFilter || []}
          onChange={handlePlatformChange}
          choices={platformOptions}
          placeholder="Select platforms..."
          disabled={disabled}
        />
      </div>
    </div>
  );
} 