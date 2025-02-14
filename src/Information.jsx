import { useState } from "react"
import App from "./App.jsx"
export default function Information(){
    const [questionNumber, setQuestionNumber] = useState(0)
    const [app, setApp] = useState(false)

    const QuestionsArray = ["Name", "Genre", "Keywords"]
    const questions = {
        Name:"write your name/nick",
        Genre: "Select yours genres (min.3)",
        Keywords: "Write keywords that describe what you want to see (min.3)"
    }
    
    if(app) return <App/>
    return(
        <div className="text-white">
            {localStorage.getItem("Name") && localStorage.getItem("Genre") && localStorage.getItem("Keywords")? <App/>
            : 
            <>
                <h2>{QuestionsArray[questionNumber]}</h2>
                
                <input type="text" placeholder={questions[questionNumber[questionNumber]]}/>
                {questionNumber < 2 ? <button onClick={() => setQuestionNumber(questionNumber + 1)}>next</button>
                :<button onClick={() => setApp(true)}>finish</button>}
            </>
            
            
            }

        </div>
    )
}