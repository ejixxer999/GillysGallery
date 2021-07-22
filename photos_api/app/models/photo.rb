class Photo < ApplicationRecord
  # has_one_attached :image
    belongs_to :gallery

    def gallery_id= (name)
      gallery = Gallery.find_or_create_by(name: name)
      self.gallery = gallery
    end
end
