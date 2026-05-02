# Programadores para la Paz – Semana 2 Día 5

## Project Overview
A static HTML project for a community participation form activity. Students complete and submit their work via personal Git branches.

## Structure
- `semana2/` — Main project folder students work in
  - `index.html` — Community participation form ("Formulario Participa")
  - `styles.css` — Form styling
  - `checklist-accesibilidad.txt` — Accessibility checklist to fill in
  - `reflexion-verificacion.txt` — Responsible verification reflection
- `instrucciones/` — Instructor guide for the activity

## Running
The app is served as a static site using Python's built-in HTTP server:
```
python3 -m http.server 5000 --directory semana2 --bind 0.0.0.0
```
Runs on port 5000.

## Deployment
Configured as a static deployment with `publicDir: semana2`.

## Workflow
Students clone the repo, create a personal branch (`nombres_apellidos`), modify files in `semana2/`, and push their branch to GitHub as evidence of completion.
