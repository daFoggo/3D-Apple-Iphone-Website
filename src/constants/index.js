import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
    {
        id: 1,
        textLists: [
            "Enter A17 Pro.",
            "Game‑changing chip.",
            "Groundbreaking performance.",
        ],
        video: highlightFirstVideo,
        videoDuration: 4,
    },
    {
        id: 2,
        textLists: ["Titanium.", "So strong. So light. So Pro."],
        video: highlightSecondVideo,
        videoDuration: 5,
    },
    {
        id: 3,
        textLists: [
            "iPhone 15 Pro Max has the",
            "longest optical zoom in",
            "iPhone ever. Far out.",
        ],
        video: highlightThirdVideo,
        videoDuration: 2,
    },
    {
        id: 4,
        textLists: ["All-new Action button.", "What will yours do?."],
        video: highlightFourthVideo,
        videoDuration: 3.63,
    },
];

export const models = [
    {
        id: 1,
        title: "iPhone 15 Pro in Natural Titanium",
        color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
        img: yellowImg,
    },
    {
        id: 2,
        title: "iPhone 15 Pro in Blue Titanium",
        color: ["#53596E", "#6395ff", "#21242e"],
        img: blueImg,
    },
    {
        id: 3,
        title: "iPhone 15 Pro in White Titanium",
        color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
        img: whiteImg,
    },
    {
        id: 4,
        title: "iPhone 15 Pro in Black Titanium",
        color: ["#454749", "#3b3b3b", "#181819"],
        img: blackImg,
    },
];

export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
];

export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
];

export const deviceInfo = [
    {
        id: 1,
        name: "Iphone 15 Pro",
        size: "6.1-inch display",
        price: "From $999 or $41.62/mo.per month for 24 mo.months",
        color: ["#bbb5a9", "#4a5261", "#f3f2ed", "#525455"],
    },
    {
        id: 2,
        name: "Iphone 15 Pro Max",
        size: "6.7-inch display",
        price: "From $1199 or $49.95/mo.per month for 24 mo.months",
        color: ["#bbb5a9", "#4a5261", "#f3f2ed", "#525455"],
    }
]

export const storageInfo = [
    {
        id: 1,
        size: "128GB",
        price: "From $999 or $41.62/mo.per month for 24 mo.months",
    },
    {
        id: 2,
        size: "256GB",
        price: "From $1099 or $45.79/mo.per month for 24 mo.months",
    },
    {
        id: 3,
        size: "512GB",
        price: "From $1299 or $54.12/mo.per month for 24 mo.months",
    },
    {
        id: 4,
        size: "1TB",
        price: "From $1499 or $62.46/mo.per month for 24 mo.months",
    }
]