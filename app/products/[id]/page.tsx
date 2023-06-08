'use server'
export default async function Page({ params }: { params: { id: number } }) {
  const productDetails = await fetch(`api/product/${params.id}`)
  const product = await productDetails.json()
  return <h1>Product ${product.name}</h1>
}
