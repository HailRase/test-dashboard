export function findUniqueObjInArray (arr, name) {
    const uniqueObjects = [];
    const seenValues = new Set();

    for (const obj of arr) {
        if (obj.name === name && !seenValues.has(`${obj.x},${obj.y}`)) {
            uniqueObjects.push(obj);
            seenValues.add(`${obj.x},${obj.y}`);
        }
    }

    return uniqueObjects;
}