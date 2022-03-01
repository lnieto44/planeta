console.warn('Delcarar variables');
let nombrePlanetas = Array('Tierra', 'Marte')
let distancia = [6,3, '67']

const tamaño = [10, 20, 30]

console.log({ nombrePlanetas });
console.log({ distancia });
console.log({ tamaño });

console.warn('Ciclo while');
let i = 0;
while (i <= nombrePlanetas.length - 1) {
  console.log({ i });
  console.log(nombrePlanetas[i]);
  i += 1;
}

console.warn('Ciclo for');
for (let index= 0; i < nombrePlanetas.length; index++) {
  console.log(nombrePlanetas[index]);
}

for (const key in Object){
  if (Object.hasOwnProperty.call(Object, key)){
      const element = Object[key];
  }
}

console.warn('Ciclo for In');
for (const key in nombrePlanetas) {
  console.log(nombrePlanetas[key]);
}

//Recorrer planeta
console.warn('Ciclo for of');
for (const planeta of nombrePlanetas) {
  console.log(planeta);
}

//distancia_planetas

//let distancia = [5,3, '67'];

//Operador de igualdad
console.warn('Ciclo for in Distancias ==');
for (const key in distancia) {
  if (distancia[key]=='5') {
    console.log('Se encontró la distancia')
  }else {
    console.log('no se encontró la distancia')
  }
}

//Operador de igualdad
console.warn('Ciclo for in Distancias ==');
for (const key in distancia) {
  if (distancia[key]=='5') {
    console.log('Se encontró la distancia')
  }else {
    console.log('no se encontró la distancia')
  }
}

console.warn('forEach');
nombrePlanetas.push('Jupiter');
nombrePlanetas.forEach((value, index) => {
  console.log(`planeta ${index}, ${value} `);
});


let resultadoMap = nombrePlanetas.map((planetas, index) => {
  return `El planeta ${planetas} tiene el tamaño de :${tamaño[index]}`;
});
console.log(resultadoMap);