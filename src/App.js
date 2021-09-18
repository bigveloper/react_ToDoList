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
            {/* <a href="http://www.github.com" target="_blank">
                github 로 새 창에서 이동 합니다.
            </a> */}
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
            <hr />
            <h1>input Tag</h1>
            <input type="text" />
            <p>뭔가를 적고싶게 만드는 박스가 나옴</p>
            <hr />
            <input type="text" value="소주한잔" />
            <p>값을 넣고 시작함</p>
            <hr />
            <input type="text" placeHolder="노래방 18번을 적으시오." />
            <p>적을 내용을 안내 해줄 수 있음</p>
            <hr />
            <input type="text" disabled />
            <p>사용하지 못하도록 비활성화도 할 수 있음</p>
            <input type="text" placeHolder="사용불가" disabled />
            <p>이렇게도 응용을 해본다.</p>
            <hr />
            <h1>checkbox</h1>
            <input type="checkbox" />
            <hr />
            <h2>checkbox labeling</h2>
            <label>
                <input type="checkbox" name="car" /> Benz
            </label>
            <label>
                <input type="checkbox" name="car" /> Audi
            </label>
            <label>
                <input type="checkbox" name="car" /> BMW
            </label>
            <hr />
            <p>checked</p>
            <label>
                <input type="checkbox" name="car" /> Benz
            </label>
            <label>
                <input type="checkbox" name="car" /> Audi
            </label>
            <label>
                <input type="checkbox" name="car" checked /> BMW
            </label>
            <h1>radio</h1>
            <p>checkbox 와 비슷하지만 radio 는 택1 이다.</p>
            <hr />
            <label>
                <input type="radio" name="car" /> Benz
            </label>
            <label>
                <input type="radio" name="car" /> Audi
            </label>
            <label>
                <input type="radio" name="car" /> BMW
            </label>
        </div>
    );
}

export default App;
