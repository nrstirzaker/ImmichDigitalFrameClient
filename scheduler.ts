import 'dotenv/config';
import schedule from 'node-schedule';
import {getNewIds} from "./reader.ts";

// const job = schedule.scheduleJob('*/5 * * * *', async function(){
//     const ids: string[] = await getNewIds()
// });

const ids: string[] = await getNewIds()
console.log(ids)