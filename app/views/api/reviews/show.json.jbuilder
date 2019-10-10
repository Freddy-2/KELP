json.partial! "api/reviews/review", review: @review

json.user do 
    json.partial! 'api/users/user', user: @review.user
end

# json.business do 
#     json.partial 'api/businesses/business' business: @review.business
# end