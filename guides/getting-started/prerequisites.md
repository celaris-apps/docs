---
outline: deep
---

# Prerequisites

## Installation

Before getting started with Celaris you need to have C++ installed on your system. How you do this will vary depending on your operating system. 

### Configuring Windows 

#### 1. Microsoft Visual Studio C++ Build Tools

To begin, you'll need to install the Microsoft Visual Studio C++ build tools. The simplest approach is to download and install the Build Tools for Visual Studio 2022. When choosing workloads, make sure to select both "C++ build tools" and the Windows 10 SDK.

![/images/vs-installer-dark.png](/images/vs-installer-dark.png)

#### 2. WebView2

::: info
On Windows 10 (version 1803 and later with all updates applied) and Windows 11, the WebView2 runtime is included with the operating system.
:::

Celaris relies heavily on WebView2 for rendering web content on Windows, so it’s essential to have WebView2 installed. The simplest way to do this is by downloading and running the Evergreen Bootstrapper from [Microsoft's website](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section).

The bootstrapper will automatically detect the appropriate architecture and version for your system. However, if you encounter issues (particularly with Windows on ARM), you can manually choose the correct standalone installer.


These commands will display the installed versions of Node.js and npm, verifying that everything is configured correctly.

### Configuring MacOS 

::: info
Coming soon
:::


### Configuring Linux
::: info
Coming soon
:::




### NodeJs

::: info
Node.js is required for building Celaris applications, as it manages the JavaScript dependencies.
:::

To install Node.js, visit the [official Node.js website](https://nodejs.org/) and download the latest stable version (LTS) suitable for your system. During installation, ensure that the Node.js runtime and npm (Node Package Manager) are included.

After installation, confirm Node.js is properly set up by opening a terminal or command prompt and running the following commands:

```bash
node -v
npm -v
```