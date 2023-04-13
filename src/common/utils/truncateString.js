export const truncateString = (str) =>{
    const secondUnderscoreIndex = str.indexOf('_', str.indexOf('_') + 1);
    return str.slice(secondUnderscoreIndex + 1);
}