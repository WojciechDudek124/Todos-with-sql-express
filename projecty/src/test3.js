const {setTimeout} = require('timers/promises');

(async () => {
    console.log('Hi!');
    await setTimeout(1000);
    console.log('Hello!');
})();