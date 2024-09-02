import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { ReportComponent } from '../report/report.component';
import { RouterLinkActive, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, FooterComponent, RouterOutlet, ReportComponent, CarouselComponent, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
