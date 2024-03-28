const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 45,
    footSize: 45,
// Серіалізація - процес перетворення JS об'єкта в JSON
// Десеріалізація - процес перетворення JSON в JS об'єкт

// Поверхнева копія об'єкту (shallow copy) - копія, де копіюються тільки посилання на елементи, а не самі значення

const originalObject = {
    users: [
        {
            name: 'John',
            age: 25
        },
        {
            name: 'Lucky',
            age: 33
        }
    ]
}

// JSON
const shallowCopy = {...originalObject};


// stringify - перетворює JS об'єкт в JSON
// parse - перетворює JSON в JS об'єкт
// Глибока копія (deep copy) - створення повноцінної копії об'єкта, де копіюються як посилання на його елементи, так і їхні значення

const jsonString = JSON.stringify(user);
const deepCopy = JSON.parse(JSON.stringify(originalObject));