class JokesController < ApplicationController
    before_action :get_joke, only: [:show, :update, :destroy]
    # :add_flavor_to_food
    # before_action :authorize_request, only: [:create, :update, :destroy]
  
    def index
      jokes = Joke.all
      render json: jokes
    end
  
    def show
      render json: @Joke
    #   , include: 
    #   :comments
    end
  
    def create
      joke = Joke.new(joke_params)
      if joke.save
        render json: joke, status: :created
      else
        render json: joke.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @joke.update(joke_params)
        render json: @joke, status: :ok
      else
        render json: joke.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @joke.destroy
      render json: "DELETED"
    end
  
    # # CUSTOM METHOD
    # def add_comment_to_joke
    #   comment = Comment.find_by(name: comment_params[:name])
    #   if !@joke.comments.include? comment
    #     @joke.comments.push(comment)
    #     render json: @joke, include: :comments
    #   else
    #     render json: @joke, include: :comments
    #   end
    # end
  
    private
  
    def joke_params
      params.require(:joke).permit(:title, :content, :user_id)
    end
  
    def comment_params
      params.require(:comment).permit(:joke_id, :user_id, :content)
    end
  
    def get_joke
      @joke = Joke.find(params[:id])
    end
end
