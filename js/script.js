var heightInput = document.getElementById('height');
var weightInput = document.getElementById('weight');
var BMIResult = document.querySelector('.result-number');
var cmToMeters = function (cm) {
    var converted = (cm / 100);
    console.log(converted);
    return converted;
};
var setBMI = function (height, weight) {
    BMIResult.textContent = (weight / Math.pow(height, 2))
        .toFixed(1)
        .toString();
};
heightInput.addEventListener('change', function () {
    setBMI(cmToMeters(+heightInput.value), +weightInput.value);
});
weightInput.addEventListener('change', function () {
    setBMI(cmToMeters(+heightInput.value), +weightInput.value);
});
