// Функция для вычисления n-ого члена последовательности ряда Фибоначчи
function fibonacci(n) {
	if (n <= 2) {
		return 1;
	}

	let a = 1;
	let b = 1;
	let result = 0;

	for (let i = 3; i <= n; i++) {
		result = a + b;
		a = b;
		b = result;
	}

	return result;
}

// Вычисляем десятый член ряда Фибоначчи
const tenthFibonacci = fibonacci(10);

// Функция для проверки, является ли матрица магическим квадратом
function isMagicSquare(matrix) {
	const n = matrix.length;
	const magicSum = n * (n * n + 1) / 2;

	// Проверяем сумму строк
	for (let i = 0; i < n; i++) {
		let rowSum = 0;
		for (let j = 0; j < n; j++) {
			rowSum += matrix[i][j];
		}
		if (rowSum !== magicSum) {
			return false;
		}
	}

	// Проверяем сумму столбцов
	for (let j = 0; j < n; j++) {
		let colSum = 0;
		for (let i = 0; i < n; i++) {
			colSum += matrix[i][j];
		}
		if (colSum !== magicSum) {
			return false;
		}
	}

	// Проверяем сумму главной диагонали
	let diagSum1 = 0;
	for (let i = 0; i < n; i++) {
		diagSum1 += matrix[i][i];
	}
	if (diagSum1 !== magicSum) {
		return false;
	}

	// Проверяем сумму побочной диагонали
	let diagSum2 = 0;
	for (let i = 0; i < n; i++) {
		diagSum2 += matrix[i][n - i - 1];
	}
	if (diagSum2 !== magicSum) {
		return false;
	}

	return true;
}

// Пример квадратной матрицы
const matrix = [
	[2, 7, 6],
	[9, 5, 1],
	[4, 3, 8]
];

// Проверяем, является ли матрица магическим квадратом
const isMagic = isMagicSquare(matrix);

// Функция для генерации случайного целого числа в заданном диапазоне
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для создания массива заданной размерности с случайными значениями
function getArray(n) {
	const array = [];
	for (let i = 0; i < n; i++) {
		array.push(getRandomInt(1, 100)); // Генерируем случайное число от 1 до 100
	}
	return array;
}

// Функция для сортировки массива
function getResultArray(a) {
	return a.sort((x, y) => x - y); // Сортируем массив по возрастанию
}

// Пример использования функций
const n = 6; // Размерность массива (чётное и больше или равно 4)
const array = getArray(n);
console.log("Исходный массив:", array);

const sortedArray = getResultArray(array);
console.log("Отсортированный массив:", sortedArray);
