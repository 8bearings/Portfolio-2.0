import { useState } from 'react'
import { PageHeader } from './layouts/PageHeader'
import Lightbox from 'yet-another-react-lightbox'
import { slides } from './data'

export default function App() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className='max-h-screen flex flex-col'>
      <PageHeader />

      <button onClick={() => setOpen(true)}>Open Light Box</button>

      <Lightbox open={open} slides={slides} />
    </div>
  )
}
