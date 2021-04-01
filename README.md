# firebase-auth
## Description
A Firebase user management system that can easily be expanded to be a fully fledged CMS.


This project is meant to be an easily extensible boilerplate project for companies that need to manage any content. It features an authentication system and user management done with **Firebase Authentication**. A list of **Base Components** is used to have a coherent foundation that is easy to customize.
## Preamble
- Intended to be used with other *Firebase* services than just authentication but this is not obligatory.
- The first user with an admin **Custom Claim**(Role) has to be created with a dev server and firebase emulators as there is no way to do it with the firebase console website and you have to be an admin to create other admins using this project.
- Styling
  - Typography
    - Default styles are done in ```@layer base``` of Tailwind
  - Colors
    - Anything color theme related is done in ```@layer components```
  - Styling
    - To keep it consistent and also keep a **utility-first** approach there are no reusable css classes that aren't from *Tailwind* - everything is done with *Vue* components.
## Features
- Route Guards
- Persistent user authentication
- Dark Mode
- Several reusable base components

## Stack
- Vue 3
  - Vue Router
  - Vuex
  - Tailwind CSS
- Firebase Authentication
- Firebase Cloud Functions (Node & Express)
- Firebase Admin SDK

## Views
- Home
- Admin
- Settings
- Sign In
- Reset Password
- Not Found
## Base Components
- Alert
- Badge
- Button
- Card
- Dropdown
- Container
- Modal
- Icon
- Spinner
- Form
  - Input
  - Checkbox
  - Radio


## Single Instance Components
- Navbar
- Footer
- Sidebar

## CSS classes
- links