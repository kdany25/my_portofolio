import React from 'react'
import './Work.scss'
import {AiFillEye , AiFillGithub} from 'react-icons/ai'
import {motio} from "framer-motion"
import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Work.scss';
const Work = () => {
  return (
    <> <h2 className="head-text">
    My creative <span>Portofolio</span>Section
  <div className='app__work-filter'>{["UI/UX","web App" , "Mobile App" , "React JS" , "All"].map((item,index)=>())}</div>
  </h2></>
  )
}

export default Work;