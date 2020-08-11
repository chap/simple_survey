class CreateSurveys < ActiveRecord::Migration[6.0]
  def change
    create_table :surveys, id: :uuid do |t|
      t.json :response
      t.string :token

      t.timestamps
    end
  end
end
