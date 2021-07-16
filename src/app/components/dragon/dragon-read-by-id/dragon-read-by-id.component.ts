import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dragon } from '../dragon.model';
import { DragonService } from '../dragon.service';

@Component({
  selector: 'app-dragon-read-by-id',
  templateUrl: './dragon-read-by-id.component.html',
  styleUrls: ['./dragon-read-by-id.component.scss']
})
export class DragonReadByIdComponent implements OnInit {

  dragon: Dragon

  constructor(
    private dragonService: DragonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dragonService.readById(id!).subscribe(dragon => {
      this.dragon = dragon;
    });
  }

  deleteDragon(dragonId: string): void {
    this.dragonService.delete(dragonId!).subscribe(() => {
      this.dragonService.showPopUpMessage('Dragão deletado com sucesso!');
    });
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1500);
  }
}
