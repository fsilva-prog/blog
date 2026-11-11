// Calendario de lectura: La luz sale todos los miércoles; «Lo que se pierde al
// escribir», un domingo sí y uno no. Se calcula a partir de dos fechas de partida.
const DIA = 24 * 60 * 60 * 1000;
const LUZ = { inicio: Date.UTC(2026, 10, 18), primera: 6, cada: 7, total: 4 };
const ESCRITURA = { inicio: Date.UTC(2026, 10, 22), primera: 1, cada: 14, total: 7 };

export function proximasEntregas(cantidad = 6, desde = new Date()) {
  const hoy = Date.UTC(desde.getUTCFullYear(), desde.getUTCMonth(), desde.getUTCDate());
  const lista = [];
  for (let i = 0; i < 40; i++) {
    if (i < LUZ.total) lista.push({ serie: 'luz', fecha: new Date(LUZ.inicio + i * LUZ.cada * DIA), entrega: LUZ.primera + i });
    if (i < ESCRITURA.total) {
      lista.push({ serie: 'escritura', fecha: new Date(ESCRITURA.inicio + i * ESCRITURA.cada * DIA), entrega: ESCRITURA.primera + i });
    }
  }
  return lista
    .filter((e) => e.fecha.getTime() >= hoy)
    .sort((a, b) => a.fecha - b.fecha)
    .slice(0, cantidad);
}

export function diaTexto(fecha) {
  return fecha.toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'short', timeZone: 'UTC' });
}

// Próxima entrega de una serie ('luz' o 'escritura'), o undefined si ya terminó.
export function proximaDe(serie, desde = new Date()) {
  return proximasEntregas(40, desde).find((e) => e.serie === serie);
}
