import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Restaurante } from 'src/app/shared/Models/restaurante.model';
import { RestauranteService } from 'src/app/shared/services/restauranteServicio/restaurante.service';
import { ReservaComponent } from '../listado/reserva/reserva.component';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit, OnDestroy {
  routeSub: Subscription = new Subscription();
  restaurantId = '';
  restaurante: Restaurante;
  constructor(private route: ActivatedRoute, private restauranteService: RestauranteService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.restaurantId = params['id'];
    });

    if (this.restaurantId !== null && this.restaurantId !== undefined) {
      this.restauranteService.getRestaurante(this.restaurantId).subscribe((res: any) => {
        this.restaurante = res;
      });
    }
  }

  reservar() {
    let modal = this.modalService.open(ReservaComponent);
    modal.componentInstance.restaurante = this.restaurante;
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
