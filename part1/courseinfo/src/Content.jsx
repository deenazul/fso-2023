const Part = (props) => {
    return (
        <p> {props.part} {props.exercises}</p>
    )
}

const Content = (props) => {
   return (
    <div>
        <Part part={props.part[0].name} exercises={props.part[0].exercises} />
        <Part part={props.part[1].name} exercises={props.part[1].exercises} />
        <Part part={props.part[2].name} exercises={props.part[2].exercises} />
    </div>
   )
  }

export default Content
