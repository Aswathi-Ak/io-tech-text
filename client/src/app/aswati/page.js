'use client'

import Header from "../../components/Header";

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main>
        <h1>About Us</h1>
        <p>Welcome to our About page. Here you can learn more about our company and what we do.</p>
      </main>
    </div>
  );
}
