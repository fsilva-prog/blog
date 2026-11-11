// Hitos del caso de laboratorio (Simplifica SpA y Antonia).
// Una sola fuente para la página /laboratorio/ y el recuadro lateral de la portada.
export const HITOS = [
  {
    "cuando": "13 de octubre de 2026",
    "titulo": "Se constituye Simplifica SpA",
    "texto": "La sociedad que servirá de laboratorio, con un solo accionista y administrador.",
    "detalle": "Constituí Simplifica SpA en el Registro de Empresas y Sociedades, conforme a la Ley 20.659, que permite constituir una sociedad completamente por medios electrónicos, sin escritura pública y en cosa de horas. Elegí la sociedad por acciones porque el artículo 424 del Código de Comercio permite que tenga un solo accionista, y porque deja que el estatuto regule con bastante libertad su administración, con las normas de las sociedades anónimas cerradas como regla supletoria en lo que el estatuto no diga. Soy su único accionista y su administrador, y el objeto social es amplio y comprende todas las actividades que la sociedad va a desarrollar.",
    "estado": "hecho"
  },
  {
    "cuando": "Noviembre 2026",
    "titulo": "El portal cliente",
    "texto": "Estoy afianzando el portal, que será el trampolín del producto.",
    "detalle": "El portal es la puerta por la que las empresas que contraten el servicio entran a la plataforma y cargan su información, y esa información incluye datos personales de sus trabajadores, de sus clientes y de sus proveedores. Por eso lo estoy diseñando desde el principio con la ley a la vista. La idea es que cada empresa cliente conserve la calidad de responsable de los datos que carga, que Simplifica SpA los trate solo por cuenta de ella y conforme a sus instrucciones, como encargada, y que el proveedor de la infraestructura tecnológica solo pueda intervenir con la autorización específica que cada cliente da en su contrato, sin que Simplifica deje de responder por él. En el portal se juegan, en la práctica, los deberes de confidencialidad y seguridad que la ley exige a cada cliente como responsable y que se extienden a quien trata los datos por su encargo.",
    "estado": "en-curso"
  },
  {
    "cuando": "Por venir",
    "titulo": "La plataforma, completa",
    "texto": "La plataforma tiene que estar terminada antes de que empiece la venta.",
    "detalle": "La plataforma ayuda a las empresas a ordenar su cumplimiento de la Ley 21.719, que modifica a fondo la Ley 19.628, crea la Agencia de Protección de Datos Personales con facultades para fiscalizar y sancionar, y empieza a regir el 1 de diciembre de 2026, salvo que se apruebe la prórroga que hoy se tramita en el Congreso. Al contratar, la plataforma se configura según los datos que trata cada empresa y la forma en que los trata, porque no tiene los mismos deberes una empresa de transporte que un colegio, que maneja datos de niños y adolescentes. Decidí que Antonia no saldría a vender una versión a medias por dos razones. La primera es de seriedad con los clientes, porque a quien contrata una herramienta de cumplimiento no se le puede entregar algo incompleto. La segunda es de método, porque si el producto fallara yo no podría saber si lo que estoy observando es el trabajo de Antonia o los defectos del producto.",
    "estado": "proximo"
  },
  {
    "cuando": "Por venir",
    "titulo": "Nace Antonia",
    "texto": "Antonia recibe sus instrucciones y empieza a trabajar en la empresa.",
    "detalle": "Antonia es una agente nueva, construida desde cero para esta empresa, con sus propias herramientas y sus propias cuentas, separadas de las de Simplificalo. Antes de que empiece quedan definidas por escrito sus instrucciones, las condiciones comerciales que puede ofrecer, que son las mismas condiciones generales que se publican para cualquier cliente, y la forma en que queda registrado todo lo que hace. Cuando una empresa decida contratar, el contrato se celebrará por medios electrónicos, como cualquier otra contratación en línea, y su formación se rige por los artículos 97 a 108 del Código de Comercio. Qué significa jurídicamente que la conversación que lleva a ese contrato la haya conducido una inteligencia artificial es una de las preguntas que más me interesa mirar de cerca, y prefiero dejarla planteada aquí antes que responderla. Como se entiende que la buena fe rige también en los tratos previos a un contrato, y nadie puede contratar induciendo a error a la otra parte, Antonia se presenta siempre como lo que es.",
    "estado": "proximo"
  },
  {
    "cuando": "Por venir",
    "titulo": "Primera campaña",
    "texto": "Antonia decide cómo y dónde buscar clientes, con un presupuesto acotado.",
    "detalle": "Con un presupuesto mensual acotado, Antonia decide cómo darse a conocer, a quién dirigirse y en qué gastar, siempre dentro de reglas que dejé fijadas antes de que empiece. Una empresa que vende cumplimiento en protección de datos no puede conseguir clientes tratando datos al margen de la ley, así que esas reglas parten justamente por ahí. Están pensadas para que Antonia trabaje con una base de licitud para cada tratamiento, para que informe quién está detrás de cada mensaje y para que respete el derecho de cada persona a oponerse a que sus datos se usen para ofrecerle el servicio, en cuyo caso deja de usarlos para ese fin. Lo mismo vale para su publicidad, que tiene que ser veraz y no puede inducir a error sobre lo que el servicio hace, como lo exige la ley de competencia desleal.",
    "estado": "proximo"
  },
  {
    "cuando": "Por venir",
    "titulo": "Primeros resultados",
    "texto": "Qué hizo Antonia, cuánto vendió y qué decisiones tomó.",
    "detalle": "Cuando haya pasado un tiempo razonable voy a publicar aquí el balance: qué hizo Antonia, cuánto vendió, qué decisiones tomó y dónde se equivocó. Todo eso quedará respaldado en la contabilidad de la sociedad, en las facturas que emita y en la documentación con que la sociedad tiene que poder demostrar que trató los datos conforme a la ley. Aparte de eso, la plataforma lleva un registro propio de cada acción de Antonia, y a partir de él voy a contar lo que pasó. Nunca voy a publicar el nombre de un cliente ni una conversación que permita identificar a alguien, salvo que esa persona lo autorice.",
    "estado": "proximo"
  }
];
export const ESTADO = { hecho: 'Hecho', 'en-curso': 'En curso', proximo: 'Próximo' };
// El hito en curso, o el último hecho si no hay ninguno en curso.
export const hitoActual = () => HITOS.find((h) => h.estado === 'en-curso') ?? [...HITOS].reverse().find((h) => h.estado === 'hecho');
