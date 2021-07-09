# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
  summer = Gallery.create(name: 'summer')

Photo.create([
    {date: "2021/05/06", photographer: "gilly", image: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/48457/DIG010147_1._SX360_QL80_TTD_.jpg", gallery: summer},
    {date: "2021/05/06", photographer: "gilly", image: "https://cdn.searchenginejournal.com/wp-content/uploads/2019/01/shutterstock_237680047-1520x800.png", gallery: summer},
    {date: "2021/05/06", photographer: "gilly", image: "https://media.wired.com/photos/5b899992404e112d2df1e94e/master/pass/trash2-01.jpg", gallery: summer}
    ])



