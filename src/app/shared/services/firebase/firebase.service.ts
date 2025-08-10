import { Injectable } from '@angular/core';
import { FirebaseConfig } from '../../models/firebaseConfig';
import { AssetsService } from '../assets/assets.service';
import { CommonService } from '../common/common.service';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    private common_service: CommonService,
    private assets_service: AssetsService
  ) {}

  /**Metodo che inizializza la connessione con firebase */
  startFbApi(fbConfig: FirebaseConfig): boolean {
    try {
      console.log('Inizializzazione API Firebase con la configurazione:', fbConfig);
      this.common_service.fbApi = initializeApp(fbConfig as any);
      this.common_service.fbApiAnalytics = getAnalytics(this.common_service.fbApi);
      console.log('API Firebase inizializzata con successo.');
      return true;
    } catch (error) {
      console.error("Errore nell'inizializzazione dell'API Firebase:", error);
      return false;
    }
  }

  /**Metodo che recupera le credenziali Firebase dell'utente specificato */
  public async getFirebaseConfig(
    username: string
  ): Promise<FirebaseConfig | undefined> {
    try {
      const fbConfig = await this.assets_service.getFile(
        'assets/firebase/fb-proj-configs.json'
      );
      if (!fbConfig) {
        console.error('Impossibile caricare la configurazione Firebase.');
        return;
      }
      const fbUserConfig: FirebaseConfig = fbConfig['users'][username];
      if (!fbUserConfig) {
        console.error(
          `Configurazione Firebase non trovata per l'utente: ${username}`
        );
        return;
      }
      this.common_service.fbUserConfig = fbUserConfig;
      return fbUserConfig;
    } catch (error) {
      console.error(
        'Errore nel recupero della configurazione Firebase:',
        error
      );
      return;
    }
  }
}
