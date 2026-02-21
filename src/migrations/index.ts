import * as migration_20260219_011739_initial from './20260219_011739_initial';
import * as migration_20260220_075758_create_sidebar_global from './20260220_075758_create_sidebar_global';
import * as migration_20260220_092938_add_programme_categories from './20260220_092938_add_programme_categories';

export const migrations = [
  {
    up: migration_20260219_011739_initial.up,
    down: migration_20260219_011739_initial.down,
    name: '20260219_011739_initial',
  },
  {
    up: migration_20260220_075758_create_sidebar_global.up,
    down: migration_20260220_075758_create_sidebar_global.down,
    name: '20260220_075758_create_sidebar_global',
  },
  {
    up: migration_20260220_092938_add_programme_categories.up,
    down: migration_20260220_092938_add_programme_categories.down,
    name: '20260220_092938_add_programme_categories'
  },
];
