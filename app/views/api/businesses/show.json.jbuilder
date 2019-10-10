
# json.partial! "api/businesses/business", business: @business




json.business do
  json.partial! '/api/businesses/business', business: @business
  json.reviewIds @business.reviews.pluck(:id)
  json.photoUrls @business.photos.map { |file| url_for(file) }
end

@business.reviews.includes(:user).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! '/api/reviews/review', review: review
    end
  end

  json.users do
    json.set! review.user.id do
      json.extract! review.user, :id, :email
    end
  end
end
