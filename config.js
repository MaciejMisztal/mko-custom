System.config({
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "noImplicitAny": false,
    "typeCheck": false,
    "module": "system",
    "target": "es6",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  packages: {
    "src": {
      "main": "index",
      "defaultExtension": "js",
      "meta": {
        "*.ts": {
          "loader": "ts"
        },
        "*.js": {
          "loader": "ts"
        }
      }
    }
  },

  map: {
    "knockout": "github:knockout/knockout@3.4.0",
    "text": "github:systemjs/plugin-text@0.0.4",
    "ts": "github:frankwallis/plugin-typescript@4.0.1",
    "typescript": "npm:typescript@1.8.2",
    "github:frankwallis/plugin-typescript@4.0.1": {
      "typescript": "npm:typescript@1.8.2"
    }
  }
});
