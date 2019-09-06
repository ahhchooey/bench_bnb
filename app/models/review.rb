class Review < ApplicationRecord
  validates :title, :bench_id, :body, presence: true
  validates_inclusion_of :rating, :in => 1..5
end
