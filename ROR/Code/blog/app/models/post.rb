class Post < ApplicationRecord
  has_many :comments

  validates :title, presence: true # custom validation -> validate 'method_name'
  validates :description, presence: true, length: { minimum: 10 }

  def title_plus_description_length
    title_length(true) + description_length(true)
  end

  def title_length(some_arg = false)
    if (some_arg == true)
      return 1
    else
      return title.length
    end
  end

  def description_length(some_arg = false)
    if (some_arg == true)
      return 1
    else
      return description.length
    end
  end

  def dummy_length

  end

end
