class Survey < ApplicationRecord
  before_create :generate_token

  def self.version
    "v1"
  end

  protected

  def generate_token
    self.token = SecureRandom.urlsafe_base64(6)
    generate_token if Survey.exists?(token: self.token)
  end


end
