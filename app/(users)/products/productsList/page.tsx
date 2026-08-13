import { Suspense } from "react";
import ProductsList from "./productsList";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProductsList />
    </Suspense>
  );
}
