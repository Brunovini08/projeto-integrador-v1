import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { LoginComponent } from "../login/login.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
@Component({
  selector: 'app-hot-map',
  standalone: true,
  imports: [NavbarComponent, LoginComponent, FooterComponent],
  templateUrl: './hot-map.component.html',
  styleUrl: './hot-map.component.css'
})
export class HotMapComponent {

}
