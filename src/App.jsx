import './App.css';
import MainField from './mainField/mainField';
import Sidebar from './sidebar/sidebar';

function App() {
  
  return (
    <div className='page_container'>
      <Sidebar></Sidebar>
      <MainField></MainField>
    </div>
  );
}

export default App;
