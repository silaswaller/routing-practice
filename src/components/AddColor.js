import { useParams } from "react-router-dom"

const AddColor = () => {
    const {word} = useParams();
    const {backgroundColor} = useParams();
    const {textColor} = useParams();
    return (
        <h1 style={{color: textColor, backgroundColor: backgroundColor}}>The word is: {word}</h1>
    )
}

export default AddColor;