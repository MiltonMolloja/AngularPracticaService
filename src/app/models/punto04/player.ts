import { Team } from './team';

export class Player {
  id: numbre;
  first_name: string;
  last_name: string;
  position: string;
  team: Team;
  Player(id: numbre, first_name: string, last_name: string, position: string, team: Team, ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.position = position;
    this.team = team;
  }
}
