import { Component } from '@angular/core';

import { Hero }    from '../../model/hero/hero';

@Component({
	moduleId: module.id,
	selector: 'hero-form',
	templateUrl: '../html/hero/hero-form.component.html'
})
export class HeroFormComponent {

	submitted = false;

	powers = ['Select One', 'Really Smart', 'Super Flexible',
			'Super Hot', 'Weather Changer'];
	

	model = new Hero(null, '', this.powers[0], '');
	//model = new Hero();

	// TODO: Remove this when we're done
	get diagnostic() { return JSON.stringify(this.model); }

	onSubmit() { this.submitted = true; }
	
	newHero() {
		console.log('ABCD');
		this.model = new Hero(42, 'Gaurav', this.powers[0], 'Overstreet');
	}
}