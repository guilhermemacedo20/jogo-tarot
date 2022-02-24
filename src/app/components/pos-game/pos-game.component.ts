import { Component,  ElementRef,  EventEmitter,  Input,  OnInit,  Output, } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { DescriptionComponent } from '../description/description.component';
import { InitialComponent } from '../initial/initial.component';

@Component({
  selector: 'app-pos-game',
  templateUrl: './pos-game.component.html',
  styleUrls: ['./pos-game.component.sass']
})
export class PosGameComponent implements OnInit {
  seeBack: boolean = false;
  @Input() imagesUrl: any;

  @Input() imageBackCard: any;

  @Input() card: any;  

  @Input() chooseCard: boolean = false;

  @Output('setChoose') setChoose: EventEmitter<any> =
    new EventEmitter(); 

  constructor(private el: ElementRef, private dialog: MatDialog) {}

  ngOnInit(): void {}

  public seeTarot() {
    const cardImage = this.el.nativeElement.querySelector('.mat-card');
    cardImage.classList.add('selected');
    this.seeBack = true;
  }
  
  public selectCard() {
    if (!this.seeBack) {
      this.dialog.open(DescriptionComponent, {
        width: '250px',
        data: {
          card: this.card,
          imagesUrl: this.imagesUrl,
        },
      });
    }
    else if (this.chooseCard) {
      alert("Já clicou em uma carta");
    }
    else {
      this.setChoose.emit(true);

      const cardImage = this.el.nativeElement.querySelector('.mat-card');
      cardImage.classList.toggle('selected');
      this.seeBack = !this.seeBack;
    }
  }
  
  

}
