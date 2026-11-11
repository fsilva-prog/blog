// Utilidades de la portada.

// Las ilustraciones se publican en .png (para redes) y .svg (nítidas en pantalla).
export function svgDe(ruta) {
  return ruta ? ruta.replace(/\.png$/, '.svg') : ruta;
}
