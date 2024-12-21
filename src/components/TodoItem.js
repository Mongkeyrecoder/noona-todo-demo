import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import api from "../utils/api";

const TodoItem = ({ item }) => {
  const [끝남안끝남, 끝남안끝남변경] = useState(false)

  const deletTask = async () => {
    try {
      const response = await api.delete(`tasks/${item._id}`)
      if (response.status === 200) {
        window.location.reload();
      }
      else {
        throw new Error('에러입니다다', item)
      }
    } catch (err) {
      console.log(err)
    }

  }
  const change=()=>{
    끝남안끝남변경(!끝남안끝남);
    updateTask()
  }
  const updateTask = async () => {
    
    try {
      const response = await api.put(`/tasks/${item._id}`, { isComplete: 끝남안끝남 })
      console.log('rrr',response)
      if (response.status===200){
        
      }
      else {
        throw new Error('에러임')
      }
    } catch (err) {
      
    }

  }
  useEffect(() => {
    if (item.isComplete == false) {
      끝남안끝남변경(false)
    }
    else {
      끝남안끝남변경(true)
    }
  }, [])
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item`}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button className="button-delete" onClick={deletTask}>삭제</button>
            <button className="button-delete" onClick={change}>{끝남안끝남 == true ? '끝남' : '안끝남'}</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
