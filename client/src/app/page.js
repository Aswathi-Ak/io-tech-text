'use client'

import Image from "next/image";
import Header from "../components/Header";
import { useEffect,useState } from "react";
import axios from "axios";

export default function Home() {
  const [test, setTest] = useState(null);
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/test');
        console.log("this is the response", response.data.data.Test);
        setTest(response.data.data.Test);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main>
        <h1>Hello World</h1>

        <h1> {test?.title} </h1>

        <p>{test?.Description}</p>

        <button className="bg-blue-500 text-white p-2 rounded-md"> {test?.Button} </button>

        <p>Hello this company is about "IO Tech" we are a company that makes software for the internet</p>
      </main>

    </div>
  );
}
