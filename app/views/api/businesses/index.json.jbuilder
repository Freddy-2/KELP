@businesses.each do |business|
  json.set! business.id do
    json.partial! 'business', business: business;
    json.photoUrls business.photos.map { |file| url_for(file) }
  end
end


