# Programadores para la Paz - Semana 2 Día 5

## Estudiante
**Nombre:** Iver Obregón Torres 
**Rama:** `iver_obregon_torres`

## Actividad
Formulario de Contacto Accesible aplicando WCAG 2.2 Nivel AA, lenguaje claro y minimización de datos.

## Objetivo
Construir un formulario web básico orientado a la participación comunitaria, aplicando criterios de accesibilidad, lenguaje claro, minimización de datos y verificación responsable de la información.

## Cambios Realizados - Semana 2

### index.html
- Estructura semántica con `<main>` y `<h1>`
- Formulario con `label for` conectado a cada `input`
- Atributos `required`, `aria-describedby` y `aria-label="requerido"`
- Contenedores `role="alert"` para anunciar errores con lectores de pantalla
- Validación HTML5 con `type="email"`, `type="tel"` y `pattern`

### styles.css 
- Contraste de color 4.5:1 mínimo según WCAG 2.2
- Indicador `:focus` visible con outline de 3px y offset de 2px
- Estados de error con `aria-invalid="true"` y color #d32f2f
- Botones con tamaño mínimo 44px y estados hover/focus claros
- Tipografía legible: 16px mínimo, line-height 1.6

## Checklist WCAG 2.2 Nivel AA Cumplido
- [x] **1.3.1 Info y Relaciones**: Labels asociados correctamente
- [x] **1.4.3 Contraste Mínimo**: 4.5:1 en texto normal
- [x] **2.4.6 Encabezados y Etiquetas**: h1 descriptivo, labels claros
- [x] **2.4.7 Foco Visible**: Outline 3px en todos los elementos
- [x] **3.3.1 Identificación de Errores**: role="alert" en mensajes
- [x] **3.3.2 Etiquetas o Instrucciones**: Instrucciones en campo teléfono
- [x] **4.1.3 Mensajes de Estado**: Errores anunciados a lectores de pantalla

## Principios de Accesibilidad Aplicados
1. **Perceptible**: Contraste suficiente y texto alternativo en * requerido
2. **Operable**: Navegable 100% con teclado, foco siempre visible
3. **Comprensible**: Lenguaje claro, instrucciones y prevención de errores
4. **Robusto**: HTML semántico válido, compatible con tecnologías de apoyo

## Minimización de Datos
Solo se solicitan datos necesarios: nombre, email, asunto y mensaje. Teléfono es opcional. No se almacena información sin consentimiento.

## Pruebas Realizadas
1. **Teclado**: Tabulación completa por todos los campos sin trampa
2. **Lector de pantalla NVDA**: Anuncia labels, errores y campos requeridos
3. **Contraste**: Verificado con WebAIM Contrast Checker
4. **Zoom 200%**: Contenido se reajusta sin pérdida de función
