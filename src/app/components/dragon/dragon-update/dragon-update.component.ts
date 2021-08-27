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

  updateDragon(): void {
    // TODO: implementar
    console.log('Implementar Update Dragon');
  }

  cancelUpdateDragon(): void {
    this.router.navigate(['/']);
  }
}
