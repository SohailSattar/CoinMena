# COINMENA Sample Trading App

This repo contains the frontend which is built in React. Please find below the structural and functional details of the project.

## Technologies Used ##
React as Frontend

Storybook

TypeScript as the programming language.


## Components
These components are added in the proejc tto accomodate the user interface.


### Action Item
Simple card like element which contains the name of the action and the action placeholder to take. Currenly being used with the ButtonWithDropdown component.

### Button
HTML button element which is wrapped as a component. This was created for styling purpose.

### ButtonWithDropdown
Button element which on mouse hover will display the list of action items to be performed.

### Crypto Assets List
It is a simple component which recieves the assets lists and display it in the tabular form.

### Currency Converter
Currency Component is a stateful component which is exchanges the currencies. It was intentionally made as a stand alone component.

### Currency item
It is a basic card like component which displays the asset with its name, symbol and icon.

### Dropdown
This component wraps a thrid party component. Made it to display the React component in the dropdown menu.

### Footer
Footer of the page

### Header
Header menu consists of the Logo (for time being it is a simple text), menu items and a login button. If the user is signed in, they shall see their name and the log in button.

### Layout
Main wrapper which consists of the Header, Footer and the page content. As our page structure will be same throughout the website, this layout would be helpful.

### Login Control
Initially contains a single button called "Login". Upon clicking on the Login button, a modal popup will Login form will appear where the user can enter the email and password (Currently there is no backend authentication). After entering the login details, this component will display the user name with logout button.

### Login Form
Login form consists of two textoxes i.e. Email andd Password and a Login button.

### Menu Bar
Holds the list of Menu Items.

### Menu Item
Inidividual menu item which displays the name and the url path.

### Modal
Modal popup which is built on top of the headless UI.

### Table
Wrapper muilt on top of the react-model

### TextBox
TextBox component which is built on HTML input element. Currently allowed input types are text, password and number.

## Pages
Currently at this stage this project has 2 pages. Home and Trade.

### Home
Home page contains the list of the current prices of the assets.

### Trade
Trade page contains a single component i.e. Currency Converter.

