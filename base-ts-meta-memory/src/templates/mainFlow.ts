import { addKeyword, EVENTS } from "@builderbot/bot"
import { opcionesFlow } from "./opcionesFlow";

const mainFlow = addKeyword([EVENTS.WELCOME])
    .addAnswer("👋 ¡Hola!, ¡Bienvenido al Chatbot de la Virgen de Guadalupe en Mexico")
    .addAnswer(" 🙏 ¡Bendiciones! Hemos creado este chatbot para ayudarte a encontrar información sobre la Virgen de Guadalupe y fortalecer tu devoción. Aquí puedes: \n\n 📖 Conocer la historia y milagros de la Virgen de Guadalupe.\n\n🕊️ Aprender cómo rezar el Santo Rosario Guadalupano.\n\n📅 Recibir recordatorios de fechas importantes y festividades.\n\n🕯️ Pedir oraciones y encender una vela virtual.\n\n📜 Descargar materiales como oraciones y guías devocionales.\n\n✨ Interactúa con nuestro chatbot y deja que la fe guíe tu camino. ¡La Virgen de Guadalupe te acompaña siempre! 🌹")
    .addAction( async (ctx, ctxFn) =>{
        return ctxFn.gotoFlow(opcionesFlow)
     })

export { mainFlow };