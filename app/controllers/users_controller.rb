class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    render json: @user, include: :jokes
  end

  def create
    user = User.new(user_params)
    if user.save
      token = create_token(user.id)
      render json: {
        user: user.attributes.except("password_digest"),
        token: token,
        }, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: @user, status: :ok
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
    render json: "DELETED"
  end

  # CUSTOM METHODS
# POST /users/login
  def login
    user = User.find_by(username: user_login_params[:username])

    if user && user.authenticate(user_login_params[:password])
      token = create_token(user.id)
      render json: {
        user: user.attributes.except("password_digest"),
        token: token,
      }, status: :ok
    else
      render json: {error: "unauthorized"}, status: :unauthorized
    end
  end

  # GET /users/verify
  def verify
    render json: @current_user.attributes.except("password_digest"), status: :ok
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def user_login_params
    params.require(:user).permit(:username, :password)
  end

  def create_token(id)
    payload = {id: id, exp: 24.hours.from_now.to_i}
    JWT.encode(payload, SECRET_KEY)
  end

  def get_user
    @user = User.find(params[:id])
  end
end
