
import Layout from '../components/Layout';
// src/pages/Home.jsx

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Sarthak Thorat</h1>
        <p className="text-lg text-gray-600">Physicist</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Project Card */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Project Title</h2>
          <p className="text-gray-700 mb-4">Brief description of the project and technologies used.</p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p className="text-gray-700">Email: your.email@example.com</p>
        <p className="text-gray-700">LinkedIn | GitHub | Twitter</p>
      </section>
    </main>
  );
}
