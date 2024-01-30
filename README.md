# Task Description

You are tasked with creating a responsive login form and a subsequent data table page in a React application. The login form
should include simple validation for the username and password inputs. Upon successful validation, the user should be
redirected to a page displaying a table populated with data from the Star Wars API.

## Requirements

### Login Form:
- Create a responsive login form with two input fields: one for the username and another for the password.
- Implement basic validation to ensure that neither the username nor the password fields are empty.
### Login Button:
- Include a login button that should be disabled when the validation is not successful.
### React-Router Navigation:
- Utilize react-router-dom for navigation.
- Upon successful login, navigate the user to a new page (e.g., "/table").
### Data Table Page:
- Create a new page ("/table") that displays a table.
- Fetch data from the Star Wars API (https://swapi.dev/api/people) to populate the table.
- Display the following fields from each object in the API response: name, mass, height, hair color, and skin color.
Table Design:
- Design the table to be visually appealing and responsive.
### Bonus (Optional):
- Loading State: Display a loading state while fetching data from the API.
- Error Handling: Implement error handling for failed API requests.
### Evaluation Criteria:
- Functionality: Does the login form perform basic validation? Is the redirection to the data table page working correctly? Is
the data table populated with information from the API?
- Responsiveness: Is the login form and the data table page responsive for various screen sizes?
- Code Quality: Is the code well-organized, readable, and following best practices? Are React Hooks used appropriately for
state management and side effects?
- Bonus Features: If bonus features are attempted, are they implemented correctly and enhance the overall user experience?
## Project Completion:
The front-end development task should be completed within a maximum timeframe of two days from the date of
assignment. Please create a GitHub repository for the project and submit the completed task via the provided repository
link

## How to get the project from Github

### `git init`

Initialize an existing directory as a Git repository

#### `git clone from this repo` [Repo location](https://github.com/Nasko-Trenchev/login-form.git)

Retrieve the entire repository via the URL (https://github.com/Nasko-Trenchev/login-form.git)

OR 

### `Dowlnoad the project as ZIP file`

You can download the project as ZIP and then extract the code on your PC

In the project directory, you can run:

### `npm install`

This will install all project dependecies.

## How to run the project locally 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

# Project notes

## Dependecies

- typescript: ^4.9.5
- react-router-dom : ^6.21.3
- mui/material: "^5.15.6
- mui/icons-material: ^5.15.6
  
## Login component

- Simple login form with basic validation. For the validation I`ve used simple Regex validator for email and condition for the password to be 6 characters or more.
- Added some visual error handling for better customer experiance. Once the customer leaves the input filed, the function "onInputBlur" is validating the input and sets the formError state that controls the error element of both input fields.
- The login button is disabled if the values if the input fields are not meeting the requirements for valid input. Once the requirements are met, the customer can navigate to the /table path that renders the table component. 

## Table components

- The "Table" component is displaying a table with data from the Star Wars API.Fetching is organized in simple UseEffect hook, where the error and loading states are also beeing updated accordingly.
- The table was created with Material UI components for better UI. The rows are currently set to 10 as default due to the API providing array with 10 objects on each fetch. 
- Simple pagination was implemented, where the customer can choose different page and the fetchSwapiData function will fetch the data based on an URL with dynamic end. 
- UseEffect hook has cleanup function that is taking care of canceling fetch request calls with fetch AbortController when the component unmounts. 

### Responsivness

- Both components are responsive to different screen sizes