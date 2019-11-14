/*
  import { get, update, remove, Q, find } from '@reshuffle/db';
 */
import { update, get } from '@reshuffle/db';
import users from './CDLProPlayers';

/* @expose */
export async function players() {
  return users;
}

/* @expose */
export async function getTeams() {
  return (await get('CDLteamsCreated')) || [];
}

/* @expose */
export async function addTeam(team) {
  const teams = await update('CDLteamsCreated', (teams = []) => {
    const allCreatedTeams = [...teams, team];

    return allCreatedTeams;
  });
  return { CDLteamsCreated: [...teams] };
}
