import { useState } from 'react';
import './App.css';
// Component
function App() {
    // State
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    const [inputId, setInputId] = useState('');
    const [inputPd, setInputPd] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isRadio, setIsRadio] = useState(false);
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [selected, setSelected] = useState('');
    const selectList = ['Benz', 'Audi', 'Bmw', 'Hyundai', 'Kia'];
    const [areaText, setAreaText] = useState('');
    const [fileupload, setFileupload] = useState('');

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

    const checkOnChange = () => {
        console.log(!isChecked);
        setIsChecked(!isChecked);
    };

    const clickOnRadio = (index) => {
        console.log(!isRadio);
        setIsRadio(!isRadio);
    };

    const onUserId = (e) => {
        setUserId(e.target.value);
    };
    const onUserPassword = (e) => {
        setUserPassword(e.target.value);
    };

    const clickSubmit = (e) => {
        e.preventDefault();
        console.log(userId, userPassword);
    };

    const onSelect = (e) => setSelected(e.target.value);

    const onAreaText = (e) => setAreaText(e.target.value);
    console.log(areaText);

    const onFile = (e) => setFileupload(e.target.value);
    console.log(fileupload);

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
            <hr />
            <button type="submit" onClick={onSubClick}>
                입력
            </button>
            <hr />
            React 가 좋은가요? <input type="checkbox" checked={isChecked} onChange={checkOnChange} />
            <hr />
            <input type="radio" id="radio" checked={isRadio} onClick={() => clickOnRadio()} />
            <label htmlFor="radio">Radio 어렵네</label>
            <br />
            <input type="radio" id="radio2" checked={isRadio} onClick={() => clickOnRadio()} />
            <label htmlFor="radio2">Radio 쉽네</label>
            <hr />
            <p>Form Tag</p>
            <form onSubmit={clickSubmit}>
                <input value={userId} type="text" placeholder="아이디" onChange={onUserId} />
                <input value={userPassword} type="password" placeholder="비밀번호" onChange={onUserPassword} />
                <input type="submit" value="로그인" />
            </form>
            <hr />
            <p>select box</p>
            <select value={selected} onChange={onSelect}>
                {selectList.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
            <hr />
            <p>text area</p>
            <form onSubmit>
                <textarea type="text" value={areaText} onChange={onAreaText} />
                <button onClick>Submit</button>
            </form>
            <p>file upload</p>
            <input type="file" vlaue={fileupload} onChange={onFile} />
            <button type="submit">전송</button>
        </div>
    );
}

export default App;
