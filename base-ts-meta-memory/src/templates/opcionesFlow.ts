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
                                    "description": "*GRATIS.* Aprender cómo rezar el Santo Rosario Guadalupano."//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119403",
                                    "title": "k",//Limitado a 26 caracteres
                                    "description": "k"//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119404",
                                    "title": "k",//Limitado a 26 caracteres
                                    "description": "k"//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119405",
                                    "title": "kk",//Limitado a 26 caracteres
                                    "description": "k"//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119406",
                                    "title": "📝 Quejas y sugerencias",//Limitado a 26 caracteres
                                    "description": "6. Descarga nuestra cartaDescarga nuestra cartaDescarga nuestra carta."//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119407",
                                    "title": "📋 Contratación",//Limitado a 26 caracteres
                                    "description": "7. Descarga nuestra cartaDescarga nuestra cartaDescarga nuestra carta."//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119408",
                                    "title": "💳 Facturación",//Limitado a 26 caracteres
                                    "description": "8. Descarga nuestra cartaDescarga nuestra cartaDescarga nuestra carta."//Limitado a 70 caracteres
                                },
                                {
                                    "id": "SM230225audio",
                                    "title": "🎵 Audio",//Limitado a 26 caracteres
                                    "description": "9. Descarga nuestra cartaDescarga nuestra cartaDescarga nuestra carta."//Limitado a 70 caracteres
                                },
                                {
                                    "id": "SM230225imagen",
                                    "title": "🎥 Imagen",//Limitado a 26 caracteres
                                    "description": "10. Descarga nuestra cartaDescarga nuestra cartaDescarga nuestra carta"//Limitado a 70 caracteres
                                }
                            ]
                        }
                    ]
                }
            }
            await provider.sendList(`${ctx.from}@s.whatsapp.net`, list)
        })
        
export { opcionesFlow };