"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function ListingStatusFilter({ filters, onFilterChange, disabled = false }) {
  const listingStatus = filters.listingStatus || {};

  const handlePlatformChange = (platform, value) => {
    const newListingStatus = { ...listingStatus };
    
    if (value === 'none') {
      delete newListingStatus[platform];
    } else {
      newListingStatus[platform] = value === 'listed'; // true for gt, false for eq
    }
    
    onFilterChange?.('listingStatus', newListingStatus);
  };

  const getPlatformValue = (platform) => {
    if (!(platform in listingStatus)) return 'none';
    return listingStatus[platform] ? 'listed' : 'not-listed';
  };

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Listing Status</Label>
      
      {/* StockX */}
      <div className="space-y-1.5">
        <Label className="text-xs text-muted-foreground">StockX</Label>
        <RadioGroup
          value={getPlatformValue('stockx')}
          onValueChange={(value) => handlePlatformChange('stockx', value)}
          disabled={disabled}
          className="flex gap-3"
        >
          <div className="flex items-center space-x-1.5">
            <RadioGroupItem value="none" id="stockx-none" className="h-3 w-3" />
            <Label htmlFor="stockx-none" className="text-xs">Any</Label>
          </div>
          <div className="flex items-center space-x-1.5">
            <RadioGroupItem value="listed" id="stockx-listed" className="h-3 w-3" />
            <Label htmlFor="stockx-listed" className="text-xs">Listed</Label>
          </div>
          <div className="flex items-center space-x-1.5">
            <RadioGroupItem value="not-listed" id="stockx-not-listed" className="h-3 w-3" />
            <Label htmlFor="stockx-not-listed" className="text-xs">Not Listed</Label>
          </div>
        </RadioGroup>
      </div>

      {/* GOAT */}
      <div className="space-y-1.5">
        <Label className="text-xs text-muted-foreground">GOAT</Label>
        <RadioGroup
          value={getPlatformValue('goat')}
          onValueChange={(value) => handlePlatformChange('goat', value)}
          disabled={disabled}
          className="flex gap-3"
        >
          <div className="flex items-center space-x-1.5">
            <RadioGroupItem value="none" id="goat-none" className="h-3 w-3" />
            <Label htmlFor="goat-none" className="text-xs">Any</Label>
          </div>
          <div className="flex items-center space-x-1.5">
            <RadioGroupItem value="listed" id="goat-listed" className="h-3 w-3" />
            <Label htmlFor="goat-listed" className="text-xs">Listed</Label>
          </div>
          <div className="flex items-center space-x-1.5">
            <RadioGroupItem value="not-listed" id="goat-not-listed" className="h-3 w-3" />
            <Label htmlFor="goat-not-listed" className="text-xs">Not Listed</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
} 