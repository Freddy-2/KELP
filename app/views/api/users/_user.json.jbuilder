json.extract! user, :id, :email, :first_name, :last_name
json.reviewIds user.reviews.count
     if user.prof_pic.attached?
      json.prof_pic url_for(user.prof_pic)
     else
      json.prof_pic image_url('kelpLogo.png')
end