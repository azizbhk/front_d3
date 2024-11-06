import { Component, OnInit } from '@angular/core';
import { voyage } from './model/voyage.model';
import { voyageService } from './services/voyage.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

// import { voyage } from '../model/voyage.model';
// import { AuthService } from '../services/auth.service';
// import { voyageService } from '../services/voyage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'EquipesProject';

  constructor(public authService: AuthService,
    private router :Router){}
    ngOnInit () { this.authService.loadToken(); 
      if (this.authService.getToken()==null || this.authService.isTokenExpired())
         this.router.navigate(['/login']); }
    
    onLogout(){
    this.authService.logout();
    }
}