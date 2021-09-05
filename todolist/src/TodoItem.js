import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ item, index, handleDelete, userName }) => {
    // 子组件渲染优化？
    console.log("TodoItem render ……");
    return (
        <li onClick={() => handleDelete(index)}>
            {item} - {userName}
        </li>
    );
}

// 类型检查
TodoItem.propTypes = {
    item: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    index: PropTypes.number,
    handleDelete: PropTypes.func,
}

// 默认值
TodoItem.defaultProps = {
    userName: 'whp'
};

export default TodoItem;