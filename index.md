---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  image:
    src: assets/celaris.svg
    alt: Celaris
  name: "Celaris"
  tagline: "Build C++ desktop applications with a modern web frontend."
  actions:
    - theme: brand
      text: Get Started
      link: guides/getting-started/prerequisites
    - theme: alt
      text: View on GitHub
      link: https://github.com/celaris-apps

features:
  - title: WebView 
    details: Leverages the native operating system’s WebView for rendering, eliminating the need to bundle Chromium or any third-party browser engines. This approach results in lightweight applications with minimal overhead while retaining web-based front-end capabilities.
  - title: C++ Backend
    details: Powered by a robust C++ backend, Celaris offers fast, low-level access to the operating system, enabling fine-grained control and optimization. Built using modern C++ (C++17 or higher), it leverages the power of the STL, smart pointers, and concurrency support. The project’s build system is efficiently managed using CMake, making it easy to integrate with various platforms and toolchains.
  - title: Vite Frontend
    details: Out-of-the-box support for Vite-powered front-end frameworks, such as Vue, React, Svelte, and Lit. Additionally, Celaris allows for custom front-end templates, offering flexibility and ease of integration for developers using modern web technologies.
---

