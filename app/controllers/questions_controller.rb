class QuestionsController < ApplicationController
  def index
    @questions = Question.all.order("created_at DESC").to_json
  end

  def show
  end

  def new
  end

  def create
    user = User.find(session[:user_id])
    question = user.questions.build(question_params)
    if question.save
      render json: question.to_json
    else
      @errors = question.errors.full_messages
      render 'new'
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def question_params
    params.require(:question).permit(:title, :body)
  end

end
