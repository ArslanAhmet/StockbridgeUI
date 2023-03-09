import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ConnectService } from 'src/app/@core/connect-services/connect.service';
import { TokenStorageService } from 'src/app/@core/auth-services/token-storage.service';
import { WebSocketService } from 'src/app/@core/connect-services';
@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  showMenu = false;
  constructor(private observer: BreakpointObserver,
    private tokenService: TokenStorageService,
    private router: Router,
    private connectService: ConnectService) {
    console.log("DashboardComponent initialized ");

    this.connectService.messages.subscribe((msg) => {
      console.log("Response from websocket: " + msg);
    });
  }

  open(menu: { openMenu: () => void; }) {
    menu.openMenu();


  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
  logout() {
    this.tokenService.signOut();
    this.router.navigate(["/auth/login"]);
  }
}
