import SideBar from './SideBar'

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-2'>
      <div className='col-start-1 max-w-[200px]'>
        <SideBar />
      </div>
      <div className='col-start-2'>{props.children}</div>
    </div>
  )
}
