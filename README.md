# Gesclub
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server
Para poner el servidor de angular en ejecución debemos usar el comando `npm start` y abrir en el navegador `http://localhost:3000/`.

## Comandos
Para poner en ejecución el servidor MongoDB (el cual se debe mantener en ejecución durante el uso de la app). Para ejecutarlo desde Windows PowerShell usaremos el siguiente comando: `./mongod --storageEngine=mmapv1 --dbpath [your-path]`.
- Normalmente se suele almacenar la BD en `C:/data/[nombre de la BD]`

## Recursos
Crear primer usuario por consola: `curl -i -X POST -H "Content-Type: application/json" -d '{ "dni": "12345678Z", "nombre": "Maria", "apellidos": "Rguez", "fechaNacimiento": "1996/12/18", "edad": 22, "pais": "ESP"}' localhost:3000/api`.

## Angular Material
Ayuda para el uso de los [componentes de angular material](https://material.angular.io/components/table/examples).
[List cards](https://blog.angularindepth.com/angular-flex-layout-flexbox-and-grid-layout-for-angular-component-6e7c24457b63).
