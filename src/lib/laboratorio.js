// Hitos del caso de laboratorio (Simplifica SpA y Antonia).
// Una sola fuente para la página /laboratorio/ y el recuadro lateral de la portada.
export const HITOS = [
  { cuando: '13 de octubre de 2026', titulo: 'Se constituye Simplifica SpA', texto: 'La sociedad que servirá de laboratorio, con un solo accionista y administrador.', estado: 'hecho' },
  { cuando: 'Noviembre 2026', titulo: 'El portal cliente', texto: 'Afianzamos el portal que será el trampolín del producto.', estado: 'en-curso' },
  { cuando: 'Por venir', titulo: 'La plataforma, completa', texto: 'El cumplimiento de la Ley 21.719 terminado antes de vender: o se vende bien o no hay experimento.', estado: 'proximo' },
  { cuando: 'Por venir', titulo: 'Nace Antonia', texto: 'Antonia recibe su encargo y toma la gestión de la empresa.', estado: 'proximo' },
  { cuando: 'Por venir', titulo: 'Primera campaña', texto: 'Antonia decide cómo y dónde buscar clientes, con un presupuesto acotado.', estado: 'proximo' },
  { cuando: 'Por venir', titulo: 'Primeros resultados', texto: 'Qué hizo Antonia, cuánto vendió y qué decisiones tomó por su cuenta.', estado: 'proximo' },
];
export const ESTADO = { hecho: 'Hecho', 'en-curso': 'En curso', proximo: 'Próximo' };
// El hito en curso, o el último hecho si no hay ninguno en curso.
export const hitoActual = () => HITOS.find((h) => h.estado === 'en-curso') ?? [...HITOS].reverse().find((h) => h.estado === 'hecho');
