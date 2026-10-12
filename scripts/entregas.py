"""Divide el ensayo (exportado en markdown) en entregas para el blog.

Uso:  python3 scripts/entregas.py ruta/al/ensayo.md
Crea o reemplaza los archivos de borradores/ensayo/ (carpeta que no se sube a GitHub).
"""
import re
import sys
from pathlib import Path

EPIGRAFE = (
    "> Lo que está abajo es como lo que está arriba, "
    "y lo que está arriba es como lo que está abajo.\n>\n> Tabla Esmeralda"
)

PLAN = [
    # (número, slug, título, bajada, primer capítulo, último capítulo)
    (1, "01-el-guardian", "El guardián",
     "Por qué el universo necesitaría un límite, y por qué la luz puede llevar un mensaje.",
     None, "El lenguaje de la luz"),
    (2, "02-el-archivo", "El archivo",
     "Mirar lejos es mirar atrás: la luz como memoria del universo, y los intentos de doblegarla.",
     "El archivo", "Abismos y atajos"),
    (3, "03-el-segundo-guardian", "El segundo guardián",
     "El otro guardián del tiempo, y la luz convertida en símbolo del conocimiento.",
     "El segundo guardián", "La penumbra"),
    (4, "04-causa-y-efecto", "La ley de causa y efecto",
     "La luz que es onda y partícula, y la vieja ley según la cual toda causa tiene su efecto.",
     "Dos sombras de una misma luz", "La ley de causa y efecto"),
    (5, "05-la-luz-que-abrio-los-ojos", "La luz que abrió los ojos",
     "Lo que la Tabla Esmeralda dice del Sol, y cómo la vida aprendió a ver.",
     "La operación del Sol", "La luz que abrió los ojos"),
    (6, "06-generaciones-sin-cielo", "Generaciones sin cielo",
     "Lo que la luz no alcanza, los cielos que estamos perdiendo y las bóvedas que los guardaron.",
     "Lo que la luz no ve", "La bóveda estrellada"),
    (7, "07-caminos-de-vidrio", "Caminos de vidrio",
     "Los caminos de vidrio por donde hoy viaja la luz, y los mensajes que enviamos a las estrellas.",
     "Caminos de vidrio", "Mensajes de luz"),
    (8, "08-quien-recibe-la-luz", "Quien recibe la luz",
     "La conciencia como receptora de la luz, y la idea del universo como un río.",
     "Quien recibe la luz", "El río y los remolinos"),
    (9, "09-como-es-arriba-es-abajo", "Como es arriba, es abajo",
     "Polvo de estrellas, polvo de luz, y el cierre del recorrido.",
     "Polvo de estrellas, polvo de luz", "Como es arriba, es abajo"),
]


def bloques(texto):
    """Devuelve (intro, lista de capítulos) con la parte a la que pertenece cada uno."""
    lineas = texto.split("\n")
    # Quita título, fecha/firma del documento y epígrafe: el sitio los muestra aparte.
    cuerpo = "\n".join(l for l in lineas[1:] if not re.match(r"^\w{3} \d{1,2}, \d{4} ·", l))
    cuerpo = re.sub(r"^(> .*\n|>\n)+", "", cuerpo.strip() + "\n", flags=re.M)
    trozos = re.split(r"\n(?=#{1,2} )", "\n" + cuerpo.strip())
    intro, capitulos, parte = "", [], ""
    for t in trozos:
        t = t.strip()
        if not t:
            continue
        if t.startswith("# "):
            parte = t[2:].split("\n")[0].strip()
        elif t.startswith("## "):
            titulo = t[3:].split("\n")[0].strip()
            capitulos.append({"titulo": titulo, "parte": parte, "texto": t})
        else:
            intro = t
    return intro, capitulos


def main(ruta):
    intro, caps = bloques(Path(ruta).read_text(encoding="utf-8"))
    nombres = [c["titulo"] for c in caps]
    destino = Path(__file__).resolve().parent.parent / "borradores" / "ensayo"
    destino.mkdir(parents=True, exist_ok=True)
    for num, slug, titulo, bajada, desde, hasta in PLAN:
        i = 0 if desde is None else nombres.index(desde)
        j = nombres.index(hasta)
        partes_md, parte_actual = [], None
        if desde is None:
            partes_md.append(EPIGRAFE)
            partes_md.append(intro)
        for c in caps[i:j + 1]:
            if c["parte"] != parte_actual:
                if parte_actual is not None or desde is None:
                    partes_md.append(f'<p class="parte">{c["parte"]}</p>')
                parte_actual = c["parte"]
            partes_md.append(c["texto"])
        cuerpo = "\n\n".join(partes_md)
        palabras = len(cuerpo.split())
        minutos = max(1, round(palabras / 200))
        parte = caps[i]["parte"]
        cabecera = (
            "---\n"
            f'titulo: "{titulo}"\n'
            f'bajada: "{bajada}"\n'
            f"entrega: {num}\n"
            f'parte: "{parte}"\n'
            f'lectura: "{minutos} minutos"\n'
            "borrador: true\n"
            "---\n\n"
        )
        (destino / f"{slug}.md").write_text(cabecera + cuerpo + "\n", encoding="utf-8")
        print(f"Entrega {num}: {palabras} palabras -> {slug}.md")


if __name__ == "__main__":
    main(sys.argv[1])
