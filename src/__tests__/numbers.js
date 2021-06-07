import {addNumbers } from "../utilities";

test ("check the addition of numbers", () => {
    expect(addNumbers(4, 5)).toEqual(9);
})