# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
## Refreshed News App
a take on a new looking news app that doesn't feel so boring 
- This was an older app, that I picked up on earlier in my dev career
- This brings up to date news with a search feature, unbiased business sources, and a timeline feed that brings you the top headlines. This comes along with a gallery of Technology, and political news. 
### Limitations ###
For project and price concerns , APIS being used are in "dev" usage status and meant to be used in a local dev environment. 
If for some reason any user cannot view the data, please reach via email or DM.  
At the time I was able to use the API, to workaround this I figured I would create my own backend server and try through there by proxy. I have been working on other things, 
so I will come back to this. 
