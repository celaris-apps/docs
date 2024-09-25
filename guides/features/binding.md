# Binding

The frontend communicates with the backend using a binding system. The frontend sends a message to the backend, and the backend responds with a message. The frontend then displays the message in the webview. A default example of this binding system is shown in the image above where the frontend interacts with the 'greet' binding. 

## Greet Binding

::: tip NOTE
The following code snippets show how the [Default Tempalte](/guides/features/default-template) greet binding is implemented in the C++ backend and also across the supported Vue frontend frameworks. For the frontend, the code snippets just show the relevant parts of the code that interact with the greet binding. They do not show the entire frontend code. For full examples of the frontend code for each framework, refer to the [Celaris Templates Repository](https://github.com/celaris-apps/templates).
:::

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
import { ref } from 'vue'
const greetMsg = ref('')
const name = ref('')

async function greet() {
  window.greet(name.value).then((res) => {
    greetMsg.value = res.message
  })
}
```

== React

```javascript
import { useState } from 'react'
const [name, setName] = useState('')
const [greetMsg, setGreetMsg] = useState('')

async function greet() {
    window.greet(name).then((res) => {
        setGreetMsg(res.message)
    })
}
```
== Preact

```javascript
import { useState } from 'preact/hooks'
const [name, setName] = useState('')
const [greetMsg, setGreetMsg] = useState('')

async function greet() {
    window.greet(name).then((res) => {
        setGreetMsg(res.message)
    })
}
```

== Solid

```javascript
import { createSignal } from 'solid-js'
const [name, setName] = createSignal('')
const [greetMsg, setGreetMsg] = createSignal('')

async function greet() {
    window.greet(name()).then((res) => {
        setGreetMsg(res.message)
    })
}
```


== Svelte

```javascript
let name: string = ''
let greetMsg: string = ''
async function greet() {
    window.greet(name).then((res) => {
        greetMsg = res.message
    })
}
```

== Vanilla

```javascript
const message = document.getElementById('message')

async function greet(name) {
    window.greet(name).then((res) => {
        message.innerHTML = res.message
    })
}

element.addEventListener('click', () => {
    const name = document.getElementById('greet-input').value
    greet(name)
})
```

== Lit

```javascript
static get properties() {
    return {
        /**
         * The name to greet.
         */
        name: { type: String },

        /**
         * The message returned from the greet method.
         */
        greetMsg: { type: String },
    }
}

constructor() {
    super()
    this.name = ''
    this.greetMsg = ''
}

async greet() {
    window.greet(this.name).then((res) => {
    this.greetMsg = res.message
    })
}

_onInput(e) {
    this.name = e.target.value
}
```

:::