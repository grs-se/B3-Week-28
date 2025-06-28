# 🚦 Angular Routing Challenge: Build a Basic Navigation App

## 🧩 Objective
Create a simple Angular application using routing to navigate between two components: **Home** and **About** — without reloading the page. This challenge helps reinforce Angular Router basics.

---

## ✅ Prerequisites

- Angular CLI installed
- Basic understanding of Angular components and CLI
- Node.js installed

---

## 🚀 Step-by-Step Instructions

### 1️⃣ Create a New Angular Project with Routing

```bash
ng new routing-challenge --routing
```

- Choose **CSS** (or any styling preference)
- Make sure `app-routing.module.ts` is created automatically

---

### 2️⃣ Generate Components

Generate the required components using Angular CLI:

```bash
ng generate component home
ng generate component about
```

---

### 3️⃣ Define Routes in `app-routing.module.ts`

Open `src/app/app-routing.module.ts` and define the routes:

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

---

### 4️⃣ Update Navigation in `app.component.html`

Replace the content of `app.component.html` with:

```html
<nav>
  <a routerLink="/home">Home</a> |
  <a routerLink="/about">About</a>
</nav>

<!-- Dynamic view goes here -->
<router-outlet></router-outlet>
```

---

### 5️⃣ Add Template Content

- In `home.component.html`, add:

```html
<h2>Welcome to the Home Page</h2>
```

- In `about.component.html`, add:

```html
<h2>About This App</h2>
```

---

### 🎯 Bonus Challenge (Optional)

Add a **NotFoundComponent** to handle unknown routes:

```bash
ng generate component not-found
```

Update `app-routing.module.ts`:

```ts
{ path: '**', component: NotFoundComponent }
```

---

### 🧪 Test Your App

1. Run the app:

```bash
ng serve
```

2. Visit `http://localhost:4200` in your browser.
3. Click the Home and About links and confirm navigation happens **without page reload**.
4. Try accessing `/home`, `/about`, and an unknown route like `/xyz`.

---

Happy Coding! 🚀
