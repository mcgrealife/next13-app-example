import Link from 'next/link'

export default async function SideBar() {
  const productIds = await fetch('api/productIds')
  const productsList = await productIds.json()
  return (
    <div className='flex flex-col'>
      {productsList.map((p) => (
        <Link key={p.id} href={`/products/${p.id}`}>
          {p.name}
        </Link>
      ))}
    </div>
  )
}
