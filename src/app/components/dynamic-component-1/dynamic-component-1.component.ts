import {Component, Input , input} from "@angular/core";

@Component(
  {
    selector: '',
    templateUrl: 'dynamic-component-1.component.html',
    styleUrl: 'dynamic-component-1.component.css'
  }
)
export class DynamicComponent1Component {
  text = input<string>("");
  text2 = input<string>("");
}
