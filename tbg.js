function generateCirclePoints(radius, numberOfPoints) {
    const points = [];
    const angleIncrement = (2 * Math.PI) / numberOfPoints; // Угол между точками

    for (let i = 0; i < numberOfPoints; i++) {
        const angle = i * angleIncrement; // Угол в радианах
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        points.push({ x, y });
    }

    return points;
}

// Функция для вывода строк в формате text-shadow
function printTextShadow(points, color) {
    let shadowString = `text-shadow: `;

    points.forEach((point, index) => {
        shadowString += `${point.x.toFixed(2)}px ${point.y.toFixed(2)}px #${color}`;
        // Добавляем запятую, если это не последняя точка
        if (index < points.length - 1) {
            shadowString += `, `;
        }
    });

    console.log(shadowString + ";"); // Выводим строку
}

// Получаем аргументы командной строки
const args = process.argv.slice(2);
const color = args[0] || 'black'; // Цвет, по умолчанию black
const numberOfPoints = parseInt(args[1], 10) || 8; // Количество точек, по умолчанию 8
const radius = parseFloat(args[2]) || 1; // Радиус, по умолчанию 1

// Проверяем корректность количества точек и радиуса
if (isNaN(numberOfPoints) || numberOfPoints <= 0) {
    console.error("Пожалуйста, введите корректное количество точек.");
    process.exit(1);
}

if (isNaN(radius) || radius <= 0) {
    console.error("Пожалуйста, введите корректный радиус.");
    process.exit(1);
}

const points = generateCirclePoints(radius, numberOfPoints);
printTextShadow(points, color);
