interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  const response = await fetch(`${process.env.API_HOST}/api/products/pizza/${slug}`, {
    method: "GET",
  });
  const data = await response.json();
  console.log(data);
  

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }


  if (!data) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{data?.name}</h1>
      <p className="text-gray-500">{data?.description}</p>
      <p>{data?.price}</p>
    </div>
  );
}
