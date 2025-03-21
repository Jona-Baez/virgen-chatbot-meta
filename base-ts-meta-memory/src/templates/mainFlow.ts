import { addKeyword, EVENTS } from "@builderbot/bot"
import { opcionesFlow } from "./opcionesFlow";

const mainFlow = addKeyword([EVENTS.WELCOME])
    .addAnswer("🙏 ¡Bendiciones! Hemos creado este chatbot para ayudarte a encontrar información sobre la Virgen de Guadalupe y fortalecer tu devoción. ")
    .addAction( async (ctx, ctxFn) =>{
        return ctxFn.gotoFlow(opcionesFlow)
     })

export { mainFlow };