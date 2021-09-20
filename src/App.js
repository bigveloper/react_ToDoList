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
    const [isRadio, setIsRadio] = useState('');
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [selected, setSelected] = useState('');
    const selectList = ['Benz', 'Audi', 'Bmw', 'Hyundai', 'Kia'];
    const [areaText, setAreaText] = useState('');
    const [fileupload, setFileupload] = useState('');
    const [user, setUser] = useState('');
    const [tdSelect, setTdSelect] = useState('');
    const languageList = ['JavaScript', 'HTML', 'CSS'];
    const [click, setClick] = useState('');
    const [inputNumber, setInputNumber] = useState('');
    const [userName, setUserName] = useState('');
    const [callBook, setCallBook] = useState('');
    const [callList, setCallList] = useState([]);
    const [count, setCount] = useState(0);

    // Event
    const onChange = (e) => setValue(e.target.value);
    const onClick = () => {
        console.log(value);
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

    const clickOnRadio = () => {
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

    const onSelect = (e) => {
        setSelected(e.target.value);
        console.log(selected);
        return;
    };
    const onAreaText = (e) => setAreaText(e.target.value);
    console.log(areaText);
    const textReset = () => {
        setAreaText('');
    };

    const onFile = (e) => setFileupload(e.target.value);
    console.log(fileupload);

    const onUser = (e) => setUser(e.target.value);
    console.log(user);
    const onReset = () => {
        setUser('');
    };
    const tdClick = (e) => {
        setTdSelect(e.target.value);
        console.log(tdSelect);
        return;
    };

    const ondblclick = (e) => setClick(e.target.value);
    const onDbClick = () => {
        console.log(click);
        if (!click) {
            alert('anything put yor message');
        }
    };

    const numberChange = (e) => {
        console.log(inputNumber);
        const regex = /^[0-9\b -]{0,11}$/;
        if (regex.test(e.target.value)) {
            setInputNumber(e.target.value);
        }
    };
    const userNameChange = (e) => {
        console.log(userName);
        const regex2 = /^[a-z\b -]{0,30}$/;
        if (regex2.test(e.target.value)) {
            setUserName(e.target.value);
        }
    };
    const toSubmit = (e) => {
        e.preventDefault();
        console.log(userName, inputNumber);
    };

    const onCallbook = (e) => {
        console.log(callBook);
        const callRegex = /^[0-9\b -]{0,11}$/;
        if (callRegex.test(e.target.value)) {
            setCallBook(e.target.value);
        }
    };
    const addCallbook = () => {
        console.log(callBook);
        if (!callBook) {
            alert('put your phone Number');
            return;
        }
        setCallList((prevState) => [...prevState, callBook]);
        setCallBook('');
    };
    const numberEdit = (index) => {
        console.log(value);
        const callEdit = prompt();
        console.log(callEdit);

        setCallList((prevState) => {
            const callEditList = prevState.map((item, i) => {
                return i === index ? callEdit : item;
            });
            return callEditList;
        });
    };

    const numberDelete = (index) => {
        console.log(index);
        setCallList((prevState) => {
            const callDeleteList = prevState.filter((item, i) => {
                return i !== index && item;
            });
            return callDeleteList;
        });
    };

    const onInCount = (e) => setCount(e.target.value);
    console.log(count);

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
            <p> Radio </p>
            <form>
                <input type="radio" value={isRadio} id="radio" checked={isRadio} onClick={clickOnRadio} />
                Radio 어렵네
                <br />
                <input type="radio" value={isRadio} id="radio2" checked={isRadio} onClick={clickOnRadio} />
                Radio 쉽네
            </form>
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
                <button type="reset" onClick={textReset}>
                    Reset
                </button>
            </form>
            <hr />
            <p>file upload</p>
            <input type="file" vlaue={fileupload} onChange={onFile} />
            <button type="submit">전송</button>
            <hr />
            <p>a Tag</p>
            <a href="http://www.github.com" target="_blank" rel="noreferrer">
                Github 로 이동
            </a>
            <hr />
            <p>Reset button</p>
            <input type="text" value={user} placeholder="이름" onChange={onUser} />
            <button type="reset" onClick={onReset}>
                Reset
            </button>
            <hr />
            <p>Table</p>
            <table border="1" width="20%" height="100" cellSpacing="1">
                <caption>Favorite Language</caption>
                <tr align="center" bgcolor="white">
                    <td rowSpan="2" bgcolor="red">
                        JavaScript
                        <a href="https://developer.mozilla.org/" title="MDN Site">
                            검색
                        </a>
                    </td>
                    <td bgcolor="blue">Java</td>
                    <td bgcolor="green">TypeScript</td>
                </tr>
                <tr align="center" bgcolor="white">
                    <td colSpan="2" bgcolor="yellow">
                        HTML
                    </td>
                    <td>Python</td>
                    <td>Go</td>
                </tr>
                <tr aligin="center" bgcolor="white">
                    <td>
                        <select value={tdSelect} onChange={tdClick}>
                            {languageList.map((item) => (
                                <option value={item} key={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </td>
                </tr>
            </table>
            <hr />
            <p> ul li</p>
            <ul>
                <b>where we going?</b>

                <a href="www.naver.com" target="_blank">
                    <li>
                        <b>Naver</b>
                    </li>
                </a>

                <li>b</li>
                <li>c</li>
            </ul>
            <hr />
            <p>doubleClick</p>
            <input value={click} onChange={ondblclick} />
            <button onDoubleClick={onDbClick}>doubleClick</button>
            <hr />
            <p>정규식 표현</p>
            <form onSubmit={toSubmit}>
                <input type="text" value={userName} onChange={userNameChange} />
                <input type="text" value={inputNumber} onChange={numberChange} />
                <button type="submit">가입 </button>
            </form>
            <hr />
            <p>전화번호부</p>
            <input type="text" value={callBook} onChange={onCallbook} />
            <button onClick={addCallbook}>ADD</button>
            {callList.map((item, index) => (
                <div key={index}>
                    <input value={item} readOnly />
                    <button onClick={() => numberEdit(index)}>Edit</button>
                    <button onClick={() => numberDelete(index)}>Delete</button>
                </div>
            ))}
            <hr />
            <p>{count}</p>
            <input value={count} onChange={onInCount} />
            <button onClick={() => setCount(count + 1)}> Click + me </button>
            <button onClick={() => setCount(count - 1)}> Click - me </button>
        </div>
    );
}

export default App;
