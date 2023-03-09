import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { TokenStorageService } from "../auth-services";
import { WebSocketService } from "./web-socket.service";

// const WS_URL = "ws://66.70.229.82:8181";

@Injectable({
  providedIn: "root",
})
export class ConnectService {
  public messages: Subject<any>;

  constructor(private wsService: WebSocketService, private tokenService: TokenStorageService) {
    this.messages = <Subject<any>>(
      this.wsService.connect(`${environment.WebSocket_Url}/?${this.tokenService.getToken()}`).pipe(
        map((response: MessageEvent): any => {
          let data = JSON.parse(response.data);
          return data;
        })
      )
    );
  }
}
