import { useState, useRef } from "react"
import App from "./App.jsx"
export default function Information(){
    const [questionNumber, setQuestionNumber] = useState(0)
    const [app, setApp] = useState(false)
    const [storageArray, setStorageArray] = useState([])

    const inputRef = useRef(null)

    const QuestionsArray = ["Name", "Genre", "Keywords"]
    const questions = {
        Name:"write your name/nick",
        Genre: "Select yours genres (min.3)",
        Keywords: "Write keywords that describe what you want to see (min.3)"
    }
    
    if(app) return <App/>
    return(
        <div className="text-white">
            {localStorage.getItem("Name") && (JSON.parse(localStorage.getItem("Genre") || "[]")).length >2 && (JSON.parse(localStorage.getItem("Keywords") || "[]")).length >2 ? <App/>
            : 
            <>
                <h2>{QuestionsArray[questionNumber]}</h2>
                
                <input ref={inputRef} type="text" placeholder={questions[QuestionsArray[questionNumber]]}/>

                {["Genre", "Keywords"].includes(QuestionsArray[questionNumber]) && <button className="bg-amber-500" onClick={() =>{
                    setStorageArray([...storageArray,inputRef.current.value])
                    inputRef.current.value = ""
                    
                }}>add</button>}

                {questionNumber < 2 ? <button onClick={() => {

                    if(questionNumber == 0){
                        localStorage.setItem(QuestionsArray[questionNumber], JSON.stringify(inputRef.current.value))
                    }

                    else{
                        if(storageArray.length >= 3){
                            localStorage.setItem(QuestionsArray[questionNumber], JSON.stringify(storageArray))
                            setStorageArray([])
                        }
                        else{
                           return window.alert("minimum 3 values")
                        }
                    }

                    inputRef.current.value = ""
                    setQuestionNumber(questionNumber + 1)
                }}>next</button>
                
                :<button onClick={() => {
                    if(storageArray.length >= 3){
                        localStorage.setItem(QuestionsArray[questionNumber], JSON.stringify(storageArray))
                        setStorageArray([])
                    }
                    else{
                       return window.alert("minimum 3 values")
                    }
                    inputRef.current.value = ""
                    setApp(true)
                }}>finish</button>}
            </>
            
            
            }

        </div>
    )
}