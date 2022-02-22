import { setUncaughtExceptionCaptureCallback } from "process";
import { arrayBuffer } from "stream/consumers";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const output: number[] = [];
    if (numbers.length == 0) return output;
    else if (numbers.length == 1) {
        output.push(numbers[0]);
        output.push(numbers[0]);
        return output;
    }
    output.push(numbers[0]);
    output.push(numbers[numbers.length - 1]);
    return output;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((val: number): number => val * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const to_int = numbers.map((value: string): number =>
        isNaN(parseInt(value, 10)) ? 0 : parseInt(value, 10)
    );
    return to_int;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const no_dollar = amounts.map((dollar: string): string =>
        dollar.includes("$") ? dollar.replace("$", "") : dollar
    );
    const values = no_dollar.map((dollar: string): number =>
        isNaN(Number(dollar)) ? 0 : Number(dollar)
    );
    return values;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const no_q = messages.filter(
        (sentence: string): boolean => !sentence.includes("?")
    );

    const excl = no_q.map((sentence: string): string =>
        sentence.includes("!") ? sentence.toUpperCase() : sentence
    );
    return excl;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shorties = words.filter(
        (strings: string): boolean => strings.length < 4
    );
    return shorties.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors == undefined || colors.length == 0) return true;
    const rgb = colors.filter(
        (word: string): boolean =>
            word.localeCompare("red") == 0 ||
            word.localeCompare("green") == 0 ||
            word.localeCompare("blue") == 0
    );
    return rgb.length == colors.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );

    let math;
    if (addends.length == 0) math = "0";
    else math = addends.join("+");

    return sum.toString() + "=" + math;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(input: number[]): number[] {
    const values = [...input];
    const anyNeg = values.some((value: number): boolean => value < 0);
    if (!anyNeg) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        return [...values, sum];
    }
    const output = [...values];
    const negIndex = values.findIndex((value: number): boolean => value < 0);
    const tilNeg = values.splice(0, values.length - negIndex);
    const sum = tilNeg.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    output.splice(negIndex + 1, 0, sum);
    return output;
}
