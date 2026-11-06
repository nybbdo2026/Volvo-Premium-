const brands = [
    { name: "Acura", img: "img/Acura.png" },
    { name: "Audi", img: "img/Audi.png" }, 
    { name: "benz", img:"img/benz.png" }, 
    { name: "BMW", img:"img/BMW.png" },
    { name: "Genesis", img:"img/Genesis.png" },
    { name: "Lexus", img:"img/Lexus.png" },
    { name: "Lincolin", img:"img/Lincolin.png" },
    { name: "Volvo", img:"img/Volvo.png" }
  ];

const category = "Luxury Car Brands"

const attributes = ["Adventure", "Freedom", "Unconventional", "Courageous", "Rule-breaking", "Discovery", "Unstoppable", "Free-spirited", "Pioneering", "Challenger", "Bold", "Status symbol", "High-performance", "Sophisticated", "Iconic", "Self-assured", "Understated", "Perfection", "Admired", "Exclusive", "Strong", "Prestigious", "Relaxing", "Calm", "Stress-free", "Effortless", "Indulgent", "Luxurious", "Natural", "Pleasurable", "Sensual", "Joyful", "Comfortable", "Built to last", "Practical", "Down-to-earth", "Good value", "Efficient", "Well-engineered", "Intelligent", "Versatile", "Reliable", "Meticulous", "Intentional", "Protective", "Privacy-first", "Cyber-secure", "Peace of mind", "Caring", "Family-first", "Feels like home", "Harmonious", "Responsible", "Safe", "Thoughtful", "Thrilling", "Fast", "Innovative", "High-tech", "Energetic", "Youthful", "Trendy", "Imaginative", "Playful", "Stylish", "Design-led"];

const pretest_attributes = [
  "Hot", 
  "Cold", 
  "Dangerous",
  "Refreshing", 
  "Cute",
  "Soft"
];


const pretest_images = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Cute", "Soft"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Dangerous", "Hot"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Cold", "Refreshing"]}
]

const pretest_attributes_multiple = ["Hot", "Cold", "Dangerous", "Refreshing", "Cute", "Soft", "Travel", "Excitement", "Precise", "Time", "Deep", "Wet"]

const pretest_images_multiple = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Cute", "Soft"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Dangerous", "Hot"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Cold", "Refreshing"]}, 
  {name: "Driving", img: "pretest_img/pretest_driving.png", correct:["Travel", "Excitement"]}, 
  {name: "Ocean", img: "pretest_img/pretest_ocean.png", correct:["Deep", "Wet"]},
  {name: "Clock", img: "pretest_img/pretest_clock.png", correct:["Precise", "Time"]}
]


const survey_name = "Volvo Premium Survey"