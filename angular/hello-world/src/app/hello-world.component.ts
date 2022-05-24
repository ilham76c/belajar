import { Component } from "@angular/core";

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>component angular pertama</p>
  `,
  styles: [`h2, p { font-family: sans-serif; margin: 10px; color: blue; }`]
})

export class HelloWorldComponent {

}