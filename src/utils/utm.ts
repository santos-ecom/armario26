/**
 * Utility functions for handling UTM parameters
 */

export const getUtmParams = (): string => {
  const params = new URLSearchParams(window.location.search);
  const utmParams = new URLSearchParams();
  
  // Capture all UTM parameters
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  
  utmKeys.forEach(key => {
    const value = params.get(key);
    if (value) {
      utmParams.set(key, value);
    }
  });
  
  return utmParams.toString();
};

export const appendUtmToUrl = (url: string): string => {
  const utmString = getUtmParams();
  if (!utmString) return url;
  
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${utmString}`;
};