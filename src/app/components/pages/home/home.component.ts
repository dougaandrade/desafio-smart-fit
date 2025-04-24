import { Component } from '@angular/core';
import { CardImgComponent } from './card-img/card-img.component';
import { CardQRCodeComponent } from './card-qrcode/card-qrcode.component';
import { CardBuscaAcadComponent } from './card-busca-acad/card-busca-acad.component';

@Component({
    selector: 'homeComponent',
    imports: [CardImgComponent, CardQRCodeComponent, CardBuscaAcadComponent],
    template: `
    <div class="container-content">
      <cardImg />
      <cardQrcode />
      <cardBuscaAcad />
    </div>
  `,
    styleUrl: './home.component.scss'
})
export class HomeComponent {}
