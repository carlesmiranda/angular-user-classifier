# Angular User Classifier

A small Angular application that loads a list of restaurant customers, classifies each one into a profile based on their name, and displays them in a sortable table.

The classification rule: customers whose name contains an **H** or a **B** are *Pollo con Hierbas lovers*; everyone else is a *Pollo Piri Piri lover*.

This is a practice kata based on a frontend technical test.

## Features

- Loads the customer list from a remote JSON file.
- Classifies every customer into a profile when the data is loaded.
- Displays the customers in a plain HTML table (id, name, age and profile).
- Sorts the table in ascending order by id, name, age or profile, using a dropdown.
- Loading and error states with accessible messages.

## Tech stack

- Angular 22
- NgRx (Store, Effects and Store DevTools) for state management
- RxJS
- TypeScript
- SCSS

## Getting started

### Requirements

- Node.js 24 (tested with 24.15.0)
- Angular CLI 22

### Installation and running

```bash
git clone https://github.com/carlesmiranda/angular-user-classifier.git
cd angular-user-classifier
npm install
ng serve -o
```

The app opens at `http://localhost:4200`.

> **Note:** the app must be started with `ng serve`, because the data is loaded through the Angular development server proxy (see [CORS and proxy](#cors-and-proxy)).

## Assumptions

The classification rule can be interpreted in more than one way, so I made these decisions:

- The rule is **case-insensitive**: `h` counts the same as `H`.
- The letter can be in **any position** of the full name, including the surname.
- If a customer has **no name**, they are classified as *Pollo Piri Piri lover*.
- The data does **not include a `profile` field**. I interpreted `profile` as the classification field that the test asks to add after loading the data.

## Technical decisions

- **NgRx for state management:** the test evaluates state management explicitly, and NgRx is the tool I used for almost three years in my previous job. For an app of this size, a service with signals would also be enough, but NgRx provides a single source of truth and a predictable data flow in larger applications.
- **The profile is calculated in the effect, when the data is loaded:** it only depends on the name, which never changes, so it is calculated once and the store receives complete data.
- **Sorting is done in a selector:** the store keeps the minimum state (the customers and the selected sort criterion), and the sorted list is derived data. The selector is memoized, so it only sorts again when the customers or the criterion change. The sorting function does not modify the original array.
- **Observables:** I used observables with the `async` pipe because it is what I worked with in my previous job. I know signals are the direction Angular is taking, and migrating to them is one of the next steps.

### CORS and proxy

The server that hosts the data does not allow requests from other origins (it does not send the `Access-Control-Allow-Origin` header), so the browser blocks the response when the app runs on `localhost`.

To solve it during development, I configured the Angular development server proxy (`proxy.conf.json`): the app requests the data from its own origin, and the development server forwards the request to the original server. Since the request goes from server to server, CORS does not apply.

This only works in development. In production, the data server would need to allow the app's origin, or the requests would go through a backend.

## Next steps

- Search customers by name.
- Sort in descending order.
- Responsive layout.
- Unit tests.
- Migrate the component state to signals.