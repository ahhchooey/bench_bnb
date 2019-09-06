class CreateBenches < ActiveRecord::Migration[5.2]
  def change
    create_table :benches do |t|
      t.string :description, null: false
      t.float :lng, null: false
      t.float :lat, null: false
      t.integer :occupancy, null: false
      t.timestamps
    end

    add_index :benches, :lng
    add_index :benches, :lat
  end
end
