import { Component, OnInit } from '@angular/core';
import { DragonService } from '../dragon.service';

@Component({
  selector: 'app-dragon-create',
  templateUrl: './dragon-create.component.html',
  styleUrls: ['./dragon-create.component.scss']
})
export class DragonCreateComponent implements OnInit {

  constructor(private dragonService: DragonService) { }

  ngOnInit(): void {

  }

  createDragon(): void {
    this.dragonService.showPopUpMessage('Teste!');
  }

}
