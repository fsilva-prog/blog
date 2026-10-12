# Blog de Felipe Silva Landeros

Un solo sitio con dos secciones:

- **Norma y Proceso** (`/derecho/`): artículos de derecho.
- **La luz, guardián del universo** (`/la-luz/`): el ensayo, publicado por entregas.

## Cómo funciona

Cada artículo o entrega es un archivo de texto (`.md`) dentro de `src/content/`.
Cada vez que algo cambia en este repositorio, GitHub construye el sitio y lo publica
solo, en un par de minutos (lo hace el archivo `.github/workflows/publicar.yml`).
No hay panel, base de datos ni claves.

Lo que está en este repositorio es lo publicado. Los borradores no se suben nunca:
viven en la carpeta `borradores/`, que GitHub ignora.

## Publicar una entrega del ensayo o un artículo

1. Toma el archivo desde `borradores/` y cópialo a `src/content/ensayo/`
   (o `src/content/derecho/`).
2. En su cabecera cambia `borrador: true` por `borrador: false` y agrega la fecha:

```
borrador: false
fecha: "2026-10-20"
```

3. Súbelo. Desde el Mac:

```
git add .
git commit -m "Entrega 1"
git push
```

O desde github.com: abre la carpeta `src/content/ensayo`, **Add file → Upload files**,
arrastra el archivo y aprieta **Commit changes**.

También puedes pedírselo a Claude: "publica la entrega 2 con fecha de hoy".

## Cabecera de un artículo de derecho

```
---
titulo: "Título del artículo"
bajada: "Una o dos frases que resuman de qué se trata."
tema: "IVA · Formulario 29"
fecha: "2026-10-20"
lectura: "8 minutos"
borrador: false
---
```

El nombre del archivo es la dirección: `ppm-propuesta-sii.md` → `/derecho/ppm-propuesta-sii/`
(sin tildes, sin espacios, con guiones).

## Cómo se escribe (markdown)

```
Un párrafo normal. Para separar párrafos, una línea en blanco.

## Subtítulo

**negrita** y *cursiva*

> Una cita

[Un enlace](https://www.sii.cl)
```

## Si el ensayo cambia en el documento

Exporta el documento en markdown y regenera las entregas en `borradores/ensayo/`:

```
python3 scripts/entregas.py ruta/al/ensayo.md
```

La división en entregas está al inicio de `scripts/entregas.py`.

## Ver el sitio en tu Mac antes de publicar

```
npm install
npm run dev
```

Abre `http://localhost:4321`. Ahí también ves los borradores, marcados en amarillo,
si están dentro de `src/content/` con `borrador: true`.

## Cambios fáciles

- Página Acerca: `src/pages/acerca.astro`
- Portada: `src/pages/index.astro`
- Colores y tipografía: primeras líneas de `src/styles/global.css`

## Si algo falla

En github.com, pestaña **Actions**, aparece cada publicación. Si una sale en rojo,
el mensaje dice qué archivo y qué línea falló. Casi siempre es la cabecera: falta una
comilla o un guion, o la fecha no está entre comillas.
