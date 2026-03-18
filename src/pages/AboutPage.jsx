import '../App.css'
import { Card } from 'react-bootstrap'

export default function AboutPage() {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Card className='m-4 p-2'>
        <Card.Body className='text-center'>
          <h2>About</h2> 
          <p>A website that helps people who struggle with finding what to eat throughout the day!</p>
        </Card.Body>
      </Card>
    </div>
  )
}
