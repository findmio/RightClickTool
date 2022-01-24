import { useTitle } from 'ahooks'
import classNames from 'classnames'
import React, { useState } from 'react'
import { render } from 'react-dom'
import About from './components/About'
import Help from './components/Help'
import Setting from './components/Setting'
import './index.css'

const AsideList = [
  {
    index: 0,
    name: chrome.i18n.getMessage('setting'),
  },
  {
    index: 1,
    name: chrome.i18n.getMessage('help'),
  },
  {
    index: 2,
    name: chrome.i18n.getMessage('about'),
  },
]

const App = () => {
  useTitle(chrome.i18n.getMessage('extensionName'))
  const [activeKey, setActiveKey] = useState(0)
  return (
    <div className='w-full flex flex-row mt-20'>
      <div className='basis-1/12'></div>
      <aside className='basis-2/12'>
        <ul className='w-full max-w-mini'>
          {AsideList.map(item => (
            <li
              className={classNames(
                'px-3 py-2 mb-4 rounded-md inset-0 text-gray-400',
                { 'bg-cyan-50 text-sky-500': activeKey === item.index }
              )}
              onClick={() => {
                setActiveKey(item.index)
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </aside>
      <main className='basis-8/12'>
        {activeKey === 0 && <Setting />}
        {activeKey === 1 && <Help />}
        {activeKey === 2 && <About />}
      </main>
      <div className='basis-1/12'></div>
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
