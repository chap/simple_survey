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

  def create
    params[:survey][:response][:housemates] = [] if params[:survey][:response][:housemates].nil?
    @survey = Survey.new(response: params[:survey][:response])

    respond_to do |format|
      if @survey.save
        format.html { redirect_to short_survey_url(@survey), notice: "Response saved. Share the URL of this page: #{short_survey_url(@survey)}" }
        format.json { render :show, status: :created, location: @survey }
      else
        format.html { render :new }
        format.json { render json: @survey.errors, status: :unprocessable_entity }
      end
    end
  end
end
