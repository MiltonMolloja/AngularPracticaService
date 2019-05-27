import { OnInit, Component } from '@angular/core';

import { TeamService } from './../../services/punto04/team.service';
import { Team } from './../../models/punto04/team';
import { PlayerService } from './../../services/punto04/player.service';
import { Player } from './../../models/punto04/player';
import { stringify } from '@angular/core/src/util';


@Component({
  selector: 'app-punto04',
  templateUrl: './punto04.component.html',
  styleUrls: ['./punto04.component.css']
})

export class Punto04Component implements OnInit {

  team: Team;
  teams: Array<Team>;

  player: Player;
  players: Array<Player>;
  playersFiltrado: Array<Player>;

  totalPaguinaPlayer : Number = 10;
//  totalPaguinaPlayer:  = 10;

  constructor(private teamService: TeamService,private playerService: PlayerService) {
    this.cargarTeams();
    //this.ObtenerPag();
   // console.log("Contr  -- "+ this.totalPaguinaPlayer);
    //this.cargarPlayers();
    //this.filtrarPlayersV2("Hawks");

    //this.filtrarPlayersV2("Warriors");

  }

  ngOnInit() {
  }


  cargarTeams() {
    this.teamService.getTeams().subscribe(
      (result) => {
        //es necesario que convierta el JSON que
        this.teams = new Array<Team>();
        result['data'].forEach(element => {
          this.team = new Team();
          Object.assign(this.team, element);
          //console.log(element.city);
          //this.team.city = Object.
          this.teams.push(this.team);
        });
        // console.log(this.teams);
      },
      error => {
        alert("Error en la petición");
      }
    )
  }


  ObtenerPag() {
    this.playerService.getPlayers().subscribe(
      (result) => {
        this.totalPaguinaPlayer = result["meta"].total_pages;
        console.log("Obt PAg -- " + this.totalPaguinaPlayer );
        return this.totalPaguinaPlayer ;
      },
      error => {
        alert("Error en la petición");
      }
    )
  }

  cargarPlayers() {
    //this.totalPaguinaPlayer =  this.ObtenerPag();
    //console.log("Cargar Plyat -- " + this.totalPaguinaPlayer );
    this.players = new Array<Player>();
    for (var index = 1; index < this.totalPaguinaPlayer; index++) {

      var indexString = ""+index;
      //console.log(indexString);
      this.playerService.getPlayers(indexString).subscribe(
        (result) => {
          result['data'].forEach(element => {
            this.player = new Player();
            Object.assign(this.player, element);
            //this.team.city = Object.
            this.players.push(this.player);
            //console.log(this.players);
          });
          // console.log(this.teams);
        },
        error => {
          alert("Error en la petición");
          console.log("error " + index);
        }
      )
    }
  }

  filtrarPlayers(nombreEquipo:string){
    this.players = new Array<Player>();
    console.log(this.players);
    this.playersFiltrado = new Array<Player>();
    this.players.forEach(element => {
      console.log("Paso");
      if(element.team.name == nombreEquipo){
        console.log(element);
        this.playersFiltrado.push(element);
      }
    });
    this.players = this.playersFiltrado;
  }


  filtrarPlayersV2(nombreEquipo:string) {
    this.playersFiltrado = new Array<Player>();
    for (var index = 1; index < this.totalPaguinaPlayer; index++) {
      var indexString = ""+index;
      this.playerService.getPlayers(indexString).subscribe(
        (result) => {
          result['data'].forEach(element => {
            this.player = new Player();
            Object.assign(this.player, element);
            if(this.player.team.name == nombreEquipo){
              console.log(this.player.team.name);
              this.playersFiltrado.push(this.player);
              //this.players.push(this.player);
            }
          });
        },
        error => {
          alert("Error en la petición");
          console.log(indexString);
        }
      )
    }
  }
}
