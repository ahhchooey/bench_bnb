
@benches.each do |bench|
  json.set! bench.id do
    json.extract! bench, :id, :lng, :lat, :description
  end
end
