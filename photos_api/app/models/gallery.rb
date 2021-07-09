class Gallery < ApplicationRecord
    validates_uniqueness_of :name
    has_many :photos
end
