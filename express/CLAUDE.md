# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Node.js learning repository focused on Express.js fundamentals. The codebase consists of numbered tutorial files demonstrating progressive Express concepts, from basic setup to middleware implementation.

## Running the Application

To run any example file:
```bash
node <filename>.js
```

For example:
```bash
node 1.js
node 8.全局中间件.js
```

All examples listen on port 3000 by default. Start the server and access endpoints at `http://localhost:3000`.

## Architecture

This is a flat-structure learning repository with numbered example files that build upon each other:

1. **Basic Express Setup (1.js)** - Minimal Express application demonstrating server initialization and basic routing
2. **Routing (2.路由.js)** - GET/POST routes, `app.all()` for handling all HTTP methods, and 404 wildcard routing
3. **Request Parameters (3.获取请求参数.js)** - Accessing query strings, request paths, and IP addresses
4. **Route Parameters (4.获取路由参数.js)** - Using dynamic URL parameters (e.g., `/:id.html`)
5. **Route Parameter Exercise (5.路由参数练习.js)** - Practical example using `singers.json` data file to create dynamic pages based on route parameters
6. **Response Methods (6.设置响应.js)** - Express response methods including `res.status()`, `res.set()`, and `res.send()`, demonstrating method chaining
7. **Other Response Types (7.其他响应.js)** - Redirects (`res.redirect()`), file downloads (`res.download()`), JSON responses (`res.json()`), and serving files (`res.sendFile()`)
8. **Global Middleware (8.全局中间件.js)** - Creating and using middleware with `app.use()` for cross-cutting concerns like logging

## Data Files

- **singers.json** - Contains an array of singer data with properties: `id`, `singer_name`, `singer_pic`. Used in route parameter exercises.

## Key Patterns

### Express Application Lifecycle
All examples follow this pattern:
1. Import express: `const express = require("express")`
2. Create app: `const app = express()`
3. Define routes/middleware
4. Start server: `app.listen(3000, callback)`

### Middleware Pattern
Middleware functions follow the signature: `(req, res, next) => {}` and must call `next()` to pass control to the next handler. Apply globally with `app.use(middleware)`.

### Route Parameters
Access dynamic route segments via `req.params`. Example: route `/:id.html` makes `id` available at `req.params.id`.

### Response Chaining
Express response methods return the response object, allowing method chaining:
```javascript
res.status(500).set("header", "value").send("body")
```
