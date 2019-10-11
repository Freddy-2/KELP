@users.each do |user|
  json.set! user.id do
    json.partial! 'user', user: user;
    json.prof_pic url_for(user.prof_pic)
  end
end