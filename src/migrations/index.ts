import * as migration_20260218_234554_initial from './20260218_234554_initial';

export const migrations = [
  {
    up: migration_20260218_234554_initial.up,
    down: migration_20260218_234554_initial.down,
    name: '20260218_234554_initial'
  },
];
