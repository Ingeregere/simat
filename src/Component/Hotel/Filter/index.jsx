import React from 'react'
import { Card } from 'react-bootstrap'
import CheckBox from './CheckBox'

export default function Filtre () {
  return (
      <div className={'mt-5'}>
        <Card>
            <h5>Filtre par prix:</h5>
           <CheckBox prix={"10000FBU à 30000FBU"} />
           <CheckBox prix={"30000FBU à 60000FBU"} />
           <CheckBox prix={"60000FBU à 90000FBU"} />
           <CheckBox prix={"90000FBU à 120000FBU"} />
           <CheckBox prix={"120000FBU à 150000FBU"} />
           <CheckBox prix={"150000FBU à 180000FBU"} />
           <CheckBox prix={"Au delà"} />


        </Card>
      </div>
  )
}
