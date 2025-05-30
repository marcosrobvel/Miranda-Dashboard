interface Room {
  id: number;
  photo: string[];
  roomNumber: number;
  roomType: string;
  amenities: string;
  price: number;
  offer_price: number;
  status: "available" | "booked";
}

const rooms: Room[] = [
  {
    id: 1,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 1,
    roomType: "Double Bed",
    amenities: "Pork Casing",
    price: 899338,
    offer_price: 29190,
    status: "booked"
  },
  {
    id: 2,
    photo: [
      "https://st.hzcdn.com/simgs/pictures/bedrooms/cruelty-free-luxury-bedroom-dimare-design-img~7011347f07f3f5aa_9-8849-1-6e7db76.jpg",
      "https://images.squarespace-cdn.com/content/v1/53b5ae62e4b04291a7408706/1473854326018-6O01FR1QH8SSTOIG40AU/4+budget-friendly+master+bedroom+decorating+ideas?format=1000w"
    ],
    roomNumber: 2,
    roomType: "Double Bed",
    amenities: "Wine - Penfolds Koonuga Hill",
    price: 200615,
    offer_price: 35367,
    status: "available"
  },
  {
    id: 3,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 3,
    roomType: "Double Bed",
    amenities: "Oil - Avocado",
    price: 291857,
    offer_price: 36288,
    status: "available"
  },
  {
    id: 4,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 4,
    roomType: "Double Bed",
    amenities: "Lobster - Live",
    price: 596753,
    offer_price: 27889,
    status: "available"
  },
  {
    id: 5,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 5,
    roomType: "Double Bed",
    amenities: "Roe - White Fish",
    price: 909786,
    offer_price: 23398,
    status: "booked"
  },
  {
    id: 6,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 6,
    roomType: "Double Bed",
    amenities: "Vinegar - Red Wine",
    price: 741437,
    offer_price: 25946,
    status: "available"
  },
  {
    id: 7,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 7,
    roomType: "Double Bed",
    amenities: "Bagel - Plain",
    price: 133375,
    offer_price: 32999,
    status: "booked"
  },
  {
    id: 8,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 8,
    roomType: "Double Bed",
    amenities: "Compound - Rum",
    price: 783278,
    offer_price: 47943,
    status: "booked"
  },
  {
    id: 9,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 9,
    roomType: "Double Bed",
    amenities: "Coffee Cup 12oz 5342cd",
    price: 101078,
    offer_price: 16092,
    status: "available"
  },
  {
    id: 10,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 10,
    roomType: "Double Bed",
    amenities: "Dip - Tapenade",
    price: 58088,
    offer_price: 30479,
    status: "available"
  },
  {
    id: 11,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 11,
    roomType: "Double Bed",
    amenities: "Pork Casing",
    price: 899338,
    offer_price: 29190,
    status: "booked"
  },
  {
    id: 12,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 12,
    roomType: "Double Bed",
    amenities: "Wine - Penfolds Koonuga Hill",
    price: 200615,
    offer_price: 35367,
    status: "available"
  },
  {
    id: 13,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 13,
    roomType: "Double Bed",
    amenities: "Oil - Avocado",
    price: 291857,
    offer_price: 36288,
    status: "available"
  },
  {
    id: 14,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 14,
    roomType: "Double Bed",
    amenities: "Lobster - Live",
    price: 596753,
    offer_price: 27889,
    status: "available"
  },
  {
    id: 15,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 15,
    roomType: "Double Bed",
    amenities: "Roe - White Fish",
    price: 909786,
    offer_price: 23398,
    status: "booked"
  },
  {
    id: 16,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 16,
    roomType: "Double Bed",
    amenities: "Vinegar - Red Wine",
    price: 741437,
    offer_price: 25946,
    status: "available"
  },
  {
    id: 17,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 17,
    roomType: "Double Bed",
    amenities: "Bagel - Plain",
    price: 133375,
    offer_price: 32999,
    status: "booked"
  },
  {
    id: 18,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 18,
    roomType: "Double Bed",
    amenities: "Compound - Rum",
    price: 783278,
    offer_price: 47943,
    status: "booked"
  },
  {
    id: 19,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 19,
    roomType: "Double Bed",
    amenities: "Coffee Cup 12oz 5342cd",
    price: 101078,
    offer_price: 16092,
    status: "available"
  },
  {
    id: 20,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 20,
    roomType: "Double Bed",
    amenities: "Dip - Tapenade",
    price: 58088,
    offer_price: 30479,
    status: "available"
  },
  {
    id: 21,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 21,
    roomType: "Double Bed",
    amenities: "Pork Casing",
    price: 899338,
    offer_price: 29190,
    status: "booked"
  },
  {
    id: 22,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 22,
    roomType: "Double Bed",
    amenities: "Wine - Penfolds Koonuga Hill",
    price: 200615,
    offer_price: 35367,
    status: "available"
  },
  {
    id: 23,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 23,
    roomType: "Double Bed",
    amenities: "Oil - Avocado",
    price: 291857,
    offer_price: 36288,
    status: "available"
  },
  {
    id: 24,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 24,
    roomType: "Double Bed",
    amenities: "Lobster - Live",
    price: 596753,
    offer_price: 27889,
    status: "available"
  },
  {
    id: 25,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 25,
    roomType: "Double Bed",
    amenities: "Roe - White Fish",
    price: 909786,
    offer_price: 23398,
    status: "booked"
  },
  {
    id: 26,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 26,
    roomType: "Double Bed",
    amenities: "Vinegar - Red Wine",
    price: 741437,
    offer_price: 25946,
    status: "available"
  },
  {
    id: 27,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 27,
    roomType: "Double Bed",
    amenities: "Bagel - Plain",
    price: 133375,
    offer_price: 32999,
    status: "booked"
  },
  {
    id: 28,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 28,
    roomType: "Double Bed",
    amenities: "Compound - Rum",
    price: 783278,
    offer_price: 47943,
    status: "booked"
  },
  {
    id: 29,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 29,
    roomType: "Double Bed",
    amenities: "Coffee Cup 12oz 5342cd",
    price: 101078,
    offer_price: 16092,
    status: "available"
  },
  {
    id: 30,
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$"
    ],
    roomNumber: 30,
    roomType: "Double Bed",
    amenities: "Dip - Tapenade",
    price: 58088,
    offer_price: 30479,
    status: "available"
  }
]

export default rooms;