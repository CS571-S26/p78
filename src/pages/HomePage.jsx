import { useState } from 'react'
import '../App.css'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function HomePage() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Card className='m-4 p-2'>
        <Card.Body className='text-center'>
          <h1 
            style={{ fontSize: "94px" }}

            ><strong>Flavor Finder</strong></h1>

          <Button onClick={() => navigate('/flavors')}>Find Flavors</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
