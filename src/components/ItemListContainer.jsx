import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { customFetch } from '../utils/customFetch';
import { items } from '../utils/items';
import ItemList from './ItemList';
import ItemCount from './ItemCount';

//se encarga de hacer la consulta a la api y bajar los datos para propearlos al ItemList

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  //componentDidMount
  useEffect(() => {
    //consulta BD

    if (idCategory) {
      customFetch(
        2000,
        items.filter((item) => item.categoryId === parseInt(idCategory))
      )
        .then((resultado) => setDatos(resultado))
        .catch((err) => console.log(err));
    } else {
      customFetch(2000, items)
        .then((resultado) => setDatos(resultado))
        .catch((err) => console.log(err));
    }
  }, [idCategory]);

  return (
    <>
      <ItemList datos={datos} />
    </>
  );
};

export default ItemListContainer;
