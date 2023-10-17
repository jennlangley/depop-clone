# Style Swap

[Style Swap](https://style-swap.onrender.com/) is an e-commerce app inspired by Depop. It is a platform for users to sell and buy products to and from other users. Logged in or logged out users can search for items, add items to their cart, and checkout once they sign up or log in. Users can then leave feedback on their order. 

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Showcase](#showcase)
- [Wiki Documents](#wiki-documents)
- [Installation](#installation)
- [Authors](#authors)

## Technologies Used
### Backend
- Python
- Flask
- SQLAlchemy

### Frontend
- JavaScript
- React
- Redux
- HTML / CSS


## Features
- Products
- Reviews
- Cart
- Search
### Future Features
- Saved Products
- Follows
- AWS
- Messaging

## Showcase
<img width="1440" alt="landing" src="https://github.com/jennlangley/style-swap/assets/106412948/30442f62-1394-4ae0-a5c3-ec0ca9412fd8">

![search](https://github.com/jennlangley/style-swap/assets/106412948/a6c9e3c1-4de4-4a96-98d1-12259afb4624)

![cart](https://github.com/jennlangley/style-swap/assets/106412948/4b4816f1-e816-4f3f-94d6-8492c6c94cad)

![review](https://github.com/jennlangley/style-swap/assets/106412948/54e5328e-0376-44f2-8a8c-51269b7bf8ca)



## Wiki Documents
- [Backend Routes](https://github.com/jennlangley/depop-clone/wiki/Backend-Routes)
- [Database Schema](https://github.com/jennlangley/style-swap/wiki/Database-Schema)
- [Feature List](https://github.com/jennlangley/style-swap/wiki/Feature-List)
- [User Stories](https://github.com/jennlangley/style-swap/wiki/User-Stories)

## Installation

1. Clone this repository [(only this branch)](https://github.com/jennlangley/style-swap)
2. Install dependencies
      ```bash
      pipenv install -r requirements.txt
      ```
      
3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```
5. cd inside the `react-app` directory. Run `npm install` to install all your dependencies before starting up the application.
   
7. From the `root directory` run `flask run`.
   
9. From the `react-app` directory run `npm start`.

## Authors
- [Jennifer Langley](https://github.com/jennlangley)

