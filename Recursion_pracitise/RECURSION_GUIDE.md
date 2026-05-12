# Recursion — A Practical Reference

Keep this open while you practise. It's not a textbook — it's a checklist
you can apply to every recursive problem you'll ever see.

---

## 1. What recursion actually is

A function that calls itself with a **smaller version of the same problem**,
until the problem becomes so small that the answer is obvious.

That's it. Two parts:

- **Base case** → the smallest version, where you return an answer directly.
- **Recursive case** → break the problem into "one tiny piece + smaller problem",
  and trust the recursive call to handle the smaller problem.

If either part is missing or wrong, the function breaks. Most bugs are in one
of these two places.

---

## 2. The Three Questions (do this on paper, before code)

For every recursive problem, answer these in plain English first:

1. **What is the smallest version of this problem I already know the answer to?**
   → That's your base case.

2. **How do I split the input into "one tiny piece" + "a smaller version of the same problem"?**
   → That's how you shrink toward the base case.

3. **How do I combine the tiny piece with the answer to the smaller problem?**
   → That's your return statement.

If you can't answer these in English, you're not ready to write code yet.
Stop. Re-read the problem. Try an example by hand.

---

## 3. The Leap of Faith — the single most important idea

When you write `f(smaller_input)` inside `f`, you must **assume that call already works**.

Do not trace into it. Do not simulate it. Treat it as a black box that
returns the right answer.

Your only job is to answer: *"Given that the smaller problem is already solved,
what one thing do I do to finish?"*

Example — reversing a string:

```js
function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.slice(1)) + str[0];
    //     ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //     TRUST this returns the reverse of str.slice(1).
    //     Your job: glue str[0] onto the end of that.
}
```

You are not the computer. The computer will handle the stack. Your job is
to write **one correct level** of the problem.

---

## 4. The English-First Template

Before writing a single line of JS, fill this in on paper:

```
Function name:  ____________________
Promise:        "Given _____, I will return _____"
Base case:      when _____, return _____
Recursive case: trust f(smaller input) returns _____,
                then combine it with _____ to get my answer
```

If any blank is fuzzy, you don't understand the problem yet.

---

## 5. Common Shrinking Patterns

How do you make the input "smaller" each call? Pick the one that fits:

| Input type | How to shrink                              | What's the "tiny piece"  |
| ---------- | ------------------------------------------ | ------------------------ |
| Number n   | `n - 1`                                    | `n` itself               |
| Number n   | `Math.floor(n / 10)`                       | `n % 10` (last digit)    |
| String     | `str.slice(1)`                             | `str[0]` (first char)    |
| String     | `str.slice(0, -1)`                         | last char                |
| String     | `str.slice(1, -1)` (drop both ends)        | first and last char      |
| Array      | `arr.slice(1)`                             | `arr[0]` (first element) |
| Array      | split in half (for sorting / search)       | the two halves           |
| Tree node  | `node.left` and `node.right`               | `node.value`             |

Recognising which one applies is half the battle.

---

## 6. Anti-Patterns — recursion smells you should fix immediately

### ❌ Global / outer variable to accumulate the answer

```js
let sum = 0;                          // BAD
function sumDigits(n) {
    if (n === 0) return sum;
    sum += n % 10;
    return sumDigits(Math.floor(n / 10));
}
```

This is a loop in disguise. It breaks the second time you call the function
(stale state). It also blocks you from thinking about recursion correctly.

**Fix:** pass values through return statements, not outer variables.

```js
function sumDigits(n) {                // GOOD
    if (n === 0) return 0;
    return (n % 10) + sumDigits(Math.floor(n / 10));
}
```

### ❌ Trying to simulate the entire call stack in your head

If you find yourself thinking "OK so it calls itself, then it calls itself
again, then..." — stop. You're doing the computer's job. Take the leap of
faith. Trust the recursive call.

### ❌ Forgetting the base case

Without it, the function recurses forever → stack overflow.
Always write the base case **first**, before the recursive case.

### ❌ Base case that the input can never reach

Example: `if (n <= 0)` but you only ever recurse with `n % 10`, which can
never go below 0. The base case must actually be reachable from the recursive
call. Trace one example by hand to verify.

### ❌ Recursing with the same input (or larger)

`return f(n)` or `return f(n + 1)` will never terminate. The input must
shrink toward the base case.

---

## 7. How to Debug a Recursive Function

When it's broken, do these in order:

1. **Trace one small example on paper.** Not in your head. Write each call
   and what it returns.
2. **Check the base case is reachable.** Will the recursive call ever produce
   an input that triggers the base case?
3. **Check the base case returns the right value.** A common bug: returning
   `null` or `undefined` when you should return `0` or `""`.
4. **Add an indented log** to see the calls live:

   ```js
   function f(x, depth = 0) {
       console.log(" ".repeat(depth * 2) + "f(" + x + ")");
       if (/* base case */) return /* ... */;
       return /* ... */ f(/* smaller */, depth + 1);
   }
   ```

   This prints a visual call tree. Hugely helpful early on.

---

## 8. Worked Example — sum of digits

**Problem:** sum the digits of a positive integer. `sumDigits(1234) = 10`.

**Three questions:**

1. *Smallest version?* When `n === 0`, the sum of its digits is `0`.
2. *Split?* Last digit = `n % 10`. Smaller problem = `Math.floor(n / 10)`.
3. *Combine?* Add them: `(n % 10) + sumDigits(Math.floor(n / 10))`.

**Code:**

```js
function sumDigits(n) {
    if (n === 0) return 0;
    return (n % 10) + sumDigits(Math.floor(n / 10));
}
```

**Trace `sumDigits(1234)`:**

```
sumDigits(1234) = 4 + sumDigits(123)
sumDigits(123)  = 3 + sumDigits(12)
sumDigits(12)   = 2 + sumDigits(1)
sumDigits(1)    = 1 + sumDigits(0)
sumDigits(0)    = 0                    ← base case
```

Unwind upward: `0 → 1 → 1+2=3 → 3+3=6 → 6+4=10`. ✓

---

## 9. When Recursion is the Right Tool

Use recursion when the problem has **self-similar structure**:

- The input can be broken into a smaller version of itself (strings, numbers,
  arrays).
- The data is naturally tree-shaped (file systems, DOM, nested JSON, binary
  trees).
- The algorithm is naturally divide-and-conquer (merge sort, quick sort,
  binary search).

Use loops when you just need to step through a flat sequence and there's no
self-similar shape. Don't force recursion onto problems that aren't shaped
for it.

---

## 10. The Mental Shift

Loops feel natural because you watch state change one step at a time.
Recursion asks you to **trust a future version of yourself** — a call you
haven't made yet. That trust is uncomfortable. It feels like cheating.
It is not cheating; it is the whole technique.

Push through that discomfort on 5-10 small problems and a switch flips.
After that, recursion becomes the *easier* tool for problems shaped for it.

---

## Quick Drill — practise this order

1. `factorial(n)`         — simplest case of "number shrinks by 1"
2. `sumOfDigits(n)`       — number shrinks by `/10`
3. `reverseString(str)`   — string shrinks by `slice(1)`
4. `arraySum(arr)`        — array shrinks by `slice(1)`
5. `maxInArray(arr)`      — same shape, but the "combine" step changes
6. `isPalindrome(str)`    — string shrinks from BOTH ends
7. `fibonacci(n)`         — TWO recursive calls (a new shape)

Each one adds exactly one new idea on top of the previous. If a problem
feels hard, go back to the one before it and make sure that pattern is
solid first.
