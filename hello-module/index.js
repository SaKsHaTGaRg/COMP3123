exports.name ="Hello Module";
exports.version = "1.0.0";
exports.description = "A simple hello world module";
exports.author = "Sakshat";

exports.getInfo = function() {
    return `${this.name} v${this.version} - ${this.description} by ${this.author}`;
}

exports.add = function(a, b) {
    return a + b;
}
exports.subtract = function(a, b) {
    return a - b;
}
exports.multiply = function(a, b) {
    return a * b;
}
exports.divide = function(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a/b;
}