# Django Channels Example [![Build Status](https://travis-ci.org/jacobian/channels-example.svg?branch=master)](https://travis-ci.org/jacobian/channels-example)

This is an example app demonstrating how to use (and deploy) [Django Channels](http://channels.readthedocs.org/en/latest/). It's a simple real-time chat app — like a very, very light-weight Slack. There are a bunch of rooms, and everyone in the same room can chat, in real-time, with each other (using WebSockets).

For a walkthrough of what's going on here, see [my article over on the Heroku blog](https://blog.heroku.com/archives/2016/3/17/in_deep_with_django_channels_the_future_of_real_time_apps_in_django?).

You can visit [my deployment of the example online](https://django-channels-example.herokuapp.com/), or deploy your own copy to Heroku with this button (which requires a free Heroku account):

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/jacobian/channels-example)

# Moving the fish technique example can be found on: http://mobilexweb.com/samples/ball.html

## Running locally

To run this app locally, you'll need Python, Postgres, and Redis. (On my Mac, I installed [Postgres.app](http://postgresapp.com/documentation/) and Redis from Homebrew (`brew install redis`).)

Then, to run:

- Install requirements: `pip install -r requirements.txt` (you almost certainly want to do this in a virtualenv).
- Migrate: `DATABASE_URL=postgres:///... python manage.py migrate`
- If you use [heroku local](https://devcenter.heroku.com/articles/heroku-local), or [foreman](https://github.com/ddollar/foreman)/[forego](https://github.com/ddollar/forego), edit `.env` to add `DATABASE_URL` and `REDIS_URL`, then start `heroku local`/`foreman`/`forego`.
- Or, to run locally with `runserver`, set `DATABASE_URL` and `REDIS_URL` in your environ, then run `python manage.py runserver`.
- Or, to run locally with multiple proceses by setting the environ, then running the two commands (`daphne` and `runworker`) as shown in the `Procfile`.

## Using gulp for the frontend

- Make sure you have installed Node.js on your computer
- $npm install
    This should install:
        "gulp-notify": "^2.2.0",
        "gulp-plumber": "^1.1.0",
        "gulp-sass": "^2.3.2",
        "gulp-cssmin": "^0.1.7",
        "gulp": "^3.9.1",
        "gulp-rename": "^1.2.2",
        "gulp-uglify": "^2.0.0",
        "gulp-util": "^3.0.7"

- Now you can run:
        $npm run gulp
- Feel free to modify the .SCSS files
