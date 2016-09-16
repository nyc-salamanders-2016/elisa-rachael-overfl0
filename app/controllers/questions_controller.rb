class QuestionsController < ApplicationController
  def index
    @questions = Question.all.order("created_at DESC")
  end

  def show
    @question= Question.find(params[:id])
    @user = @question.user
  end

  def new
  end

  def create
    user = User.find(session[:user_id])
    @questions = [user.questions.build(question_params)]
    if @questions[0].save!
      render 'index.json.jbuilder'
    else
      @errors = @questions[0].errors.full_messages
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
