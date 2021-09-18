import { useState } from 'react';
import './App.css';

// Component
function App() {
    // State
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);

    // Event
    const onChange = (e) => setValue(e.target.value);
    const onClick = () => {
        if (!value) {
            alert('write your todos');
        }
        setList((prevState) => [...prevState, value]);
        setValue('');
    };
    // JSX
    return (
        <div className="App">
            <h1> To Do List </h1>
            <hr />

            <input value={value} onChange={onChange} />
            <button onClick={onClick}>Add</button>
            {list.map((item, index) => (
                <div key={index}>
                    <input value={item} readOnly />
                </div>
            ))}
        </div>
    );
}

export default App;
