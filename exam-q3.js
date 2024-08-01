// Promise my_promise = Promise.new();
// my_promise.accept = function(results) { return 1 }
// my_promise.reject = function(error) { return err.line_number }
// my_promise.execute();

//promise has to be defined
class Promise{
    accept;
    reject;

    constructor(){
        this.accept=0
        this.reject=0
    }
    
    excute(){
        //some logic
    }
}