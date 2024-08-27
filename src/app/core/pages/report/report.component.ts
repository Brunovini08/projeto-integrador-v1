import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-report',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HomeComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

}
