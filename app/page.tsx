import { buildEfoQueryString, getEfoProductList } from "./efo";

const PAGE = 1;
const PAGE_SIZE = 10;

export default async function Home() {
  const searchParams = buildEfoQueryString(PAGE, PAGE_SIZE);
  const res = await getEfoProductList(searchParams);

  if (!res?.Liste) return <div>error</div>;

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1 className="text-4xl font-bold">EFO</h1>
      <div className="flex flex-col items-center justify-center gap-3">
        {res?.Liste?.map((product) => (
          <div
            key={product.Produktnr}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="text-xl font-bold">{product?.Varenavn}</h3>
            <p className="text-lg">Produktnummer: {product?.Produktnr}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
