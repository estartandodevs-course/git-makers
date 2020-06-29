const a = [1, 2, 3];

const b = [3, 2, 1];

function result(x, y){

    var pontX = 0;
    var pontY = 0;

    for(var i = 0; i < a.length; i++){

        if(x[i] > y[i]) pontX++
         if (x[i] < y[i]) pontY++
    }
    console.log(`[${pontX}, ${pontY}]`)
}

result(a,b)