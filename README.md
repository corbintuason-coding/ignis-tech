# FOXGames
FOXGames is a simple web application that was developed by John Corbin Tuason using Angular 10.2.2, Hapi.js 18.1.0 and MongoDB. Please make sure that MongoDB has been installed in your system before attempting to run this web application.


## Setup Instructions

    1. Run Client Side
        1.1 Run `npm install` in the client folder.
        1.2 Run `ng serve` in the client folder. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

    2. Run Server Side
        2.2 Open a new Terminal
        2.1 Run `npm install` in the server folder.
        2.2 Run `npm run start` in the server folder to initialize Hapi.JS with MongoDB
	
	3. Populate
		Please import games.json and carts.json (which can be found in the misc folder) to populate the Games and Carts models respectively
		
	4. Test Cases
		For more information on how to navigate through the web application, please see "Test Cases.pdf" in the misc folder.
    
    5. Visit http://localhost:4200/

## Tasks
Create a SIMPLE WEB APPLICATION with the following constraints and requirements. Checked boxes indicate a fulfilled requirement / finished feature:

    - Tech Stack:
        - Required:
            - [x] Typescript + Angular 2+
            - [x] Hapi.js
        - Optional:
            - [x] MongoDB
    
    - Required:
        - [x] List All Products
        - [x] View Product
    - Optional:
        - [x] Add To Cart
        - [x] Product Search Engine

## Models 
    - Cart Model 
        - game: Accepts an id of a Game

    Endpoints:
        `GET ALL: http://localhost:3000/carts`
        `GET: http://localhost:3000/cart/{id}`
        `POST: http://localhost:3000/cart`

    - Game Model
        - name: Accepts a String,
        - description: Accepts a String,
        - img_url: Accepts a String,
        - price: Accepts a Number
    
    Endpoints:
        `GET ALL (Also enabled parameters for search functionality):  http://localhost:3000/games`
        `GET: http://localhost:3000/game/{id}`
        `POST: http://localhost:3000/game`

## Known Issues
    - Search Functionality sometimes will not run a query. But sometimes after multiple clicks or multiple refreshes, search will begin to work consistently.

## Contact
Contact me at 09289921274 if you have any questions or concerns regarding the Web Application. Thanks!

