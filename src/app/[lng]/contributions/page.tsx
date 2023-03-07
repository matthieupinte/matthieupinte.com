type Props = {
  params: { lng: string };
};

export default async function Page({ params: { lng } }: Props) {
  console.log(lng);

  return <>Contributions</>;
}
