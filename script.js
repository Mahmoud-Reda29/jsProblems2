
const questionsAndAnswers = [
    {
        question: `1. Write a function that uses a for loop to print numbers from 1 to 10. If the number is divisible by 3, skip printing the number.`,
        answer: () => {
            let numbers = []
            for (let i = 1; i <= 10; i++) {
                if (i % 3 == 0) {
                    continue
                }
                numbers.push(i)
            }
            return `Numbers Are: ` + numbers
        },
    },
    {
        question: `2. Write a function that uses a while loop to calculate the sum of numbers from 1 to 100.`,
        answer: () => {
            let numbers = []
            let i = 1;
            while (i <= 100) {
                numbers.push(i)
                i++;
            }
            return `Numbers From 1 to 100: ` + numbers
        }
    },
    {
        question: `3. Implement a function using forEach to iterate over an array and print each element.`,
        answer: () => {
            let array = ["Route", "FullStack", "Web Development"]
            let text = ""
            array.forEach((e) => {
                text += e + " "
            })
            return text
        }
    },
    {
        question: `4. Explain the difference between forEach and for...of loops in JavaScript.`,
        answer: () => {
            return `
            Both are used to construct a loop But:\n
            (for of) is a language statement while (forEach) is a method.\n
            So (for of) can be used with any iterable (Arrays, Strings, Maps), while (forEach) works only on (Arrays, NodeList).\n
            Break and Continue can be used with (for of) but cannot be used with (forEach).\n
            (forEach) accepts a callback function with the following arguments (currentValue, index, array), but (for of) gives access directly to the element without any callback function.\n
        `;
        }
    },
    {
        question: `5. Write a function that destructures an object to extract values and returns a formatted string.`,
        answer: () => {
            let obj = {
                name: 'John',
                age: 25
            }
            const { name, age } = obj
            return `Object Used ${JSON.stringify(obj)} and Output is ` + `${name} is ${age} years old`
        }
    },
    {
        question: `6. Use the spread operator to merge two arrays, then return the merged array.`,
        answer: () => {
            let arr1 = [1, 2, 3, 4, 5]
            let arr2 = [6, 7, 8, 9, 10]
            let Merged = [...arr1, ...arr2]
            return `First Array is: [${arr1}] , Second Array is: [${arr2}] so Merged Array is: [${Merged}]`
        }
    },
    {
        question: `7. Write a function that accepts multiple parameters (two or more) and returns their sum.`,
        answer: () => {
            return sum(15, 15, 15, 15, 15)
        }
    },
    {
        question: `8. Compare primitive and non-primitive data types in JavaScript with examples.`,
        answer: () => {
            return `
            Primitive data types are the built-in data types provided by JavaScript. They represent single values and are not mutable.\n
            Non-primitive data types, also known as reference types, are objects and derived data types. They can store collections of values or more complex entities.\n
            \n
            Primitive Data Types with Examples:\n
            1- String example: (let x = "Mahmoud" , let x = 'Mahmoud' , let x = \`mahmoud\`)\n
            2- Number example: (let x = 5 , let x = 5.5 )\n
            3- Null\n
            4- Undefined\n
            5- Boolean example: (let x = true , let y = false)\n
            \n
            Non-Primitive Data Types with Examples:\n
            1- Array example: (let x = [1,2,3,4,5])\n
            2- Object example: (let x = { name: "Mahmoud" , age: 25 })\n
            `;

        }
    },
    {
        question: `9. Explain how hoisting works in JavaScript and describe the Temporal Dead Zone`,
        answer: () => {
            return `
            Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their respective scopes during the compilation phase.
            This means that variables can be accessed and used before they are declared as only the declarations are hoisted not initializations or assignment
            hoisting using var vs hoisting using let
            Using Var: var keyword are hoisted to the top of their scope and have an initial value of undefined until they are assigned a specific value
            Using Let: variables declared with let and const are also hoisted, but they remain in the TDZ until their declaration is reached in the code execution flow so it gives following error
            that variable is not initialized
            TDZ: The Temporal Dead Zone is a concept introduced in ECMAScript 2015 (ES6) as part of the let and const variable declarations.
            It is a specific region within a scope where variables exist but cannot be accessed until they are assigned a value.
            This zone starts at the beginning of the scope and continues until the point of declaration.
            When trying to access variable in it , it throws A ReferenceError that variable is not initialized
            In Conclusion: The TDZ ensures that variables are accessed only after their declaration, preventing potential issues. On the other hand,
            hoisting allows variables declared with var to be accessed before their declaration, but with the caveat of an initial value of undefined
            `
        }
    },
    {
        question: `10. Write a function that demonstrates closure by creating a counter function that returns the number of times it has been called.`,
        answer: () => {
            return `Closure count results: ${inner()}, ${inner()}, ${inner()}`;
        }
    },
    {
        question: `11. Create a function that returns a promise which resolves after 3 seconds with a 'Success' message.`,
        answer: () => {
            eleven().then((msg) => {
                console.log('msg From CallBack is:' + msg);
            })
            return `wait for 3 seconds then Check Console}`
        }
    },
    {
        question: `12. Convert the previous promise-based function to use async and await.`,
        answer: async () => {
            let msg = await eleven();
            return `wait for 3 seconds then:` + JSON.stringify(msg)
        }
    },
    {
        question: `13. Create a function that returns a promise, which resolves if a random number is greater than 5, otherwise it rejects.`,
        answer: async () => {
            try {
                let msg = await twelve();
                return JSON.stringify(msg)
            } catch (error) {
                return error
            }
        }
    },
    {
        question: `14. Implement a function that chains multiple .then() handlers to a promise to demonstrate promise chaining.`,
        answer: async () => {
            let msg = await fourteen();
            return msg;
        }
    },
    {
        question: `15. Implement a function that handles errors using try...catch in an asynchronousoperation.`,
        answer: async () => {
            try {
                let res = await fetch('https://fakestoreapi.com/products');
                let data = await res.json()
                console.log(data);
                if (res) {
                    return `Response is ok `
                }
            } catch (error) {
                return error
            }
        }
    },
]

let sum = (...arguments) => {
    let sum = 0;
    for (let arg of arguments) {
        sum += arg
    }
    return sum
}

let outer = () => {
    let count = 0
    function inner() {
        count++;
        return count
    }
    return inner;
}

let inner = outer()

let eleven = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success")
        }, 3000)
    })
}
let twelve = () => {
    return new Promise((resolve, reject) => {
        let number = Math.floor(Math.random() * 10);
        if (number > 5) {
            resolve(`Number is greater than 5: ${number}`);
        } else {
            reject(`Number is 5 or less : ${number}`);
        }
    })
}


function fourteen() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 1 Complete"), 1000);
    })
        .then((r1) => {
            return new Promise((resolve) => {
                setTimeout(() => resolve(`${r1}, Step 2 Complete`), 2000);
            });
        })
        .then((r2) => {
            return new Promise((resolve) => {
                setTimeout(() => resolve(`${r2}, Step 3 Complete`), 3000);
            });
        })
        .then((r3) => {
            return `${r3}, All steps complete`;
        });
}

async function handleBoxClick(boxId) {
    const questionObj = questionsAndAnswers[boxId - 1];

    if (questionObj) {
        document.getElementById('question').textContent = questionObj.question;

        if (typeof questionObj.answer === 'function') {
            let answer = questionObj.answer();

            if (answer instanceof Promise) {
                answer = await answer;
            }

            document.getElementById('answer').textContent = answer;
        } else {
            document.getElementById('answer').textContent = questionObj.answer;
        }
    } else {
        document.getElementById('question').textContent = "Question not found!";
        document.getElementById('answer').textContent = "";
    }
}

for (let i = 1; i <= 15; i++) {
    const box = document.getElementById(`box${i}`);
    if (box) {
        box.addEventListener('click', () => handleBoxClick(i));
    }
}
