# Gesclub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Recordatorios

MongDB puede necesitar que al levantar el servidor se ejecute de la siguiente manera: `mongod --storageEngine=mmapv1 --dbpath [your-path]`.

## Recursos

Crear primer usuario por consola: `curl -i -X POST -H "Content-Type: application/json" -d '{ "dni": "12345678Z", "nombre": "Maria", "apellidos": "Rguez", "fechaNacimiento": "1996/12/18", "edad": 22, "pais": "ESP"
}' localhost:3000/api`.

## Angular Material

Ayuda para el uso de los [componentes de angular material](https://material.angular.io/components/table/examples).
[List cards](https://blog.angularindepth.com/angular-flex-layout-flexbox-and-grid-layout-for-angular-component-6e7c24457b63).