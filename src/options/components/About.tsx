import React from 'react'

const About = () => {
  return (
    <div>
      <div className='mb-5 text-2xl font-extrabold text-slate-900 tracking-tight'>
        关于
      </div>

      <div className='mb-4'>
        <div className='mb-3 text-xl font-extrabold text-slate-900 tracking-tight'>
          版本
        </div>
        <p className='font-medium'>1.0</p>
      </div>

      <div className='mb-4 prose'>
        <div className='mb-3 text-xl font-extrabold text-slate-900 tracking-tight'>
          仓库地址
        </div>
        <a
          className='font-medium'
          href='https://github.com/findmio/RightClickTool'
        >
          https://github.com/findmio/RightClickTool
        </a>
      </div>
    </div>
  )
}
export default About
