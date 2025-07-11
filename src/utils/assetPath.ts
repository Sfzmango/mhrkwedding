/**
 * Utility function to get the correct asset path based on environment
 * In development: assets are served from root
 * In production: assets are served from /mhrkwedding base path
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/mhrkwedding' : '';
  return `${basePath}${path}`;
} 