import { Component, OnInit } from '@angular/core';
import { InitialService } from 'src/app/services/initial.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.sass']
})
export class InitialComponent implements OnInit {
  images : any;
  error: any;
  clickTarot: boolean = false;
  constructor(private initialService: InitialService) { 
    this.getter();
  }
  setClickTarot(click: boolean){
    this.clickTarot = click;
  }
  ngOnInit(): void { }
  
  getter(){
    this.initialService.getCards().subscribe(
    (data: any) => {
      this.images = data;
      console.log("Data que recebemos: ", data);
      console.log("Variável que preenchemos: ", this.images);      
    }, (error: any) =>{
      this.error = error;
      console.error("Erro: ",error);
    });
  }
}
