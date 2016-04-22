System.config({
  baseURL: "./",
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
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        },
        "*.js": {
          "loader": "ts"
        }
      }
    },
    "spec": {
      "defaultExtension": "ts",
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
    "text": "github:systemjs/plugin-text@0.0.7",
    "ts": "github:frankwallis/plugin-typescript@4.0.6",
    "typescript": "npm:typescript@1.8.10",
    "github:frankwallis/plugin-typescript@4.0.6": {
      "typescript": "npm:typescript@1.8.10"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    }
  }
});
