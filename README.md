# Simple micro front-end

---------------------------------------------------------------------------------------------------------

🚀 Angular 17.0.0 \
👌 Module federation 17.0.1

![Architecture of mfe](/assets/mfe-shema.png)

## Run this project.

Install dependencies : `npm install`

- Launch the servers by running `npm run all`
- Build the library to use the shared component : `ng build --c=production shared-library`

## Explanations on how it's benn build.

---------------------------------------------------------------------------------------------------------


### Step 1 : Create the workspace

---------------------------------------------------------------------------------------------------------

In order to start from scratch, build a new workspace to work in. I've chose to use a raw one, but TurboRepo or Nx should be used here.

```bash
ng new mfe-demo --create-application=false
cd mfe-demo
```

The __--create-application=false__ flag tell angular to build a raw project as we'll be working from the inside with multiple apps.

### Step 2 : Angular architects module federation

---------------------------------------------------------------------------------------------------------

Put in your terminal the following :

```
ng add @angular-architects/module-federation --project shell --port 4200
ng add @angular-architects/module-federation --project mfe1 --port 4300
```

Here above, we are stating that we'll have :

- shell will be our hosting app, running on port 4200.
- mfe1 will be our remote app, running on port 4300.

After throwing theses commands you should be able to see that some files have been created - updated :

- CREATED webpack.config.js
- CREATED webpack.prod.config.js
- CREATED bootstrap.ts
- UPDATED angular.json
- UPDATED main.ts

### Step 3 : Configure your components / modules at your convenience

---------------------------------------------------------------------------------------------------------

`ng g component <component-name>` in order to create a component
`ng g module <module-name>` in order to create a module

### Step 4 : Configure our remote entry & host

In each project, we have a webpack.config.ts in which we can state the host and remote entry.

1) To configure our remote, we have some mandatory parameters:

- name : Name of the remote
- fileName: The name of our remote entry file
- exposes : That one will give the permission for a module/component to be exposed

Example :

```
name: "mfe1",
filename: "mfe1RemoteEntry.js",
exposes: {
  './TodoModule': './projects/mfe1/src/app/todo/todo.module.ts',
}
```

2) To configure our shell, we have a mandatory parameter as well :
- remotes : Takes the remote's name, and its entry file.

Example :

```
remotes: {
  "mfe1": "http://localhost:4300/mfe1RemoteEntry.js",
},
```

### Step 5 : You're up !

---------------------------------------------------------------------------------------------------------

Now, run your apps and integrate them.

### Packages

---------------------------------------------------------------------------------------------------------

- Angular architects module federation [here](https://www.npmjs.com/package/@angular-architects/module-federation)


