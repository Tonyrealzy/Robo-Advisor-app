import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/dashboardComponents/footer/footer.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

}
