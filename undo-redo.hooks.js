import { useEffect, useRef, useState } from "react"

export const useUndoredo = (value) => {
    //history 
    const [history, setHistory] = useState(value)
    const [currentIndex, setCurrentIndex] = useState(0)
    const keyref = useRef(null)

    //set value
    const set = (newValue) => {
        const temp = history.slice(0, currentIndex+1)
        temp.push(newValue)
        setHistory(temp)
    }

    //undo
    const undo = () => {
        setCurrentIndex((currentIndex) => Math.max(0, currentIndex - 1))
    }

    const redo = () => {
        setCurrentIndex((currentIndex) => Math.min(currentIndex + 1, history.length - 1))
    }

    useEffect(() => {
        //handle keydown
        const handlekeyDown = (event) => {
            if(keyref && keyref.current) {
                if(event.ctrlkey && event.key === 'z') {
                    event.preventDefault()
                    undo()
                } else if(event.ctrlkey && event.key === "y") {
                     event.preventDefault()
                    redo()
                }
            }
        }

        window.addEventListener('keydown', handlekeyDown)

    }) 



    return [history, set, undo, redo]
}