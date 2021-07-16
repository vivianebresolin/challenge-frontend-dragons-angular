import { Dragon } from './../dragon.model';
import { Component, OnInit } from '@angular/core';
import { DragonService } from '../dragon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dragon-update',
  templateUrl: './dragon-update.component.html',
  styleUrls: ['./dragon-update.component.scss']
})
export class DragonUpdateComponent implements OnInit {

  dragon: Dragon

  constructor(private dragonService: DragonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dragonService.readById(id!).subscribe(dragon => {
      this.dragon = dragon;
    });
  }

  deleteDragon(dragon: Dragon): void {
    this.dragonService.delete(dragon.id!).subscribe(() => {
      this.dragonService.showPopUpMessage('Dragão deletado com sucesso!');
    });
    this.router.navigate(['/']);
  }

  cancelUpdateDragon(): void {
    this.router.navigate(['/']);
  }
}
