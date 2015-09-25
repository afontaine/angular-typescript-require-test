# Angular, TypeScript, Requirejs Test

This is a small test app to show an example code layout.

## Running the App

1. Get node/io
2. Get gulp, tsd, tsc, bower

  ```
  $ npm install -g gulp tsd tsc bower
  ```

3. Install ALL THE DEPENDENCIES (make a hot beverage while you wait)

  ```
  $ npm install
  $ bower install
  $ tsd install
  ```

4. Compile and serve

  ```
  $ gulp
  ```

## Code Layout

All the scripts go in scripts, all the styles go in styles, all the views go in
views.

Top level scripts directory would contain main app code, much like a standard
rails app. Within that, you'd have a controllers directory and a services
directory. This would also be a place where you would put more directories for
more angular modules.

I'd namespace the views folder in a similar way. Top-level app templates in the
top, with directories for modules within. Ideally, we would pull the modules out
completely and add them in another way.

## Things to work on
- [ ] Getting TypeScript internal modules and Requirejs external modules
  cooperating. I want to put a Angular module's code under its own TypeScript
  module, and split that across various files. (App, App.Controller,
  App.Service, etc.)
- [ ] Tests, karmajs, phantomjs, jasmine, jasmine-given
