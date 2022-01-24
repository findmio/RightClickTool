import React from 'react'

const Setting = () => {
  return (
    <div>
      <div className='mb-5 text-2xl font-extrabold text-slate-900 tracking-tight'>
        {chrome.i18n.getMessage('setting')}
      </div>
      <p className='font-medium'>{chrome.i18n.getMessage('notYet')}</p>
    </div>
  )
}
export default Setting
