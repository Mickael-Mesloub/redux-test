import { useDispatch } from 'react-redux';
import {
  Dragon,
  deleteDragon,
  updateDragon,
} from '../../features/dragons/dragonSlice';
import './DragonsListItem-styles.scss';
import { IoTrashBin } from 'react-icons/io5';
import { ChangeEvent, useState } from 'react';

interface DragonsListItemProps {
  dragon: Dragon;
}

const DragonsListItem = ({ dragon }: DragonsListItemProps) => {
  const [newName, setNewName] = useState(dragon.name);

  const dispatch = useDispatch();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const newNameValue = target.value;

    setNewName(() => newNameValue);
    dispatch(
      updateDragon({
        id: dragon.id,
        name: newNameValue,
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        className="text-input dragon-name"
        value={newName}
        onChange={handleChange}
      />
      <p
        className="delete-icon"
        onClick={() => dispatch(deleteDragon(dragon.id))}
      >
        <IoTrashBin />
      </p>
    </div>
  );
};

export default DragonsListItem;
