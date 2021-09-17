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
            alert('text');
            return;
        }
        setList((prevState) => [...prevState, value]);
        setValue('');
    };
    const onEdit = (index) => {
        console.log(index);

        const editText = prompt();
        console.log(editText);

        setList((prevState) => {
            const onEditList = prevState.map((item, i) => {
                return i === index ? editText : item;
            });

            return onEditList;
        });
    };

    // JSX(View)
    return (
        <div className="App">
            <h1> To Do List </h1>
            <hr />
            <input value={value} onChange={onChange} />
            <button onClick={onClick}>Add</button>

            {list.map((item, index) => (
                <div key={index}>
                    <input value={item} readOnly />
                    <button onClick={() => onEdit(index)}>Edit</button>
                </div>
            ))}
        </div>
    );
}

export default App;
