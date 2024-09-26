# How Celaris Works

## Key Features

**Native Performance:** Utilize C++ for backend processes to achieve high performance and low resource consumption.
**Modern Frontend:** Use Vite and popular frontend frameworks (e.g., Vue, React, Svelte) to build rich user interfaces.
**Seamless Communication:** Establish efficient communication between the C++ backend and the frontend through message passing.
**Cross-Platform Support:** Build applications that run on Windows, macOS, and Linux.
**Developer-Friendly:** Simplify development with tools like create-celaris and celaris-cli for scaffolding and managing projects.
**Hot Reload:** Enjoy live reloading during development for quick feedback and iteration.

## Architecture Overview
Celaris consists of two main components:

**C++ Backend:** Handles the core logic, system interactions, and any performance-critical tasks.
**Frontend:** Built with Vite and your choice of modern JavaScript frameworks, responsible for the user interface.

## Communication Between Backend and Frontend
The backend and frontend communicate through a messaging system, allowing the C++ backend to emit messages to the frontend and vice versa. This enables real-time updates and interactions within the application.

## How Celaris Works
### 1. Project Initialization
- **Scaffolding:** Use create-celaris to initialize a new project. This tool combines a Vite template with a C++ backend skeleton.
- **Customization:** Choose your preferred frontend framework (Vue, React, etc.) and whether to use TypeScript.

### 2. Backend Development

- **C++ Codebase:** The backend resides in the src-celaris directory, containing C++ source files and resources.
- **CMake Build System:** Utilize CMake for building and compiling the C++ code across different platforms.
- **Message Emission:** Implement functions to send messages or data to the frontend when needed.

### 3. Frontend Development

- **Vite-Powered:** The frontend leverages Vite for rapid development and hot module replacement.
- **Component-Based:** Build your UI using components from your chosen framework.
- **Receiving Messages:** Set up listeners in the frontend to handle messages from the backend.

### 4. Bridging Backend and Frontend

- **Bindings:** Define TypeScript bindings (bindings.d.ts) to establish a contract between the frontend and backend.
- **Task Scheduling:** Use task scheduling to run background tasks in the backend and post messages to the frontend.

