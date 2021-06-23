class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.string :date
      t.string :photographer
      t.string :img_url
      t.integer :gallery_id

      t.timestamps
    end
  end
end
