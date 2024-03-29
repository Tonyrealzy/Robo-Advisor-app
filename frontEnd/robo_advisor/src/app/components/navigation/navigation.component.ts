import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  faArrowRightLong = faArrowRightLong;
  faArrowLeftLong = faArrowLeftLong;
  @Input() currentQuestion: number =0;
  @Input() totalQuestions: number =0;

  @Output() previousClick = new EventEmitter<void>();
  @Output() nextClick = new EventEmitter<void>();

  onPreviousClick(): void{
    this.previousClick.emit();
  }
  onNextClick(): void{
    this.nextClick.emit();
  }
}
