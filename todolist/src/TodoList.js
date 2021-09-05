import { Fragment, useState, useRef, useEffect } from 'react';
import TodoItem from './TodoItem';
import { Input, Button } from 'antd'

// import './index.css';
import 'antd/dist/antd.css';

const TodoList = () => {

    const [inputVal, setInputVal] = useState('');
    const [list, setList] = useState(['demo1', 'demo2']);

    // ref直接获取dom
    const textInput = useRef(null);
    const ul = useRef(null);

    useEffect(() => {
        console.log("模拟componentDidMount，即只运行一次该函数");
    }, [])

    useEffect(() => {
        console.log("模拟componentDidUpdate，即每次渲染都会运行该函数");
    })

    // shouldComponentUpdate React.memo和useMe-mo可以解决

    const inputChange = e => {
        console.log('ref of textInput:', textInput.current.value);
        setInputVal(e.target.value);
    }
    const submit = () => {
        if (!inputVal) {
            return;
        }
        setList([...list, inputVal]);
        console.log('ref of ul: ', ul.current);
        setInputVal('');
    }
    const deleteItem = (index) => {
        // 复制值ES6 使用listC = list 会复制引用
        const listC = [...list];
        // 或者ES5 const listC = list.concat();
        listC.splice(index, 1);
        setList(listC);
    }

    return (
        // JSX -> createElement -> 虚拟dom(js对象) -> 真实dom
        <Fragment>
            Todo List
            <br />
            <label htmlFor='inputArea'>点击输入</label>
            <br />
            <Input
                id='inputArea'
                className='input'
                style={{ 'width': 200 }}
                placeholder='请输入'
                value={inputVal}
                onChange={e => inputChange(e)}
                ref={textInput}
            />
            <Button type='primary' onClick={() => submit()}>提交</Button>
            <ul ref={ul}>
                {
                    list.map((item, index) => {
                        // 组件形式
                        return <TodoItem
                            item={item}
                            index={index}
                            key={index}
                            handleDelete={() => deleteItem(index)}
                        />
                        // return (
                        //   <li key={index} onClick={() => deleteItem(index)}>
                        //     {item}
                        //   </li>
                        // )
                    })
                }
            </ul>
        </Fragment>
    );
}

export default TodoList;