import axios from "axios";
import { useReducer } from "react"

interface getAllInputsProps<T> {
    [key: string]: T
}

interface handleChangeProps<T> {
    (e: T): void
}

const getAllInputs = (state: getAllInputsProps<string>, action: getAllInputsProps<string>) => {
    switch (action.type) {
        case "INPUT":
            const newState: getAllInputsProps<string> = {...state}
            newState[action.name] = action.value;
            return newState
    }
    return state
}

const InputBlog = () => {
    const [ state, dispatch ] = useReducer(getAllInputs, {
        description: ''
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    
    const handleChange: handleChangeProps<React.ChangeEvent<HTMLInputElement>> = (e) => {
        dispatch({
            type: "INPUT",
            name: e.target.name,
            value: e.target.value
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input id="description" name="description" onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default InputBlog