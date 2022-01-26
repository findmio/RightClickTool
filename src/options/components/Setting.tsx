import React from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons'

const Setting = () => {
  return (
    <div>
      <div className='mb-5 text-2xl font-extrabold text-slate-900 tracking-tight'>
        {chrome.i18n.getMessage('setting')}
      </div>

      {/* <p className='font-medium'>
        {chrome.i18n.getMessage('notYet')}
      </p> */}

      <div className='text-xl font-medium my-4'>
        {chrome.i18n.getMessage('text')}
      </div>
      <div className='flex'>
        <input
          type='text'
          className='form-input rounded'
          placeholder={chrome.i18n.getMessage('textPlaceholder')}
        />
        <QuestionCircleOutlined />
      </div>
    </div>
  )
}
export default Setting
