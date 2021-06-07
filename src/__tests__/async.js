import {asyncPrint} from "../utilities";

/* test ("Test asynchronous printing", () => {
    return asyncPrint().then(data => {
        expect(data).toBe("Hello World");
    })
}) */

test ("Test asynchronous printing", async () => {
    await expect(asyncPrint()).resolves.toBe("Hello World");
})