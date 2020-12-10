// Write your solution in this file!


const driver = {}

function updateDriverWithKeyAndValue(driverObject, key, value) {
    return Object.assign({}, driverObject, { [key] : value });
}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
    return Object.assign(driverObject, { [key] : value });
}

function deleteFromDriverByKey(driver, key) {
    const newObj = { ...driver }
    delete newObj[key];
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
}