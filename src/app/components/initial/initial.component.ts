import { Component,  ElementRef, OnInit, QueryList, ViewChildren, } from '@angular/core';
import { InitialService } from 'src/app/services/initial.service';
import { PosGameComponent } from '../pos-game/pos-game.component';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.sass']
})
export class InitialComponent implements OnInit {
  tarotCard: any;

  chooseCard: boolean = false;

  @ViewChildren(PosGameComponent) tarotCardList:
    | QueryList<PosGameComponent>
    | undefined;

  constructor(private initialService: InitialService, private el: ElementRef) {}
  
  ngOnInit(): void {
    this.initialService.getAPI().subscribe((tarot) => {
      this.tarotCard = tarot;
    });
  }

  public changeCards() {
    this.chooseCard = false;
    this.tarotCardList?.forEach((tarot) => {
      tarot.seeTarot();
    });

    setTimeout(() => { this.tarotCard.cards.sort(() => Math.random()-0.2); }, 100);
  }
}
