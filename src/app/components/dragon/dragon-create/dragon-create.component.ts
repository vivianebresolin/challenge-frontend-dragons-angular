import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dragon } from '../dragon.model';
import { DragonService } from '../dragon.service';

@Component({
  selector: 'app-dragon-create',
  templateUrl: './dragon-create.component.html',
  styleUrls: ['./dragon-create.component.scss']
})
export class DragonCreateComponent implements OnInit {

  newDragon: Dragon = {
    name: "",
    type: "",
    histories: "",
    createdAt: new Date()
  }

  constructor(private dragonService: DragonService, private router: Router) { }

  ngOnInit(): void {

  }

  createDragon(): void {
    this.dragonService.create(this.newDragon).subscribe(() => {
      this.dragonService.showPopUpMessage('Dragão cadastrado com sucesso!');
      this.router.navigate(['/']);
    });
  }

  cancelCreateDragon(): void {
    this.router.navigate(['/']);
  }
}
