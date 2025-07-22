/**
 * Filter utilities for building URL parameters
 * Simplified approach since backend handles all operator parsing
 */

/**
 * Build URL parameters from filters object
 * @param {Object} filters - Filter values
 * @param {Object} filterConfig - Configuration for each filter
 * @returns {URLSearchParams} - Ready to use URL parameters
 */
export function buildFilterParams(filters, filterConfig) {
  const params = new URLSearchParams();
  
  Object.entries(filters).forEach(([key, value]) => {
    const config = filterConfig[key];
    if (!config || !value) return;
    
    // Skip empty arrays and default values
    if (Array.isArray(value) && value.length === 0) return;
    if (value === config.defaultValue) return;
    
    // Handle array filters
    if (config.type === 'array' && Array.isArray(value)) {
      if (value.length > 1) {
        // Multiple values: use [in] operator
        params.set(`${config.paramName}[in]`, value.join(','));
      } else if (value.length === 1) {
        // Single value: direct assignment
        params.set(config.paramName, value[0]);
      }
    } else {
      // Non-array filters: direct assignment
      params.set(config.paramName, value);
    }
  });
  
  return params;
}

/**
 * Build search parameters from search state
 * @param {string} searchType - Type of search (upc, product, etc.)
 * @param {string} searchValue - Search value
 * @param {Object} searchFields - Configuration for search fields
 * @returns {URLSearchParams} - Ready to use URL parameters
 */
export function buildSearchParams(searchType, searchValue, searchFields) {
  const params = new URLSearchParams();
  
  if (searchValue.trim() && searchFields[searchType]) {
    const paramName = searchFields[searchType];
    params.set(paramName, searchValue.trim());
  }
  
  return params;
}

/**
 * Build listing status parameters (inventory-specific)
 * @param {Object} listingStatus - Listing status object
 * @returns {URLSearchParams} - Ready to use URL parameters
 */
export function buildListingStatusParams(listingStatus) {
  const params = new URLSearchParams();
  
  Object.entries(listingStatus).forEach(([platform, hasListings]) => {
    if (hasListings !== undefined) {
      const operator = hasListings ? 'gt' : 'eq';
      params.set(`total_list.${platform}[${operator}]`, '0');
    }
  });
  
  return params;
}

/**
 * Parse listing status from URL parameters
 * @param {URLSearchParams} searchParams - URL search parameters
 * @returns {Object} - Parsed listing status object
 */
export function parseListingStatusFromUrl(searchParams) {
  const listingStatus = {};
  
  for (const [key, value] of searchParams.entries()) {
    if (key.startsWith('total_list.') && value === '0') {
      // Extract platform and operator from key like "total_list.stockx[gt]"
      const match = key.match(/^total_list\.([^[]+)\[([^\]]+)\]$/);
      if (match) {
        const [, platform, operator] = match;
        // gt means listed (true), eq means not listed (false)
        listingStatus[platform] = operator === 'gt';
      }
    }
  }
  
  return listingStatus;
}

/**
 * Clear specific parameter types from URLSearchParams
 * @param {URLSearchParams} params - URL parameters to modify
 * @param {Object} config - Configuration object with searchFields and filterFields
 */
export function clearSearchAndFilterParams(params, config) {
  const { searchFields = {}, filterFields = {} } = config;
  
  // Clear search params
  Object.values(searchFields).forEach(paramName => {
    params.delete(paramName);
  });
  
  // Clear filter params
  Object.values(filterFields).forEach(config => {
    params.delete(config.paramName);
    // Also clear potential [in] variations
    const baseField = config.paramName.replace(/\[.*\]$/, '');
    params.delete(`${baseField}[in]`);
  });
  
  // Clear listing status params
  for (const [key] of params.entries()) {
    if (key.startsWith('total_list.')) {
      params.delete(key);
    }
  }
  
  params.delete("page"); // Reset pagination
}

/**
 * Get API-ready parameters from URL
 * @param {URLSearchParams} searchParams - URL search parameters
 * @returns {Object} - Clean parameters object for API calls
 */
export function getApiParams(searchParams) {
  const params = {};
  
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  
  return params;
} 