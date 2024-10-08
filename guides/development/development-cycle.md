# Development

The development of Celaris involves two main components: the frontend application and the C++ backend. The frontend application is built using Vite, while the backend is built using C++.

## Starting the Development Environment

To start the development environment, you will need to run the following commands:

:::tabs
== npm 

```bash
npm run celaris dev
```

== yarn

```bash
yarn celaris dev
```

== pnpm

```bash
pnpm celaris dev
```

== bun

```bash
bunx celaris dev
```
:::


::: info NOTE

The `dev` command will start the development server for both the frontend and backend applications. The frontend application will be served on `localhost:7832`, and the backend will wait for the frontend to connect before serving the application.

:::

Once the development server is running, you can also access the frontend application by navigating to `localhost:7832` in your browser.

## Live Reloading

The development environment supports live reloading for both the frontend and backend applications. This means that any changes you make to the frontend or backend code will automatically be reflected in the application without the need to restart the server.
