import { Component } from "@angular/core";

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styles: [`h2, p { font-family: sans-serif; margin: 10px; color: blue; }`]
})

export class HelloWorldComponent {
  judul = 'Hello World.';
  gambar = 'assets/angular.png';
  aktif = true;
}