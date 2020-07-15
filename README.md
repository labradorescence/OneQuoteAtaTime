## One Quote At A Time  ✌ 💬  ✌

One Quote At A Time is a full-stack, vanilla JS frontend and Rails backend, web application where you can view quotes to help you go through hard time, to get stuff done, to study, to focus and to get inspired by. 

Live demo: https://labradorescence.github.io/OneQuoteAtaTime-front/

![One Quote At A Time screen shot](https://user-images.githubusercontent.com/52639837/87259873-4e7c9e00-c47c-11ea-820c-9e7244064272.png)


## Getting Started
* (Backend: https://github.com/labradorescence/OneQuoteAtaTime-back)
    1. Clone this frontend repository onto your local machine.
    2. Clone backend, Ruby on Rails API link above onto your local machine. 
    3. Run `bundle install` to download all the necessary gems.
    4. Once you've installed everything smoothly, run `rails s` in the backend. 
    5. Run `open index.html` to start the app!


## Features

### Asynchronous CRUD FETCH
* CREATE (POST) new quote to the Rails backend API 
* READ (GET) quote data from the backend and display on the front-end browser
* UPDATE (PATCH) likes from unliked(empty heart) to liked(red heart) on the front and backend
* DELETE  current quote on the front and back end

### ActiveRecord Associations
* 1 model 
* Uses ActiveModelSerializers, which turns model attributes into JSON object keys

### Other Features
* custom modern minimalism design CSS
* hidden create a new quote form when user is only viewing quotes

![One Quote At A Time-add new quote form screenshot](https://user-images.githubusercontent.com/52639837/87260002-348f8b00-c47d-11ea-9369-369270c38f93.png)


## Tech Stack

* Vanilla JavaScript (Frontend)
* Ruby on Rails API (Backend: https://github.com/labradorescence/OneQuoteAtaTime-back)
* PostgreSQL
* HTML/CSS
* Active Record

## Tools

* [Rack CORS](https://github.com/cyu/rack-cors)
* [ActiveModel::Serializer](https://github.com/rails-api/active_model_serializers)
