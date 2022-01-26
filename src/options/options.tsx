import { useTitle } from 'ahooks'
import classNames from 'classnames'
import React, { useState } from 'react'
import { render } from 'react-dom'
import About from './components/About'
import Help from './components/Help'
import Setting from './components/Setting'
import BackUp from './components/backUp'
import './index.css'

const AsideList = [
  {
    index: 0,
    key: 'setting',
    name: chrome.i18n.getMessage('setting'),
    render: <Setting />,
  },
  {
    index: 1,
    key: 'help',
    name: chrome.i18n.getMessage('help'),
    render: <Help />,
  },
  {
    index: 2,
    key: 'backup',
    name: chrome.i18n.getMessage('backup'),
    render: <BackUp />,
  },
  {
    index: 3,
    key: 'about',
    name: chrome.i18n.getMessage('about'),
    render: <About />,
  },
]

const App = () => {
  useTitle(chrome.i18n.getMessage('extensionName'))
  const [activeKey, setActiveKey] = useState(
    location.hash.split('#')?.[1] || AsideList[0].key
  )
  return (
    <div className='w-full flex flex-row mt-20'>
      <div className='basis-1/12'></div>
      <aside className='basis-2/12'>
        <ul className='w-full max-w-mini'>
          {AsideList.map(item => (
            <li
              className={classNames(
                'px-3 py-2 mb-4 rounded-md inset-0 text-gray-400',
                { 'bg-cyan-50 text-sky-500': activeKey === item.key }
              )}
              onClick={() => {
                setActiveKey(item.key)
                location.hash = `#${item.key}`
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </aside>
      <main className='basis-8/12'>
        {AsideList.find(item => item.key === activeKey).render}
      </main>
      <div className='basis-1/12'></div>
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
