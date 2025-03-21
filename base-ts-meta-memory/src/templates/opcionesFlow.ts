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
                            "title": "Acciones",
                            "rows": [
                                {
                                    "id": "SM23022501",
                                    "title": "🍽️ Alimentos y bebidas",//Limitado a 26 caracteres
                                    "description": "1. Descarga nuestra cartaDescarga nuestra cartaDescarga nuestra carta."
                                },
                                {
                                    "id": "SM23022502",
                                    "title": "📍 Sucursales y horarios",//Limitado a 26 caracteres
                                    "description": "2. Descarga nuestra cartaDescarga nuestra cartaDescarga nuestra carta"
                                },
                                {
                                    "id": "SM23022503",
                                    "title": "📅 Reservaciones",//Limitado a 26 caracteres
                                    "description": "3. Descarga nuestra cartaDescarga nuestra cartaDescarga nuestra carta"
                                },
                                {
                                    "id": "SM23022504",
                                    "title": "🎉 Paquetes y eventos",//Limitado a 26 caracteres
                                    "description": "4. Descarga nuestra cartaDescarga nuestra cartaDescarga nuestra carta"
                                },
                                {
                                    "id": "SM23022505",
                                    "title": "🎟️ Promociones y cupones",//Limitado a 26 caracteres
                                    "description": "5. Descarga nuestra cartaDescarga nuestra cartaDescarga nuestra carta"
                                },
                                {
                                    "id": "SM23022506",
                                    "title": "📝 Quejas y sugerencias",//Limitado a 26 caracteres
                                    "description": "6. Descarga nuestra cartaDescarga nuestra cartaDescarga nuestra carta"
                                },
                                {
                                    "id": "SM23022507",
                                    "title": "📋 Contratación",//Limitado a 26 caracteres
                                    "description": "7. Descarga nuestra cartaDescarga nuestra cartaDescarga nuestra carta"
                                },
                                {
                                    "id": "SM23022508",
                                    "title": "💳 Facturación",//Limitado a 26 caracteres
                                    "description": "8. Descarga nuestra cartaDescarga nuestra cartaDescarga nuestra carta"
                                },
                                {
                                    "id": "SM230225audio",
                                    "title": "🎵 Audio",//Limitado a 26 caracteres
                                    "description": "9. Descarga nuestra cartaDescarga nuestra cartaDescarga nuestra carta"
                                },
                                {
                                    "id": "SM230225imagen",
                                    "title": "🎥 Imagen",//Limitado a 26 caracteres
                                    "description": "10. Descarga nuestra cartaDescarga nuestra cartaDescarga nuestra carta"
                                }
                            ]
                        }
                    ]
                }
            }
            await provider.sendList(`${ctx.from}@s.whatsapp.net`, list)
        })
        
export { opcionesFlow };