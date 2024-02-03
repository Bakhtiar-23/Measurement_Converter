const convertOuncesToGrams = (measurements) => {
    // Conversion factor: 1 ounce = 28.3495 grams
    const OUNCES_TO_GRAMS = 28.3495;

    return measurements.map((measurement) => {
        // Check if the unit is in ounces
        if (measurement.unit.toLowerCase() === "ounce") {
            const weightInGrams = parseFloat((measurement.weight * OUNCES_TO_GRAMS).toFixed(2));
            return { ...measurement, unit: "gram", weight: weightInGrams };
        }

        // If the unit is already in grams, no conversion needed
        return measurement;
    });
};

// Example usage
const measurements = [
    { batchid: 434, unit: "ounce", weight: 12.21 },
    { batchid: 414, unit: "gram", weight: 199.54 },
    { batchid: 522, unit: "ounce", weight: 18.88 }
];

const convertedMeasurements = convertOuncesToGrams(measurements);
console.log(convertedMeasurements);
