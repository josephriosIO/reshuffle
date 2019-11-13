import '@reshuffle/code-transform/macro';
import React, { useEffect, useState } from 'react';
import { getTeams } from '../../backend/backend';
import Team from './Team';

const UsersCreatedTeams = props => {
  const [usersTeams, setUsersTeams] = useState(undefined);
  useEffect(() => {
    const fetchData = async () => {
      const teams = await getTeams();
      setUsersTeams(teams);
    };
    fetchData();
  }, []);
  return (
    <div>
      {usersTeams
        ? usersTeams.map((team, idx) => (
            <div>
              <Team team={team} key={idx} />
            </div>
          ))
        : null}
    </div>
  );
};

export default UsersCreatedTeams;
