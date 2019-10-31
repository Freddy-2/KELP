@users.each do |user|
  json.set! user.id do
    json.partial! 'user', user: user;
    json.reviewIds user.reviews.pluck(:id).count
     if user.prof_pic.attached?
      json.prof_pic url_for(user.prof_pic)
     end
      
  end
end