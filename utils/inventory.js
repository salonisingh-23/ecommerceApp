import { v4 as uuid } from "uuid"

let inventory = [
  {
    categories: ["new arrivals"],
    name: "Type-C charger",
    price: "10",
    image: "/products/charger.jpg",
    // description:
    // "Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.",
    // brand: "Jason Bourne",
    currentInventory: 4,
  },
  {
    categories: ["meds", "bp monitor"],
    name: "Bp Monitor",
    price: "20",
    image: "/products/bp machine.jpg",
    // description:
    // "Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.",
    // brand: "Jason Bourne",
    currentInventory: 2,
  },
  {
    categories: ["new arrivals", "meds"],
    name: "Disprin",
    price: "0.8",
    image: "/products/disprin-tablet.jpg",
    // description:
    // "Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.",
    // brand: "Jason Bourne",
    currentInventory: 8,
  },
  {
    categories: ["new arrivals", "meds"],
    name: "Pain Killer",
    price: "0.5",
    image: "/products/ibujesic.jpg",
    // description:
    // "You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.",
    // brand: "Jason Bourne",
    currentInventory: 10,
  },
  {
    categories: ["on sale", "meds"],
    name: "Accu Check",
    price: "18",
    image: "/products/sugar test.jpg",
    // description:
    // "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    // brand: "Jason Bourne",
    currentInventory: 7,
  },
  {
    categories: ["on sale", "meds"],
    name: "Paracetamol",
    price: "0.5",
    image: "/products/Calpol.jpg",
    // description:
    // "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    // brand: "Jason Bourne",
    currentInventory: 13,
  },
  {
    categories: ["on sale", "meds"],
    name: "Cetrizin",
    price: "1",
    image: "/products/cetrizin.jpg",
    // description:
    // "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    // brand: "Jason Bourne",
    currentInventory: 9,
  },
  {
    categories: ["meds", "thermometer"],
    name: "Thermometer",
    price: "10",
    image: "/products/thermometer.jpg",
    // description:
    // "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    // brand: "Jason Bourne",
    currentInventory: 24,
  },

  {
    categories: ["meds"],
    name: "Zedex Plus",
    price: "0.5",
    image: "/products/cough syrup.jpg",
    // description:
    // "Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.",
    // brand: "Jason Bourne",
    currentInventory: 43,
  },
  {
    categories: ["new arrivals", "meds"],
    name: "ORS",
    price: "1",
    image: "/products/electral.webp",
    // description:
    // "You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.",
    // brand: "Jason Bourne",
    currentInventory: 2,
  },
  {
    categories: ["on sale", "meds"],
    name: "Calcium Tablets",
    price: "2",
    image: "/products/calcium.jpg",
    // description:
    // "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    currentInventory: 14,
  },

  {
    categories: ["on sale", "food"],
    name: "Strawberry",
    price: "0.1",
    image: "/products/strawberry.jpg",
    // description:
    // "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    // brand: "Jason Bourne",
    currentInventory: 12,
  },
  {
    categories: ["on sale", "food"],
    name: "Sandwich",
    price: "8",
    image: "/products/sandwich.png",
    // description:
    // "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    // brand: "Jason Bourne",
    currentInventory: 13,
  },
  {
    categories: ["on sale", "food"],
    name: "Veg Thali",
    price: "10",
    image: "/products/veg thali.jpg",
    // description:
    // "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    // brand: "Jason Bourne",
    currentInventory: 33,
  },
  {
    categories: ["on sale", "food"],
    name: "Pomegranater",
    price: "2",
    image: "/products/Pomegranate.png",
    // description:
    // "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    // brand: "Jason Bourne",
    currentInventory: 23,
  },
  {
    categories: ["on sale", "food"],
    name: "Mango",
    price: "1",
    image: "/products/mango.png",
    // description:
    // "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    // brand: "Jason Bourne",
    currentInventory: 13,
  },
  {
    categories: ["on sale", "food"],
    name: "Fries",
    price: "6",
    image: "/products/fries.png",
    // description:
    // "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    // brand: "Jason Bourne",
    currentInventory: 15,
  },

  {
    categories: ["on sale", "food"],
    name: "Chinese Thali",
    price: "7",
    image: "/products/chinese-platter.jpg",
    // description:
    // "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    // brand: "Jason Bourne",
    currentInventory: 44,
  },
  {
    categories: ["on sale", "food"],
    name: "Apple",
    price: "1",
    image: "/products/apple.png",
    // description:
    // "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    // brand: "Jason Bourne",
    currentInventory: 17,
  },
  {
    categories: ["on sale", "food"],
    name: "Burger",
    price: "10",
    image: "/products/burger.png",
    // description:
    // "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    // brand: "Jason Bourne",
    currentInventory: 28,
  },
  {
    categories: ["on sale", "food"],
    name: "Orange Juice",

    price: "5",
    image: "/products/juice.png",
    // description:
    // "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    // brand: "Jason Bourne",
    currentInventory: 31,
  }, // {
]

inventory.map((i) => {
  i.id = uuid()
  return i
})

export default inventory
