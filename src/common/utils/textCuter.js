/*const text = 'много много текстов ...';
const str = text.slice(0,100); //например макс 100 символов
const a = str.split(' ');
a.splice(a.length-1,1);
str = a.join(' ');
alert(str+' ...');*/
export const textCuter = (text) => {

    let str = text.slice(0,100); //например макс 100 символов
    const a = str.split(' ');
    a.splice(a.length-1,1);
    return str = a.join(' ') + '...';
}