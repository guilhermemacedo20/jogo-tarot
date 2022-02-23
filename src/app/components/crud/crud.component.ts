import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.sass']
})
export class CrudComponent implements OnInit {
  images : any;
  error: any;
  constructor(private crudService: CrudService) { 
    this.getter();
  }

  ngOnInit(): void { }
  
  getter(){
    this.crudService.getImagem().subscribe(
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
