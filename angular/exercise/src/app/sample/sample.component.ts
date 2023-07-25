import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  serverId : number = 10;
  serverStatus : string = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }
}
