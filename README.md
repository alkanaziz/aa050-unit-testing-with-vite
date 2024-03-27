# Einführung in das Unit Testing für Webentwicklung

## Was ist Unit Testing?

Unit Testing ist eine Methode, um den Code zu testen. Dabei wird der Code in kleine Einheiten, sogenannte Units, aufgeteilt und jede dieser Units wird einzeln getestet. Das Ziel ist es, die Units so zu testen, dass sie unabhängig voneinander funktionieren. Das bedeutet, dass jede Unit isoliert getestet wird und keine Abhängigkeiten zu anderen Units hat.

## Implementierung von Unit Testing mit vitest

### vitest

Vitest ist ein Test-Framework für JavaScript, das speziell für die Entwicklung von Webanwendungen entwickelt wurde. Es bietet eine einfache und intuitive API, die es Entwicklern ermöglicht, Tests für ihre Webanwendungen zu schreiben und auszuführen.

```bash
npm i --save-d vitest
```

### jsdom

Jsdom ist eine JavaScript-Implementierung des DOM und des HTML-Parser, die in Node.js ausgeführt werden kann. Es ermöglicht Entwicklern, Tests für ihre Webanwendungen zu schreiben, ohne einen Browser zu öffnen.

```bash
npm i --save-d jsdom
```

### @testing-library/react

Testing Library ist eine Sammlung von Test-Utilities für React, die es Entwicklern ermöglicht, Tests für ihre React-Komponenten zu schreiben. Es bietet eine einfache API, die es Entwicklern ermöglicht, Tests für ihre Komponenten zu schreiben, ohne sich um die Implementierungsdetails kümmern zu müssen.

```bash
npm i --save-d @testing-library/react
```

### vite-config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
})
```

## Fazit

Unit Testing ist eine wichtige Methode, um die Qualität des Codes zu verbessern und sicherzustellen, dass die Anwendung wie erwartet funktioniert. Mit den richtigen Tools und Frameworks können Entwickler Tests für ihre Webanwendungen schreiben und sicherstellen, dass sie fehlerfrei sind.
```