class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.integer :rating, default: 3
      t.string :body, null: false
      t.integer :bench_id, null: false
      t.timestamps
    end
  end
end
