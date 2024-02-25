class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
    # The new action instantiates a new post, but does not save it. This post will be used in the view when building the form.
  end

  def create
    @post = Post.new()
    if @post.save
      redirect_to @post
    else
      render :new, status: :unprocessable_entity
      # just render the new template again, but with a 422 status code.
      # has the @post object, so the form will be filled with the data.
    end
  end
end
