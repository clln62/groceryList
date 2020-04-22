# Building Your Grocery List

This app was built to give you the opportunity to fork and clone your own version for the practice of passing data through the full stack, building your own RESTFUL APIs and displaying the data on the DOM. 

## What's Inside?
### Front End
- A basic HTML structure has been set up for you, you should not have to make any changes to this folder for the requirements of this project.
- CSS has been set up with basic styling. You can edit the contents to build your Grocery List how you like, or you can utilize the given code.
- A shell for all of your components has been built for you and changes will be required in all of the jsx files. render.js has been given to you to display on the DOM, no changes should be required in this folder.

### Back End
- A basic server has been set up for you in index.js under the server folder. This is where you will be building you requests that come from the client.
- Inside the database folder, you have three files. schema.sql contains the queries that will build your MySQL database. config.js establishes the information needed to connect to your database, and some changes may need to be made to match your settings. database.js is where all of your queries will be created.

### What else is included?
- Webpack has been set up for you to bundle your code with the proper routes and file paths. You should not need to make any changes.
- Your package.json file contains everything for the minimums of this project, but you are free to add what you see fit. There are scripts to bundle your app and run your server included.

## How your app MAY look when complete: 

<img src="./images/IH1.png" height="45%" width="45%"></img>
<img src="./images/IH2.png" height="45%" width="45%"></img><br/>
<img src="./images/IH3.png" height="45%" width="45%"></img>
<img src="./images/IH4.png" height="45%" width="45%"></img><br/>


## How to start?
##### You will need at least 3 terminal tabs/windows ready for this.
- When in the correct directory in the terminal, run **npm install**.
- Use **npm run start** to run your server. Make sure that you are connected and no errors have popped up. Keep your server running.
- In another terminal window, use **npm run react-dev** to bundle your app. Leave this terminal running.
- At this point, you should be able to go to **localhost:3000** in the browser and see **Hello World** appear.
- Last step for set-up? In a third terminal tab/window, run the schema.sql file through MySQL to set up your database with some already added items. This will require you to get into a different directory, or write out the path to the schema.sql file. If your directory is on the database file, you can run this command in the terminal -> **mysql -u root -p <schema.sql**.
- You are all set up and ready to go. Your objective is to follow the user stories below to not only gain information from the database to display on the page, but also update and remove items. Remember that the components on the client side are shells, and can be build to display how you prefer, as long as the information appears.

## User Stories

- As a user, I want to see all of my grocery items.
- As a user, I want to be able to add an item to my list.
- As a user, I want to be able to remove an item from my list.




## Stack

| Front End     | Back End      | Deployment    |  API          |
| ------------- | ------------- | ------------- | ------------- |
| <img src="https://cdn.worldvectorlogo.com/logos/react.svg" height="125px" width="125px"></img>  | <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png" height="85px" width="125px"></img>  | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" height="125px" width="125px"></img>  | <img src="https://spoonacular.com/images/spoonacular-logo-b.svg" height="125px" width="125px"></img>  |
| <img src="https://cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/007/263/original/Axios_logo_-_RGB_-_clear_space.png?1580309119" height="125px" width="125px"></img>  | <img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" height="85px" width="125px"></img>  | <img src="https://www.nginx.com/wp-content/uploads/2018/08/NGINX-logo-rgb-large.png" height="95px" width="125px"></img>  |
| <img src="https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png" height="85px" width="125px"></img> |  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png" height="125px" width="125px"></img>  |
| <img src="https://pngimg.com/uploads/photoshop/photoshop_PNG12.png" height="125px" width="125px"></img> |


