import { categories } from "@/data/categories";
import { GameInterface } from "@/components/GameInterface";
import { notFound } from "next/navigation";

export default function PlayPage({ params }: { params: { category: string } }) {
  const category = categories.find((c) => c.id === params.category);

  if (!category) {
    notFound();
  }

  return <GameInterface category={category} />;
}
