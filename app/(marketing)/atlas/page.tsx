"use client";

import { useState } from 'react';
import ThemeCard from './themeCard';
import Image from "next/image";

const AtlasPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  type Theme = {
    title: string;
    description: string;
    imageSrc: string;
    keywords: string[];
  };

  const themes: Theme[] = [
    {
      title: 'Hematopoese',
      description: 'Explore o processo de formação e desenvolvimento dos elementos do sangue, desde as células-tronco hematopoéticas até os diferentes tipos de células sanguíneas maduras.',
      imageSrc: '/red-blood-cells.png',
      keywords: ['formação do sangue', 'células-tronco hematopoéticas', 'linhagens celulares', 'maturação celular', 'hematopoiese'],
    },
    {
      title: 'Eritrócitos',
      description: 'Conheça a estrutura, função e ciclo de vida dos eritrócitos, as células vermelhas do sangue responsáveis pelo transporte de oxigênio e dióxido de carbono.',
      imageSrc: '/red-blood-cells.png',
      keywords: ['glóbulos vermelhos', 'transporte de oxigênio', 'hemoglobina', 'ciclo de vida dos eritrócitos', 'anemia'],
    },
    {
      title: 'Leucócitos',
      description: 'Estude os diferentes tipos de leucócitos, suas funções no sistema imunológico e como eles protegem o corpo contra infecções e doenças.',
      imageSrc: '/red-blood-cells.png',
      keywords: ['glóbulos brancos', 'sistema imunológico', 'neutrófilos', 'linfócitos', 'monócitos', 'eosinófilos', 'basófilos'],
    },
    {
      title: 'Plaquetas',
      description: 'Descubra a importância das plaquetas no processo de coagulação sanguínea e como elas contribuem para a hemostasia e a cicatrização de feridas.',
      imageSrc: '/red-blood-cells.png',
      keywords: ['trombócitos', 'coagulação sanguínea', 'hemostasia', 'cicatrização', 'distúrbios de plaquetas'],
    },
    {
      title: 'Alterações',
      description: 'Analise as diversas alterações hematológicas, suas causas, diagnósticos e impactos na saúde, incluindo anemias, leucemias e trombocitopenias.',
      imageSrc: '/red-blood-cells.png',
      keywords: ['doenças do sangue', 'anemia', 'leucemia', 'trombocitopenia', 'diagnóstico hematológico', 'alterações hematológicas'],
    },
  ];
  

  const filteredThemes = themes.filter(theme =>
    theme.title.toLowerCase().includes(searchTerm.toLowerCase()) || theme.description.toLowerCase().includes(searchTerm.toLowerCase()) || theme.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="mx-auto h-full max-w-[1212px] py-10 px-3">
      <div className="flex justify-center mb-4">
        <div className="items-center">
          <h1 className="text-2xl font-bold text-neutral-700">Conteúdos por Tema</h1>
          
          <input
            type="text"
            placeholder="Pesquisar tema..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-4 mb-6 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-slate-200"
          />
        </div>
        <Image
          src="/mascot_searching.svg"
          alt="Mascot"
          height={100}
          width={100}
          className="block ml-4 lg:w-[130px] lg:h-[130px]"
        />
      </div>
      {filteredThemes.length === 0 && (
        <p className="text-center text-gray-500">Nenhum resultado encontrado.</p>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredThemes.map((theme) => (
          <ThemeCard
            key={theme.title}
            title={theme.title}
            description={theme.description}
            imageSrc={theme.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default AtlasPage;
