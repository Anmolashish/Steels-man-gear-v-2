import ProductCard from "./ProductCard";

export default function ProductPage3({ items, slug }) {
  // Ensure data exists before accessing it

  return (
    <div className="w-full h-auto flex justify-center gap-10 pb-10 flex-wrap">
      {items.length > 0 ? (
        items.map((element) => (
          <ProductCard
            key={element.id}
            image={element.image}
            name={element.name}
            description={element.description}
            subSlug={element.subSlug}
            slug={slug}
          />
        ))
      ) : (
        <p className="text-gray-500 text-lg">There are no products here.</p>
      )}
    </div>
  );
}
