# ABOUT

A deployed version of this application can be found at:
https://dry-ocean-85067.herokuapp.com/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This app uses PostgreSQL, Express, React.js, Redux, Socket.io, and a full list of included dependencies can be found in the package.json

## To run this application locally:

## Download and install Postico
https://eggerapps.at/postico/

Open Postico 
Click 'New Favorite'

Set Host to: localhost
Set port to: 5432
Set User to: your preferred username

Clicking 'Connect' should redirect to a screen saying "localhost" "connected" 

Click the '+ Database' button on the bottom left of this screen and set the new db name to 'SocketIOCalc'

If you want to name this new database something else you will have to match line 26 in server/modules/pool.js to your preferred db name.  

Double click on the 'SocketIOCalc' database to open it.  Once openend, double click on 'SQL Query', and paste in the the following SQL command:

CREATE TABLE "calculations" (
    "id" SERIAL PRIMARY KEY,
    "fullEquation" VARCHAR (1000)
);

Click 'Execute Selection', and then refresh the page either by clicking the refresh button or pressing 'command + r'

You should now have a newly created table with the name 'calculations' in the left side menu


## Starting up the client and server
Open this repo in the IDE of your choice, then in the project directory run these commands in the following order:

npm install (wait for installation to complete)

npm run server

npm run client


# Operation
Open two different web brosers (chrome, safari) and navigate to http://localhost:3000/ in both

Clicking 'x+y=' on one client dispatches an unsolved equation to be calculated on the server and stored in the postico db through redux, while also emitting a socket.io message 'add_equation'

The server listens for all 'add_equation' messages, and emits a new message named 'socketEquation' to all connected clients 

All connected clients then dispatch a get request to the postico db to for a live view of incoming equations

Click 'Party Mode' to spice up your experience and celebrate your succesful calculations! (caution, party music is loud!)