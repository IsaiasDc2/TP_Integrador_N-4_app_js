
const calcularPromedio = (notas) => {
  const suma = notas.reduce((acc, nota) => acc + nota, 0);
  return suma / notas.length;
};


const filtrarAprobados = (alumnos) => {
  return alumnos.filter(alumno => alumno.nota >= 6);
};


const formatearAlumnos = (alumnos) => {
  return alumnos.map(alumno => `Nombre: ${alumno.nombre} - Nota: ${alumno.nota}`);
};


const buscarAlumno = (alumnos, nombre) => {
  return alumnos.find(alumno => alumno.nombre === nombre);
};

const alumnos = [
  { nombre: "Flor", nota: 3 },
  { nombre: "Abi", nota: 1 },
  { nombre: "Isaias", nota: 7 },
  { nombre: "Ana", nota: 4 }
];

console.log("Promedio:", calcularPromedio([3, 1, 7, 4]));
console.log("Aprobados:", filtrarAprobados(alumnos));
console.log("Formateados:", formatearAlumnos(alumnos));
console.log("Buscar Isaias:", buscarAlumno(alumnos, "Isaias"));