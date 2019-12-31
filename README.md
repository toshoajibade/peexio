# peexio

## Improving the site

### SEO
The website can be rewritten in Nuxt.js to improve its SEO and make the different pages indexable. If the rigidity of an higher level framework like Nuxt.js will not be the best option, the server renderer can be written from scratch using Vue Server Render.

### Testing
End to end testing using Cypress can be added, this will automate our tests and make sure features are not broken as the website grows.

## Note
Static data are currently being used but normally they should be fetched from a backend REST or Graphql api.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
