import { Product } from "../hooks/useproducts";
import { Star } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <div
      className="group rounded-lg border border-border bg-card overflow-hidden shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="aspect-16/10 overflow-hidden bg-secondary">
        <Image width={400} height={700}
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-medium tracking-widest uppercase text-primary mb-1.5">
          {product.brand}
        </p>
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-tight">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-primary">
            ${product.price.toLocaleString()}
          </span>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Star className="w-3.5 h-3.5 fill-primary text-primary" />
            <span className="text-xs">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
