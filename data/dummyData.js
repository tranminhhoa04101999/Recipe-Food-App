import Meal from "../model/meal";
import Category from "../model/category";

export const CATEGORYS = [
    new Category('c1', "Món mặn"),
    new Category('c2', "Món Chay"),
];

export const MEALS = [
    new Meal(
        'm1',
        'Món mặn',
        'Ếch Xào Lăn',
        'https://i.imgur.com/v76aI8Y.jpg',
        '30 phút',
        '1 phần',
        true,
        [
            '4 Tomatoes',
            '1 Tablespoon of Olive Oil',
            '1 Onion',
            '250g Spaghetti',
            'Spices',
            'Cheese (optional)',
            '1 Slice White Bread',
            '1 Slice Ham',
            '1 Slice Pineapple',
            '1-2 Slices of Cheese',
            'Butter', '1 Slice White Bread',
            '1 Slice Ham',
            '1 Slice Pineapple',
            '1-2 Slices of Cheese',
            'Butter'
        ],
    ),
    new Meal(
        'm2',
        'Món mặn',
        'Cơm chiên gà xối mỡ',
        'https://i.imgur.com/y2Zvh3W.jpg',
        '20 phút',
        '1 phần',
        false,
        [
            '1 Slice White Bread',
            '1 Slice Ham',
            '1 Slice Pineapple',
            '1-2 Slices of Cheese',
            'Butter'
        ],
    ),
    new Meal(
        'm3',
        'Món Chay',
        'Mỳ Chay',
        'https://imgur.com/Aqsio2H.jpg',
        '30 phút',
        '1 lần',
        true,
        [
            '1 Slice White Bread',
            '1 Slice Ham',
            '1 Slice Pineapple',
            '1-2 Slices of Cheese',
            'Butter'
        ],
    ),
    new Meal(
        'm11',
        'Món mặn',
        'Ếch Xào Lăn',
        'https://i.imgur.com/v76aI8Y.jpg',
        '30p',
        '1 phần',
        false,
        [
            '1 Slice White Bread',
            '1 Slice Ham',
            '1 Slice Pineapple',
            '1-2 Slices of Cheese',
            'Butter'
        ],
    ),
    new Meal(
        'm22',
        'Món mặn',
        'Cơm chiên gà xối mỡ',
        'https://i.imgur.com/y2Zvh3W.jpg',
        '20p',
        '1 phần',
        true,
        [
            '1 Slice White Bread',
            '1 Slice Ham',
            '1 Slice Pineapple',
            '1-2 Slices of Cheese',
            'Butter'
        ],
    ),
    new Meal(
        'm33',
        'Món Chay',
        'Mỳ Chay',
        'https://imgur.com/Aqsio2H.jpg',
        '30p',
        '1 lần',
        true,
        [
            '1 Slice White Bread',
            '1 Slice Ham',
            '1 Slice Pineapple',
            '1-2 Slices of Cheese',
            'Butter'
        ],
    ),


];