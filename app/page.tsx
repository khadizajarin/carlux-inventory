"use client"
import { useMemo, useState } from "react";
import { AlertCircle } from "lucide-react";
import { useProducts } from "./hooks/useproducts";
import InventoryToolbar from "./src/InventoryToolbox";
import { ProductGridSkeleton } from "./src/ProductSkeleton";
import ProductCard from "./src/ProductCard";

export default function Home() {
  const { data: products, isLoading, error } = useProducts();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  // console.log(xproducts)

  const filtered = useMemo(() => {
    if (!products) return [];
    let result = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result = [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [products, search, sort]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className=" border-b border-border">
        <div className="lg:ml-20 ml-10 container py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground tracking-tight">
              Carl<span className="text-primary">ux</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Premium Vehicle Inventory
            </p>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="lg:ml-20 container py-8 space-y-8">
        <InventoryToolbar
          search={search}
          onSearchChange={setSearch}
          sort={sort}
          onSortChange={setSort}
          resultCount={filtered.length}
        />

        {isLoading && <ProductGridSkeleton />}

        {error && (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-destructive">
            <AlertCircle className="w-10 h-10" />
            <p className="text-lg font-medium">Failed to load inventory</p>
            <p className="text-sm text-muted-foreground">
              Please check your connection and try again.
            </p>
          </div>
        )}

        {!isLoading && !error && filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <p className="text-lg">No vehicles match your search.</p>
          </div>
        )}

        {!isLoading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container text-center text-xs text-muted-foreground">
          © 2026 Carlux. Built for Proxima IT.
        </div>
      </footer>
    </div>
  );
}
