import { Component, OnInit } from '@angular/core';
import { Dragon } from '../dragon.model';
import { DragonService } from '../dragon.service';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.scss']
})
export class DragonListComponent implements OnInit {

  dragons: Dragon[];

  constructor(private dragonService: DragonService) { }

  ngOnInit(): void {
    this.getDragons();
  }

  getDragons() {
    this.dragonService
      .read()
      .subscribe(dragons => this.dragons = dragons);
  }

  deleteDragon(dragon: Dragon): void {
    this.dragonService
      .delete(dragon.id!)
      .subscribe(() => {
        this.dragonService.showPopUpMessage('Dragão deletado com sucesso!');
        this.getDragons();
    });
  }
}
