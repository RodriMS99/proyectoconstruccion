import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosClienteDetallesComponent } from './pedidos-cliente-detalles.component';

describe('PedidosClienteDetallesComponent', () => {
  let component: PedidosClienteDetallesComponent;
  let fixture: ComponentFixture<PedidosClienteDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosClienteDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosClienteDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
