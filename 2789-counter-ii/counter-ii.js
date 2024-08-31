/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let a = 0, counter = init;
    return {
        increment: function() {
            a++;
            return counter + a;
        },
        decrement: function() {
            a--;
            return counter + a;
        },
        reset: function() {
            a = 0; 
            return counter; 
        }
    };
};

/*
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
