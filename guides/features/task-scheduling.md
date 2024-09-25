---
outline: deep
---

# Task Scheduling

The Celaris backend allows for the scheduling of tasks to be run in the background. These tasks can also post messages to the frontend, allowing for seamless communication between the two.

## Overview

Task scheduling is a powerful feature that allows the Celaris backend to run tasks in the background. These tasks can be scheduled to run at specific intervals or at specific times. The Celaris class provides a `scheduleTask` method that takes a function as an argument. The function will be executed in the background.

## Scheduling a Task

The following code snippet shows how to schedule a task in the Celaris backend:

```cpp
Celaris c = Celaris();

c.scheduleTask([&c]() {
    // Your task code here
});
c.run();
```

### Posting a string message to the frontend

The following code snippet shows how to post a string message to the frontend from a scheduled task:

```cpp
c.scheduleTask([&c]() {
    c.postMessage("This is an automated message from C++"); 
});

```

### Posting a message with a delay

The following code snippet shows how to post a message with a delay to the frontend from a scheduled task:

```cpp
c.scheduleTask([&c]() {
    // add a 5 second delay before posting the message
    std::this_thread::sleep_for(std::chrono::seconds{5}); 
    c.postMessage("This is an automated message from C++"); 
});

```

### Posting an array of strings as JSON to the frontend

The following code snippet shows how to post an array of strings as JSON to the frontend from a scheduled task:

```cpp
c.scheduleTask([&c]() {
    std::vector<std::string> names = {"Alice", "Bob", "Charlie", "David", "Eve"};
    c.postJson(names); 
});
```
::: tip NOTE
The `postJson` method generally takes a `nlohmann::json` object as an argument. However, it can also take a `std::vector<std::string>` object, which will be converted to a JSON array.
For more information on the `nlohmann::json` library, refer to the [official documentation](https://json.nlohmann.me/).
:::

### Building and posting a `nlohmann::json` object to the frontend

The following code snippet shows how to build and post a `nlohmann::json` object to the frontend from a scheduled task (this is the recommended way to post messages to the frontend):

```cpp
c.scheduleTask([&c]() {
    int count = 0;
    while(true)
    {
        json j = {
            {"origin", "cpp"},
            {"data", count++},
            {"type", "count"},
            {"timestamp", std::chrono::system_clock::now().time_since_epoch().count()},
            {"message", "This is an automated message from C++"}
        };
        std::this_thread::sleep_for(std::chrono::seconds{2});
        c.postJson(j); 
    } 
});