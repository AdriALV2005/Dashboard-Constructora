"use client"
const { useState } = require("react")

const Page = () =>{
    const [input, setInput] = useState('')
    return (
        <div>
            <form>
                <input type="text" onChange={e=>setInput(e.target.value)}/>
                <button onClick={send(input)}>Send</button>
            </form>
        </div>
    )
}