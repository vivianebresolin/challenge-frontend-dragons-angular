import { Dragon } from 'src/app/components/dragon/dragon.model';

export function sortDragonsByName(dragonA: Dragon, dragonB: Dragon) {
  const dragon1 = dragonA.name.toLowerCase();
  const dragon2 = dragonB.name.toLowerCase();

  if(dragon1 > dragon2) {
    return 1;
  }

  if(dragon1 < dragon2) {
    return -1;
  }

  return 0;
}