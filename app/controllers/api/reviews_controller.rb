class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)

    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages
    end
  end

  def index
    @reviews = Review.all
    render :index
  end

  private
  def review_params
    params.require(:review).permit(:title, :body, :rating)
  end
end
