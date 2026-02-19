import * as migration_20260219_011739_initial from './20260219_011739_initial';

export const migrations = [
  {
    up: migration_20260219_011739_initial.up,
    down: migration_20260219_011739_initial.down,
    name: '20260219_011739_initial'
  },
];
