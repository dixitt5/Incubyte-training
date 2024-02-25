# extension

- .rb

# irb

- repl

# no declaration of types

# no semicolons

# no unnecessary parentheses

# no unnecessary curly braces

# line breaks for indentation and statements

    ## no use of indentation

# if end

# if else end

# if elsif else end

# comments -> "#"

# iteration - array:

```
arr.each do |a|
    puts a
end
```

# iteration - hash:

```
hash.each do |key, value|
    puts "#{key}: #{value}"
end
```

OR

```
hash.each_pair do |k, v|
    puts "#{k}: #{v}"
end
```

# concatenation

- '+' only works with strings
- it is calling a method on key object
  - does not work on symbols
- symbol to string -> .to_s

  - or String(1) -> everything is object so try to use it method instead of calling other class and pass value to it

- hash concat

```
hash.each_pair do |k, v|
    puts key.to_s + ": " + value
end
```

# method

```
def method_name
    return false if c > 3
    # only for one line
    # clean code
    # can also separate the lines to methods
end

```

# functions are mapped to Main class

- without using self, every function is a instance method of Main class
- everything is inherited from Main class

```
def sum(a, b)
    a + b
end

class Dummy
    # has access to sum method
end
```

# classes

- car_config.rb
- class CarConfig
- method overloading is not allowed, overriding is allowed

- instance variables
  - @speed
  - @mass
  - can be made outside for constructor as well
- local variables
  - speed
  - mass
- class variables
  - @@speed
  - @@mass

```
class CarConfig
    def initialize # constructor
        @speed = 0
        @mass = 0
    end

    def initialize(speed, mass)
        @speed = speed
        @mass = mass
    end

    def momentum()
        @speed * @mass
        # return not required
        # last line of method is return value
        # return only used for early exit
        # default return - nil or return
        # if we assign variable in last line, it will return that variable with the assigned value
    end
end

car1 = CarConfig.new # object
car2 = CarConfig.new(40)
car3 = CarConfig.new({:color => "red", :model => "sedan"})

car1.momentum
```

```
end
```

# ||=

- if set, do not set again
- if not set, set

```
@ normal_speed ||= 10
```

# by default, variables are private

- to make them public, we make getter

```
def speed
    @speed
end

car.speed
```

- setter

```
def speed = (speed)
    @speed = speed
end

car.speed = 20
```

# default values

```
def initialize(speed = 0)
    @speed = speed
end
```

# name parameters

```
def initialize(speed: 0, mass: 0)
    @speed = speed
    @mass = mass
end

car = CarConfig.new(speed: 40, mass: 100) # can be in any order
```

# attribute reader and writer

```
attr_reader :speed # only getter
```

```
attr_writer :speed # only setter
```

```
attr_accessor :speed # both
```

# push item into array

```
arr << 1
```

# pop

```
arr.pop
```

# interpreted

# everything is an object

- a.class -> prints class name
- Integer
- Array

# multiple types of elements in array

# hash

- key: value pairs
- like js object
- a [:name] -> access symbol key
- key can be string or symbol
- usually use symbols

# symbols

- immutable

# gets.chomp

# inheritance

- class Car < Vehicle
- supports single inheritance

# for multiple inheritance, use modules

- include module_name
- kind of like copying the methods of module into class
- becomes instance methods of class

```
module ModuleName
    def method_name
        puts "method"
    end
end

class Car
    include ModuleName
end
```

# make static method

- self.method_name
- in module, using extend keyword

```
module ModuleName
    def method_name
        puts "method"
    end
end

class Car
    extend ModuleName
end
```

# exception handling

```
begin
    puts "hello"
rescue => e
    puts e.message
    raise e # stops the execution and raises the exception and next method is not called
end

```

# make private

- write private once and all methods after that will be private till it finds another identifier

# db -> migrate

# app -> controllers

# app -> models

# rails generate model ModelName

# scaffolding

rails generate scaffold ModelName field1:type field2:type
rails d scaffold ModelName

# gems

- jar files (plugins)

# testing

- rspec
- rails g rspec:install
- rspec folder is generated to run tests

# faker

- testing does not guarantee bug free code
- it just gives confidence that code is working as expected for given cases
  - edge cases may still be missed
- faker gem -> generate random data for testing

# factory bot

- set default attribute of object

# faker + factory

- create new obj with content for the object everytime

# ruby converts the ruby data type to sql data type (orm)

# rake db:migrate

# rake db:rollback (step = 2)

# schema.rb (latest schema) (view only)

# rails routes

- resources included in routes.rb

# partials

- called inside normal template
- not connected to some action
- \_filename

# strong params

# rails console

- rails c
  - eg: Post.all

# rails web app

- if we create a web app and want to add react, we can import it inside html file
- usually dont do like above
- if we want react, then we create frontend in react and use rails as backend as api
- controller then only returns json data instead of html as well

# rails s

- starts the server

# offers meta programming

- can call any method from any where

# < Application Controller

- all controllers inherit from this
- can add methods here and they will be available to all controllers
- dont need to write require for this

# not specify column while creating model with scaffolding

- it will create a migration with only timestamps columns

# rails g migration AddColumnToModel column_name:data_type

# final state is always available in the schema.rb

# migrations

- stored in schema_migrations table
- after execution, schema.rb is updated
- if we rollback, schema.rb is also updated
- migration checks what all migrations havent been run, and runs only them
- if we write rails syntax then we dont need to specify up and down methods. it automatically knows the inverse of the operation
- but if we write sql, then we need to specify up and down methods
- timestamp are just for distinguishing the migrations, not for chronological order
- migrate or rollback to certain steps or certain migration -> step = 2 or migration tiemstamp

# controller

- only checks for ActionForm.post_params and sanitizes the data
- if we pass some hash object through console or normal passing hash in the code, entry will be allowed as it is not going through strong params
- when we run the app, a object of controller is created and it is accessible to the view as well (if it is instance variable)

# resources

- can use exclude, only to filter the routes

# create and create!

- create! will raise exception if not saved (hard)
- create will not raise exception (soft)
  - creates with id = nil
  - returns false if not saved

# method!

- take caution while executing
- save! -> exception if not saved
- gsub! -> changes the original string

# render vs redirect

- render -> does not change the url. only changes the view
- redirect -> changes the url. goes to the method in controller and recalculates the Post and current object is lost

# validation

- validates :column_name, presence: true
- adds to posts.errors
- can create custom validation

# helper

- link_to
- APIdock

# postgres

- uses sequences for auto increment
- posts_id_seq.nextVal()
- if we drop table, drop the sequence as well (rails does automatically)
- with uuid, we dont need sequence

# uuid

- less predictable
- more length

# to deal with slowness of db

- use composite index for where clause

#

- post.send
- post.public_send
- post.method

# rake

- make tasks
- lib/tasks -> .rake file
- rake task_name
- task can be one time or scheduled (cron jobs)
- environment, namespace
- dont make one task dependent on another

# seeds.rb

- to populate the db with some data
- rake db:seed

# commands

- Post.first
- post.attributes
- comment = \_
- get output of previous command in commend

# relationships

- posts -> has_many :comments
- comments -> belongs_to :post

- post.comments.create
- comment.post -> return post related to comment

# polymorphic relationship table

- one table is related to multiple tables
- eg: comments can be related to posts, profiles, images etc
- using object_id and object_type

- rails generate model Like kind:string likable:references{polymorphic}
- posts: has_many :likes, as: :likable
- likes: belongs_to :likable, polymorphic: true

# just find the sql to be executed

Post.where(title: "hello").to_sql

# can even use raw sql inside where

- Post.where("title = ?", "hello")
- not recommended as now you depend on the db

# write the entire sql query

- Post.find_by_sql("SELECT \* FROM posts WHERE title = 'hello'")

# static method

- self.method_name
- mutiple:

```
class << self
    def method_name
    end
end
```

# constant

- starts with capital letter
- usually in all caps
- Access: ClassName::CONSTANT_NAME

- class is inside a module: ModuleName::ClassName

- classes are also constants, but still open

# enum

- also provides methods for each value

# throw error

- raise Class.new("message")

# model

```
# before_validation

# validation
- numericality

# before_save, after_save, around_save

# scope
- class method
- can be used in controller etc for better readability
- scope :published, -> { where(published: true) }
- can chain mutiple scopes (using AND)

# return unless isPresent?

# errors.add(:column_name, "message")
```

# Gemfile

- package.json
- gem 'gem_name', 'version'
- version should specify relative version, not exact version
- version is important because all gems work together and if one gem is updated, it may break the other gems
- gem 'gem_name', '~> 1.1.8'
  - can be 1.1.8, 1.1.9, 1.2.0
  - but not 1.2.1
- rubygems.org

  - npm

- gem 'gem_name', git: github_url

- bundle update gem_name

  - update the gem to latest version in range of version specified in Gemfile
  - update the Gemfile.lock

- ruby version

  - .ruby-version

- rvm

  - detects .ruby-version and automatically switches to that version
  - else you need to manually switch using: rvm use 'version'

- require false
  - require the gem only when required
  - require 'gem_name' in the file where it is required

# tags in github

- cannot be modified
- used to manage versions
- git tag -a v1.0.0 -m "message"

# add tests

- rspec

```
gem 'rspec-rails', '~> 6.1.0'
gem 'faker'
gem 'factory_bot_rails', '~> 6.2'
gem 'rubocop'
gem 'brakeman'
```

- rails generate rspec:install

- always require rails_helper in spec files
- rails_helper is the main file for rspec. it has all the configurations for rspec
- rails_helper requires spec_helper
- your custom code can be kept in separate file and require in the rails_helper

# rails_helper

- require 'spec_helper'
- require 'rspec/rails'
- maintain_test_schema
  - maintain the test db schema
- PendingMigrationError
  - if some migration is pending to run

rails generate rspec:model Post

# tests

- dont test behavior that is already tested in rails
- eg: hasMany, belongsTo
- post_spec.rb
- run test case: bundle exec rspec spec/models/post_spec.rb

# factory

- create factory for each model
- FactoryBot.build(:post) (new)
- FactoryBot.create(:post) (new and save)

- override default values
  FactoryBot.build(:post, title: "hello")

# environment

- default: development
- set environment: RAILS_ENV=test

# reload!

- reload the console with the latest code

# docs

- https://github.com/rspec/rspec-rails
- https://github.com/faker-ruby/faker
- https://github.com/thoughtbot/factory_bot_rails

# expect vs allow
# and call original method
# and_return
# with
# times
# exactly
# at_least

# path vs url
- path -> relative (eg: /posts/1)
- url -> absolute (eg: http://localhost:3000/posts/1)

# creating multiple objects
```
2.times do
  FactoryBot.create(:post)
end
```
