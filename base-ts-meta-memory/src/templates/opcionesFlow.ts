import { addKeyword, EVENTS } from "@builderbot/bot"

const opcionesFlow = addKeyword('EVENTS.ACTION')
    .addAction(async (ctx, {provider}) => {
            const list = {
                "header": {
                    "type": "text",
                    "text": ""
                },
                "body": {
                    "text": "Descarga y lleva la devoción a la Virgen de Guadalupe siempre contigo"
                },
                "footer": {
                    "text": ""
                },
                "action": {
                    "button": "Ver las 10 opciones",
                    "sections": [
                        {
                            "title": "Acciones",//Limitado a 10 acciones
                            "rows": [
                                {
                                    "id": "smartia119401",
                                    "title": "🍽️ Historia y milagros",//Limitado a 26 caracteres
                                    "description": "1. Conocer la historia y milagros de la Virgen de Guadalupe."//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119402",
                                    "title": "📍 Santo Rosario",//Limitado a 26 caracteres
                                    "description": "2. GRATIS.Aprender cómo rezar el Santo Rosario Guadalupano."//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119403",
                                    "title": "📅 Festividades",//Limitado a 26 caracteres
                                    "description": "3. Recibir recordatorios de fechas importantes y festividades."//Limitado a 70 caracteres
                                }
                            ]
                        }
                    ]
                }
            }
            await provider.sendList(`${ctx.from}@s.whatsapp.net`, list)
        })
        
export { opcionesFlow };