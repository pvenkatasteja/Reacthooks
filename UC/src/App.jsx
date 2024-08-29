import React, { createContext, useState } from 'react';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';

export const store = createContext();

const App = () => {
    const [data, setData] = useState(0);
    return (
        <store.Provider value={[data, setData]}>
            <ComponentA />
            <ComponentB />
            <button onClick={()=>setData(data+1)}>INCREMENT</button>
        </store.Provider>
    )
}

export default App;
