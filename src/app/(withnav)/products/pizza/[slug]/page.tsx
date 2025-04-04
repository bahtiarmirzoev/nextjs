interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductPahe({ params }: ProductPageProps) {
  const { slug } = params;

  const response = await fetch(`${process.env.API_HOST}/api/products`);
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
