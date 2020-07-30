json.extract! survey, :id, :token, :body, :created_at, :updated_at
json.url survey_url(survey, format: :json)
