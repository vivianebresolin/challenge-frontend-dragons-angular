import { Component, OnInit } from '@angular/core';
import { Dragon } from '../dragon.model';
import { DragonService } from '../dragon.service';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.scss']
})
export class DragonListComponent implements OnInit {

  dragons: Dragon[]
  dragon: Dragon
  show: boolean

  constructor(private dragonService: DragonService) { }

  ngOnInit(): void {
    this.dragonService.read().subscribe(dragons => {
      this.dragons = dragons;
      this.show = true;
    });
  }

  updateListInScreen() {
    setTimeout(() => {
      this.show = false
    }, 800);

    setTimeout(() => {
      this.show = true
      this.dragonService.read().subscribe(dragons => {
        this.dragons = dragons;
      })
    }, 1000);
  }

  deleteDragon(dragon: Dragon): void {
    this.dragonService.delete(dragon.id!).subscribe(() => {
      this.dragonService.showPopUpMessage('Dragão deletado com sucesso!');
    });
    this.updateListInScreen();
  }
}
