# 🚀 Angular Challenge: Authenticated Product App with Dynamic Routing

## 🎯 Objective
Build a small Angular application that combines **routing basics**, **programmatic navigation**, and **dynamic route parameters** to simulate an authenticated product browsing experience.

---

## 🧩 What You'll Build

1. A fake **LoginComponent** that navigates to a Dashboard upon success.
2. A **DashboardComponent** that lists product links.
3. A **ProductDetailComponent** that reads product `id` from the URL.
4. A **ProductReviewComponent** that shows reviews for a specific product using nested routes.
5. A default and wildcard route handling.

---

## ✅ Prerequisites

- Angular CLI installed
- Familiarity with Angular components and routing
- Basic TypeScript skills

---

## 🛠 Features to Implement

- Programmatic navigation using `Router.navigate`
- URL parameters using `:id`
- Nested routes (child routes)
- `<router-outlet>` for rendering views
- Use of `ActivatedRoute` to read parameters

---

## 🏗 Steps

### 1️⃣ Create New Project

```bash
ng new advanced-routing-challenge --routing
```

### 2️⃣ Generate Components

```bash
ng generate component login
ng generate component dashboard
ng generate component product-detail
ng generate component product-review
ng generate component not-found
```

---

### 3️⃣ Define Routes in `app-routing.module.ts`

```ts
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product/:id', component: ProductDetailComponent, children: [
      { path: 'reviews', component: ProductReviewComponent }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
```

---

### 4️⃣ Login with Programmatic Navigation

**`login.component.ts`**

```ts
constructor(private router: Router) {}

fakeLogin() {
  this.router.navigate(['/dashboard']);
}
```

**`login.component.html`**

```html
<h2>Login</h2>
<button (click)="fakeLogin()">Login</button>
```

---

### 5️⃣ Display Products in Dashboard

```ts
products = [101, 102, 103];
```

```html
<ul>
  <li *ngFor="let p of products">
    <a [routerLink]="['/product', p]">Product {{ p }}</a>
  </li>
</ul>
```

---

### 6️⃣ Access Route Param in ProductDetail

**`product-detail.component.ts`**

```ts
ngOnInit() {
  this.productId = this.route.snapshot.paramMap.get('id');
}
```

**`product-detail.component.html`**

```html
<h2>Product ID: {{ productId }}</h2>
<a [routerLink]="['reviews']">View Reviews</a>
<router-outlet></router-outlet>
```

---

### 7️⃣ Setup ProductReview Component

```html
<h3>Reviews for Product {{ productId }}</h3>
<p>⭐️⭐️⭐️⭐️☆ - "Great Product!"</p>
```

```ts
ngOnInit() {
  this.productId = this.route.parent?.snapshot.paramMap.get('id');
}
```

---

### 8️⃣ Handle Invalid Routes

**`not-found.component.html`**

```html
<h2>404 - Page Not Found</h2>
<a routerLink="/login">Go to Login</a>
```

---

## ✅ Test Your App

- Login redirects to dashboard.
- Product links show the product detail view.
- Clicking "View Reviews" loads nested route inside product detail.
- Navigating to an unknown path shows the 404 component.

---

## 🧠 Bonus

- Implement a basic AuthService to protect dashboard routes.
- Use route guards to restrict access unless "logged in".

---

Happy Routing and Navigating! 🚦🚀