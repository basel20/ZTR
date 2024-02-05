import featuredHotel1 from "./Hotels/stregis.jpeg";
import featuredHotel2 from "./Hotels/ararat.jpg";
import featuredHotel3 from "./Hotels/fourseason.jpg";

import metropol from './Hotels/metropol.jpg'
import kempinski from './Hotels/kempinski.jpg'
import national from "./Hotels/national.jpg"
import carlton from "./Hotels/carlton.jpeg"
import radison from "./Hotels/radisson.jpg"

import husky from './Activities/haski.jpg'
import bear1 from './Activities/bear.jpg'
import tiger from './Activities/tiger.jpg'
import snowmobile from './Activities/snowmobile.jpeg'
import ATVs from './Activities/ATV.png'
import Bigfoot from './Activities/bigfooot.jpg'

export const FeaturedHotels = [
  {
    id: "stregis",
    hotel: "فندق سانت ريجيس موسكو نيكولسكايا",
    description: "Luxury at its finest with world-class amenities.",
    location: "Nikolskaya Street, Moscow",
    img: featuredHotel1,
    // imgList: [featuredHotel1, 'additional-image1.jpg', 'additional-image2.jpg'],
    link: "/hotels/stregis",
  },
  {
    id: "ararat",
    hotel: " فندق آرارات بارك حياة",
    description: "A blend of modern elegance and historic charm.",
    location: "Krasnopresnenskaya embankment, Moscow",
    img: featuredHotel2,
    // imgList: [featuredHotel2, 'additional-image3.jpg', 'additional-image4.jpg'],
    link: "/hotels/ararat",
  },
  {
    id: "fourseason",
    hotel: "فندق فور سيزونز",
    description: "Unparalleled luxury and breathtaking views.",
    img: featuredHotel3,
    location: "Okhotny Ryad, Moscow",
    // imgList: [featuredHotel3, 'additional-image5.jpg', 'additional-image6.jpg'],
    link: "/hotels/fourseason",
  },
];


export const AllHotels = [
  {
    id: "stregis",
    hotel: "فندق سانت ريجيس موسكو نيكولسكايا",
    description: "يُعدّ فندق سانت ريجيس موسكو خيارًا فخمًا في قلب المدينة، على بعد خطوات من الساحة الحمراء والكرملين. يتميز بتصميم داخلي أنيق، وخدمات راقية، ومرافق شاملة مثل مطاعم وبار ومركز للياقة البدنية ومنتجع صحي.",
    location: "Russia, Moscow, Nikolskaya, 12",
    img: featuredHotel1,
    // imgList: [featuredHotel1, 'additional-image1.jpg', 'additional-image2.jpg'],
    link: "/hotels/stregis",
  },
  {
    id: "ararat",
    hotel: "فندق آرارات بارك حياة",
    description: "يُعدّ فندق آرارات بارك حياة موسكو خيارًا فخمًا في قلب المدينة، يتميز بتصميم داخلي بسيط وفخم، وخدمات راقية، ومرافق شاملة مثل مسبح داخلي وخدمة واي فاي مجانية.",
    location: "4 Neglinnaya Street, 109012 Moscow",
    img: featuredHotel2,
    // imgList: [featuredHotel2, 'additional-image3.jpg', 'additional-image4.jpg'],
    link: "/hotels/ararat",
  },
  {
    id: "fourseason",
    hotel: "فندق فور سيزونز",
    description: "Unparalleled luxury and breathtaking views.",
    img: featuredHotel3,
    location: "Okhotny Ryad, Moscow",
    // imgList: [featuredHotel3, 'additional-image5.jpg', 'additional-image6.jpg'],
    link: "/hotels/fourseason",
  },
  {
    id: "metropol",
    hotel: "فندق متروبول موسكو",
    description: "Unparalleled luxury and breathtaking views.",
    img: metropol,
    location: "Okhotny Ryad, Moscow",
    // imgList: [featuredHotel3, 'additional-image5.jpg', 'additional-image6.jpg'],
    link: "/hotels/metropol",
  },
  {
    id: "kempinski",
    hotel: "فندق بالتشوغ كمبينسكي موسكو",
    description: "Unparalleled luxury and breathtaking views.",
    img: kempinski,
    location: "Okhotny Ryad, Moscow",
    // imgList: [featuredHotel3, 'additional-image5.jpg', 'additional-image6.jpg'],
    link: "/hotels/kempinski",
  },
  {
    id: "national",
    hotel: "فندق ناشيونال موسكو",
    description: "The National Hotel combines rich history, palatial architecture and high art in the heart of Moscow. Built in 1903 by the famous architect Alexander Ivanov, this 5-star hotel is a magnificent example piece of imperial architecture in the historic centre of Moscow. The hotel overlooks legendary Red Square, while the Kremlin, the Bolshoi Theatre, St. Basil‘s Cathedral and the Old Arbat are just a few steps away.",
    img: national,
    location: "Okhotny Ryad, Moscow",
    // imgList: [featuredHotel3, 'additional-image5.jpg', 'additional-image6.jpg'],
    link: "/hotels/national",
  },
  {
    id: "carlton",
    hotel: "فندق كارلتون موسكو",
    description: "Unparalleled luxury and breathtaking views.",
    img: carlton,
    location: "Okhotny Ryad, Moscow",
    // imgList: [featuredHotel3, 'additional-image5.jpg', 'additional-image6.jpg'],
    link: "/hotels/carlton",
  },
  {
    id: "radison",
    hotel: "فندق راديسون كوليكشن موسكو",
    description: "Unparalleled luxury and breathtaking views.",
    img: radison,
    location: "Okhotny Ryad, Moscow",
    // imgList: [featuredHotel3, 'additional-image5.jpg', 'additional-image6.jpg'],
    link: "/hotels/radison",
  },
];


export const AllActivities = [
  {
    id: "husky",
    hotel: "Husky trip",
    description: "Luxury at its finest with world-class amenities.",
    img: husky,
    // imgList: [featuredHotel1, 'additional-image1.jpg', 'additional-image2.jpg'],
    link: "/activities/husky",
  },
  {
    id: "bear",
    hotel: "photo session with a bear",
    description: "A blend of modern elegance and historic charm.",
    img: bear1,
    // imgList: [featuredHotel2, 'additional-image3.jpg', 'additional-image4.jpg'],
    link: "/hotels/bear",
  },
  {
    id: "tiger",
    hotel: "photo session with a tiger",
    description: "Unparalleled luxury and breathtaking views.",
    img: tiger,
    // imgList: [featuredHotel3, 'additional-image5.jpg', 'additional-image6.jpg'],
    link: "/activities/tiger",
  },
  {
    id: "snowmobiles",
    hotel: "Snowmobiles",
    description: "Unparalleled luxury and breathtaking views.",
    img: snowmobile,
    // imgList: [featuredHotel3, 'additional-image5.jpg', 'additional-image6.jpg'],
    link: "/activities/snowmobiles",
  },
  {
    id: "ATVs",
    hotel: "ATVs",
    description: "Unparalleled luxury and breathtaking views.",
    img: ATVs,
    // imgList: [featuredHotel3, 'additional-image5.jpg', 'additional-image6.jpg'],
    link: "/activities/ATVs",
  },
  {
    id: "Bigfoot",
    hotel: "Bigfoot",
    description: "The National Hotel combines rich history, palatial architecture and high art in the heart of Moscow. Built in 1903 by the famous architect Alexander Ivanov, this 5-star hotel is a magnificent example piece of imperial architecture in the historic centre of Moscow. The hotel overlooks legendary Red Square, while the Kremlin, the Bolshoi Theatre, St. Basil‘s Cathedral and the Old Arbat are just a few steps away.",
    img: Bigfoot,
    location: "Okhotny Ryad, Moscow",
    // imgList: [featuredHotel3, 'additional-image5.jpg', 'additional-image6.jpg'],
    link: "/activities/Bigfoot",
  },
  {
    id: "carlton",
    hotel: "The Carlton, Moscow ",
    description: "Unparalleled luxury and breathtaking views.",
    img: carlton,
    location: "Okhotny Ryad, Moscow",
    // imgList: [featuredHotel3, 'additional-image5.jpg', 'additional-image6.jpg'],
    link: "/hotels/carlton",
  },
  {
    id: "radison",
    hotel: "Radisson Collection Moscow Hotel ",
    description: "Unparalleled luxury and breathtaking views.",
    img: radison,
    location: "Okhotny Ryad, Moscow",
    // imgList: [featuredHotel3, 'additional-image5.jpg', 'additional-image6.jpg'],
    link: "/hotels/radison",
  },
];