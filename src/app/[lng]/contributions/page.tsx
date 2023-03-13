import Image from 'next/image'

type Props = {
  params: { lng: string }
}

export default async function Page({ params: { lng } }: Props) {
  console.log(lng)

  return (
    // <section className="mb-12">
      <h1>Contributions</h1>
      {/* <div>
        <Image
          alt="Mooncard"
          src="/images/mooncard.png"
          width={200}
          height={200}
        />
      </div> */}
    // </section>
  )
}
