export function calcServiceLevel (accept, skip) {
    if (accept !== 0 && skip ===0){
        return 100
    } else if (accept === 0 && skip ===0){
        return 0
    } else if (accept > 0 && skip !== 0){
        return (100 - ((skip / accept) * 100)).toFixed(1)
    } else if (accept === 0 && skip !==0){
        return 0
    }
}