export type DrinkType = 'espresso' | 'latte' | 'tea';

export type Operator = "+" | "-";

export interface Order{
    espresso: number;
    latte: number;
    tea: number;
};

export const menuCost : Record<DrinkType, number>={
    espresso: 50,
    latte: 70,
    tea: 40,
}

export const list = Object.keys(menuCost) as DrinkType[];
