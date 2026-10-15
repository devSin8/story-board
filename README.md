# Ajanta Cave Paintings: A Visual Story

An 8-panel digital storyboard of the **Vessantara Jataka**, built with React, Vite, Tailwind CSS and custom CSS.

## Requirements
- Node.js 18 or newer (check with `node -v`)

## Run locally
1. Extract the ZIP and open a terminal in the `ajanta-storyboard` folder.
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Open the address shown in the terminal (usually http://localhost:5173).

## Print or save as PDF
Click **Print / Save as PDF** in the menu bar (or press Ctrl+P / Cmd+P). In the print dialog choose
"Save as PDF" and turn on **Background graphics** so the colours are kept. The menu and buttons are hidden
automatically in print.

## Build for production
`npm run build` creates the `dist/` folder. `npm run preview` serves it locally.

## Folder structure
- `index.html` HTML entry point
- `src/main.jsx` React entry point; `src/App.jsx` page layout
- `src/components/` Header, Navbar, TeamDetails, Introduction, Storyboard, StoryPanel, Significance, Conclusion, Illustrations
- `src/data/panels.js` text for the 8 panels (edit captions here)
- `src/components/Illustrations.jsx` SVG artwork for each panel
- `src/assets/` local images (lotus icon)
- `src/index.css` Tailwind directives, global and print styles
- `tailwind.config.js` colour palette (terracotta, sandstone, cream, bark, gold, lapis)

## Editing tips
- Team details come pre-filled with the five team members; add the faculty advisor on the page. Edits are typed directly on the page and remembered in your browser.
- Change story wording in `src/data/panels.js`; change colours in `tailwind.config.js`.

## Sources and accuracy
The story follows the traditional Vessantara Jataka. Panel text is narration only; no dialogue is invented.
Historical notes: Ajanta Caves, Maharashtra; rock-cut Buddhist caves from c. 2nd century BCE to c. 480 CE;
rediscovered 1819; UNESCO World Heritage Site 1983. Please cite your own references in your report.
