require 'rails_helper'

RSpec.describe "comments/edit", type: :view do
  let(:comment) {
    Comment.create!(
      title: "MyString",
      description: "MyText",
      post: nil
    )
  }

  before(:each) do
    assign(:comment, comment)
  end

  it "renders the edit comment form" do
    render

    assert_select "form[action=?][method=?]", comment_path(comment), "post" do

      assert_select "input[name=?]", "comment[title]"

      assert_select "textarea[name=?]", "comment[description]"

      assert_select "input[name=?]", "comment[post_id]"
    end
  end
end
