import { addKeyword, EVENTS } from "@builderbot/bot"
import { opcionesFlow } from "./opcionesFlow";

const mainFlow = addKeyword([EVENTS.WELCOME])
    .addAnswer("🙏 ¡Bendiciones! Hemos creado este chatbot para ayudarte a encontrar información sobre la Virgen de Guadalupe y fortalecer tu devoción. ")
    .addAnswer("✨  Interactúa con nuestro chatbot y deja que la fe guíe tu camino. ¡La Virgen de Guadalupe te acompaña siempre!\n\n🌹 Aquí puedes: \n\n 📖 Conocer la historia y milagros de la Virgen de Guadalupe.\n\n🕊️ Aprender cómo rezar el Santo Rosario Guadalupano.\n\n📅 Recibir recordatorios de fechas importantes y festividades.\n\n🕯️ Pedir oraciones y encender una vela virtual.\n\n📜 Descargar materiales como oraciones y guías devocionales.")
    .addAction( async (ctx, ctxFn) =>{
        return ctxFn.gotoFlow(opcionesFlow)
     })

export { mainFlow };