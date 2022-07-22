import mobiletodolist from "../images/mobiletodolist.jpeg";
import mobileAnimalFinder from "../images/animalFinderMobile.jpeg"

export const projects = [
  {
    proyectImage: mobiletodolist,
    repo: "https://github.com/leotammaro/to-do-list-frontend",
    description:
      'Uno de mis primeros proyectos que realice. "Un to do list", en el cual tenemos 3 columnas que dividen el proceso de nuestras tareas. Las tareas las podemos editar, borrar o bien arrastrar hacia otra columna. Para realizar este proyecto, utilice para el front end React JS y la libreria Chakra UI.Para el back end,utilice Mongo DB, mongoose, Node JS y express. De la misma forma utilice un sistema de autenticación con Firebase para que el usuario pueda logearse desde cualquier dispositivo.  ',
    title: "To Do List",
    urlProyect: "https://to-do-list-frontend-ten.vercel.app/",
  },
  {
    proyectImage: mobileAnimalFinder,
    title: "Pet Finder",
    urlProyect: "https://dog-client.vercel.app/app",
    repo: "https://github.com/leotammaro/dog-client",
    description: "Este es uno de mis proyectos mas interesantes que realice. Se trata de un 'Animal Finder'. Basicamente la idea de este proyecto es reportar en el sitio cuando encontramos un animal perdido en la calle. En el mismo reporte, podemos agregar distintas caracteristicas y detalles del animal, por ejemplo: dirección donde fue encontrado, tamaño del animal, color del animal, numero de contacto, etc..  Asi como tambien, veremos que hay un mapa donde nos mostraran los reportes cercanos a nuestra ubicación. Realice tanto el front end, como el back end."
  }
];
