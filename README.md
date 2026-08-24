# McCabe Engineering Suite

Sitio estático listo para publicarse mediante GitHub Pages.

## Archivos del sitio

- `index.html`: página principal y navegación.
- `fluidos.html`: mecánica de fluidos.
- `calor.html`: transferencia de calor.
- `masstransfer.html`: transferencia de masa.
- `mechanich.html`: operaciones mecánicas y manejo de sólidos.
- `.nojekyll`: evita que GitHub Pages procese el sitio como un proyecto Jekyll.

## Publicación inicial

1. Crea un repositorio público en GitHub. Un nombre sugerido es `mccabe-engineering-suite`.
2. Sube **el contenido de esta carpeta**, de modo que `index.html` quede en la raíz del repositorio.
3. Abre `Settings` → `Pages`.
4. En `Build and deployment`, selecciona `Deploy from a branch`.
5. Selecciona la rama `main`, la carpeta `/(root)` y pulsa `Save`.
6. Espera a que GitHub muestre el enlace del sitio publicado.

## Dominio personalizado

Primero publica el sitio con la dirección temporal de GitHub Pages. Después:

1. En el repositorio, abre `Settings` → `Pages`.
2. Escribe tu dominio en `Custom domain` y pulsa `Save`.
3. En la configuración DNS de la empresa donde compraste el dominio, crea los registros requeridos.

Para el dominio principal, por ejemplo `tudominio.com`:

| Tipo | Nombre | Valor |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Para `www.tudominio.com`:

| Tipo | Nombre | Valor |
| --- | --- | --- |
| CNAME | `www` | `TU-USUARIO.github.io` |

No agregues el nombre del repositorio al valor del CNAME. Cuando GitHub valide el dominio, activa `Enforce HTTPS`.

## Actualizaciones

Para publicar una nueva versión, reemplaza el archivo correspondiente en el repositorio y confirma el cambio. GitHub Pages volverá a desplegar el sitio automáticamente desde `main`.
