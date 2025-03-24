import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard'; // If you have guards

const routes: Routes = [  // ✅ Correct usage of Routes
  { path: '', component: HomeComponent },
  { path: 'add-product', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}