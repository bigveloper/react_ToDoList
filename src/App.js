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
            alert('text');
            return;
        }
        setList((prevState) => [...prevState, value]);
        setValue('');
    };
    // JSX
    return (
        <div>
            <h1>To Do List</h1>
            <hr />
            <input value={value} onChange={onChange} />
            <button onClick={onClick}>Add</button>
            {list.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
}
export default App;
