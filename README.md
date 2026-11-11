# Presentación de Ingeniería en Ciencias de la Computación

Presentación web de tres diapositivas para la UPS, sede Cuenca. Está organizada en HTML, CSS, JavaScript y recursos gráficos independientes.

## Vista local

Abre `index.html` con un servidor local. Por ejemplo, desde esta carpeta:

```bash
python3 -m http.server 8000
```

Luego visita `http://localhost:8000` en el navegador.

## Descargar como PDF

Usa el botón **Descargar PDF**. El archivo se genera en formato panorámico 16:9, con una diapositiva por página y los fondos de color incluidos. La página carga `html2pdf.js` desde cdnjs, por lo que necesita conexión a Internet para descargar el PDF.

## Estructura

- `index.html`: estructura y controles.
- `css/presentation.css`: estilos, tamaños y reglas de impresión.
- `js/components.js`: componentes reutilizables de cabecera, tarjetas y pie.
- `js/presentation.js`: contenido, navegación y descarga del PDF.
- `assets/images/`: logos e imágenes usadas en la presentación.
