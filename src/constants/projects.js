import mobiletodolist from "../images/mobiletodolist.jpeg";
import mobileAnimalFinder from "../images/animalFinderMobile.jpeg"

export const projects = [
  {
    proyectImage: mobileAnimalFinder,
    title: "Pet Finder",
    urlProyect: "https://finder-animal.vercel.app/login",
    repo: "https://github.com/leotammaro/dog-client",
    description: "Animal Finder es un sitio web donde los usuarios pueden reportar animales perdidos que encuentran en la calle, incluyendo sus características y dirección donde fue encontrado.Este proyecto utiliza la API de google maps para visualizar los reportes cercanos a nuestra ubicación.Utilicé React con ChakraUI  para la interfaz de usuario y agregué pruebas unitarias y de presentación utilizando Jest y Cypress.io. Para el Back-end utilicé node.js junto con express y MongoDB como base de datos; testeé la aplicación con Supertest y Jest."
  },
  {
    proyectImage: mobiletodolist,
    repo: "https://github.com/leotammaro/to-do-list-frontend",
    description:
      'Un "to do list", tenemos 3 columnas que dividen el proceso de nuestras tareas. Las tareas las podemos editar, borrar o bien arrastrar hacia otra columna. Utilicé React JS y la libreria Chakra UI para el front-end .En el back end,utilice Mongo DB, mongoose, Node JS y express. Contiene un sistema de autenticación con Firebase para que el usuario pueda logearse desde cualquier dispositivo.  ',
    title: "To Do List",
    urlProyect: "https://to-do-list-frontend-ten.vercel.app/",
  }
];
