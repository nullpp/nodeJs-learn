# Repository Guidelines

## Project Structure & Module Organization
- Root holds runnable Express demos (`1.js` through `8.全局中间件.js`) illustrating routing, middleware, and response patterns.
- Static assets and HTML forms (`2.form.html`, `test.html`) live alongside scripts for quick manual testing; keep new assets grouped by feature.
- Shared data samples such as `singers.json` sit at the root; treat them as fixtures and avoid mixing with executable code.
- Dependencies are managed in `package.json`; avoid committing generated artifacts beyond those already versioned.

## Build, Test, and Development Commands
- `npm install` installs Express and any additional middleware needed for tutorials.
- `node <file>.js` runs an individual example; prefer creating new numbered examples rather than overloading existing ones.
- `npm run dev -- <file>.js` (after adding a local `nodemon` dev dependency) is recommended when you need auto-reload; document any new scripts you introduce in `package.json`.

## Coding Style & Naming Conventions
- Use 2-space indentation and trailing semicolons to match current files.
- Favor descriptive route names and keep filenames short, numbered, and suffixed in Chinese where existing patterns do so; new lesson files should follow `NN.description.js`.
- Prefer CommonJS (`require`, `module.exports`) for consistency; if adding ES modules, clearly isolate them.
- Run `npx prettier --write <files>` before committing changes; add a `.prettierrc` if formatting needs cannot be met by defaults.

## Testing Guidelines
- There is no automated test suite; when adding one, prefer Jest for unit coverage and supertest for HTTP assertions.
- Keep manual verification steps documented at the bottom of each example file in comments (inputs, expected responses).
- Name new test files `<topic>.test.js` and place them under a top-level `__tests__` directory so future tooling discovers them automatically.

## Commit & Pull Request Guidelines
- Follow imperative, present-tense commit messages (`Add singer search route`); group related tutorial steps into single commits.
- Reference lesson context or issue IDs in the commit footer when applicable.
- Pull requests should explain the scenario demonstrated, list runnable entry points (`node 9.new-example.js`), and include screenshots of terminal output or HTTP responses when it aids review.

## Security & Environment Tips
- Never commit `.env` files; document required values in `README` or inline comments.
- Validate and sanitize all request input in new examples to avoid copying insecure patterns into production projects.
