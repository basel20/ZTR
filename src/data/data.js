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

import bulshoi from './Restaurants/bolshoi.jpg'
import turandot from './Restaurants/turandot.png'
import pushkin from './Restaurants/bushkin.jpeg'

import stregis1 from './Hotels/stregis1.jpg'
import stregis2 from './Hotels/stregis2.jpeg'
import stregis3 from './Hotels/stregis3.jpg'
import stregis4 from './Hotels/stregis4.jpg'

import fourseason1 from './Hotels/fourseason.jpg'
import fourseason2 from './Hotels/fourseason2.jpg'
import fourseason3 from './Hotels/fourseason3.jpeg'
import fourseason4 from './Hotels/fourseason4.jpeg'
import fourseason5 from './Hotels/fourseason5.jpg'

import kempinski0 from './Hotels/kempinski0.avif'
import kempinski1 from './Hotels/kempinski1.avif'
import kempinski2 from './Hotels/kempinski2.avif'
import kempinski3 from './Hotels/kempinski3.avif'
import kempinski4 from './Hotels/kempinski4.avif'

import national1 from './Hotels/national1.jpg'
import national2 from './Hotels/national2.jpg'
import national3 from './Hotels/national3.jpg'
import national4 from './Hotels/national4.jpg'
import national5 from './Hotels/national5.jpg'
import national6 from './Hotels/national6.jpg'

export const FeaturedHotels = [
  {
    id: "stregis",
    hotel: "فندق سانت ريجيس موسكو نيكولسكايا",
    description: "Luxury at its finest with world-class amenities.",
    location: "Nikolskaya Street, Moscow",
    img: featuredHotel1,
    imgList: [{id:1, img:stregis1}, {id:2, img:stregis2}, {id:3, img:stregis3}, {id:4, img:stregis4}],
    link: "/hotels/stregis",
  },
  {
    id: "ararat",
    hotel: " فندق آرارات بارك حياة",
    description: "A blend of modern elegance and historic charm.",
    location: "Krasnopresnenskaya embankment, Moscow",
    img: featuredHotel2,
    imgList: [stregis1, stregis2, stregis3, stregis4],
    link: "/hotels/ararat",
  },
  {
    id: "fourseason",
    hotel: "فندق فور سيزونز",
    description: "Unparalleled luxury and breathtaking views.",
    img: featuredHotel3,
    location: "Okhotny Ryad, Moscow",
    imgList: [{id:1, img:fourseason1}, {id:2, img:fourseason2}, {id:3, img:fourseason3}, {id:4, img:fourseason4}, {id:5, img:fourseason5}],
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
    imgList: [{id:1, img:stregis1}, {id:2, img:stregis2}, {id:3, img:stregis3}, {id:4, img:stregis4}],
    link: "/hotels/stregis",
  },
  {
    id: "ararat",
    hotel: "فندق آرارات بارك حياة",
    description: "يُعدّ فندق آرارات بارك حياة موسكو خيارًا فخمًا في قلب المدينة، يتميز بتصميم داخلي بسيط وفخم، وخدمات راقية، ومرافق شاملة مثل مسبح داخلي وخدمة واي فاي مجانية.",
    location: "4 Neglinnaya Street, 109012 Moscow",
    img: featuredHotel2,
    imgList: [{id:1, img:stregis1}, {id:2, img:stregis2}, {id:3, img:stregis3}, {id:4, img:stregis4}],
    link: "/hotels/ararat",
  },
  {
    id: "fourseason",
    hotel: "فندق فور سيزونز",
    description: "يقع هذا الفندق الفاخر في مبنى مذهل مستوحى من ثلاثينيات القرن العشرين، على بُعد دقيقتين سيرًا على الأقدام من أقرب محطة مترو أنفاق و10 دقائق سيرًا على الأقدام من الساحة الحمراء وكيلومتر واحد من الكرملين.  تتوفر في الغرف الأنيقة خدمة Wi-Fi مجانية وأجهزة تلفزيون بشاشات مسطحة. بالإضافة إلى ما سبق، تضم الغرف الأعلى درجة مساحات للجلوس و/أو شرفات. تحتوي الأجنحة على غرف معيشة مع مدافئ، بينما تتميز الأجنحة الفخمة الأعلى درجة بتراسات وغرف طعام وأرائك تتحوّل إلى أسرّة و/أو غرف ساونا. خدمة الغرف متاحة 24/7. تشمل وسائل الراحة مطعمًا إيطاليًا ومطعمًا صغيرًا عصريًا ومقهى مريحًا، فضلاً عن بارين. ويضم الفندق أيضًا منتجعًا صحيًا وناديًا رياضيًا متاحًا على مدار الساعة ومسبحًا داخليًا بسقف زجاجي، فضلاً عن مغطس مياه ساخنة وحمّام ساونا.",
    img: featuredHotel3,
    location: "Ulitsa Okhotnyy Ryad, 2, Moscow",
     imgList: [{id:1, img:fourseason1}, {id:2, img:fourseason2}, {id:3, img:fourseason3}, {id:4, img:fourseason4}, {id:5, img:fourseason5}],
    link: "/hotels/fourseason",
  },
  {
    id: "metropol",
    hotel: "فندق متروبول موسكو",
    description: "يقع هذا الفندق الفاخر على طراز الفن الحديث في مبنى كبير يضم ردهة مركزية، ويبعد 4 دقائق سيرًا على الأقدام عن كل من محطة المترو ومسرح البولشوي و15 دقيقة سيرًا على الأقدام عن الكرملين في موسكو. تحتوي الغرف الفاخرة والمفروشة بالتحف على ميني بارات وخدمة الواي فاي المجانية وأجهزة تلفزيون بشاشات مسطحة. وتوفر بعضها إطلالات على المدينة. وتتميز الأجنحة بغرف معيشة وآلات نسبريسو، بينما تضم ​​الأجنحة الأعلى درجة حمّامات ساونا. خدمة الغرف متاحة 24/7.  يضم الفندق مطعمًا راقيًا وعريقًا وبارًا/صالة جلوس أنيقة تقدم كوكتيلات على طراز التاروت، وقاعة حفلات كبيرة في ردهة ذات سقف من الزجاج الملون. تتوفر وجبة الإفطار مقابل رسوم.",
    img: metropol,
    location: "Teatral'nyy Proyezd, 2, Moscow, 109012",
     imgList: [{id:1, img:stregis1}, {id:2, img:stregis2}, {id:3, img:stregis3}, {id:4, img:stregis4}],
    link: "/hotels/metropol",
  },
  {
    id: "kempinski",
    hotel: "فندق بالتشوغ كمبينسكي موسكو",
    description: "يعود هذا الفندق الفاخر إلى عام 1898، ويطل على نهر موسكفا، ويبعد 9 دقائق سيرًا على الأقدام عن مترو موسكو و15 دقيقة سيرًا على الأقدام عن كاتدرائية القديس باسيل في الساحة الحمراء. توفر الغرف الأنيقة ذات الأسقف العالية خدمة الواي فاي المجانية وأجهزة تلفزيون بشاشات مسطحة وقواعد للآي بود. ويضم بعضها مناطق للجلوس و/أو يطل على الكرملين. تضيف جميع الأجنحة غرف معيشة منفصلة، بينما يتميز بعضها بتصميمات داخلية مخصصة صممها أفراد العائلة المالكة الأوروبية. يضم الفندق مطعمًا فاخرًا، بالإضافة إلى صالة جلوس في قاعة الانتظار تقدم الشاي بعد الظهر وبارًا/مطعمًا مع ترّاس. وتشمل وسائل الراحة الأخرى منتجعًا صحيًا أنيقًا يضم مسبحًا داخليًا ومركزًا للياقة البدنية وصالونًا، فضلاً عن 12 مساحة للاجتماعات.",
    img: kempinski,
    location: "Balchug St, 1, Moscow, 115035",
     imgList: [{id:1, img:kempinski0}, {id:2, img:kempinski1}, {id:3, img:kempinski2}, {id:4, img:kempinski3}, {id:5, img:kempinski4}],
    link: "/hotels/kempinski",
  },
  {
    id: "national",
    hotel: "فندق ناشيونال موسكو",
    description: "يقع هذا الفندق التاريخي الفاخر في مبنى كبير يعود إلى عام 1903، ويبعد كيلومترين عن 'الساحة الحمراء' و4 كيلومتر عن 'كرملين موسكو'. تتميز الغرف المشرقة بمفروشات تعود إلى القرن التاسع عشر وتحتوي على أجهزة تلفزيون بشاشات مسطحة وخدمة الواي فاي المجانية. بالإضافة إلى ما سبق، تضم الغرف الأعلى درجة والأجنحة المليئة بالتحف مساحات منفصلة للجلوس و/أو إطلالات على الكرملين. خدمة الغرف متاحة 24/7. تشمل وسائل الراحة مطعمَين راقيَين وبارًا راقيًا في ساحة فناء مغلقة ذات سقف زجاجي. يضم الفندق أيضًا ناديًا رياضيًا ومسبحًا داخليًا ومغطس مياه ساخنة، فضلاً عن مساحة للاجتماعات والفعاليات.",
    img: national,
    location: "15/1 Mokhovaya Str. Bld. 1, Moscow, 125009",
     imgList: [{id:1, img:national1}, {id:2, img:national2}, {id:3, img:national3}, {id:4, img:national4}, {id:5, img:national5}, {id:6, img:national6}],
    link: "/hotels/national",
  },
  {
    id: "carlton",
    hotel: "فندق كارلتون موسكو",
    description: "Unparalleled luxury and breathtaking views.",
    img: carlton,
    location: "Okhotny Ryad, Moscow",
     imgList: [{id:1, img:stregis1}, {id:2, img:stregis2}, {id:3, img:stregis3}, {id:4, img:stregis4}],
    link: "/hotels/carlton",
  },
  {
    id: "radison",
    hotel: "فندق راديسون كوليكشن موسكو",
    description: "Unparalleled luxury and breathtaking views.",
    img: radison,
    location: "Okhotny Ryad, Moscow",
     imgList: [{id:1, img:stregis1}, {id:2, img:stregis2}, {id:3, img:stregis3}, {id:4, img:stregis4}],
    link: "/hotels/radison",
  },
];


export const FeaturedActivities = [
  {
    id: "husky",
    name: "رحلة التزلج على الهاسكي",
    description: "استمتع برحلات مثيرة عبر المناظر الثلجية التي تجرها كلاب هاسكي ودودة. اختبر التشويق والمغامرة وتواصل مع الطبيعة بطريقة فريدة",
    img: husky,
    // imgList: [featuredHotel1, 'additional-image1.jpg', 'additional-image2.jpg'],
    link: "/activities/husky",
  },
  {
    id: "snowmobile",
    name: "الدراجات الثلجية",
    description: "استكشف تضاريس ثلجية واسعة بقوة وحرية موتور الجليد. اكتشف مناظر شتوية خلابة واشعر باندفاع الأدرينالين وأنت تنطلق عبر الثلج",
    img: snowmobile,
    // imgList: [featuredHotel2, 'additional-image3.jpg', 'additional-image4.jpg'],
    link: "/activities/snowmobile",
  },
  {
    id: "tiger",
    name: "جلسة التصوير مع النمر",
    description: "اصنع ذكريات لا تُنسى مع لقاء ومشاركة تصوير مقرب مع نمر مهيب. التقط صورًا مذهلة في بيئة آمنة",
    img: tiger,
    // imgList: [featuredHotel3, 'additional-image5.jpg', 'additional-image6.jpg'],
    link: "/activities/tiger",
  }
];


export const AllActivities = [
  {
    id: "husky",
    hotel: "Husky trip",
    description: "Luxury at its finest with world-class amenities.",
    img: husky,
    imgList: [stregis1, stregis2, stregis3, stregis4],
    link: "/activities/husky",
  },
  {
    id: "bear",
    hotel: "photo session with a bear",
    description: "A blend of modern elegance and historic charm.",
    img: bear1,
    imgList: [stregis1, stregis2, stregis3, stregis4],
    link: "/hotels/bear",
  },
  {
    id: "tiger",
    hotel: "photo session with a tiger",
    description: "Unparalleled luxury and breathtaking views.",
    img: tiger,
     imgList: [stregis1, stregis2, stregis3, stregis4],
    link: "/activities/tiger",
  },
  {
    id: "snowmobiles",
    hotel: "Snowmobiles",
    description: "Unparalleled luxury and breathtaking views.",
    img: snowmobile,
     imgList: [stregis1, stregis2, stregis3, stregis4],
    link: "/activities/snowmobiles",
  },
  {
    id: "ATVs",
    hotel: "ATVs",
    description: "Unparalleled luxury and breathtaking views.",
    img: ATVs,
     imgList: [stregis1, stregis2, stregis3, stregis4],
    link: "/activities/ATVs",
  },
  {
    id: "Bigfoot",
    hotel: "Bigfoot",
    description: "The National Hotel combines rich history, palatial architecture and high art in the heart of Moscow. Built in 1903 by the famous architect Alexander Ivanov, this 5-star hotel is a magnificent example piece of imperial architecture in the historic centre of Moscow. The hotel overlooks legendary Red Square, while the Kremlin, the Bolshoi Theatre, St. Basil‘s Cathedral and the Old Arbat are just a few steps away.",
    img: Bigfoot,
    location: "Okhotny Ryad, Moscow",
     imgList: [stregis1, stregis2, stregis3, stregis4],
    link: "/activities/Bigfoot",
  },
  {
    id: "carlton",
    hotel: "The Carlton, Moscow ",
    description: "Unparalleled luxury and breathtaking views.",
    img: carlton,
    location: "Okhotny Ryad, Moscow",
     imgList: [stregis1, stregis2, stregis3, stregis4],
    link: "/hotels/carlton",
  },
  {
    id: "radison",
    hotel: "Radisson Collection Moscow Hotel ",
    description: "Unparalleled luxury and breathtaking views.",
    img: radison,
    location: "Okhotny Ryad, Moscow",
     imgList: [stregis1, stregis2, stregis3, stregis4],
    link: "/hotels/radison",
  },
];


export const FeaturedRestaurants = [
  {
    id: "bulshoi",
    name: "مطعم البولشوي", // Restaurant name: Bolshoi
    description: "مطعم فاخر يقدم المأكولات الروسية التقليدية في أجواء أنيقة.",
    img: bulshoi,
    // imgList: [featuredRestaurant1, 'additional-image1.jpg', 'additional-image2.jpg'],
    link: "/restaurants/bulshoi", 
},
{
    id: "turandot",
    name: "مطعم توراندوت", // Restaurant name: Turandot
    description: "مطعم فاخر يقدم المأكولات العالمية في أجواء رائعة مستوحاة من قصص ألف ليلة وليلة.", 
    img: turandot,
    // imgList: [featuredRestaurant2, 'additional-image3.jpg', 'additional-image4.jpg'],
    link: "/restaurants/turandot", 
},
{
    id: "pushkin",
    name: "مقهى بوشكين",  
    description: "مقهى دافئ يقدم المأكولات الروسية اللذيذة في أجواء مريحة.", 
    img: pushkin,
    // imgList: [featuredRestaurant3, 'additional-image5.jpg', 'additional-image6.jpg'],
    link: "/restaurants/pushkin", 
},
];