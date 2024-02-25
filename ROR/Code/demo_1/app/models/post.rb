class Post < ApplicationRecord
  has_many :comments
  has_many :likes, as: :likable

  scope :secondPost, -> { where(title: "second post") }
  scope :todayPost, -> { where(created_at: Date.new(2024, 2, 20).beginning_of_day..Date.new(2024, 2, 20).end_of_day) }

  validates :title, presence: true
end
