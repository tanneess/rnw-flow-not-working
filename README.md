Flow typing is not working for rnw.
To validate that it is'nt, install the project and then  run `npm run flow`
This will show no error while [App.js](src/App.js) contains a flow
error: 'onBlur={2}'

When uncommenting the [definition file for rnw](flow-typed/react-native-web/index.js)
the error get's detected by flow. The definition file is based on what is already present
in rnw package.

