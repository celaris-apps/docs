# Project Structure

::: info NOTE
You do not need to explictly follow this documentation page. This is a reference page for the project structure of a Celaris project for those who are interested in understanding the underlying structure of the project.

If you are looking for a guide on how to get started with Celaris, please refer to the [Quick Start](/guides/getting-started/quick-start) guide.

If you have already scaffolded a Celaris project and you are looking to use it for development, please refer to the [Development Cycle](/guides/development/development-cycle) guide.
:::

This documentation provides a detailed breakdown of the project structure for the C++ and Vite-based application. The project integrates a C++ backend with a Vite-powered frontend, allowing for seamless communication between the two.


## Overview

The project is scaffolded using [`create-celaris`](https://github.com/celaris-apps/create-celaris), an npm initializer that sets up the project structure by:

- Fetching a Vite template from [`celaris-apps/templates`](https://github.com/celaris-apps/templates) based on the user's choice of framework and TypeScript support.
- Merging the template with a C++ webview project from [`celaris-apps/celaris-src`](https://github.com/celaris-apps/celaris-src).
- Fixing the `package.json` file using a custom function to include necessary scripts and dependencies.
- Injecting CMake commands into `package.json` for easier control at runtime.
- Installing `celaris-cli` for additional development control.

## Directory Structure

Below is a breakdown of the project's directory and file structure (using vue-ts framework as an example):


::: details Directory Structure
This is a details block.

```plaintext
.
├── .vscode/
│   └── extensions.json
├── CMakeLists.txt
├── index.html
├── node_modules/*
├── package-lock.json
├── package.json
├── public/
│   └── vite.svg
├── somefile.txt
├── src/
│   ├── App.vue
│   ├── assets/
│   │   └── celaris.svg
│   ├── bindings.d.ts
│   ├── components/
│   │   └── HelloWorld.vue
│   ├── main.ts
│   ├── style.css
│   ├── types/
│   │   └── index.ts
│   └── vite-env.d.ts
├── src-celaris/
│   ├── .gitignore
│   ├── build/*
│   ├── celaris.cc
│   ├── CMakeLists.txt
│   ├── config.ini
│   ├── includes/
│   │   ├── celaris.h
│   │   ├── process_path.h
│   │   └── trim.h
│   ├── main.cc
│   ├── resources/
│   │   ├── macos/
│   │   │   ├── app_icon.icns
│   │   │   └── resources.cmake
│   │   └── windows/
│   │       ├── icon.ico
│   │       ├── resources.cmake
│   │       ├── resources.rc
│   │       └── version.rc.in
│   └── test/
│       ├── CMakeLists.txt
│       └── test.cc
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### `.vscode`

- **`.vscode/extensions.json`**: Configuration file specifying recommended extensions for the project in Visual Studio Code.

### Root Files

- **`CMakeLists.txt`**: The main CMake configuration file used for building the C++ backend.
- **`index.html`**: The main HTML file for the Vite application.
- **`package-lock.json`**: Automatically generated file that describes the exact dependency tree that was installed.
- **`package.json`**: Contains metadata about the project, including dependencies, scripts, and configurations.
- **`somefile.txt`**: A placeholder file; can be used for notes or removed if unnecessary.

### Node Modules

- **`node_modules/`**: Directory containing all the npm packages installed for the frontend application.

### Public Assets

- **`public/vite.svg`**: Public assets that are directly served by Vite.

### Source Files (`src`)

Contains the source code for the frontend application.

#### Files and Directories:

- **`src/App.vue`**: The root Vue component of the application.
- **`src/assets/`**: Directory for static assets like images and icons.
  - **`celaris.svg`**: An SVG asset used within the application.
- **`src/bindings.d.ts`**: TypeScript declaration file for custom bindings between the frontend and backend.
- **`src/components/`**: Directory for Vue components.
  - **`HelloWorld.vue`**: A sample Vue component.
- **`src/main.ts`**: The main entry point for the frontend application.
- **`src/style.css`**: Global styles for the application.
- **`src/types/`**: Directory for custom TypeScript types.
  - **`index.ts`**: Exports and defines custom types used across the application.
- **`src/vite-env.d.ts`**: Provides TypeScript types for Vite-specific features.

### C++ Backend (`src-celaris`)

Contains the source code for the C++ backend.

#### Files and Directories:

- **`.gitignore`**: Specifies files and directories to be ignored by Git within this folder.
- **`build/`**: Directory where the C++ build artifacts are placed.
- **`celaris.cc`**: C++ source file containing core logic for the backend.
- **`CMakeLists.txt`**: CMake configuration file specific to the C++ backend.
- **`config.ini`**: Configuration file for the C++ application.
- **`includes/`**: Header files for the C++ application.
  - **`celaris.h`**: Header file for declarations used in `celaris.cc`.
  - **`process_path.h`**: Header file for handling process paths.
  - **`trim.h`**: Header file for string trimming utilities.
- **`main.cc`**: The main entry point for the C++ application.
- **`resources/`**: Contains resource files for different platforms.
  - **`macos/`**:
    - **`app_icon.icns`**: Icon file for macOS applications.
    - **`resources.cmake`**: CMake configurations for macOS resources.
  - **`windows/`**:
    - **`icon.ico`**: Icon file for Windows applications.
    - **`resources.cmake`**: CMake configurations for Windows resources.
    - **`resources.rc`**: Resource script for Windows applications.
    - **`version.rc.in`**: Template for Windows version information.
- **`test/`**: Contains test files for the C++ application.
  - **`CMakeLists.txt`**: CMake configurations for building and running tests.
  - **`test.cc`**: C++ test source file.

### TypeScript Configuration

- **`tsconfig.app.json`**: Extends the base `tsconfig.json` with settings specific to the application code.
- **`tsconfig.json`**: The base TypeScript configuration file.
- **`tsconfig.node.json`**: TypeScript configuration for Node.js-specific code, such as configuration files.

### Vite Configuration

- **`vite.config.ts`**: Configuration file for Vite, defining plugins, build options, and other settings.

:::

## Build and Development Tools

### Create-Celaris

The project is built using [`create-celaris`](https://github.com/celaris-apps/create-celaris), an npm create command that scaffolds the project by:

- Fetching a Vite template from [`celaris-apps/templates`](https://github.com/celaris-apps/templates), tailored based on the user's choice of framework and TypeScript support.
- Merging it with a C++ webview project from [`celaris-apps/celaris-src`](https://github.com/celaris-apps/celaris-src).
- Adjusting the `package.json` file to include necessary dependencies and scripts using a custom function.
- Injecting various CMake commands into the `package.json` for easier control during development.
- Installing `celaris-cli` to provide additional commands for managing the development environment.

### Celaris-CLI

[`celaris-cli`](https://github.com/celaris-apps/celaris-cli) is a command-line tool that allows you to control various aspects of development, such as:

- Starting the development environment with live reloading.
- Building the application for release (feature coming soon).


## Scripts and Commands

The `package.json` includes various scripts for building and running both the frontend and backend.

**Common Scripts:**

- **`npm run dev`**: Starts the development server with hot module replacement for the frontend and watches for changes in the backend.
- **`npm run build`**: Builds the frontend application for production.
- **`npm run build:cpp`**: Builds the C++ backend using CMake.
- **`npm run start`**: Runs the production build of the application.
- **`npm run test`**: Runs tests for the C++ backend.
- **`npm run lint`**: Lints the codebase using configured linting tools.

*Note: The exact scripts may vary depending on the injected CMake commands and the `celaris-cli` commands. Refer to the `package.json` file for the most accurate list of scripts.*

