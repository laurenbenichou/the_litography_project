json.stories @stories do |story|
  json.title story.title
  json.text story.text
  json.related_author story.related_author
  json.litographer story.litographer
  json.headline story.headline
  json.audio story.audio
  json.published story.published
  json.published_at story.published_at
  json.id story.id
  json.book_cover story.book_cover.url
  json.feature_image story.feature_image.url
  json.square_feature_image story.feature_image.url(:thumb)
  json.sound story.sound
  json.writing story.writing
  json.multimedia story.multimedia
  json.visual story.visual
  json.book_report story.book_report


json.images story.images do |image|
  json.title image.title
  json.caption image.caption
  json.attribution image.attribution
  json.file image.file.url
end


json.locations story.maps do |map|
    json.input map.location.address
    json.latitude map.location.latitude
    json.longitude map.location.longitude
  end


end

