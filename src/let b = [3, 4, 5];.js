let b = [3, 4, '5'];

const average = (array) => {
  let soma = 0; 
  if (array.length < 1) {
    return undefined;
  }  
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') {
      return undefined;
    }
    soma += array[i];
  }
  let media = soma / array.length;  
  console.log(Math.round(media)); 
};

average(b);