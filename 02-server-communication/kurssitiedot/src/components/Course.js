import React from 'react';

const Header = ({course}) => (
    <h1>{course.name}</h1>
)

const Part = ({part}) => (
  <p>{part.name} {part.exercises}</p>
)

const Content = ({course}) => (
  course.parts.map(part => <Part key={part.id} part={part} />)
)

const Total = ({course}) => {
  const total = course.parts.map(part => part.exercises).reduce((a, b) => a+b)

  return <p><strong>Number of exercises {total}</strong></p>
}

const Course = ({course}) => (
  <div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>
)

export default Course;
