import { test, expect } from '@playwright/test';
import { resolve } from 'node:dns';

test('Js concept demo', async ({ page }) => {

//   // 1. Scope
  let a = 10;
  function scopetest()
  {
    let b = 20;
    console.log(a + b);
  }
  scopetest();

//   // 2. closure
  function outer()
  {
    let name = "vivek";
    return function inner()
    {
      console.log(name);
    }
  }
  outer();

  // 3. Call back
  function  greet(name, callback)
  {
    callback(name);
  }
  greet("vivek", (n) => console.log("Hello " + n));

  //4. Promise
  let promise = new Promise((resolve) => {
    resolve("Promise resolved");
  });
  promise.then(res => console.log(res));

  //5. async function
  async function asyncFunc() {
    return 'Async function';
  }
  console.log(await asyncFunc());
});
