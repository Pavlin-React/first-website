export const getStaticPaths = async () => {

  let res = await fetch( 'http://jsonplaceholder.typicode.com/users' )
  let data = await res.json()

  let paths = data.map( ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  } )
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async ( context ) => {
  let id = context.params.id
  let res = await fetch( 'http://jsonplaceholder.typicode.com/users/' + id )
  let data = await res.json()

  return {
    props: { ninja: data }
  }
}

const Details = ( {ninja} ) => {
  return (
    <div>
      <h1>{ ninja.name }</h1>
      <p>{ ninja.email }</p>
      <p>{ ninja.website }</p>
      <p>{ ninja.address.city }</p>
    </div>
  )
}

export default Details
