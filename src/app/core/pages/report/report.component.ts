import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
@Component({
  selector: 'app-report',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

}
