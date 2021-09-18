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
            <h1>a Tag</h1>
            <a href="http://www.google.com"> Google 로 현재 창에서 이동 합니다. </a>
            <br />
            <hr />
            <a href="http://www.github.com" target="_blank">
                github 로 새 창에서 이동 합니다.
            </a>
            <hr />
            <a href="http://www.naver.com" target="_self">
                Naver 로 현재 창에서 이동 합니다.
            </a>
            <hr />
            <a href="http://www.google.com" target="_parent">
                target="_parent" google
            </a>
            <hr />
            <a href="http://www.github.com" target="_top">
                target="_top" github
            </a>
        </div>
    );
}

export default App;
