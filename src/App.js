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
            <h1>password</h1>
            <input type="password" />
            <p>type="password" 를 사용하면 input box 안의 내용이 보이지 않는다.</p>
            <hr />
            <h1>button</h1>
            <input type="button" value="click" onClick={() => alert('Hello React')} />
            <hr />
            <h1>submit</h1>
            <input type="submit" value="보내기" onClick={() => alert('서버로 전송 하였습니다.')} />
            <br />
            <br />
            <form action="http://www.ulalalab.com">
                <input type="submit" value="가자~!!" />
            </form>
            <hr />
            <h1>file upload</h1>
            <form action="http://localhost/upload.php" method="php" enctype="multipart/form-data">
                <input type="file" name="selected=file" />
                <input type="submit" />
            </form>
            <hr />
            <h1>select</h1>
            what is your favorite brand?
            <form>
                <select name="car">
                    <option value="-">select</option>
                    <option value="Benz">Benz</option>
                    <option value="Audi">Audi</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Kia">Kia</option>
                </select>
                <br />
                <br />
                <select name="car2" multiple>
                    <option value="-">select2</option>
                    <option value="BMW">BMW</option>
                    <option value="VOLVO">VOLVO</option>
                    <option value="Jaguar">Jaguar</option>
                    <option value="GM">GM</option>
                </select>
            </form>
            <hr />
            <h1>textarea</h1>
            <form action="http://ulalalab.com">
                <p>textarea : </p>
                <textarea cols="50" rows="5" placeholder="입력하세요."></textarea>
                <input type="reset" value="저장" onClick={() => alert('사실은 reset 이었다.')} />
                <input type="submit" value="리셋" onClick={() => alert('사실은 이동 할거다.')} />
            </form>
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
            <hr />
            <h1>table Tag</h1>
            <p> tr 은 행을 td 는 열을 만든다.</p>
            <p> 먼저는 tr 로 행을 만들고 td 로 열을 만드는게 순서다.</p>
            <table>
                <tr>
                    <td>A</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>C</td>
                    <td>D</td>
                </tr>
            </table>
            <p> 눈에는 보이지 않지면 행과 열이 만들어 진 것이다. 선은 CSS 로 만들어 줄 수 있다.</p>
            <hr />
            <h1>ul Tag, li Tag</h1>
            <p>ul 과 li 는 한 쌍이다.</p>
            <p>ul 내부에는 li 가 반드시 있어야 한다. li 를 ul 이 반드시 감싸줘야 한다.</p>
            <ul>
                <li>Benz</li>
                <li>Audi</li>
                <li>Bmw</li>
                <li>Hyundai</li>
                <li>Kia</li>
            </ul>
            <hr />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

export default App;
