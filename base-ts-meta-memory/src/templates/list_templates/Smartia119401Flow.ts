import { addKeyword, EVENTS } from "@builderbot/bot";

const cartaFlow = addKeyword("Smartia119401")//Es la clave que invoca la opcion de la lista
    .addAnswer("Te enviamos nuestra carta", {
        media: "./assets/carta.pdf"
    })

export { cartaFlow };