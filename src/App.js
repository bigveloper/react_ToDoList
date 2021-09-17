import './App.css';
import { useState } from 'react';

// Component
function App() {
    // State
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);

    // Event
    const onChange = (e) => setValue(e.target.value);
    const onClick = () => {
        if (!value) {
            alert('type Something');
            return;
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
            <button onClick={onClick}> Add </button>
            <hr />
            {list.map((item, index) => (
                <div>{item}</div>
            ))}
        </div>
    );
}

export default App;
