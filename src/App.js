import { useState } from 'react';

// Component
function App() {
    // State
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    const [inputId, setInputId] = useState('');
    const [inputPd, setInputPd] = useState('');

    // Event
    const onChange = (e) => setValue(e.target.value);
    const onClick = () => {
        if (!value) {
            alert('write your todos');
        }
        setList((prevState) => [...prevState, value]);
        setValue('');
    };
    const onEdit = (index) => {
        console.log(index);

        const editText = prompt();
        console.log(editText);

        setList((prevState) => {
            const editList = prevState.map((item, i) => {
                return i === index ? editText : item;
            });
            return editList;
        });
    };

    const onDelete = (index) => {
        console.log(index);

        setList((prevState) => {
            const deleteList = prevState.filter((item, i) => {
                return i !== index && item;
            });
            return deleteList;
        });
    };

    const onInputId = (e) => {
        console.log(inputId);
        setInputId(e.target.value);
    };

    const onInputPd = (e) => {
        console.log(inputPd);
        setInputPd(e.target.value);
    };

    const onSubClick = () => {
        console.log('입력 완료');
    };

    // JSX
    return (
        <div className="App">
            <h1> To Do List </h1>
            <hr />
            <input value={value} onChange={onChange} />
            <button onClick={onClick}>Add</button>
            <hr />
            {list.map((item, index) => (
                <div key={index}>
                    <input value={item} readOnly />
                    <button onClick={() => onEdit(index)}>Edit</button>
                    <button onClick={() => onDelete(index)}>Delete</button>
                </div>
            ))}
            <hr />
            <p> input text </p>
            <input type="text" value={inputId} placeholder="ID 를 입력하시오" onChange={onInputId} />
            <hr />
            <p> input password </p>
            <input type="password" value={inputPd} placeholder="Password 를 입력하시오." onChange={onInputPd} />
            <button type="submit" onClick={onSubClick}>
                입력
            </button>
        </div>
    );
}

export default App;
