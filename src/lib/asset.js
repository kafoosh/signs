// Base-aware asset URL so images resolve under the GitHub Pages base path.
export function asset(path) {
  const clean = path.replace(/^\//, '')
  return import.meta.env.BASE_URL + clean
}
