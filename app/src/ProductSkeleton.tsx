import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => (
  <div className="rounded-lg border border-border bg-card overflow-hidden">
    <Skeleton className="aspect-16/10 w-full rounded-none" />
    <div className="p-5 space-y-3">
      <Skeleton className="h-3 w-16" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-3 w-full" />
      <div className="flex justify-between pt-1">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-4 w-10" />
      </div>
    </div>
  </div>
);

export const ProductGridSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: 8 }).map((_, i) => (
      <ProductSkeleton key={i} />
    ))}
  </div>
);

export default ProductSkeleton;
