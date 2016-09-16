class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :body, null: false, length: { minimum: 2 }
      t.integer :user_id, null: false
      t.string :commentable_type
      t.integer :commentable_id

      t.timestamps
    end
  end
end
