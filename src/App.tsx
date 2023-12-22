import './App.scss';
import AddDragonForm from './app/components/AddDragonForm';
import DragonsList from './app/components/dragons/DragonsList';

const App = () => {
  return (
    <>
      <div>
        <AddDragonForm />
        <DragonsList />
      </div>
    </>
  );
};

export default App;
