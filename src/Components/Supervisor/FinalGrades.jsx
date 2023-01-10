import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './style.css'

function FinalGrades(props) {
  return (
    <div>
        <h2 className='FinalGrades'>Final Grades</h2>
    <Card style={{ width: '18rem' }} className='GradesCard'>
      <ListGroup variant="flush">
        <ListGroup.Item>Overall Project {props.projectGrade}</ListGroup.Item>
        <ListGroup.Item>{props.m1} {props.m1g}</ListGroup.Item>
        <ListGroup.Item>{props.m2} {props.m2g}</ListGroup.Item>
        <ListGroup.Item>{props.m3} {props.m3g}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  );
}

export default FinalGrades;