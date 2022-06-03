import Image from "next/image"
function FonesPage(){
  return (
    <div>
      {
        ['1','2'].map((path) => {
          return (
            <div key={path}>
              <Image src={`/${path}.jpg`} alt="fone" width={320} height={400} />
            </div>
          )
        })
      }
    </div>
  )
}

export default FonesPage