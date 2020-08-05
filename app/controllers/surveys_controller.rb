class SurveysController < ApplicationController

  def show
    @survey = Survey.find(params[:id])
    # {
    #   work: {
    #     outside: true/false,
    #     mask: true/false,
    #     comments: ''
    #   },
    #   shop: {
    #     outside: true/false,
    #     mask: true/false,
    #     comments: ''
    #   },
    #   eat: {
    #     outside: true/false,
    #     mask: true/false,
    #     comments: ''
    #   },
    #   housemates: [
    #     work: {
    #       outside: true/false,
    #       mask: true/false
    #     },
    #     shop_eat: {
    #       outside: true/false,
    #       mask: true/false
    #     },
    #     comments: ''
    #   ],
    #   household_comments: ''
    # }
  end

  # GET /surveys/new
  def new
    @survey = Survey.new
  end

  # POST /surveys
  # POST /surveys.json
  def create
    @survey = Survey.new(response: params[:survey][:response])

    respond_to do |format|
      if @survey.save
        format.html { redirect_to @survey, notice: 'Survey was successfully created.' }
        format.json { render :show, status: :created, location: @survey }
      else
        format.html { render :new }
        format.json { render json: @survey.errors, status: :unprocessable_entity }
      end
    end
  end
end
