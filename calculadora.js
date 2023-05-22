/* module.exports = {
    sumar : function(a,b) {
        return a + b
    },
    restar : function(a,b) {
        return a - b
    }
} */


const sumar = function(a,b) {
    return a + b
}
const restar = function(a,b) {
    return a - b
}

const multiplicar = function(a,b){
    return a * b
}

module.exports = {
    sumar,
    restar,
    multiplicar
}