export function calcServiceLevel (accept, skip) {
    if (accept !== 0 && skip ===0){
        return 100
    } else if (accept === 0 && skip ===0){
        return 0
    }
    else if (accept < skip){
        return 0
    }
    else if (accept > 0 && skip !== 0){
        debugger
        return ((accept / (accept + skip)) * 100).toFixed(1)
    } else if (accept === 0 && skip !==0){
        return 0
    }
}