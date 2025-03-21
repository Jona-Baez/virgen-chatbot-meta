import { addKeyword, EVENTS } from "@builderbot/bot"
import path from 'path';
import fs from 'fs';

const pathA = path.join(process.cwd(), 'assets', 'audio.mp3')


const audioFlow = addKeyword("SM230225audio")
    .addAction(
        async (ctx, ctxFn) => {
            await ctxFn.provider.sendAudio(`${ctx.from}@s.whatsapp.net`, pathA)
    })


export { audioFlow };