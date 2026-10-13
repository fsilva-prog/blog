import { getCollection } from 'astro:content';

// Un borrador se ve en tu computador (npm run dev), pero nunca se publica.
const visible = (e) =>
  import.meta.env.DEV || import.meta.env.PUBLIC_BORRADORES === 'si' || !e.data.borrador;

export async function articulosDerecho() {
  const todos = await getCollection('derecho', visible);
  return todos.sort((a, b) => b.data.fecha - a.data.fecha);
}

export async function textosCatedra() {
  const todos = await getCollection('catedra', visible);
  return todos.sort((a, b) => b.data.fecha - a.data.fecha);
}

export async function entregasEnsayo() {
  const todas = await getCollection('ensayo', visible);
  return todas.sort((a, b) => a.data.entrega - b.data.entrega);
}

export function fechaTexto(fecha) {
  if (!fecha) return '';
  return fecha.toLocaleDateString('es-CL', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  });
}

// Cantidad total de entregas planificadas del ensayo.
export const TOTAL_ENTREGAS = 9;
