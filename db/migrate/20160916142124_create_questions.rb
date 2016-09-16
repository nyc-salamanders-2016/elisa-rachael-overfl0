class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string :title, null: false, length: { minimum: 2 }
      t.text :body, null: false, length: { minimum: 5 }
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
