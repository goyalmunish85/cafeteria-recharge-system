var Items = require('../models/items');

var mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/cafeteria-recharge';
const connect = mongoose.connect(url);

var items = [
  new Items({
    name: 'Amritsari Kulcha',
    image: 'images/an.jpg',
    category: 'Veg',
    price: 60,
    itemtype: 'breakfast'
  }),
new Items({
    name: 'Chole Bhture',
    image: 'images/cb.jpg',
    category: 'Veg',
    price: 50,
    itemtype: 'breakfast'
  }),
  new Items({
    name: 'Chole Bhture',
    image: 'images/cb.jpg',
    category: 'Veg',
    price: 50,
    itemtype: 'lunch'
  }),
  new Items({
    name: 'Masala Dosa',
    image: 'images/md.jpg',
    category: 'Veg',
    price: 40,
    itemtype: 'breakfast'
  }),
  
  new Items({
    name: 'Masala Dosa',
    image: 'images/md.jpg',
    category: 'Veg',
    price: 40,
    itemtype: 'lunch'
  }),
  
  new Items({
    name: 'Masala Dosa',
    image: 'images/md.jpg',
    category: 'Veg',
    price: 40,
    itemtype: 'dinner'
  }),
  new Items({
    name: 'Samosa',
    image: 'images/samosa.jpg',
    category: 'Veg',
    price: 10,
    itemtype: 'breakfast'
  }),
  new Items({
    name: 'Veg Mayo Sandwich',
    image: 'images/vs.jpg',
    category: 'Veg',
    price: 15,
    itemtype: 'breakfast'
  }),
  new Items({
    name: 'Paneer Lababdar',
    image: 'images/pl.jpg',
    category: 'Veg',
    price: 50,
    itemtype: 'lunch'
  }),
    new Items({
    name: 'Paneer Lababdar',
    image: 'images/pl.jpg',
    category: 'Veg',
    price: 50,
    itemtype: 'dinner'
  }),
  new Items({
    name: 'Bread Omelete',
    image: 'images/bo.jpg',
    category: 'Non-Veg',
    price: 20,
    itemtype: 'breakfast'
  }),
  new Items({
    name: 'Coke',
    image: 'images/coke.jpg',
    category: '',
    price: 35,
    itemtype: 'beverages'
  }),
  new Items({
    name: 'Lassi',
    image: 'images/lassi.jpg',
    category: '',
    price: 25,
    itemtype: 'beverages'
  }),
  new Items({
    name: 'Fruit Beer',
    image: 'images/fb.jpg',
    category: '',
    price: 25,
    itemtype: 'beverages'
  }),
  new Items({
    name: 'Tea',
    image: 'images/tea.jpg',
    category: '',
    price: 10,
    itemtype: 'beverages'
  }),
  new Items({
    name: 'Coffee',
    image: 'images/coffee.jpg',
    category: '',
    price: 10,
    itemtype: 'beverages'
  }),
  new Items({
    name: 'Ice Tea',
    image: 'images/it.jpg',
    category: '',
    price: 40,
    itemtype: 'beverages'
  }),
  new Items({
    name: 'Juice',
    image: 'images/juice.jpg',
    category: '',
    price: 20,
    itemtype: 'beverages'
  }),
  new Items({
    name: 'Fanta',
    image: 'images/fanta.jpg',
    category: '',
    price: 35,
    itemtype: 'beverages'
  }),
  new Items({
    name: 'Red Sauce Pasta',
    image: 'images/rp.jpg',
    category: 'Veg',
    price: 50,
    itemtype: 'snacks'
  }),
  new Items({
    name: 'White Sauce Pasta',
    image: 'images/wp.jpg',
    category: 'Veg',
    price: 50,
    itemtype: 'snacks'
  }),
  new Items({
    name: 'Noodles',
    image: 'images/noodles.jpg',
    category: 'Veg',
    price: 30,
    itemtype: 'snacks'
  }),
  new Items({
    name: 'Aallo Petty',
    image: 'images/ap.jpg',
    category: 'Veg',
    price: 15,
    itemtype: 'snacks'
  }),
  new Items({
    name: 'Tikki',
    image: 'images/tikki.jpg',
    category: 'Veg',
    price: 35,
    itemtype: 'snacks'
  }),

  new Items({
    name: 'Kathi Roll',
    image: 'images/vkr.jpg',
    category: 'Veg',
    price: 30,
    itemtype: 'snacks'
  }),
  
  new Items({
    name: 'Kathi Roll',
    image: 'images/ckr.jpg',
    category: 'Non-Veg',
    price: 30,
    itemtype: 'snacks'
  }),
  
  new Items({
    name: 'Tandoori Roti',
    image: 'images/tr.jpg',
    category: 'Veg',
    price: 10,
    itemtype: 'lunch'
  }),
  
  new Items({
    name: 'Tandoori Roti',
    image: 'images/tr.jpg',
    category: 'Veg',
    price: 10,
    itemtype: 'dinner'
  }),
  
  new Items({
    name: 'Butter Naan',
    image: 'images/bn.jpg',
    category: 'Veg',
    price: 20,
    itemtype: 'lunch'
  }),
  
  new Items({
    name: 'Butter Naan',
    image: 'images/bn.jpg',
    category: 'Veg',
    price: 20,
    itemtype: 'dinner'
  }),
  
  new Items({
    name: 'Mix Veg',
    image: 'images/mv.jpg',
    category: 'Veg',
    price: 40,
    itemtype: 'lunch'
  }),
  
  new Items({
    name: 'Mix Veg',
    image: 'images/mv.jpg',
    category: 'Veg',
    price: 40,
    itemtype: 'dinner'
  }),
  new Items({
    name: 'Daal Makhani',
    image: 'images/dm.jpg',
    category: 'Veg',
    price: 40,
    itemtype: 'dinner'
  }),
  new Items({
    name: 'Daal Makhani',
    image: 'images/dm.jpg',
    category: 'Veg',
    price: 40,
    itemtype: 'lunch'
  }),
  new Items({
    name: 'Butter Chicken',
    image: 'images/bc.jpg',
    category: 'Non-Veg',
    price: 150,
    itemtype: 'dinner'
  }),
  new Items({
    name: 'Butter Chicken',
    image: 'images/bc.jpg',
    category: 'Non-Veg',
    price: 150,
    itemtype: 'lunch'
  }),
    new Items({
    name: 'Rice',
    image: 'images/rc.jpg',
    category: 'Veg',
    price: 40,
    itemtype: 'lunch'
  }),
   new Items({
    name: 'Rice',
    image: 'images/rc.jpg',
    category: 'Veg',
    price: 40,
    itemtype: 'dinner'
  }),
  new Items({
    name: 'Pav Bhaji',
    image: 'images/pb.jpg',
    category: 'Veg',
    price: 30,
    itemtype: 'snacks'
  })
]
 
var done = 0;
for (var i = 0; i < items.length; i++) {
  items[i].save(function(err, result) {
    done++;
    if (done === items.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
