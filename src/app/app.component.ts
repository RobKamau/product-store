import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule for routing

@Component({
  selector: 'app-root',
  standalone: true,  // Mark the component as standalone (if using standalone components)
  imports: [RouterModule],  // Import RouterModule to enable routing
  template: `
    <div>
      <h1>Welcome to the Product Store!</h1>
      <nav>
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/add-product">Add Product</a></li>
          <li><a routerLink="/cart">Cart</a></li>
          <li><a routerLink="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
      <router-outlet></router-outlet>  <!-- This is where the routed components will be displayed -->
    </div>
  `
})
export class AppComponent {
  // You can add any logic for your main component if needed
}