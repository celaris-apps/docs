# Default Template

When Celaris is scaffolded, it uses a default template to create the project. During the setup process, you would have been prompted to choose your framework of choice. This will fetch a custom Vite template from the [Celaris Templates Repository](https://github.com/celaris-apps/templates), which designed to interact with the Celaris backend to demonstrate basic functionality. You would have also been asked if you wish to use TypeScript or not.

The default template is a Vite-based application that integrates a C++ backend with a Vite-powered frontend, allowing for seamless communication between the two. The project structure is broken down into two main directories: `src` and `src-celaris`. The `src` directory contains the frontend application, while the `src-celaris` directory contains the C++ backend.

::: info NOTE
For more information on the project structure, refer to the [Project Structure](/guides/getting-started/project-structure) guide.
:::

## Overview

When you first load your Celaris project you will presented with a webview that looks like this:

![default-template](/images/guides/features/default-template.png)

### Frontend to Backend Communication

You can see a text input field and a button. The text input field is used to send a message to the backend, and the button is used to send the message. The backend will then respond with a message that will be displayed in the webview. This process is done through binding.

::: tip See More!
View the [Binding](/guides/features/binding) guide for more information on how to create bindings.
:::


## Backend to Frontend Communication

By pressing F12, or right-clicking and selecting `Inspect`, you can open the developer tools and see the console output. This will show you the communication between the frontend and the backend.

![dev-panel](/images/guides/features/dev-panel.png)

Backend to frontend communication is done through task scheduling. The backend can schedule tasks to be run in the background, which can also post messages to the frontend. This is done through the standard JavaScript `window.postMessage` functionality.

::: tip See More!
View the [Task Scheduling](/guides/features/task-scheduling) guide for more information on how to create tasks.
:::