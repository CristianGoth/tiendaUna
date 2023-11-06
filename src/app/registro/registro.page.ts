import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  apellido: string = '';
  rut: string = '';
  correo: string = '';
  contrasena: string = '';
  verificacion: string = '';

  constructor(private afAuth: AngularFireAuth) {}

  async registrar() {
    try {
      if (this.contrasena === this.verificacion) {
        const resultado = await this.afAuth.createUserWithEmailAndPassword(this.correo, this.contrasena);
        console.log('Usuario registrado:', resultado);
        // You can redirect the user to another page after registration.
      } else {
        console.log('Las contraseñas no coinciden');
      }
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  }
}
