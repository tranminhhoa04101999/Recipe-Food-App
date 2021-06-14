import Meal from "../model/meal";
import Category from "../model/category";

export const CATEGORYS = [
    new Category('c1', "Món mặn"),
    new Category('c2', "Món Chay"),
];

export const MEALS = [
    new Meal(
        'm1',
        'c1',
        'Ếch Xào Lăn',
        'https://i.imgur.com/v76aI8Y.jpg',
        '30p',
        '1 phần'
    ),
    new Meal(
        'm2',
        'c1',
        'Cơm chiên gà xối mỡ',
        'https://i.imgur.com/y2Zvh3W.jpg',
        '20p',
        '1 phần'
    ),
    new Meal(
        'm4',
        'c2',
        'Mỳ Chay',
        'https://imgur.com/Aqsio2H.jpg',
        '30p',
        '1 lần'
    ),

    new Meal(
        'm5',
        'c2',
        'Mỳ Chay',
        'https://imgur.com/Aqsio2H.jpg',
        '30p',
        '1 lần'
    ),
    new Meal(
        'm6',
        'c2',
        'Mỳ Chay',
        'https://imgur.com/Aqsio2H.jpg',
        '30p',
        '1 lần'
    ),
    new Meal(
        'm7',
        'c2',
        'Mỳ Chay',
        'https://imgur.com/Aqsio2H.jpg',
        '30p',
        '1 lần'
    ),
    new Meal(
        'm8',
        'c2',
        'Mỳ Chay',
        'https://imgur.com/Aqsio2H.jpg',
        '30p',
        '1 lần'
    ),
    new Meal(
        'm9',
        'c2',
        'Mỳ Chay',
        'https://imgur.com/Aqsio2H.jpg',
        '30p',
        '1 lần'
    ),
];