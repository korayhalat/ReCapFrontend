import { Component } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
    selector: 'app-menu-top',
    template: `<p-menubar [model]="items"><div>
    <input type="text" pInputText placeholder="Ara">
    <button type="button" pButton label="Logout" icon="pi pi-power-off" style="margin-left:.25em"></button>
    </div></p-menubar>`,
    styles:[``] 
  })
  export class AppMenuTopComponent {
    items:MenuItem[]
    constructor(){
      this.items = [
        {
          label:'Car List',
          icon:'fa fa-car'
        },
        {
          label:'Color List',
          icon:'fas fa-palette'
        },
        {
          label:'Brand List',
          icon:'fas fa-copyright'
        },
        {
          label:'Rental List',
          icon:'far fa-handshake'
        },
       
    ];
    }
  }
  