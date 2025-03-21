import { addKeyword } from "@builderbot/bot";

const dosFlow= addKeyword("smartia119402")
    .addAnswer("Aprende paso a paso como Rezar el Rosario")
    .addAnswer("Te enviamos la Guía para Rezar el Santo Rosario *GRATIS*", {
        media: "./assets/comorezarelrosario.pdf"
    })
export { dosFlow };