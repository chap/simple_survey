class CreateSurveys < ActiveRecord::Migration[6.0]
  def change
    create_table :surveys do |t|
      t.string :token
      t.json :response

      t.timestamps
    end
  end
end
