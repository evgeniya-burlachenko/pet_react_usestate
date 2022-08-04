import React, { useState } from 'react'


function BlockModel(id) {
 return {
  id,
 }
}

export default function Blocs() {
 const [triangle, setTriangle] = useState([])
 const [circle, setCircle] = useState([])
 const [square, setSquare] = useState([])
 const result = [];
 const [triangleCounter, setTriangleCounter] = useState(() => 0);
 const [circleCounter, setCircleCounter] = useState(() => 0);
 const [squareCounter, setSquareCounter] = useState(() => 0);

 const handleTriangle = () => {
  if (triangle.length < 10) {
   setTriangle([...triangle, new BlockModel(triangle.length)])
   setTriangleCounter((counter) => counter + 1);
  }
  else
   alert("Треугольников больше нет")
 }

 const handleCircle = () => {
  if (circle.length < 20) {
   setCircle([...circle, new BlockModel(circle.length)])
   setCircleCounter((counter) => counter + 1);
  }
  else
   alert("Кругов больше нет")
 }

 const handleSquare = () => {
  if (square.length < 50) {
   setSquare([...square, new BlockModel(square.length)])
   setSquareCounter((counter) => counter + 1);
  }
  else
   alert("Квадратов больше нет")
 }

 const removeTriangle = (id) => {
  setTriangle(triangle.filter(t => t.id !== id))
  setTriangleCounter((counter) => counter - 1);
 }

 const removeCircle = (id) => {
  setCircle(circle.filter(t => t.id !== id))
  setCircleCounter((counter) => counter - 1);
 }

 const removeSquare = (id) => {
  setSquare(square.filter(t => t.id !== id))
  setSquareCounter((counter) => counter - 1);
 }

 const remove = (result) => {

  setSquare(result.splice(0, result.length))
  setCircle(result.splice(0, result.length))
  setTriangle(result.splice(0, result.length))
  setTriangleCounter((counter) => 0);
  setSquareCounter((counter) => 0);
  setCircleCounter((counter) => 0);

 }
 const remove_triangle = (result) => {

  setTriangle(result.splice(0, result.length))
  setTriangleCounter((counter) => 0);

 }
 const remove_square = (result) => {

  setSquare(result.splice(0, result.length))
  setSquareCounter((counter) => 0);


 }
 const remove_circle = (result) => {

		  setCircle(result.splice(0, result.length))
  setCircleCounter((counter) => 0);




 }

 return (
  <>
   <header>
    <h3>Треугольников: {triangleCounter} шт.</h3>
    <h3>Кругов: {circleCounter} шт.</h3>
    <h3>Квадратов: {squareCounter} шт.</h3>
   </header>
   <hr />
   <div className="wrapper">
    <div className="form">

     <div className="form__triangle">
      <div className="triangle"
       onClick={handleTriangle}>
       Click
      </div>
     </div>
     <div className="form__circle">
      <div className="circle"
       onClick={handleCircle}>
       Click
      </div>
     </div>
     <div className="form__square">
      <div className="square"
       onClick={handleSquare}>
       Click
      </div>
     </div>
     <hr />
     {/* <InputBlocs/> */}
     <div>

      <div className="input_block">
       {triangle.map(t =>
        <div key={t.id}
         className="triangle">
         <span onClick={() => removeTriangle(t.id)}>❌</span>
        </div>)
       }
       {circle.map(c =>
        <div key={c.id}
         className="circle">
         <span onClick={() => removeCircle(c.id)}>❌</span>
        </div>)}
       {square.map(s =>
        <div key={s.id}
         className="square">
         <span onClick={() => removeSquare(s.id)}>❌</span>
        </div>)}
      </div>
     </div>
     <button className="buttonAll"
      onClick={() => remove(result)}>
      Remove all
     </button>
    
    </div>
	{
		console.log("circle: ", circle)
	}

	<button className="buttonAll"
	onClick={() => remove_triangle(result)}>
	Remove red triangle
   </button>
    
     <button className="buttonAll"
      onClick={() => remove_square(result)}>
      Remove blue square
     </button>
     <button className="buttonAll"
      onClick={() => remove_circle(result)}>
      Remove green circle
     </button>

   </div>
  </>
 )
}
