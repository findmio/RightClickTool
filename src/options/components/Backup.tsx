import { ExportOutlined, ImportOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'

const BackUp = () => {
  const [base64, setBase64] = useState('')

  useEffect(() => {
    chrome.storage.sync.get('config', data => {
      setBase64(
        'data:text/plain;charset=utf-8,' +
          encodeURIComponent(JSON.stringify(data))
      )
    })
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist()
    const { files: rawFiles } = e.target
    if (!rawFiles) return
    const file = [].slice.call(rawFiles)[0] as File
    const reader = new FileReader()
    reader.readAsText(file, 'UTF-8')
    reader.onload = function (e) {
      const fileString = e.target.result
      if (typeof fileString === 'string') {
        chrome.storage.local.set(JSON.parse(fileString))
      }
    }
  }

  return (
    <div>
      <div className='mb-5 text-2xl font-extrabold text-slate-900 tracking-tight'>
        {chrome.i18n.getMessage('backup')}
      </div>
      <div className='flex items-center text-base font-medium my-8 relative'>
        {chrome.i18n.getMessage('import')}
        <ImportOutlined className='ml-4 text-sm' />
        <input
          type='file'
          accept='.txt'
          className='absolute left-0 right-0 bottom-0 top-0 opacity-0'
          onChange={handleInputChange}
        />
      </div>
      <a download href={base64}>
        <div className='flex items-center text-base font-medium my-8'>
          <div>{chrome.i18n.getMessage('export')}</div>
          <ExportOutlined className='ml-4 text-sm' />
        </div>
      </a>

    </div>
  )
}
export default BackUp
