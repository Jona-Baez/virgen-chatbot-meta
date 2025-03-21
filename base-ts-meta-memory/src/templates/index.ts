//Se concentra todos los flujos de las opciones
import { createFlow } from "@builderbot/bot";
import { mainFlow } from "./mainFlow";
import { opcionesFlow } from "./opcionesFlow";
import { unoFlow } from "./list_templates/unoFlow";//1
import { dosFlow } from "./list_templates/dosFlow";//2
import { tresFlow } from "./list_templates/tresFlow";//3
import { cuatroFlow } from "./list_templates/cuatroFlow";//4
import { promocionesFlow } from "./list_templates/promocionesFlow";//5
import { quejasFlow } from "./list_templates/quejasFlow";//6
import { contratacionFlow } from "./list_templates/contratacionFlow";//7
import { facturacionFlow } from "./list_templates/facturacionFlow";//8
import { audioFlow } from "./list_templates/audioFlow";//9
import { imagenFlow } from "./list_templates/imagenFlow";//10

export default createFlow ([
    mainFlow,
    opcionesFlow,    
    unoFlow,//1
    dosFlow,//2
    tresFlow,//3
    cuatroFlow,//4
    promocionesFlow,//5
    quejasFlow,//6
    contratacionFlow,//7
    facturacionFlow,//8
    audioFlow,//9
    imagenFlow//10
]);