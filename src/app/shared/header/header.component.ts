import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public usuarioLogado!: User|undefined|null;

  constructor(public globalDataService: GlobalDataService) { }

  ngOnInit(): void {
    //Muestra el usuario actual
    this.usuarioLogado = this.globalDataService.getUsuarioLogado();
    //Muestra el tipo de usuario
    console.log(this.usuarioLogado?.UserType);
  }

}
