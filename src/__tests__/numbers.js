import {addNumbers} from "../utilities";

test ("check the addition of numbers", () => {
    expect(addNumbers(4, 5)).toEqual(9);
})

test ("adding floating point numbers", () => {
    expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3);
})