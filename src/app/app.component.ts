import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgComponentOutlet} from "@angular/common";
import {DynamicComponent1Component} from "./components/dynamic-component-1/dynamic-component-1.component";
import {DynamicComponent2Component} from "./components/dynamic-component-2/dynamic-component-2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webapp';
  protected readonly dynamicComponent1Component = DynamicComponent1Component;
  protected readonly dynamicComponent2Component = DynamicComponent2Component;
  ssss = {text: 'hello', text2: 'world'};
}
