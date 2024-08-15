import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FooterComponent } from '../../../shared/components/footer/footer.component';
@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css'
})
export class CampaignsComponent {

}
