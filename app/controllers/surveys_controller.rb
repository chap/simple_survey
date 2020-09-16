class SurveysController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    @survey = Survey.find_by!(token: params[:id])
  end

  # GET /surveys/new
  def new
    @survey = Survey.new
  end

  def create
    # puts "request.raw_post=#{request.raw_post}"
    
    # ensure there's a an empty array for housemates 
    if params[:survey][:response][:housemates].nil?
      params[:survey][:response][:housemates] = [] 
    else
      # convert housemates hash to array
      # {'1' => {values1}, '2' => {values2}} >>>> [{values1}, {values2}]
      params[:survey][:response][:housemates] = params[:survey][:response][:housemates].values
    end

    @survey = Survey.new(response: params[:survey][:response])

    respond_to do |format|
      if @survey.save
        format.html { redirect_to short_survey_url(@survey.token), notice: "Response saved. Share the URL of this page: #{short_survey_url(@survey)}" }
        format.json { render :show, status: :created, location: @survey }
      else
        format.html { render :new }
        format.json { render json: @survey.errors, status: :unprocessable_entity }
      end
    end
  end
end
