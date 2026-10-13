---
titulo: "La nota de crédito que mezcla afecto y exento"
bajada: "Casi nadie discute cómo se declara una nota de crédito. El problema aparece cuando el documento que se anula contenía las dos cosas, y ahí la mayoría de los procesos hacen lo más simple en vez de lo correcto."
tema: "IVA · Formulario 29"
fecha: "2026-10-12"
lectura: "8 minutos"
imagen: "/img/derecho/notas-de-credito-mixtas.png"
borrador: false
---

Hay operaciones que uno cree resueltas hasta que se ponen a volumen. La nota de crédito es una de ellas. Se emite, se registra, se rebaja del débito fiscal y nadie vuelve a mirarla. El problema empieza cuando la factura que se está anulando contenía a la vez montos afectos a IVA y montos exentos, porque en ese caso la rebaja no es una sino dos, y van a códigos distintos del formulario.

Es un caso más común de lo que parece. Una empresa que vende equipos y a la vez presta un servicio exento en la misma factura. Un contrato que incluye bienes gravados y una indemnización que no lo está. Una venta con flete facturado por separado dentro del mismo documento. En todos esos casos la factura es mixta, y cuando se anula parcialmente hay que decidir qué parte se está anulando.

## Qué dice la norma

El punto de partida es el artículo 21 del D.L. 825, que permite deducir del débito fiscal del período las sumas restituidas a los adquirentes por bonificaciones, descuentos y devoluciones, así como las cantidades restituidas cuando una venta queda sin efecto. Esa deducción opera respecto del impuesto que efectivamente se recargó en la operación original.

Ahí está la clave que suele pasarse por alto: **la nota de crédito no genera un tratamiento propio, hereda el de la operación que corrige.** Si la operación original tenía una parte afecta y una exenta, la nota de crédito que la deja sin efecto tiene también dos naturalezas, y no puede tratarse como un bloque único.

Por el lado del comprador, el artículo 23 N°3 del mismo cuerpo legal establece la regla de proporcionalidad cuando se realizan simultáneamente operaciones gravadas y exentas: el crédito fiscal debe calcularse en la proporción que corresponda. Cuando llega una nota de crédito sobre una factura mixta, el ajuste al crédito fiscal tiene que respetar esa misma proporción, no aplicarse al total del documento.

## Qué pasa en la práctica

Lo que ocurre en la mayoría de los procesos contables es una de estas dos cosas.

La primera es que la nota de crédito se imputa completa al monto afecto. Es lo más simple y lo que hace por defecto casi cualquier planilla: se toma el total del documento, se calcula el IVA hacia atrás y se rebaja. El resultado es que se rebaja más débito fiscal del que corresponde, porque una parte de lo anulado nunca estuvo gravada. Sobra crédito, falta impuesto, y la diferencia queda dormida hasta una fiscalización.

La segunda es la inversa y es más frecuente de lo que uno esperaría: la nota de crédito se registra completa como exenta, típicamente porque el sistema tomó el tipo de la última línea del documento o porque quien la registró vio que el motivo de la anulación era un servicio. Ahí se rebaja de menos y la empresa termina pagando un impuesto que no debía.

Ninguno de los dos errores exige desconocimiento de la norma. Los he visto en empresas donde el contador explica perfectamente el artículo 21 si uno se lo pregunta. El error no está en el criterio, está en que el proceso que ejecuta el registro no tiene la información necesaria para aplicarlo.

## El problema de fondo no es normativo

Aquí está, creo, lo que hace interesante este caso. Para tratar bien una nota de crédito mixta hay que saber tres cosas: cuánto del documento original era afecto, cuánto era exento, y a cuál de esos dos componentes corresponde el monto que se está anulando. Las dos primeras están en la factura. **La tercera no está en ninguna parte.**

La nota de crédito, como documento, indica un monto y una referencia al documento que corrige. No indica qué línea de ese documento está dejando sin efecto. Si se anula el total no hay problema, porque se anulan las dos partes en su proporción original. Pero si se anula parcialmente —un descuento posterior, una devolución de parte de la mercadería, una corrección de precio— la imputación es una decisión que alguien tiene que tomar, y esa decisión no viene en los datos.

Por eso el problema no se resuelve capacitando mejor a quien registra. Se resuelve cambiando el momento en que se captura la información: la imputación tiene que definirse cuando se emite la nota de crédito, por quien conoce el motivo de la anulación, y no después, por quien solo ve un monto total en un registro.

## Cómo lo resolvería en el proceso

La regla de diseño que aplicaría es esta: **una nota de crédito sobre un documento mixto no puede registrarse con un solo monto.** Tiene que llevar dos, separados desde el origen, o una imputación explícita a uno de los dos componentes.

En términos de proceso, eso significa tres cosas concretas.

Primero, al momento de emitir la nota de crédito debe quedar registrado, junto al monto total, cuánto corresponde a la parte afecta y cuánto a la exenta. No es un dato que se deduzca después; es un dato que se captura al origen y que la persona que autoriza la anulación sí conoce, porque sabe por qué la está emitiendo.

Segundo, el sistema debe impedir que se registre una nota de crédito referida a un documento mixto sin esa desagregación. Un control preventivo, en el punto de entrada, es infinitamente más barato que descubrir la diferencia tres meses después.

Tercero, y esto es lo que a mi juicio cierra el asunto: la suma de las notas de crédito imputadas a la parte afecta de un documento nunca puede superar el monto afecto original, y lo mismo para la parte exenta. Es una validación aritmética elemental, que detecta de inmediato el caso en que alguien imputó todo a un solo componente. Si el sistema puede verificar eso automáticamente, el error deja de depender de que alguien se acuerde.

## Por qué esto importa más de lo que parece

Una nota de crédito mal imputada no rompe nada. El formulario cuadra, el asiento cuadra, el balance cuadra. Es exactamente el tipo de error que sobrevive porque no produce ningún síntoma visible: nadie recibe una alerta, ningún total queda descuadrado, ningún control aritmético falla. La contabilidad por partida doble garantiza cuadratura, no veracidad, y este caso lo ilustra bien.

El error aparece solo cuando alguien hace la pregunta correcta, que casi siempre es una de dos: una fiscalización que revisa la composición del débito fiscal, o una auditoría que decide reconstruir la proporcionalidad del crédito. Para entonces han pasado varios períodos y la diferencia se acumuló.

Ese es, en el fondo, el argumento que me interesa desarrollar en este sitio. La discusión tributaria tiende a concentrarse en la interpretación de la norma, que es donde está lo intelectualmente entretenido. Pero la mayor parte del dinero que las empresas pierden en cumplimiento no se pierde por interpretar mal: se pierde por procesos que no fueron diseñados para aplicar bien una interpretación que ya se tenía correcta. Y eso no se arregla leyendo más el Código. Se arregla mirando dónde, exactamente, el proceso deja de tener la información que necesita para decidir.

---

*Si tienes un caso de nota de crédito mixta que resolviste de otra forma, o si crees que el criterio de imputación que planteo es discutible, me interesa saberlo. Es el tipo de discusión que hace falta tener entre quienes operamos esto todos los meses.*
