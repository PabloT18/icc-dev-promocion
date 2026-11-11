# Presentación de Ingeniería en Ciencias de la Computación

Sitio estático de presentación de la carrera de Ingeniería en Ciencias de la Computación de la Universidad Politécnica Salesiana, sede Cuenca. Contiene tres diapositivas con información sobre la carrera, campo laboral, beneficios y proyección académica; también incluye la versión final en PDF.

## Ver la presentación

Abre [index.html](index.html) en un servidor local:

```bash
python3 -m http.server 8000
```

Visita [http://localhost:8000](http://localhost:8000).

## Exportar a PDF

Usa el botón **Exportar a PDF** y selecciona **Guardar como PDF**. Para conservar el formato panorámico, configura orientación horizontal, tamaño de página 13.333 × 7.5 pulgadas, escala 100 % e impresión de fondos. El botón requiere conexión a Internet para cargar html2pdf.js desde cdnjs.

El PDF final también está disponible en el archivo [Ingeniería en Ciencias de la Computación _ UPS Cuenca.pdf](./Ingeniería%20en%20Ciencias%20de%20la%20Computación%20_%20UPS%20Cuenca.pdf).

## Estructura

- `index.html`: punto de entrada y controles.
- `css/root.css`: hoja principal que importa los estilos.
- `css/`: estilos organizados por componentes, diapositivas, diseño adaptable e impresión.
- `js/components.js`: componentes reutilizables para tarjetas, encabezados y pie.
- `js/presentation.js`: contenido, navegación y exportación.
- `assets/images/`: logotipos y recursos gráficos.
- `.github/workflows/deploy-pages.yml`: despliegue automático a GitHub Pages.

## Despliegue

Cada push a `main` ejecuta GitHub Actions y publica el sitio en GitHub Pages. También se puede iniciar manualmente desde la pestaña **Actions**.

Si Pages todavía no está configurado, selecciona **Settings → Pages → Build and deployment → Source: GitHub Actions**.
