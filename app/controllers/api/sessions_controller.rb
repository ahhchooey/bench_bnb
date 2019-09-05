class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render :show
    else
      render json: { errors: 'invalid credentials' } 
    end
  end

  def destroy
    logout
    render json: {}
  end

end
