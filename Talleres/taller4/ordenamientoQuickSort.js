var rapidorrecursivo = [[], 0];

function quicksort(rapidorrecursivo){
    let inicio = 0;
    let fin = 0;
    let vector = [rapidorrecursivo[0], inicio, fin]
    rapidorrecursivo[0] = [10, 20, 25, 15, 7, 9, 13, 21, 30, 27]
    vector[1] = rapidorrecursivo[0][0];
    vector[2] = rapidorrecursivo[0][9];
    rapidorrecursivo[1] = rapidorrecursivo[0].length
    let izquierda = 0;
    let derecha = 0;
    let posicion = 0;
    let auxiliar = 0;
    let band = 0;

    izquierda = vector[1];
    derecha = vector[2];
    posicion = vector[1];
    band = 1;

    while (band == 1) {
        band = 0;
        while ((rapidorrecursivo[0][posicion] <= rapidorrecursivo[0][derecha]) && (posicion !== derecha)) {
            derecha = derecha - 1;
        }
        if (posicion !== derecha) {
            auxiliar = rapidorrecursivo[0][posicion];
            rapidorrecursivo[0][posicion] = rapidorrecursivo[0][derecha];
            rapidorrecursivo[0][derecha] = auxiliar;
            posicion = derecha;
            while ((rapidorrecursivo[0][posicion] >= rapidorrecursivo[0][izquierda]) && (posicion !== izquierda)) {
                izquierda = izquierda + 1;
            }
            if (posicion !== izquierda) {
                band = 1;
                auxiliar = rapidorrecursivo[0][posicion];
                rapidorrecursivo[0][posicion] = rapidorrecursivo[0][izquierda];
                rapidorrecursivo[0][izquierda] = auxiliar;
                posicion = izquierda;
            }
        }
    }
    if ((posicion - 1) > vector[1]) {
        vector[0] = rapidorrecursivo[0];
        vector[1] = rapidorrecursivo[1];
        vector[2] = (posicion - 1);
    }
    if (vector[2] > (posicion + 1)) {
        vector[0] = rapidorrecursivo[0];
        vector[1] = posicion + 1;
        vector[2] = vector[2];
    }
}
let inicio = 0;
let fin = 0;
let vector = [rapidorrecursivo[0], inicio, fin]
rapidorrecursivo[0] = [10, 20, 25, 15, 7, 9, 13, 21, 30, 27]
vector[1] = rapidorrecursivo[0][0];
vector[2] = rapidorrecursivo[0][9];
rapidorrecursivo[1] = rapidorrecursivo[0].length
let izquierda = 0;
let derecha = 0;
let posicion = 0;
let auxiliar = 0;
let band = 0;

izquierda = vector[1];
derecha = vector[2];
posicion = vector[1];
band = 1;

while (band == 1) {
    band = 0;
    while ((rapidorrecursivo[0][posicion] <= rapidorrecursivo[0][derecha]) && (posicion !== derecha)) {
        derecha = derecha - 1;
    }
    if (posicion !== derecha) {
        auxiliar = rapidorrecursivo[0][posicion];
        rapidorrecursivo[0][posicion] = rapidorrecursivo[0][derecha];
        rapidorrecursivo[0][derecha] = auxiliar;
        posicion = derecha;
        while ((rapidorrecursivo[0][posicion] >= rapidorrecursivo[0][izquierda]) && (posicion !== izquierda)) {
            izquierda = izquierda + 1;
        }
        if (posicion !== izquierda) {
            band = 1;
            auxiliar = rapidorrecursivo[0][posicion];
            rapidorrecursivo[0][posicion] = rapidorrecursivo[0][izquierda];
            rapidorrecursivo[0][izquierda] = auxiliar;
            posicion = izquierda;
        }
    }
}
if ((posicion - 1) > vector[1]) {
    vector[0] = rapidorrecursivo[0];
    vector[1] = rapidorrecursivo[1];
    vector[2] = (posicion - 1);
}
if (vector[2] > (posicion + 1)) {
    vector[0] = rapidorrecursivo[0];
    vector[1] = posicion + 1;
    vector[2] = vector[2];
}

console.log(quicksort(1,rapidorrecursivo[1]));