import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface AuthResponse {
  token: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  errorMessage: string = '';

  // Agregar variables para mostrar mensajes de error
  usernameError: boolean = false;
  firstnameError: boolean = false;
  lastnameError: boolean = false;
  emailError: boolean = false;
  passwordError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  register(event: Event) {
    event.preventDefault();  // Evita que el formulario se envíe automáticamente

    // Restablece las variables de error
    this.usernameError = false;
    this.firstnameError = false;
    this.lastnameError = false;
    this.emailError = false;
    this.passwordError = false;

    // Realiza las validaciones
    if (!this.username) {
      this.usernameError = true;
    }
    if (!this.firstname) {
      this.firstnameError = true;
    }
    if (!this.lastname) {
      this.lastnameError = true;
    }
    if (!this.email) {
      this.emailError = true;
    }
    if (!this.password) {
      this.passwordError = true;
    }

    // Si se encontraron errores, no continúes
    if (this.usernameError || this.firstnameError || this.lastnameError || this.emailError || this.passwordError) {
      return;
    }

    const user = {
      username: this.username,
      password: this.password,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
    };

    this.authService.register(user).subscribe(
      (response: any) => {
        // Almacenar el token en LocalStorage
        localStorage.setItem('token', response.token);
        
        // Redirigir al usuario a la página deseada después del registro, por ejemplo, al panel de control
        this.router.navigate(['/inicio']);
      },
      (error) => {
        // Manejar errores, mostrar mensajes de error al usuario
        this.errorMessage = 'Error al registrar. Verifica tus datos e inténtalo nuevamente.';
      }
    );
  }
}
