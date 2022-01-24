import React from 'react'

const Help = () => {
  return (
    <div>
      <div className='mb-5 text-2xl font-extrabold text-slate-900 tracking-tight'>
        {chrome.i18n.getMessage('help')}
      </div>
      <p className='font-medium'>{chrome.i18n.getMessage('notYet')}</p>
    </div>
  )
}
export default Help
