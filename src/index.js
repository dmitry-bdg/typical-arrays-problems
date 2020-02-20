
exports.min = function min (array) {
    if (typeof array === 'undefined'){
        return 0;
    }
    let min = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] < min ){
            min = array[i];
        }
    }
    return min;
};

exports.max = function max (array) {
    if (typeof array === 'undefined'){
        return 0;
    }
    let max = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > max ){
            max = array[i];
        }
    }
    return max;
};

exports.avg = function avg (array) {
    if (typeof array === 'undefined' || array.length === 0){
        return 0;
    }
  return array.reduce((acc, val) => acc + val) / array.length;
};
