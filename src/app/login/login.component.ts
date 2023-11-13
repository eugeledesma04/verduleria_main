import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface AuthResponse {
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Agregar variables para mostrar mensajes de error
  usernameError: boolean = false;
  passwordError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {

    // Restablece las variables de error
    this.usernameError = false;
    this.passwordError = false;

    // Realiza las validaciones
    if (!this.username) {
      this.usernameError = true;
    }
    if (!this.password) {
      this.passwordError = true;
    }

    // Si se encontraron errores, no continúes
    if (this.usernameError || this.passwordError) {
      return;
    }

    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        // Almacenar el token en LocalStorage
        localStorage.setItem('token', response.token);
        
        // Redirigir al usuario a la página deseada, por ejemplo, al panel de control
        this.router.navigate(['/inicio']);
      },
      (error) => {
        // Manejar errores, mostrar mensajes de error al usuario
        this.errorMessage = 'Error al iniciar sesión. Verifica tus credenciales.';
      }
    );
  }
}
