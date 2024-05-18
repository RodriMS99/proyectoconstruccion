import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SaleDetailsDataForList } from 'src/app/models/sale-details-data';
import { FacturasService } from 'src/app/services/facturas.service';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
    selector: 'app-pedidos-cliente-detalles',
    templateUrl: './pedidos-cliente-detalles.component.html',
    styleUrls: ['./pedidos-cliente-detalles.component.scss']
})
export class PedidosClienteDetallesComponent implements OnInit, OnDestroy
{

    pedidoDetalles: SaleDetailsDataForList[] = [];
    saleId!: number;
    private destroy$ = new Subject<void>();

    constructor(
        private facturasService: FacturasService,
        private globalDataServices: GlobalDataService,
        private route: ActivatedRoute,
        private router: Router) { }
    ngOnDestroy(): void
    {
        // Complete the destroy$ subject to automatically unsubscribe
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnInit(): void
    {
        // Retrieve the saleId from the route parameters
        this.saleId = +this.route.snapshot.paramMap.get('saleId')!;
        this.getSaleDetails();
    }

    getSaleDetails(): void
    {
        this.facturasService.getSaleDetailsDataBySaleId(this.saleId).subscribe(
            {
                next: (data: SaleDetailsDataForList[]) =>
                {
                    this.pedidoDetalles = data;
                    console.log(this.pedidoDetalles);
                },
                error: (error) =>
                {
                    console.error('Error retrieving sale details:', error);
                }
            });
    }

    volver()
    {
        this.router.navigate(['/dashboard/pedidoscliente']);
    }
}
