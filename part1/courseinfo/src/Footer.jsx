const Footer = (props) => {
    return (
        <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
    )
    }
export default Footer