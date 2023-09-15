var once = function(fn) {
    let calledOnce = false;
    return function(...args){
        if (!calledOnce) {
            calledOnce = true
            return response = fn(...args)
        }
    }
};