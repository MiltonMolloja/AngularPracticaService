import { Component, OnInit } from '@angular/core';

import { TextService } from './../../services/punto03/text.service';
import { Text } from './../../models/punto03/text';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-punto03',
  templateUrl: './punto03.component.html',
  styleUrls: ['./punto03.component.css']
})

export class Punto03Component implements OnInit {
  text: Text;
  texts: Array<Text>;
  resultado :string;
  constructor(private textService: TextService) {
    this.text = new Text();
    this.texts = new Array<Text>();
    //this.traducirText("en","es","my House");
    //console.log(this.resultado);
  }

  ngOnInit() {
  }


  traducirText(org: string, des: string, text: string,formMsg : NgForm) {
    if (formMsg.valid == true) {
    this.textService.getTexts(org, des, text).subscribe(
      (result) => {
        //es necesario que convierta el JSON que
        this.texts = new Array<Text>();
        result['outputs'].forEach(element => {
          this.text = new Text();
          this.resultado = element.output;
          //Object.assign(this.text, element);
          //console.log(element.city);
          //this.team.city = Object.
          //this.texts.push(this.text);
          //this.resultado = this.texts[0].text;
          //console.log("desntro  - " + this.texts[0].text);
          //console.log(this.texts);
        });
        //console.log(this.texts);
      },
      error => {
        alert("Error en la petición");
      }
    )
    }
  }

}
