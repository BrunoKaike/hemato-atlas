import React from 'react';
import { QuestionBubble } from "@/app/lesson/question-bubble";
import { Separator } from "@/components/ui/separator";

const ArticlePage: React.FC = () => {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-slate-800 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-800 lg:mb-6 lg:text-4xl dark:text-white">
              Plaquetas
            </h1>
          </header>
          <section>
            <QuestionBubble question={"As plaquetas são pequenos fragmentos de uma célula produzida pela medula óssea, o megacariócito, e atuam principalmente no processo de coagulação sanguínea, sendo fundamentais para evitar grandes sangramentos."}></QuestionBubble>
            <p className="indent-8 not-format text-base text-justify">
              As plaquetas são fragmentos citoplasmáticos de tamanho reduzido que se originam de megacariócitos maduros na medula óssea. Além de desempenhar um papel crucial na hemostasia, essas células também são responsáveis pela produção de diversos fatores de crescimento que promovem a regeneração e reparo dos tecidos. Morfologicamente, as plaquetas são pequenas, anucleadas e ligeiramente convexas, com formato de disco e contêm corpos densos, grânulos alfa e lisossomos em seu interior. Cada tipo de grânulo armazena diferentes substâncias, como o fator de crescimento derivado de plaquetas (PDGF). Quando ativadas, as plaquetas liberam uma variedade de substâncias a partir desses grânulos, desempenhando um papel duplo. Por um lado, contribuem para a hemostasia, cicatrização e regeneração tecidual; por outro lado, sua ativação pode desencadear processos inflamatórios, tumorigênese e respostas imunes.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Plaqueta.png"
                alt="Em destaque uma Plaqueta normal"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 1.</strong> Em destaque uma Plaqueta normal.
              </figcaption>
            </figure>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Megacariopoese</h3>
            <p className="indent-8 not-format text-base text-justify">
            As plaquetas são geradas a partir de megacariócitos na medula óssea. O megacarioblasto, precursor do megacariócito, surge pela diferenciação da célula-tronco hematopoética. O amadurecimento do megacariócito ocorre por replicação endomitótica sincrônica, onde o DNA é replicado sem divisão nuclear ou citoplasmática, resultando no aumento do volume citoplasmático e no número de lobos nucleares em múltiplos de dois. Nas fases iniciais, observam-se invaginações da membrana plasmática, chamadas de membranas de demarcação, que evoluem para formar uma rede altamente ramificada. Em um estágio variável, o citoplasma torna-se granular. Os megacariócitos maduros são grandes, com um núcleo lobulado excêntrico e baixa relação núcleo-citoplasmática. As plaquetas se formam pela fragmentação das extremidades do citoplasma do megacariócito, cada um produzindo de 1.000 a 5.000 plaquetas. Elas são liberadas através do endotélio dos nichos vasculares da medula óssea onde os megacariócitos residem. O processo entre a diferenciação da célula-tronco e a produção de plaquetas leva cerca de 10 dias. A trombopoetina (TPO) é o principal regulador da produção de plaquetas, com 95% sendo produzida pelo fígado. Aproximadamente 50% da TPO é produzida de forma constitutiva, e seu nível plasmático depende da remoção por ligação a receptores c-MPL nas plaquetas e nos megacariócitos. Portanto, os níveis são altos na trombocitopenia devido à aplasia da medula, mas baixos em pacientes com trombocitose. Os outros 50% são regulados em resposta à destruição das plaquetas.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Megacariócito na medula óssea.png"
                alt="Megacariócito aspirado da medula óssea"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 2.</strong> Megacariócito aspirado da medula óssea.
              </figcaption>
            </figure>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Função das plaquetas</h2>
            <p className="indent-8 not-format text-base text-justify">
            A principal função das plaquetas é formar um tampão mecânico durante a resposta hemostática normal a lesões vasculares. Na ausência de plaquetas, o sangramento espontâneo de pequenos vasos é comum. A função das plaquetas inclui adesão, agregação, liberação e amplificação. A adesão das plaquetas em locais de lesão vascular envolve interações específicas entre plaquetas e a parede vascular. As plaquetas são discóides ou elipsóides e apresentam três zonas distintas: zona periférica, zona sol-gel e zona de organelas.
            </p>
            <li className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Zona Periférica</li>
            <p className="indent-8 pl-8 not-format text-base text-justify">
              A zona periférica inclui uma porção externa com antígenos, glicoproteínas e várias enzimas. Esta superfície, chamada atmosfera plaquetária, permite que as plaquetas interajam com outras células e com a parede dos vasos, facilitando a adesão após a ativação. Internamente, a membrana plaquetária é composta por proteínas, lipídios e, em menor proporção, carboidratos.
            </p>
            <li className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Zona Sol-Gel</li>
            <p className="indent-8 pl-8 not-format text-base text-justify">
            A zona sol-gel contém proteínas organizadas abaixo da membrana sub plasmática, conhecidas como microtúbulos, que formam uma zona anular ao redor da circunferência das plaquetas. Esses microtúbulos se conectam aos microfilamentos, constituindo o esqueleto das plaquetas, essencial para orientar os movimentos celulares durante a secreção e a retração do coágulo. Os microtúbulos são compostos de tubulina, que se polimeriza e despolimeriza conforme o estado funcional das plaquetas. Em repouso, a tubulina está majoritariamente polimerizada, e durante a ativação, ocorre despolimerização seguida de repolimerização.
            </p>
            <li className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Zona de Organelas</li>
            <p className="indent-8 pl-8 not-format text-base text-justify">
            A zona de organelas contêm várias estruturas, incluindo corpos densos, grânulos, lisossomos, mitocôndrias, partículas de glicogênio, aparelho de Golgi, sistema tubular denso e sistema de canais abertos.
            </p>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Referências</h2>
            <p className="not-format text-base">
              FAILACE, R.; FERNANDES, F. <strong>Hemograma - manual de interpretação.</strong> 6º Edição. Porto Alegre: Artmed, 2015.<br/>
              SILVA, P. H.; et al. <strong>Hematologia laboratorial</strong> - Teoria e procedimentos. Porto Alegre: Artmed, 2016.<br/>
              LORENZI, T. F. <strong>Manual de Hematologia: Procedência e clínica</strong>, 4º Edição. Rio de Janeiro: Guanabara Koogan, 2006.<br/>
              CHEN, H.; CHEN, X.; WANG, G. Platelets: A review of their function and effects in liver diseases. <strong>Liver Research</strong>, v. 4, n. 3, p. 129 - 135, setembro, 2020. Disponível em: <a href="https://www.sciencedirect.com/science/article/pii/S2542568420300386">https://www.sciencedirect.com/science/article/pii/S2542568420300386</a>. Acesso em: 21 mar. 2024.
            </p>
          </section>
          
        </article>
      </div>
    </main>
  );
};

export default ArticlePage;
