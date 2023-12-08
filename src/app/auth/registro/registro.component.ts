import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  public usuarios: User[] = [];

  insertForm = this.formBuilder.group({
    userName:["", [Validators.required]],
    password:["", [Validators.required]],
    userType:["", [Validators.required]],
  });

  constructor(private usuariosService: UsuariosService, private formBuilder: FormBuilder) { }

  insertarUsuario() {
    if (this.insertForm.valid) {
      let nuevoUsuario: User = {
        UserName : this.insertForm.value.userName!,
        Password : this.insertForm.value.password!,
        UserType : this.insertForm.value.userType!,
        UserId : 0
      };

      this.usuariosService.insertUser(nuevoUsuario).subscribe(
        (data:number)=>
        {
          console.log(data);
        }
      );
      }
    }

}
