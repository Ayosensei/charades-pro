import { categories } from "@/data/categories";
import { GameInterface } from "@/components/GameInterface";
import { notFound } from "next/navigation";

export default async function PlayPage({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}) {
  const resolvedParams = await params;
  const category = categories.find((c) => c.id === resolvedParams.category);

  if (!category) {
    notFound();
  }

  return <GameInterface category={category} />;
}
