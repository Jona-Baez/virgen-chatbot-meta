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
                    "button": "Ver opciones",
                    "sections": [
                        {
                            "title": "Acciones",
                            "rows": [
                                {
                                    "id": "SM23022501",
                                    "title": "📖 Historia y milagros",//Limitado a 26 caracteres
                                    "description": "Conocer la historia y milagros de la Virgen de Guadalupe."
                                },
                                {
                                    "id": "SM23022502",
                                    "title": "🕊️ Santo Rosario",//Limitado a 26 caracteres
                                    "description": "Aprender cómo rezar el Santo Rosario Guadalupano."
                                },
                                {
                                    "id": "SM23022503",
                                    "title": "📅 Festividades",//Limitado a 26 caracteres
                                    "description": "Recordatorios de fechas importantes y festividades"
                                },
                                {
                                    "id": "SM23022504",
                                    "title": "",//Limitado a 26 caracteres
                                    "description": ""
                                },
                                {
                                    "id": "SM23022505",
                                    "title": "",//Limitado a 26 caracteres
                                    "description": ""
                                },
                                {
                                    "id": "SM23022506",
                                    "title": "",
                                    "description": ""
                                },
                                {
                                    "id": "SM23022507",
                                    "title": "",
                                    "description": ""
                                },
                                {
                                    "id": "SM23022508",
                                    "title": "",
                                    "description": ""
                                },
                                {
                                    "id": "SM230225audio",
                                    "title": "🎵 Audio",//Limitado a 26 caracteres
                                    "description": "Puedes escuchar un audio"
                                },
                                {
                                    "id": "SM230225imagen",
                                    "title": "🎥 Imagen",//Limitado a 26 caracteres
                                    "description": "Tambien recibe una imagen"
                                }
                            ]
                        }
                    ]
                }
            }
            await provider.sendList(`${ctx.from}@s.whatsapp.net`, list)
        })
        
export { opcionesFlow };