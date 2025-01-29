function categorizeDevice(screenSize, hasTouchscreen, isPortable) {
    if (screenSize <= 0) {
        return "Invalid screen size";
    }

    switch (true) {
        case screenSize < 6:
            return "Smartwatch";
        case screenSize >= 6 && screenSize < 12:
            return "Smartphone";
        case screenSize >= 12 && screenSize < 16:
            return hasTouchscreen ? "Tablet" : "Small Laptop";
        case screenSize >= 16 && screenSize < 20:
            return hasTouchscreen ? (isPortable ? "Convertible Laptop" : "Touchscreen Monitor") : "Large Laptop";
        default:
            return isPortable ? "Portable Monitor" : "Desktop";
    }
}

console.log(categorizeDevice(3, true, true));
console.log(categorizeDevice(6, true, true));
console.log(categorizeDevice(14, true, true));
console.log(categorizeDevice(14, false, true));
console.log(categorizeDevice(17, true, true));
console.log(categorizeDevice(17, true, false));
console.log(categorizeDevice(17, false, true));
console.log(categorizeDevice(24, false, false));
console.log(categorizeDevice(24, true, true));
console.log(categorizeDevice(-5, false, false));