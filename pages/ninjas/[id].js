export const getStaticPaths = async () => {

  let res = await fetch( 'http://jsonplaceholder.typicode.com/users' )
  let data = await res.json()

  let paths = data.map( ninja => {
    return {
      paras: { id: ninja.id.toString() }
    }
  } )
  return {
    paths,
    fallback: false
  }
}

const Details = () => {
  return (
    <div>
      <h3>Details</h3>
    </div>
  )
}

export default Details
