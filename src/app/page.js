"use client"
import Link from 'next/link';
import React from 'react'

const Page = () => {
  return (
    <>
      <div className="startHeading">
        Click To Play Quiz Game
      </div>
      <Link href='/quiz'>
        <button className="btn" type="button" >
          <strong>START GAME</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      </Link>
    </>
  )
}

export default Page
