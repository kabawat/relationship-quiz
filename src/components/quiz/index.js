"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Quiz = ({ baseUrl }) => {
    const [isRender, setIsRender] = useState(false)
    const [count, setCount] = useState(1)
    const [quiz, setQuiz] = useState({})
    const [answare, setAnsware] = useState([])
    const [isFinish, setIsFinish] = useState(false)
    const [score, setScore] = useState()

    useEffect(() => {
        fetch(`${baseUrl}/api/quiz`, {
            method: "POST",
            body: JSON.stringify({ id: count, })
        }).then(res => res.json()).then((res) => {
            setQuiz(res?.quiz)
            setTimeout(() => {
                setIsRender(true)
            }, 1000)
        })
    }, [count])

    const submitAnsware = async (payload) => {
        if (quiz?.total_quiz == count) {
            setIsRender(false)
            setIsFinish(true)
            fetch(`${baseUrl}/api/quiz`, {
                method: "PUT",
                body: JSON.stringify({ answare: [...answare, payload] })
            }).then(res => res.json()).then((res) => {
                setScore(res)
            })
        } else {
            setAnsware([...answare, payload])
            setIsRender(false)
            setCount(count + 1)
        }
    }
    return (
        isRender ? <>
            <div className="heading">
                {`${count} / ${quiz?.total_quiz}`}
            </div>
            <div className="quiz">
                {quiz?.quiz}
            </div>
            <div className="quizeImg">
                <img src="assets/img.png" alt="" />
            </div>
            <div className="optionSection">
                <div className="rowC">
                    <button className="option" onClick={() => submitAnsware({ q: quiz?.id, ans: 'A' })}>
                        <div className="section">A</div>
                        <div className="answare">{quiz?.option?.A}</div>
                    </button>
                    <button className="option" onClick={() => submitAnsware({ q: quiz?.id, ans: 'B' })}>
                        <div className="section">B</div>
                        <div className="answare">{quiz?.option?.B}</div>
                    </button>
                </div>
                <div className="rowC">
                    <button className="option" onClick={() => submitAnsware({ q: quiz?.id, ans: 'C' })}>
                        <div className="section">C</div>
                        <div className="answare">{quiz?.option?.C}</div>
                    </button>
                    <button className="option" onClick={() => submitAnsware({ q: quiz?.id, ans: 'D' })}>
                        <div className="section">D</div>
                        <div className="answare">{quiz?.option?.D}</div>
                    </button>
                </div>
            </div>
        </> : <>
            {
                (score !== undefined) ? <>
                    <div className="heading">
                        Your Score iS
                    </div>
                    <div className="count">
                        {score?.point} / {score?.total_quiz}
                    </div>
                    <Link href='/' className="msg">
                        <button class="button type1"></button>
                    </Link>
                </> : <>
                    <div className="heading">
                        {isFinish ? "finishing" : "question"}
                    </div>
                    <div className="spinner">
                        <div className="imgC">
                            <img src="/Spinner.gif" alt="" />
                        </div>
                        <div className="count">
                            {isFinish ? "" : count}
                        </div>
                    </div>
                    <div className="msg">
                        Loading <br />
                        please wait
                    </div>
                </>
            }
        </>
    )
}

export default Quiz
