import {aptos, config} from './common/config';

export type KOL = {
  user_address: string;
  amount: number;
};

export async function getKOLs() {
  const events = await aptos.event.getModuleEventsByEventType({
    eventType: `${config.socialModule}::social::StakeNative`,
  });
  const kols = [];
  for (const event of events) {
    const kol = event.data as KOL;
    kols.push(kol);
  }
  return kols;
}
