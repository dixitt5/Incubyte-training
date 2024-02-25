FactoryBot.define do
  factory :comment do
    commenter { Faker::Name.name }
    body { Faker::Lorem.paragraph }
    association :post # this will create a post and associate it with the comment. every time a comment is created, a post will be created
  end
end
