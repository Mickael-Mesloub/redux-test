// import './DragonsList-styles.scss'

import { useSelector } from 'react-redux';
import { Dragons } from '../../store';
import DragonsListItem from './DragonsListItem';
import { useEffect } from 'react';

const DragonsList = () => {
  const dragons = useSelector((state: Dragons) => state.dragons);

  useEffect(() => {
    console.log('STATE: ', dragons);
  }, [dragons]);

  return (
    <div>
      {!dragons || dragons.length === 0 ? null : (
        <div>
          {' '}
          <h2>Mes dragons</h2>
          <ul>
            {dragons.map((dragon, i) => (
              <li key={i} style={{ listStyle: 'none' }}>
                <DragonsListItem dragon={dragon} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DragonsList;
