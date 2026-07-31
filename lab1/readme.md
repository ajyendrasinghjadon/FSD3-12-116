# EventLoop
JS is synchronous and single threaded by default

## There can ve async behaviour 
- with BroswerAPI - setTimeout, setInterval, nextTick
- with promises
- with event handlers

## Promise
- A function not executed immediately but it must be executed after a while. Meanwhile it has sme status during the execution. At final it may resolve (success) or reject.

## Modern JavaScript is divided into 2 categories
1. Common JS (.cjs) => support OOPS => require
- priority (nextTick, )
2. ModuleJS (.mjs) => follows modular approach => import
- priority (Promise, nextTick, setImmediate/setTimeout)