class QuestionsController < ApplicationController
  def index
    @questions = Question.all.to_json
  end

  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
