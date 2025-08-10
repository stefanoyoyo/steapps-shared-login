import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppService } from './shared/services/app/app.service';
import { AssetsService } from './shared/services/assets/assets.service';
import { FirebaseConfig } from './shared/models/firebaseConfig';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './shared/services/common/common.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'shared-login';
  username = '';
  password = '';
  error = '';
  showPassword = false;

  constructor(
    private common_service: CommonService,
    private componentService: AppService
  ) {}

  async ngOnInit() {
    // 01. Recupero la configurazione Firebase
    const fbConfig: FirebaseConfig | undefined = await this.componentService.getFirebaseConfig('ame.dev.apps');
    if (!fbConfig) {
      console.error('Errore nel recupero della configurazione Firebase.');
      return;
    }
    console.log('Configurazione Firebase:', fbConfig);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (!this.username || !this.password) {
      this.error = 'Inserisci nome utente e password.';
      return;
    }
    this.error = '';
    // Qui puoi aggiungere la logica di autenticazione
    alert(`Benvenuto, ${this.username}!`);
  }
}
