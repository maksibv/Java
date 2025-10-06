let n = parseInt(prompt("Введите размер квадратной матрицы n:"));

let matrix = [];
for (let i = 0; i < n; i++) {
    let row = prompt(`Введите ${n} элементов строки ${i + 1} через пробел:`)
        .split(" ")
        .map(Number);
    matrix.push(row);
}

if (matrix.flat().every(val => val === 0)) {
    alert("Все элементы равны нулю, задача не может быть выполнена.");
} else {
    let maxAbs = Math.max(...matrix.flat().map(Math.abs));

    let newMatrix = matrix.map((row, i) =>
        row.map((val, j) => (i > j ? val / maxAbs : val))
    );

    let output = newMatrix.map(row => row.join("\t")).join("\n");
    alert("Новая матрица:\n" + output);
}
