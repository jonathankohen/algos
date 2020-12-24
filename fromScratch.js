const revArr = arr => {
    let n = 1;
    for (let i = 0; i < arr.length; i++, n++) {
        [arr[i], arr[arr.length - n]] = [arr[arr.length - n], arr[i]];
        if (n >= arr.length / 2) {
            break;
        }
    }
    return arr;
};

console.log(revArr([1, 2, 3, 4, 5, 6]));
