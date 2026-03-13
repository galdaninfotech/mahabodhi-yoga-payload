import * as migration_20260219_011739_initial from './20260219_011739_initial';
import * as migration_20260220_075758_create_sidebar_global from './20260220_075758_create_sidebar_global';
import * as migration_20260220_092938_add_programme_categories from './20260220_092938_add_programme_categories';
import * as migration_20260311_042645_remove_medium_impact_hero from './20260311_042645_remove_medium_impact_hero';
import * as migration_20260311_043601_remove_low_impact_media_field from './20260311_043601_remove_low_impact_media_field';
import * as migration_20260312_005536_create_news_sidebar_global from './20260312_005536_create_news_sidebar_global';
import * as migration_20260312_010122_update_news_sidebar_schema from './20260312_010122_update_news_sidebar_schema';
import * as migration_20260312_014353_delete_sidebar_global from './20260312_014353_delete_sidebar_global';
import * as migration_20260312_014532_create_links_sidebar_global from './20260312_014532_create_links_sidebar_global';

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
    name: '20260220_092938_add_programme_categories',
  },
  {
    up: migration_20260311_042645_remove_medium_impact_hero.up,
    down: migration_20260311_042645_remove_medium_impact_hero.down,
    name: '20260311_042645_remove_medium_impact_hero',
  },
  {
    up: migration_20260311_043601_remove_low_impact_media_field.up,
    down: migration_20260311_043601_remove_low_impact_media_field.down,
    name: '20260311_043601_remove_low_impact_media_field',
  },
  {
    up: migration_20260312_005536_create_news_sidebar_global.up,
    down: migration_20260312_005536_create_news_sidebar_global.down,
    name: '20260312_005536_create_news_sidebar_global',
  },
  {
    up: migration_20260312_010122_update_news_sidebar_schema.up,
    down: migration_20260312_010122_update_news_sidebar_schema.down,
    name: '20260312_010122_update_news_sidebar_schema',
  },
  {
    up: migration_20260312_014353_delete_sidebar_global.up,
    down: migration_20260312_014353_delete_sidebar_global.down,
    name: '20260312_014353_delete_sidebar_global',
  },
  {
    up: migration_20260312_014532_create_links_sidebar_global.up,
    down: migration_20260312_014532_create_links_sidebar_global.down,
    name: '20260312_014532_create_links_sidebar_global'
  },
];
