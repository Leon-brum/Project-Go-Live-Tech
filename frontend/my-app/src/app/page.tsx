"use client";

import { useEffect } from 'react';
import $ from 'jquery';

export default function Home() {
  useEffect(() => {
    $.ajax({
      url: 'http://localhost:3000/', // URL da API backend
      method: 'GET',
      success: (data) => {
        console.log('Dados recebidos:', data);
      },
      error: (err) => {
        console.error('Erro na requisição:', err);
      },
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-4xl font-bold text-blue-600">
        Requisições Ajax com jQuery!
      </h1>
    </div>
  );
}