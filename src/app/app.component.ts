import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'webdev';
   collapsed = true;
   man: Array<any>;
   wizard: Array<any>;
   beast: Array<any>;


   
   constructor() {
    this.man = new Array<any>();
    this.wizard = new Array<any>();
    this.beast = new Array<any>();
   }

   ngOnInit(): void {
    this.getImages();
  }

    getImages(){
    var images = {
        man: {
          heading: 'Man Image',
          description: 'Image of a man.',
          path: 'img/man.jpg'
        },
        wizard: {
          heading: 'Wizard Image',
          description: 'Image of a wizard.',
          path: 'img/wizard.jpg'
        },
        beast: {
          heading: 'Beast Image',
          description: 'Image of a beast.',
          path: 'img/beast.jpg'
        }
    };
   
    this.man.push(images.man);
    this.wizard.push(images.wizard)
    this.beast.push(images.beast)
  
  }
}
