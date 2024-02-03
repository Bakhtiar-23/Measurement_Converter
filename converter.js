const convertToGrams = () => {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const unitSelect = document.getElementById("unitSelect");
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    if (!isNaN(inputValue)) {
        let result = "";
        if (selectedUnit === "ounce") {
            const convertedValue = (inputValue * 28.3495).toFixed(2);
            result = `${inputValue} ounces is equal to ${convertedValue} grams.`;
        } else {
            result = "Please select Ounce as the input unit.";
        }
        document.getElementById("result").textContent = result;
    } else {
        document.getElementById("result").textContent = "Invalid input. Please enter a valid number.";
    }
};

const convertToOunces = () => {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const unitSelect = document.getElementById("unitSelect");
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    if (!isNaN(inputValue)) {
        let result = "";
        if (selectedUnit === "gram") {
            const convertedValue = (inputValue / 28.3495).toFixed(2);
            result = `${inputValue} grams is equal to ${convertedValue} ounces.`;
        } else {
            result = "Please select Gram as the input unit.";
        }
        document.getElementById("result").textContent = result;
    } else {
        document.getElementById("result").textContent = "Invalid input. Please enter a valid number.";
    }
};
