class Bench < ApplicationRecord
  validates :lng, :occupancy, :lat, :description, null: false

  def self.in_bounds(bounds)
    benches = Bench.where("benches.lat BETWEEN #{bounds["bot"].to_f} AND #{bounds["top"].to_f}")
      .where("benches.lng BETWEEN #{bounds["left"].to_f} AND #{bounds["right"].to_f}")
    return benches
  end
end
