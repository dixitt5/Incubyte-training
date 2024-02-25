FactoryBot.define do
  factory :post do
    title { Faker::Name.name } # unique should be used carefully if number of values are restricted
    description { Faker::Lorem.paragraph }

    # association :user, factory: :user
    # will create a user and associate it with the post. this means that the user will be created before the post is created
    # FactoryBot.create(:post) will create a user and a post
    # FactoryBot.create(:post, user: user) will create a post and associate it with the specified user instead of creating a new user
  end
end
