import axios from "axios";
import { useReducer } from "react"

const getAllInputs = (state, action) => {
    switch (action.type) {
        case "INPUT":
            const newState = {...state}
            newState[action.name] = action.value;
            return newState
    }

    return state
}

const InputBlog = () => {
    const [ state, dispatch ] = useReducer(getAllInputs, {
        description: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5001/blog", {
                description: state.description
            })

            if (response) {
                console.log("success")
            }
        } catch(err) {
            console.error(err)
        }
    }
    
    const handleChange = (e) => {
        dispatch({
            type: "INPUT",
            name: e.target.name,
            value: e.target.value
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <input id="description" name="description" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default InputBlog