import { Component } from '@angular/core';
import { Hero }    from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: '../playground/hero-form.component.html',
  styleUrls: ['../playground/hero-form.css']
})

export class HeroFormComponent {
  powers = [
    'Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'
  ];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  
  onSubmit() { this.submitted = true; }
  
  newHero() {
    this.model = new Hero(42, '', '');
  }
}
