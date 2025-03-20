import macbookm3 from "../public/img/macbook.webp"
import Macos from "../public/img/macos.jpg"
import keyboard from "../public/img/keyboard.jpg";
import magic from "../public/img/magic.jpg";
import minimac from "../public/img/macmini.jpg"
import Airpods from "../public/img/aipods.jpg"


//rang generator hash code bilan random bulib beriladi render bulganda uzgarmayudi



export const getStableColor = (_id: string) => {
    const colours = [
        "#c38cee",
        "#9ad3bc",
        "#8bcdcd",
        "#ee7093",
        "#65ddae",
        "#67db73"
    ]
    if (!_id) return colours[0];

    const hash = _id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    return colours[hash % colours.length];  // Sof HEX rangni qaytaramiz
  };
  

export const getProducts = async() => [
    {
        id: 1,
        image: macbookm3,
        title: "Macbook Air 2",
        description: "Yangi M3 chipli MacBook Air",
        coin: 200,
        qolganproduct: 10,
        levelRequired: 2
    },
    {
        id: 2,
        image: Macos,
        title: "Macbook Monitor",
        description: "Yangi Macbook Monitor ekran o'zini",
        coin: 500,
        qolganproduct: 4,
        levelRequired: 2
    },
    {
        id: 3,
        image: keyboard,
        title: "Macbook keyboard",
        description: "Yangi MacBook keyboard rangi oq",
        coin: 50,
        qolganproduct: 30,
        levelRequired: 3
    },
    {
        id: 4,
        image: magic,
        title: "Macbook Magic mouse 2",
        description: "Yangi Magic mouse 2 rangi oq, juda qulay",
        coin: 30,
        qolganproduct: 50,
        levelRequired: 1
    },
    {
        id: 5,
        image: minimac,
        title: "Macbook Mini mac",
        description: "Yangi MacBook Mini mac",
        coin: 500,
        qolganproduct: 3,
        levelRequired: 4
    },
    {
        id: 6,
        image: Airpods,
        title: "Macbook Airpods 2",
        description: "Yangi Macbook Airpods 2, rangi oq va kulrang, juda qulay",
        coin: 100,
        qolganproduct: 25,
        levelRequired: 2
    }

]