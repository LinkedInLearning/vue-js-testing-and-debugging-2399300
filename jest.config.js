module.exports =  {
    "moduleFileExtensions": [
        "js",
        "json",
        // tell Jest to handle `*.vue` files
        "vue"
    ],
    "transform": {
        ".*\\.(js)$": "babel-jest",
        // process `*.vue` files with `vue-jest`
        ".*\\.(vue)$": "vue-jest"
    },
    "testEnvironment": "jsdom"
}
  