import { useDispatch } from 'react-redux';
import './AddDragonForm-styles.scss';
import { FormEvent, useState } from 'react';
import { Dragon, addDragon } from '../features/dragons/dragonSlice';

const AddDragonForm = () => {
  const [newDragon, setNewDragon] = useState<Dragon>({
    name: '',
  });
  const dispatch = useDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addDragon(newDragon));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Ajouter un dragon</h2>
      <input
        type="text"
        className="text-input"
        placeholder="Nom du dragon"
        value={newDragon.name}
        onChange={(e) => setNewDragon({ ...newDragon, name: e.target.value })}
      />

      <input type="submit" className="button" value={'Ajouter'} />
    </form>
  );
};

export default AddDragonForm;
