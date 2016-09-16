class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.text :body, null: false, length: { minimum: 5 }
      t.integer :user_id, null: false
      t.integer :question_id, null: false
      t.boolean :best, default: false

      t.timestamps
    end
  end
end
