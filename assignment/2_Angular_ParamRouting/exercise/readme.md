# 🚦 Angular Challenge: User Login & Product Viewer with Route Parameters

## 🧩 Objective
Build a simple Angular app that demonstrates **programmatic navigation** after login and uses **route parameters** to display dynamic product details.

---

## ✅ Prerequisites

- Angular CLI installed
- Basic knowledge of Angular services, routing, and components

---

## 🛠 App Features

1. A **LoginComponent** with a fake login function.
2. After "login," user is redirected to a **DashboardComponent**.
3. The Dashboard lists sample products with links.
4. Clicking a product navigates to a **ProductDetailComponent** using route parameters.
5. The ProductDetail view extracts the `id` from the URL and displays it.

---

## 🚀 Step-by-Step Instructions

### 1️⃣ Create a New Project

```bash
ng new login-routing-challenge --routing
```

---

### 2️⃣ Generate Required Components

```bash
ng generate component login
ng generate component dashboard
ng generate component product-detail
```

---

### 3️⃣ Define Routes in `app-routing.module.ts`

```ts
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
```

---

### 4️⃣ Setup Programmatic Navigation in LoginComponent

**`login.component.ts`**

```ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private router: Router) {}

  fakeLogin() {
    // Simulate login
    this.router.navigate(['/dashboard']);
  }
}
```

**`login.component.html`**

```html
<h2>Login Page</h2>
<button (click)="fakeLogin()">Login</button>
```

---

### 5️⃣ Setup Dashboard with Product Links

**`dashboard.component.ts`**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  products = [101, 102, 103];
}
```

**`dashboard.component.html`**

```html
<h2>Dashboard</h2>
<ul>
  <li *ngFor="let product of products">
    <a [routerLink]="['/product', product]">View Product {{ product }}</a>
  </li>
</ul>
```

---

### 6️⃣ Use Route Parameter in ProductDetailComponent

**`product-detail.component.ts`**

```ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
  }
}
```

**`product-detail.component.html`**

```html
<h2>Product Detail</h2>
<p>Product ID: {{ productId }}</p>
```

---

## 🧪 Test Your App

1. Run the app:
```bash
ng serve
```

2. Go to: `http://localhost:4200`
3. Click **Login** → navigates programmatically to `/dashboard`
4. Click any product → navigates to `/product/:id`
5. Ensure the correct product ID appears on the detail page.

---

### 🎯 Bonus Task

- Use `ActivatedRoute.params.subscribe(...)` instead of `snapshot` to reactively update the product ID.
- Add a 404 `NotFoundComponent` for unknown URLs.

---

Happy Routing! 🧭