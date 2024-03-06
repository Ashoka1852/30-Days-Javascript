//Lets start with the default code: 

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */





//Solution Code: 
/**
 * @return {Function}
 */


var createHelloWorld = function() {
    


    return function() {
        return "Hello World"
        
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
