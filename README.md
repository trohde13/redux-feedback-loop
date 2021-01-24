# Looped Feedback Form

## Description

_Duration: Weekend Project_

Welcome! This app is designed to collect and store feedback. The user moves through each question, one page at a time, assigning a number to each question, until they are asked for additional comments at the end. Each of the questions that ask for a number range for a response require that response (a message will pop up if they did not respond), the comments are optional. The user will view their responses and then submit their responses. They are then showed a success page and invited to submit feedback again. A click of the button will send the user back to the beginning of the form.


### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- axios
- express
- pg
- react
- react-dom
- react-redux
- react-router-dom
- react-scripts
- redux
- redux-logger

## Installation

1. Create a database named `prime_feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Select a number from the range to answer "How are you feeling?", click Next to continue (you will receive an alert if you attempt to move on without responding)
2. Select a number from the range to answer "How are you comprehending the material?", click Next to continue (you will receive an alert if you attempt to move on without responding)
3. Select a number from the range to answer "How well do you feel you are being supported?", click Next to continue (you will receive an alert if you attempt to move on without responding)
4. Write in the text field if you have any additional feedback you'd like to submit, click Next to continue (comments are optional, you do not need to include on to continue)
5. Review your feedback, click Submit
6. Congrats! You did the thing! Click the button and you can do it again!


## Built With

HTML, CSS, Javascript, Express, React, Redux, Postgres, VS Code


## Acknowledgement
Thanks to my pod group (Kevin and Woody) for helping look over my code and identifying errors in my process. Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [trohde@rocketmail.com]