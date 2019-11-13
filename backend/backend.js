/*
  import { get, update, remove, Q, find } from '@reshuffle/db';
 */
const users = [{ name: 'Scumpi' }, { name: 'Nadeshot' }];

/* @expose */
export async function players() {
  return users;
}
