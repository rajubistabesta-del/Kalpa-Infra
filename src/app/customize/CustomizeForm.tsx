'use client';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

type FormData = { 
  name: string; 
  email: string; 
  phone?: string; 
  message: string; 
  planSlug?: string 
};

export default function CustomizeForm() {
  const sp = useSearchParams();
  const planSlug = sp.get('plan') ?? undefined;

  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormData>({
    defaultValues: { planSlug }
  });

  return (
    <form 
      onSubmit={handleSubmit(async (data) => {
        try {
          const res = await fetch('/api/inquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });

          if (res.ok) {
            reset({ name:'', email:'', phone:'', message:'', planSlug });
            alert('Thanks! We will contact you shortly.');
          } else {
            alert('Something went wrong.');
          }
        } catch (err) {
          console.error(err);
          alert('Something went wrong.');
        }
      })} 
      className="space-y-3 rounded-2xl border bg-white p-4 shadow max-w-2xl mx-auto"
    >
      <h1 className="text-2xl font-semibold mb-2">Customize a Plan</h1>
      <p className="text-slate-600 mb-6">
        Tell us what you want to modify—room sizes, façade style, extra floor, rental unit, etc.
      </p>

      <input {...register('name', { required: true })} placeholder="Your name" className="w-full rounded-xl border px-3 py-2" />
      <input {...register('email', { required: true })} placeholder="Email" className="w-full rounded-xl border px-3 py-2" />
      <input {...register('phone')} placeholder="Phone" className="w-full rounded-xl border px-3 py-2" />
      <textarea {...register('message', { required: true })} placeholder="Describe your changes..." className="w-full h-32 rounded-xl border px-3 py-2" />
      <input type="hidden" {...register('planSlug')} />
      <button disabled={isSubmitting} className="rounded-2xl bg-slate-900 text-white px-5 py-2">
        {isSubmitting ? 'Sending...' : 'Send request'}
      </button>
    </form>
  );
}
