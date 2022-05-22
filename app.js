const _ = require('lodash');

const numbers = [33.25,67,35,21.5];

_.each(numbers, function(number, i){
    console.log(number);
});