# Shinfi – Modern E-Commerce Frontend

## Overview ##

Shinfi is a fully responsive modern e-commerce frontend application built using React.js and Tailwind CSS.
The project focuses on creating a premium shopping experience with clean UI/UX, dynamic product browsing, cart management, authentication flow, and responsive layouts optimized for all devices.

The application uses the Fake Store API for fetching products dynamically and implements client-side search, filtering, sorting, mini-cart interactions, protected routing, payment flow, dark mode support, and persistent cart storage.

## Live Features ##

* Responsive Home Page
* Product Listing Page
* Product Quick View
* Search Functionality
* Category Filtering
* Product Sorting
* Mini Cart Dropdown
* Full Cart Page
* Checkout & Payment Flow
* Login Authentication
* Protected Routes
* Dark / Light Mode
* Persistent Cart using localStorage
* Persistent Authentication using Cookies + localStorage
* Empty States
* Loading Spinners
* Error Handling

## Tech Stack ##

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Zustand
* Axios
* js-cookie
* react-hot-toast
* react-loader-spinner

## Folder Structure ##

```bash
src/
│
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Hero/
│   ├── ProductCard/
│   ├── ProductGrid/
│   ├── SearchBar/
│   ├── Filters/
│   ├── SortDropdown/
│   ├── MiniCart/
│   ├── CartItem/
│   ├── Loader/
│   ├── ErrorState/
│   ├── EmptyState/
│   ├── ProductModal/
│   ├── ProfileDropdown/
│   └── ProtectedRoute/
│
├── pages/
│   ├── Home/
│   ├── Products/
│   ├── Cart/
│   ├── Checkout/
│   ├── Completed/
│   ├── Login/
│   └── NotFound/
│
├── store/
│   └── cartStore.js
│
├── services/
│   └── api.js
│
├── context/
│   └── ThemeContext.jsx
│
├── utils/
│   └── auth.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## Setup Instructions ##

#### 1. Clone Repository ####

git clone <your-github-repo-url>

#### 2. Navigate to Project ####

cd shinfi

#### 3. Install Dependencies ####

npm install

#### 4. Start Development Server ####

npm run dev

## Required Packages ##

npm install react-router-dom axios zustand react-icons react-hot-toast react-loader-spinner js-cookie

## API Used ##

** Fake Store API **

https://fakestoreapi.com/products

Products and categories are fetched dynamically from the API.

## Authentication Flow ##

##### The application includes a frontend authentication system:####

* User logs in through Login Page
* Fake token is generated
* Token stored in:
    * Cookies
    * localStorage
* Protected routes prevent unauthorized access
* Login persists after page refresh
* Logout removes authentication token

## Cart Functionality ##

** Implemented using Zustand global state management. **

** Features: **

* Add to cart
* Remove from cart
* Increase quantity
* Decrease quantity
* Persistent cart using localStorage
* Dynamic cart badge
* Mini cart dropdown
* Cart auto reset after successful payment

⸻

## Checkout Flow ##

The checkout page supports multiple payment methods:

* Card
* UPI
* Bank Transfer

Dynamic forms appear based on selected payment option.

After successful payment:

* Cart is cleared
* User redirected to order confirmation page

## Responsive Design ##

The application is optimized for:

* Mobile
* Tablet
* Laptop
* Desktop

Tailwind responsive utilities and mobile-first design principles were used throughout the application.

State Management Approach

Zustand was chosen because:

* Lightweight
* Simple API
* Minimal boilerplate
* Efficient re-rendering
* Easy localStorage integration

⸻

Assumptions Made

* Authentication is frontend-only using fake tokens
* Payment flow is simulated (no real payment gateway)
* Fake Store API is assumed to be available
* Shipping and tax calculations are static
* Product inventory is not managed
* No backend/database integration included

⸻

## Performance Optimizations ##

* Client-side filtering/searching without API refetching
* Memoized filtering logic
* Persistent state management
* Optimized responsive images
* Reusable components
* Minimal unnecessary re-renders

## Future Improvements ##

#### Possible future enhancements: ####

* Real backend authentication
* Stripe/Razorpay integration
* Wishlist functionality
* Product reviews
* User profile management
* Order history
* Skeleton loading UI
* Pagination / infinite scroll
* Address management
* Multi-language support


#### Author: ####

## Rakshith Reddy Gaddam ##

## Shinfi – Modern Minimal E-Commerce Experience ##
