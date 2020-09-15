import React from 'react';

import './App.css';
import PatientManagement from './components/ReducerCount/PatientManagement/PatientManagement';
import PatientReducer from './components/ReducerCount/PatientReducer/PatientReducer';
import ReducerCount from './components/ReducerCount/ReducerCount';

function App() {
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
