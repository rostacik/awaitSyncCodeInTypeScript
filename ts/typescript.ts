function someSyncFunction(param: string): string {
    console.log(`someSyncFunction : ${param}`);

    return `passed in value ${param}`;
}

function someAsyncFunction(message: string): Promise<boolean> {
    let promise = new Promise<boolean>(function (resolve, reject) {
        let res = confirm(message);
        console.log(`someAsyncFunction : ${res}`);
        resolve(res);
    });

    return promise;
}

async function awaitFn1(): Promise<void> {
    let res = await someAsyncFunction("hello from awaitFn1");
    await someSyncFunction(String(res));

    console.log(`awaitFn1 : ${res}`);
}

async function awaitFn2(): Promise<void> {
    let res = await someAsyncFunction("hello from awaitFn2");

    console.log(`awaitFn2 : ${res}`);
}

async function awaitFn3(): Promise<void> {
    let res = await someSyncFunction("hello from awaitFn3");

    console.log(`awaitFn2 : ${res}`);
}