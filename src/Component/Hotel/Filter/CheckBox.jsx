import React from 'react'
import { Container, Form } from 'react-bootstrap'

export default function CheckBox({prix}) {
  return (
    <Form>
               <Container>
               <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    id="disabledFieldsetCheck"
                    label={prix}
                />
                </Form.Group>

               </Container>
           
           </Form>
  )
}
