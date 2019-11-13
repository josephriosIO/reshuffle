/*
  import { get, update, remove, Q, find } from '@reshuffle/db';
 */
import users from './CDLProPlayers';

/* @expose */
export async function players() {
  return users;
}
