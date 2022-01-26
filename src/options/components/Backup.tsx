import React from 'react'

const BackUp = () => {
  return (
    <div>
      <div className='mb-5 text-2xl font-extrabold text-slate-900 tracking-tight'>
        {chrome.i18n.getMessage('backup')}
      </div>
      <div className='text-xl font-medium my-4'>
        {chrome.i18n.getMessage('import')}
      </div>
      <div className='text-xl font-medium my-4'>
        {chrome.i18n.getMessage('export')}
      </div>
      <p className='font-medium'>{chrome.i18n.getMessage('notYet')}</p>
    </div>
  )
}
export default BackUp
