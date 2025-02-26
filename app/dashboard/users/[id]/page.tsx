const Page = ( {params}: {params: {id: string}}) => {
  const {id} = params;
  return (
    <>
      <div>User id with declared function: {id}</div>
      <div>User id calling params.id: {params.id}</div>
    </>
  )
}

export default Page
