# Dog Day Care - Pawsitive Vibez

A React app used as a redesign exercise of an existing website.

Live Demo: [Dog Day Care](https://dog-day-care-app.now.sh)

## Setup

Download and launch Express server found at [dog-day-care-api](https://github.com/alexnwalters/dog-day-care-api).

The config.js will look to connect to your server at 'http://localhost:8000/api', you can link it to a deployed server by creating a .env and your own REACT_APP_API_ENDPOINT.

## Redesign

A friend had recently started a dog day care business and had created a quick website using a template site, [Pawsitive Vibez](https://www.pawsitivevibezmd.com/).  She had noted it was something she had done as an afterthought and asked if I could help clean it up a bit.

One of my main goals was to change her use of space and divide up the information so customers aren't overloaded at any given spot.  

The second goal was to create a backend server for her to manage her applications pulling away from the third-party survey she was currently using.

### Client Side

#### Welcome

For this page, I mostly wanted to remove some of the information.  I want to use this page as more of an overview just providing the basics but allowing the customer to navigate to other pages for more detail about the business or their services elsewhere.

One issue she noted with her site was the review section required hover over pictures to then display the reviews, which reduced how mobile-friendly the design was.  Instead what I did was embed actually facebook reviews of the company.

<img src="https://github.com/alexnwalters/Dog-Day-Care-App/blob/master/readme_pics/screenshot_welcome_ipad.png" alt="welcome" width="450px" />

#### About / Services

The information I pulled off the welcome page, I then expanded on in these pages specific to their focus.  I used this as space to also add back dog pictures that were removed from the review section change.

<img src="https://github.com/alexnwalters/Dog-Day-Care-App/blob/master/readme_pics/screenshot_about_ipad.png" alt="about" width="450px" />
<img src="https://github.com/alexnwalters/Dog-Day-Care-App/blob/master/readme_pics/screenshot_services_ipad.png" alt="services" width="450px" />

#### Applicaton 

Her current survey was one she set up with a third party site and took the users away from her page, additional it consisted only of textarea open inputs. I was worried this opened her up to have questions not answered correctly, so I broke up the questions that I could.  I used a fair amount of Yes/No questions to prevent the application from facing fatigue and abandoning the form. Once the required fields are completed the application is pushed to the server and a thank you confirmation is presented.

<img src="https://github.com/alexnwalters/Dog-Day-Care-App/blob/master/readme_pics/screenshot_application_ipad.png" alt="application" width="450px" />

### Admin Login

Admin Login allows the business owner to log in to review stored service requests.

Sample Login

```
Username: Testuser
Password: Test123
```

### Request Administration

I created a landing page for her that will display the current status of her requests between pending, accepted and declined.  Each item is clickable and will display the full details of each request once selected.

<img src="https://github.com/alexnwalters/Dog-Day-Care-App/blob/master/readme_pics/screenshot_admin_ipad.png" alt="admin" width="450px" />

The request details popup will display all of the information collected from the service requests and provides buttons to change the status for the request and even delete the request altogether.

<img src="https://github.com/alexnwalters/Dog-Day-Care-App/blob/master/readme_pics/screenshot_details_ipad.png" alt="details" width="450px" />

## Skills

* HTML, CSS, JSX
* Mobile Responsive Design
* React Router
* Jest smoke tests

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
