import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold italic">Allan's Portfolio</h1>
      <p className="mt-4 text-slate-400">Embedded Systems Developer | Micromouse Project</p>
      
      <div className="mt-8 p-6 border border-slate-700 rounded-lg bg-slate-800">
        <h2 className="text-xl font-semibold text-blue-400">Current Project: NURCMicromouse</h2>
        <p className="text-sm mt-2 text-slate-300">
          Working with STM32, IR sensors, and motor drivers.
        </p>
      </div>
    </main>
  );
}