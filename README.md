# compare-time

    - This NPM is for comparing time which you want with the current time.

## API documentation:

    - After installing it, you can expriment it.
    - You give it the time in an obiect format, then you have the difference between the time you offered and the current time.

## Installation

    - Use the following command to install it:
        - npm i -g compare-time --save

## Using

    import compareTime from "compare-time";

    // the initial Time

    const initialTime = {
        hr: 10,
        min: 43,
        sec: 50,
        ms: 20,
        timeInMs: 0,
    };

    let time = compareTime(initialTime,[0], true);

## What you'll have

    - You'll have an obiect of the time like this :
    {
        hr: 0, // hours
        min: 20, // minutes
        sec: 30, // seconds
        ms: 500, // milliseconds
        timeInMs: 1230500 // time in milliseconds
    }
