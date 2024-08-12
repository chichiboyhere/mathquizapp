import facebook from "../assets/socials/facebook.svg";
import instagram from "../assets/socials/instagram.svg";
import telegram from "../assets/socials/telegram.svg";
import x from "../assets/socials/x.svg";
import icon1 from "../assets/calcCards/icon-1.svg"
import icon2 from "../assets/calcCards/icon-2.svg"
import icon3 from "../assets/calcCards/icon-3.svg"
import icon4 from "../assets/calcCards/icon-4.svg"
import image2 from "../assets/calcCards/image-2.png"


export const navigation = [
  {
    id: "0",
    title: "Multiplication Game",
    url: "#multiplicationGame",
  },
  {
    id: "1",
    title: "Arithmetic Game",
    url: "#arithmeticGame",
  },
  {
    id: "2",
    title: "Calculators",
    url: "#calculators",
  },
  {
    id: "3",
    title: "Top Scores",
    url: "#highestScores",
    onlyMobile: true,
  },
];


export const multiplicationGameBenefits = [
  "Sharpen Your Mental Alertness",
  "Build Computational Skills",
  "Sets a sure Foundation for more complex problems",
];

export const arithmeticGameBenefits = [
  "Addition",
  "Multiplication",
  "Subtraction",
  "Division"
];


export const calculators = [
  {
    id: "0",
    title: "Scientific Calculator",
    text: "Explore our robust scientific calculator with basic arithmetic functionality (like addition, subtraction, multiplication and division), trigonometric functionality, logarithm functionality, powers and roots and more",
    backgroundUrl: "./src/assets/calcCards/card-1.svg",
    iconUrl: icon1,
    imageUrl: image2,
  },
  {
    id: "1",
    title: "Simple Interest Calculator",
    text: "Our Simple Interest Calculator is programmed to help your do simple interest calculations with ease. The formula is given by. I = PRT/100. Where I = simple Interest, P= Principal, R= Rate, T = Time. This calculator not only fetches you simple interest but amount A(P + I) too.",
    backgroundUrl: "./src/assets/calcCards/card-2.svg",
    iconUrl: icon2,
    imageUrl: image2,
    light: true,
  },
  {
    id: "2",
    title: "Compound Interest Calculator",
    text: "The Compound Interest is worked out in each specified period, which could be 1 year, 1 quarter, 1 month... The interest obtained at a given period is added to the principal to yield an improved principal. The process is repeated till the total number of compounding is completed. Interest obtained this way is called compound interest...",
    backgroundUrl: "./src/assets/calcCards/card-3.svg",
    iconUrl: icon3,
    imageUrl: image2,
  },
  {
    id: "3",
    title: "Amortization Calculator",
    text: "Amortization is a periodic repayment of a loan(typically a mortgage) in equal installments...Our Amortization Calculator returns the monthly installment repayment and breaks it down into the respective Principal and Interest tabulated in an easy-to-read manner.",
    backgroundUrl: "./src/assets/calcCards/card-4.svg",
    iconUrl: icon4,
    imageUrl: image2,
    light: true,
  },
  {
    id: "4",
    title: "Quadratic Equation Calculator",
    text: "Our Quadratic Equation Calculator fetches you roots/answers to any quadratic equation entered. Depending on your inputs, the result could vary from: two distinct roots when you enter a quadratic equation with real roots,where the discriminant(D) is greater than 0; one root(repeated twice) when the quadratic equation is a perfect square ie. D = 0 or unreal roots, when D is less than 0.",
    backgroundUrl: "./src/assets/calcCards/card-5.svg",
    iconUrl: icon1,
    imageUrl: image2,
  },
  {
    id: "5",
    title: "Mean, Mode Median(Raw) Calculator",
    text: "The Measures of Central Tendency Calculator i.e Mean Mode and Median calculator gives you the average(or mean) of a set of data; the mode(or most occuring figure) and median(the figure(s) in the middle of a set of data that has been arranged in ascending/descending order of magnitude.)",
    backgroundUrl: "./src/assets/calcCards/card-6.svg",
    iconUrl: icon2,
    imageUrl: image2,
  },
  {
    id: "6",
    title: "Mean, Mode, Median (tabulated) Calculated",
    text: "The Measures of Central Tendency (Tabulated) Calculator  is quite similar to the raw version of the calculator with an additional feature of having a frequency column with default value of '1'. The value of the frequency can be increased according to your requirement.",
    backgroundUrl: "./src/assets/calcCards/card-6.svg",
    iconUrl: icon3,
    imageUrl: image2,
  },
  {
    id: "7",
    title: "Mean, Mode Median(Grouped Data) Calculator",
    text: "As the name implies, this calculator gives you the mean, mode and median values of a set of grouped data.  It is a convenient way of calculating the Measures of Central Tendency of a Grouped Data.",
    backgroundUrl: "./src/assets/calcCards/card-6.svg",
    iconUrl: icon4,
    imageUrl: image2,
  },
  {
    id: "8",
    title: "Measures Of Dispersion(Ungrouped Data) Calculator",
    text: "The Measures of dispersion are essentially, Range( the difference between the lowest and highest values of a given data), The Mean Deviation, The Variance and Standard Deviation of a set of data. This calculator returns the afore-mentioned results when you enter the figures in the 'value' column and, optionally, adjust the 'frequency' column(which defaults to 1)",
    backgroundUrl: "./src/assets/calcCards/card-6.svg",
    iconUrl: icon1,
    imageUrl: image2,
  },
  {
    id: "9",
    title: "Measures Of Dispersion (Grouped Data) Calculator",
    text: "This is the grouped data version of Measures of Dispersion and returns Range, Mean Deviation(MD), Variance and Standard Deviation(SD). Additionally, the calculator provides the Mean value of the grouped data, as this is integral to the calculation of MD, Variance and SD, although it is worth mentioning that 'Mean' is not one of the Measures of Dispersion.",
    backgroundUrl: "./src/assets/calcCards/card-6.svg",
    iconUrl: icon2,
    imageUrl: image2,
  },
];



export const socials = [
 
  {
    id: "0",
    title: "X",
    iconUrl: x,
    url: "#",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "2",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  }  
];
