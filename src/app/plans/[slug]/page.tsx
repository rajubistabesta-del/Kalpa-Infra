import { Metadata } from 'next';
import { notFound } from 'next/navigation';

async function getPlanData(slug: string) {
  const plans = [
    { slug: '1', title: 'Plan 1', description: 'Description for Plan 1' },
    { slug: '2', title: 'Plan 2', description: 'Description for Plan 2' },
    { slug: '3', title: 'Plan 3', description: 'Description for Plan 3' },
  ];
  return plans.find((p) => p.slug === slug) || null;
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const plan = await getPlanData(params.slug);
  return plan
    ? { title: plan.title, description: plan.description }
    : { title: 'Plan Not Found' };
}

export default async function Page({ params }: any) {
  const plan = await getPlanData(params.slug);
  if (!plan) notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{plan.title}</h1>
      <p className="text-lg">{plan.description}</p>
    </div>
  );
}