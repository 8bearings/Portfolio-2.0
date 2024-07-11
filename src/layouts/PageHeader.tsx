import { Menu } from 'lucide-react'
import logo from '/assets/logo.png'
import { Button } from '../Components/Button'

export function PageHeader() {
  return (
    <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-5 mx-4'>
      <div className='flex gap-4 items-center flex-shrink-0'>
        <Button size={'icon'}>
          <Menu />
        </Button>
        <a href='/'>
          <img src={logo} className='h-12' alt='8bearingsphoto' />
        </a>
      </div>
      <div></div>
      <div>
        <a href='url' className='p-2 justify-evenly'>Home</a>
        <a href='url' className='p-2 justify-evenly'>Videos</a>
        <a href='url' className='p-2 justify-evenly'>Bio</a>
      </div>
    </div>
  )
}
