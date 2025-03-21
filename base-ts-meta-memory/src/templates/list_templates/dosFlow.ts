import { addKeyword } from "@builderbot/bot";

const dosFlow= addKeyword("smartia119402")
    .addAnswer("Aprende paso a paso como Rezar el Rosario")
    .addAnswer("Te enviamos la guía GRATIS", {
        media: "./assets/Como-rezar-el-rosario.pdf"
    })
export { dosFlow };