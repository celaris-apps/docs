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

You can see a text input field and a button. The text input field is used to send a message to the backend, and the button is used to send the message. The backend will then respond with a message that will be displayed in the webview.

#### Binding

The frontend communicates with the backend using a binding system. The frontend sends a message to the backend, and the backend responds with a message. The frontend then displays the message in the webview. A default example of this binding system is shown in the image above where the frontend interacts with the 'greet' binding. 

##### Greet Binding

::: tabs

== C++ Backend

```cpp
Celaris c = Celaris();
// Example of a binding that hooks the frontend greet function
c.bind("greet", [&](const std::string &req) -> std::string
        {
            json response;
            auto jsonreq = json::parse(req);
            if (jsonreq.size() != 1)
            {
                response["message"] = "Invalid request";
            }
            else
            {
                response["message"] = "Hello " + jsonreq[0].get<std::string>() + ", You have been greeted from C++";
            }
            return response.dump(); });
c.run();
```

== Vue
```javascript
const greetMsg = ref('')
const name = ref('')

async function greet() {
  window.greet(name.value).then((res) => {
    greetMsg.value = res.message
  })
}
```

:::

## Backend to Frontend Communication

By pressing F12, or right-clicking and selecting `Inspect`, you can open the developer tools and see the console output. This will show you the communication between the frontend and the backend.

![default-template-dev-panel](/images/guides/features/default-template-dev-panel.png)