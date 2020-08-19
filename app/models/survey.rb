class Survey < ApplicationRecord
  before_create :generate_token

  def self.version
    "v1"
  end

  def housemates_nothing?
    work_school = response['housemates'].collect(&:values)
    shop_eat = response['housemates'].collect(&:values)
    (work_school + shop_eat).flatten.select {|i| i != '' && i != '0' }.empty?
  end

  protected

  def generate_token
    self.token = SecureRandom.urlsafe_base64(6)
    generate_token if Survey.exists?(token: self.token)
  end


end
