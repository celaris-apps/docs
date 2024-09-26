# Quick Start

## Run the installer

Once you have installed the required dependencies for your system (see [Prerequisites](https://celaris.cc/guides/getting-started/prerequisites)), you will be able to run the following command to build a Celaris Project. 

::: tip QUICK START COMMAND
```bash
npm create celaris@latest <directory>
```

You can use qualified directory paths such as `.` or `../` if you wish here. 

:::

## Setup Process
 
There are two stages to the setup process. The first requires minimal intervention. You will first be prompted to choose your framework of choice. 

![/images/guides/quick-start/create-celaris.png](/images/guides/quick-start/create-celaris.png)

This will fetch a custom Vite template designed to interact with the Celaris backend to demonstrate basic functionality. You will then be asked if you wish to use TypeScript or not.

After selecting those options the build script will automate the rest of the process and will fetch the required templates and repositories to scaffold your application.

## Run your app for the first time

To run your newly scaffolded project perform the following actions

```bash
cd <directory>
npm run celaris dev -- --no-build
```

## Run your app normally 

::: info NOTE

`npm create celaris@latest` runs a cmake, build and test commands as part of the setup process. These commands are also baked into `npm run celaris dev`. Therefore, running the command above skips that second build on the first run. To enable it run the normal dev command

```bash
npm run celaris dev
```
