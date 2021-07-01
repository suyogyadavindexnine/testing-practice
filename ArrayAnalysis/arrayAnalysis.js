const analyse = (arr) =>{
    let average,sum=0;
    arr.forEach(element => {
        sum = sum + element;
    });
    average = sum/arr.length;

    const object ={
        min: Math.min(...arr),
        average,
        max: Math.max(...arr),
        length: arr.length,
    }
    console.log(object);
    return object;
}

module.exports = analyse;