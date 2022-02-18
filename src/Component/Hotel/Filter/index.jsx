import React from 'react'
import { Card } from 'react-bootstrap'
import CheckBox from './CheckBox'

export default function Filtre () {
  return (
      <div className={'mt-5'}>
        <Card>
            <h5>Filtre par prix:</h5>
           <CheckBox prix={"10000 à 30000"} />
           <CheckBox prix={"30000 à 60000"} />
           <CheckBox prix={"60000 à 90000"} />
           <CheckBox prix={"90000 à 120000"} />
           <CheckBox prix={"120000 à 150000"} />
           <CheckBox prix={"150000 à 180000"} />
           <CheckBox prix={"Au dela"} />


        </Card>
      </div>
  )
}
