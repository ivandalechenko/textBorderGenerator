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
function printTextShadow(points, shadowColor, offsetX, offsetY) {
    let shadowString = `text-shadow: `;

    points.forEach((point, index) => {
        shadowString += `${(point.x + offsetX).toFixed(2)}px ${(point.y + offsetY).toFixed(2)}px #${shadowColor}`;
        // Добавляем запятую, если это не последняя точка
        if (index < points.length - 1) {
            shadowString += `, `;
        }
    });

    console.log(shadowString + ";"); // Выводим строку
}

// Получаем аргументы командной строки
const args = process.argv.slice(2);
const outlineColor = args[0] || '000000'; // Цвет обводки, по умолчанию черный
const numberOfShadows = parseInt(args[1], 10) || 8; // Количество теней, по умолчанию 8
const outlineThickness = parseFloat(args[2]) || 1; // Толщина обводки, по умолчанию 1
const offsetX = parseFloat(args[3]) || 0; // Смещение по оси X, по умолчанию 0
const offsetY = parseFloat(args[4]) || 0; // Смещение по оси Y, по умолчанию 0
const shadowColor = args[5] || 'FFFFFF'; // Цвет тени, по умолчанию белый

// Проверяем корректность количества теней и толщины обводки
if (isNaN(numberOfShadows) || numberOfShadows <= 0) {
    console.error("Пожалуйста, введите корректное количество теней.");
    process.exit(1);
}

if (isNaN(outlineThickness) || outlineThickness <= 0) {
    console.error("Пожалуйста, введите корректную толщину обводки.");
    process.exit(1);
}

// Генерируем точки для обводки
const points = generateCirclePoints(outlineThickness, numberOfShadows);

// Выводим текстовые тени
printTextShadow(points, shadowColor, offsetX, offsetY);
