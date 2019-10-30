@users.each do |user|
  json.set! user.id do
    json.partial! 'user', user: user;
     if user.prof_pic.attached?
      json.prof_pic url_for(user.prof_pic)
     end
      
  end
end