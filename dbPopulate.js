//importación de la dependencia
import {mock2firestore} from 'mock2firestore';
//db representa la conexión con la Base de datos de Firestore, creada aquí, en el archivo firebaseConfig.js
import {db} from './src/utils/firebaseConfig.js';
//mockData representa el array con los datos a llevar a la Base de Datos
// import {mockData} from './mockData.js';
import {items} from './src/utils/items.js';

//'products' es el nombre de la colección
//Con 3 argumentos, la función crea los documentos con ID automáticos (generados por Firestore)
mock2firestore(items, db, 'items');
