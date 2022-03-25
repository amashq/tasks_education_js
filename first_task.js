// 1. Функция, вычисляющая корни квадратного уравнения 
const calculateQuadraticEquation = (a, b, c) => {
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) return false;
    if (discriminant === 0) return -b / (2 * a);
    const rootOfDiscriminant = Math.sqrt(discriminant);
    const root1 = (-b + rootOfDiscriminant) / (2 * a);
    const root2 = (-b - rootOfDiscriminant) / (2 * a);
    return [root1, root2];
};

// 2. Вычисление и запись в массив корней уравнений
const arrayOfEquations = [[-4, 28, -49], [6, 0, -54], [1, -1, 0], [1, 0, -49], [1, -2, -24]];
const arrayOfResults = [];

for (const equation of arrayOfEquations) {
    const result = calculateQuadraticEquation(...equation);
    Array.isArray(result) ? arrayOfResults.splice(-1, 0, result[0], result[1]) : arrayOfResults.push(result);
}

// 3. Разделение массива корней уравнений на 2 масссива: в первый входят все числа > =0, во второй остальные
const arrayOfPositiveNumbers = [];
const arrayOfNegativeNumbers = [];

for (const result of arrayOfResults) {
    (result >= 0) ? arrayOfPositiveNumbers.push(result) : arrayOfNegativeNumbers.push(result);
}

// 4. Две функции - для сортировки массива по убыванию и по возрастанию
const descendingSort = arr => arr.sort((a, b) => b - a);

const ascendingSort = arr => arr.sort((a, b) => a - b);

// 5. Сортировка  массива положительных чисел по убыванию, массива отрицательных по возрастанию
descendingSort(arrayOfPositiveNumbers);
ascendingSort(arrayOfNegativeNumbers);

// 6. Конкатенация полученных массивов
const concatArrays = arrayOfPositiveNumbers.concat(arrayOfNegativeNumbers);

// 7. Функция, возводящая число в квадрат
const squaring = num => Math.pow(num, 2);

// 8. Получение массива, элементы которого – квадраты чисел массива из п.6
const arraySquaring = concatArrays.map(item => squaring(item));

// 9. Функция, удаляющая повторяющиеся элементы
const saveUniqueArrayElement = arr => {
    let result = [];
    for (let element of arr) {
        if (!result.includes(element)) result.push(element);
    }
    return result;
}
// 10. Удаление повторяющихся элементов из массива из п.8
const uniqueArray = saveUniqueArrayElement(arraySquaring);
