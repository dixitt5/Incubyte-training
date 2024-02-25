require 'rails_helper'

RSpec.describe Post, type: :model do
  let(:post) { FactoryBot.build(:post, title: title, description: description) }
  let(:description) { "Description" }
  let(:title) { "Title" }

  # --------------------------------------------
  describe "#save!" do
    # . -> class method, # -> instance method (convention)
    context "when title is blank" do
      let(:title) { nil }
      # if you use let!, then it will create the object before the test runs
      # if you use let, then it will create the object when it is called in the test

      it "raises error" do
        expect { post.save! }.to raise_error(ActiveRecord::RecordInvalid, "Validation failed: Title can't be blank") # whenever you expect an error to be raised. second parameter is optional
      end
    end

    context "when title is not blank" do
      let(:title) { "Title" }

      it "does not raise error" do
        expect { post.save! }.not_to raise_error
      end
    end

    context "when description is blank" do
      let(:description) { nil }

      it "raises error" do
        expect { post.save! }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end

    context "when description is not blank" do
      let(:description) { "Description" }

      it "does not raise error" do
        expect { post.save! }.not_to raise_error
      end
    end

    context "when description less than 10 characters" do
      let (:description) { "123456789" }

      it "raises error" do
        expect { post.save! }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end

    context "when description more than 10 characters" do
      let (:description) { "12345678910" }

      it "does not raise error" do
        expect { post.save! }.not_to raise_error
      end
    end
  end

  # --------------------------------------------
  describe "#comments" do
    context "when post has 3 associated comments" do
      let(:post) { FactoryBot.create(:post) }
      let!(:comment_1) { FactoryBot.create(:comment, post: post) }
      let!(:comment_2) { FactoryBot.create(:comment, post: post) }
      let!(:comment_3) { FactoryBot.create(:comment, post: post) }

      it "gives count of all comments" do
        expect(post.comments.count).to eq(3)
      end
    end

    context "when post has associated comments" do
      let(:post) { FactoryBot.create(:post) }
      let!(:comment_1) { FactoryBot.create(:comment, post: post) }
      let!(:comment_2) { FactoryBot.create(:comment, post: post) }
      let!(:comment_3) { FactoryBot.create(:comment, post: post) }

      it "does not allow deleting post" do
        expect { post.destroy! }.to raise_error(ActiveRecord::InvalidForeignKey)
      end
    end

    context "when post does not have associated comments" do
      let(:post) { FactoryBot.create(:post) }

      it "allows deleting post" do
        expect { post.destroy! }.not_to raise_error
      end
    end
  end

  # --------------------------------------------
  # describe "#title_plus_description_length" do
  #   # let(:post) { FactoryBot.build(:post, title: "Title", description: "Description") } # dont need to pass object with actual values. we have mocked that it will always return 5 and 11
  #   let(:post) { FactoryBot.build(:post) }
  #
  #   it "gives sum of title_length and description_length" do
  #     allow(post).to receive(:title_length).and_return(5) # receive(method_name).and_return(value)
  #     allow(post).to receive(:description_length).and_return(11)
  #
  #     expect(post.title_plus_description_length).to eq(16)
  #   end
  # end

  # --------------------------------------------
  describe "#title_plus_description_length" do
    let(:post) { FactoryBot.build(:post) }

    it "returns sum of title_length and description_length" do
      # expect(post).to receive(:title_length).and_return 0
      # allow(post).to receive(:title_length).and_call_original # doesnt make sense
      expect(post).to receive(:title_length).and_call_original
      # expect(post).to receive(:title_length).with(true).and_return 5

      expect(post).to receive(:description_length).and_call_original
      # expect(post).to receive(:description_length).with(true).and_return 5

      # expect(post).to receive(:dummy_length).and_call_original # dummy_length is not defined in post.rb. so it will throw an error
      allow(post).to receive(:dummy_length)

      expect(post.title_plus_description_length).to eq 2
      # expect(post.title_plus_description_length).to eq 10
    end
  end

  # --------------------------------------------
  # describe ".count" do
  #   context "when there are 3 posts" do
  #     let!(:post_1) { FactoryBot.create(:post) }
  #     let!(:post_2) { FactoryBot.create(:post) }
  #     let(:post_3) { FactoryBot.create(:post) }
  #
  #     it "gives count of all tests" do
  #       puts post_3.title
  #       expect(Post.count).to eq(3) # 3 because post_3 is used anywhere in the test
  #     end
  #
  #     it "gives count of all tests" do
  #       expect(Post.count).to eq(2) # 2 because post_3 is not used anywhere in the test. it is independent of other tests (it)
  #     end
  #   end
  # end

  # --------------------------------------------
  # it "validates presence of title" do
  #   # post = Post.new(title: nil, description: Faker::Name.name )
  #   # post = FactoryBot.build(:post, title: nil) # can directly write build(). will directly take FactoryBot
  #
  #   # post.save! # throws an error
  #   expect(post.save).to eq(false)
  #   expect { post.save! }.to raise_error(ActiveRecord::RecordInvalid, "Validation failed: Title can't be blank") # whenever you expect an error to be raised. second parameter is optional
  # end
end