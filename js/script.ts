const heightInput = document.getElementById('height') as HTMLInputElement;
const weightInput = document.getElementById('weight') as HTMLInputElement;
const BMIResult = document.querySelector(
    '.result-number'
) as HTMLParagraphElement;

const cmToMeters = (cm: number) => {
    const converted = (cm / 100);
    console.log(converted);
    
    return converted;
};

const setBMI = (height: number, weight: number) => {
    BMIResult.textContent = (weight / Math.pow(height, 2))
        .toFixed(1)
        .toString();
};

heightInput.addEventListener('change', () => {
    setBMI(cmToMeters(+heightInput.value), +weightInput.value);
});

weightInput.addEventListener('change', () => {
    setBMI(cmToMeters(+heightInput.value), +weightInput.value);
});
