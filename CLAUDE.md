# Cómo procesar un proyecto nuevo para el portfolio

Cuando te pase un PDF, notebook, código o cualquier documento de un
proyecto nuevo, hazlo tú mismo de principio a fin, sin devolverme la
información en el chat. En concreto:

1. **Analiza el documento** y extrae: título del proyecto, tecnologías
   usadas, categoría, idioma(s) en que está documentado, el problema
   que resuelve, qué se construyó y cómo, y el resultado/outcome
   obtenido.

2. **Crea la página HTML nueva** copiando exactamente la estructura,
   clases CSS y estilo de `0plantilla.html` (esa es la plantilla base
   a seguir siempre, no te inventes una estructura distinta). Rellena
   sus secciones con la información real del proyecto: overview, el
   problema, qué se construyó, y el outcome.

3. **Añade el proyecto al array `PROJECTS`** dentro de `index.html`,
   con todos sus campos (title, file, category, thumbColor, languages,
   stack, page, download), siguiendo el mismo formato que las entradas
   ya existentes.

4. **Deja huecos claros para las imágenes** dentro del HTML nuevo,
   con un comentario indicando qué debe ir ahí (portada y cada imagen
   del cuerpo), usando una ruta de archivo provisional en `images/`
   que yo luego sustituya por la imagen real.

5. **Redacta todo el texto tú mismo**, en inglés, teniendo en cuenta
   qué imagen va a acompañar cada sección (haz referencia natural a
   ellas cuando aporte, ej. "as the chart below shows..."). El cuerpo
   puede quedar también sin imágenes si el proyecto no tiene material
   visual aprovechable, no las fuerces.

6. **No me devuelvas el texto en el chat.** Escríbelo directamente en
   los archivos. Lo único que quiero que me devuelvas al final es:
   - Qué imagen usar de portada (cover), indicando si debe salir del
     propio proyecto o, solo si no hay ninguna aprovechable, una
     sugerencia genérica.
   - Qué imágenes necesito añadir en el cuerpo (cuántas, y qué debe
     mostrar cada una: una gráfica concreta, una captura de terminal,
     un fragmento de código, etc.), para que yo las genere/capture y
     las suba a la carpeta `images/` con el nombre de archivo exacto
     que hayas usado en el HTML.

Reglas de redacción (aplican siempre, sin excepción):

- Nunca pongas una coma antes de "and" en una enumeración (evita la
  coma Oxford).
- No uses el carácter "—" (guion largo / em dash) en ningún punto del
  texto.
- Evita frases de relleno, adjetivos vacíos ("robust", "seamless",
  "cutting-edge") y estructuras repetitivas del tipo "not only... but
  also".
- Frases cortas y directas, con datos y cifras concretas siempre que
  el documento del proyecto las tenga.
  