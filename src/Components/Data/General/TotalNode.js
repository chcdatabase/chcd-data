// IMPORTS ////////////////////////////////////////////////////////////////////

// MAIN DEPENDENCIES
import React from 'react'
import {Card, Spinner} from 'react-bootstrap';



// FUNCTIONAL COMPONENT ////////////////////////////////////////////////////////

function TotalNode(props) {

  // RETURNS PLACEHOLDER
  return ( 
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Text className="text-center text-uppercase mb-0" style={{fontSize: '.8rem'}}>Total {props.type}</Card.Text>
        <Card.Title className="text-center fw-bolder fs-3">
          { props.queryResult 
            ? props.queryResult 
            : <Spinner animation="border" role="status" variant="dark"><span className="visually-hidden">Loading...</span></Spinner> 
          }
        </Card.Title>
      </Card.Body>
    </Card>
  )

}

export default TotalNode