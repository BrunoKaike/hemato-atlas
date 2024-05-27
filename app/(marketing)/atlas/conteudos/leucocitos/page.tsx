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
              Leucócitos
            </h1>
          </header>
          <section>
            <QuestionBubble question={"Leucócitos são células sanguíneas conhecidas por muitas pessoas como glóbulos brancos. Essas células podem ser classificadas em diversos tipos, entretanto, todos atuam em prol de um bem comum: a defesa do organismo."}></QuestionBubble>
            <p className="indent-8 not-format text-base text-justify">
              Os leucócitos, também conhecidos como glóbulos brancos, somam em torno de 5.000 a 9.000 células/mm³ de sangue e apresentam morfologias distintas ao microscópio. A respeito da referida microscopia, são subdivididos em duas categorias: Células polimorfonucleares ou Granulócitos caracterizados presença de grânulos em seu citoplasma e Células mononucleares, recebendo tal denominação por não ter grânulos específicos, porém contendo grânulos azurofílicos. Os granulócitos neutrófilo, basófilo e eosinófilo obedecem padrões semelhantes de multiplicação, diferenciação celular, bem como armazenamento na medula óssea. 
            </p>
            <p className="indent-8 not-format text-base text-justify">
              A partir de uma stem-cell na medula óssea, que se compromete com um progenitor de restrição de linhagem mieloide multipotente (CFU-GEMM: unidade formadora de colônia granulocítica, eritróide, monocítica e megacariocítica), dependendo de interações no microambiente medular e sofrendo uma nova restrição para CFU-GM (unidade formadora de colônia granulocítica/monocítica), originam-se as diferentes subpopulações de células conhecidas como leucócitos. Em primeiro plano, morfologicamente, os granulócitos compartilham os mesmos precursores: mieloblasto, promielócito e mielócito. Além disso, nesses três estágios, as células continuam replicando até o momento em que as divisões cessam e ocorre a diferenciação. 
            </p>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Granulopoese</h2>
            <p className="indent-8 not-format text-base text-justify">
              Os granulócitos incluem três tipos de leucócitos que, em seu estágio maduro, possuem grânulos específicos no citoplasma: neutrófilos, eosinófilos e basófilos. Essas células são produzidas na medula óssea, passam cerca de 6 a 10 horas no sangue e, ao atravessarem as paredes dos vasos, migram para os tecidos, onde desempenham suas funções, especialmente a fagocitose e a destruição de agentes patogênicos. Nos tecidos, eles permanecem 4 a 5 dias em média, até serem destruídos. Elas contêm tanto grânulos azurófilos (lisossomos) quanto grânulos específicos que armazenam substâncias essenciais para suas funções distintas. Do ponto de vista histológico, os granulócitos podem ser diferenciados pela morfologia do núcleo, pelo tamanho e pela coloração dos grânulos. A partir da célula indiferenciada, forma-se a primeira célula granulocítica reconhecível — o mieloblasto. Este origina o promielócito, que se desenvolve em mielócito. Do mielócito derivam o metamielócito, o bastonete e, finalmente, o segmentado.
            </p>
            <p className="indent-8 not-format text-base text-justify">
              As séries granulocíticas se desenvolvem a partir de células progenitoras na medula óssea, passando por um processo de especialização crescente. Esse processo de maturação é guiado por vários fatores de crescimento, incluindo interleucinas como IL-1, IL-3, IL-5 (para eosinófilos), IL-6 e IL-11, além dos fatores estimulantes de colônias  como granulocítico-macrofágicas (GM-CSF), granulocíticas (G-CSF) e monocíticas (M-CSF). Esses fatores não apenas promovem a proliferação e a diferenciação celular, mas também modulam a função das células maduras resultantes. Em resposta a infecções, há um aumento na produção de granulócitos e monócitos, impulsionado pela maior produção de fatores de crescimento por células do estroma e linfócitos T, que são ativados por endotoxinas e citocinas como IL-1 e TNF.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Neutrófilos</h3>
            <p className="indent-8 not-format text-base text-justify">
              Os neutrófilos são os leucócitos mais abundantes no sangue periférico de adultos. Neutrófilos maduros são células altamente especializadas em fagocitar e destruir bactérias intracelularmente, principalmente através de mecanismos que envolvem a ativação de peroxidação e a digestão por enzimas presentes em seus grânulos e citoplasma, como lisozimas, defensinas, catepsinas e proteínas catiônicas. Conhecidos também como polimorfonucleares neutrófilos devido à morfologia de seus núcleos multilobulados, que geralmente possuem de 3 a 5 segmentos conectados por finas fitas ou istmos, essas células possuem grânulos específicos no citoplasma, conferindo-lhes uma coloração rosada pálida quando observados ao microscópio de luz.
            </p>
            <p className="indent-8 not-format text-base text-justify">
              Essas células são produzidos na medula óssea a partir de células progenitoras multipotenciais, sob a ação de diversos mediadores, especialmente os fatores G-CSF (Granulocyte-Colony Stimulating Factor) e GM-CSF (Granulocyte and Monocyte-Colony Stimulating Factor). A célula mais imatura da linhagem granulocítica que pode ser identificada morfologicamente é o mieloblasto. Embora seu aspecto seja pouco diferenciado e tenha capacidade de multiplicação, o mieloblasto já é uma célula &quot;restrita&quot;, comprometida com a diferenciação terminal granulocítica, e não deve ser considerada uma célula progenitora.
            </p>

            <div className='flex gap-x-8'>
            </div>
            <p className="indent-8 not-format text-base text-justify">
              O seu núcleo volumoso tem característica imatura, com cromatina delicada e nucléolos visíveis, alta relação núcleo-citoplasmática, enquanto o citoplasma é bastante basófilo (tonalidade azulada na coloração de Leishman), e em geral contém alguns grânulos azurófilos que permitem reconhecer seu vínculo com a linhagem granulocítica.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Neutrófilo.png"
                alt="Em destaque um Neutrófilo"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 1.</strong> Em destaque um Neutrófilo.
              </figcaption>
            </figure>
            <p className="indent-8 not-format text-base text-justify">
              Em geral, os precursores dos neutrófilos não aparecem no sangue periférico normal, mas estão presentes na medula óssea. O primeiro precursor reconhecível é o mieloblasto, uma célula de tamanho variável, com núcleo grande, cromatina fina e que possui de 2 a 5 nucléolos. O citoplasma é basófilo e sem grânulos. Os mieloblastos dão origem a promielócitos, células um pouco maiores, com desenvolvimento de grânulos primários no citoplasma. Desses, originam-se os mielócitos, que têm grânulos secundários ou específicos. A cromatina nuclear é agora mais condensada, e os nucléolos não são visíveis. Podem ser distinguidos os mielócitos das séries neutrófila, eosinófila e basófila. Os mielócitos dão origem a metamielócitos, células que não mais se dividem, com núcleo endentado ou em forma de ferradura e citoplasma cheio de grânulos primários e secundários. As formas de neutrófilos entre metamielocito e neutrófilo completamente maduro são chamadas de neutrófilo “bastonetes” ou “bastoes”. Na reserva medular, predominam os neutrófilos bastonados sobre os segmentados, o que sugere haver uma preferência hierárquica na liberação dos segmentados para o sangue, já que dominam a fórmula leucocitária periférica, 40 a 70%, contra 0 a 6% bastonados. Neutrófilos bastonetes e segmentados são células de maturação e funções idênticas.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
                src="/img_conteudos/Maturação dos neutrófilos. granulopoese.png"
                alt="Esquema de maturação dos neutrófilos. 1- Blasto; 2- Promielócito; 3- Mielócito neutrófilo; 4- Metamielócito neutrófilo; 5- Neutrófilo em banda; 6- Neutrófilo segmentado."
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 2.</strong> Esquema de maturação dos neutrófilos. 1- blasto; 2- promielócito; 3- mielócito neutrófilo; 4- metamielócito neutrófilo; 5- neutrófilo em banda; 6- neutrófilo segmentado.
              </figcaption>
            </figure>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Basófilos</h3>
            <p className="indent-8 not-format text-base text-justify">
              Os basófilos são raros no sangue periférico e são vistos apenas ocasionalmente. Eles contêm numerosos grânulos escuros no citoplasma, que incluem heparina e histamina, muitas vezes obscurecendo o núcleo. Quando nos tecidos, os basófilos se transformam em mastócitos. Estes possuem sítios de ligação para imunoglobulina E (IgE) e, ao se degranularem, liberam histamina.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Basófilo.png"
                alt="Em destaque um Basófilo"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 3.</strong> Em destaque um Basófilo.
              </figcaption>
            </figure>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Eosinófilos</h3>
            <p className="indent-8 not-format text-base text-justify">
              Os eosinófilos são semelhantes aos neutrófilos, mas possuem grânulos citoplasmáticos maiores, que se coram em um vermelho-alaranjado intenso e raramente apresentam mais de três lobos nucleares. Mielócitos eosinofílicos podem ser identificados na medula óssea, mas os estágios mais iniciais são indistinguíveis dos precursores dos neutrófilos. O tempo de circulação dos eosinófilos no sangue é maior que o dos neutrófilos. Eles migram para exsudatos inflamatórios e têm um papel especial nas respostas alérgicas, na defesa contra parasitas e na remoção de fibrina formada durante a inflamação, desempenhando um papel crucial na imunidade local e na reparação dos tecidos.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Eosinófilo.png"
                alt="Em destaque um Eosinófilo"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 4.</strong> Em destaque um Eosinófilo.
              </figcaption>
            </figure>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Monopoese</h2>
            <p className="indent-8 not-format text-base text-justify">
              Os monócitos são geralmente maiores do que os outros leucócitos do sangue periférico, com um núcleo grande, central, oval ou recortado, e cromatina densa. O citoplasma é abundante, corando-se em azul e contendo vacúolos finos que lhe conferem uma aparência de vidro moído, além de grânulos citoplasmáticos. Na medula óssea, é difícil distinguir entre precursores de monócitos (monoblastos e promonócitos) e mieloblastos e monócitos. Os monócitos permanecem pouco tempo na medula óssea e, após circularem por 20 a 40 horas, deixam o sangue para entrar nos tecidos, onde amadurecem e desempenham suas principais funções. Após transformarem-se em macrófagos (histiócitos), sua sobrevivência extravascular pode durar meses ou anos. Nos tecidos, os macrófagos podem se multiplicar sem necessidade de suprimento contínuo dos monócitos sanguíneos e podem ter funções específicas em diferentes tecidos (por exemplo, pele, intestino, fígado). Uma linhagem particularmente importante é a das células dendríticas, que apresentam antígenos às células T. GM-CSF e M-CSF estão envolvidos na produção e ativação dessas células.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Monoblasto</h3>
            <p className="indent-8 not-format text-base text-justify">
              Essa célula é encontrada exclusivamente nos esfregaços de medula óssea. Possui um núcleo redondo com cromatina delicada e nucléolos evidentes. O citoplasma é escasso, resultando em uma alta relação núcleo/citoplasma.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Promonócito</h3>
            <p className="indent-8 not-format text-base text-justify">
              Geralmente, esta célula tem o mesmo tamanho do seu precursor, o monoblasto, mas apresenta um núcleo oval e mais citoplasma. Destaca-se pelo contorno irregular da célula, que já exibe projeções delicadas. A cromatina nuclear é mais condensada, embora ainda seja possível visualizar nucléolos.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Monócito Maduro</h3>
            <p className="indent-8 not-format text-base text-justify">
              Esta célula tem tamanho semelhante ao promonócito, com um núcleo irregular e chanfrado, além de citoplasma abundante e levemente basófilo, de contorno irregular. A cromatina é delicada, sem nucléolos visíveis. O citoplasma contém granulações finas, menos numerosas que nos granulócitos neutrófilos, e pode apresentar pequenos vacúolos. A morfologia dessas células é bastante variável, uma característica marcante. Aproximadamente 2% das células monocitárias circulantes têm nucléolos grandes, indicando que são elementos estimulados na circulação. Em condições normais, os monoblastos e promonócitos são encontrados apenas na medula óssea, enquanto os monócitos são componentes do sangue circulante.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Monócito.png"
                alt="Em destaque um Monócito"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 5.</strong> Em destaque um Monócito.
              </figcaption>
            </figure>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Macrófago</h3>
            <p className="indent-8 not-format text-base text-justify">
              Os macrófagos exibem uma morfologia ainda mais variada que os monócitos, adaptando suas formas conforme seu estado funcional e o tecido onde estão localizados. Em geral, são mais ativos e maduros que os monócitos de origem, apresentando um tamanho maior. Seus núcleos são grandes, vesiculosos, frequentemente em forma de ferradura, sem nucléolos visíveis. O citoplasma é rico em granulações, restos celulares, vacúolos e diversos materiais fagocitados. Nas regiões próximas à mucosa dos tratos respiratório e gastrointestinal, essas células frequentemente contêm microrganismos e partículas inertes fagocitadas. O contorno citoplasmático é pouco definido, com projeções que se estendem entre as células teciduais vizinhas. Como macrófagos são células diferenciadas, não parecem capazes de divisão. Os precursores monocíticos da medula óssea são poucos e podem ser confundidos com os granulócitos jovens, especialmente os promielócitos. A grande variabilidade das células mononucleares fagocitárias reflete sua importância fisiológica, envolvidas tanto na função fagocitária quanto na secreção de substâncias reguladoras da proliferação celular e na regulação da resposta imune.
            </p>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Linfopoese</h2>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Linfócitos</h3>
            <p className="indent-8 not-format text-base text-justify">
              Os linfócitos estão presentes em grande quantidade no sangue periférico e são menos comuns nos esfregaços de medula óssea. Eles representam mais de 90% das células encontradas nos linfonodos, no baço e em outros órgãos linfóides, como as tonsilas. Os tipos de células linfóides reconhecidos são:
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Linfócito.png"
                alt="Em destaque um Linfócito"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 6.</strong> Em destaque um Linfócito.
              </figcaption>
            </figure>
            <li className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Linfoblasto</li>
            <p className="indent-8 pl-8 not-format text-base text-justify">
              Essa é a forma mais jovem, caracterizada por núcleos redondos com cromatina frouxa e algumas condensações, além de nucléolos mais ou menos evidentes. O núcleo ocupa quase toda a célula. O citoplasma é escasso, levemente basófilo, sem granulações ou com poucas granulações localizadas.
            </p>
            <li className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Prolinfócito</li>
            <p className="indent-8 pl-8 not-format text-base text-justify">
              Essa célula é ligeiramente maior que o linfócito maduro circulante. Sua cromatina não é tão frouxa quanto a do linfoblasto, mas também não é tão condensada quanto a do linfócito maduro. Nucléolos podem ser identificados, embora não sejam frequentes. O citoplasma é mais abundante do que no linfoblasto, levemente basófilo, e pode apresentar granulações. A célula tende a adquirir diferentes formas, especialmente em resposta a infecções virais, resultando em linfócitos atípicos - células linfóides grandes com volume citoplasmático aumentado. Em alguns casos, o citoplasma é muito basófilo e apresenta microvacuolizações, sendo denominadas linfócitos plasmocitóides ou células linfoplasmocitárias. Nessas situações, algumas células têm núcleos maiores e frouxos com nucléolos, enquanto outras mantêm núcleos com cromatina condensada.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Pro linfócito.png"
                alt="Em destaque um Prolinfócito na imagem da esquerda. Na imagem da direita temos uma comparação entre um Prolinfócito e um Linfócito Normal"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 7.</strong> Em destaque um Prolinfócito na imagem da esquerda. Na imagem da direita temos uma comparação entre um Prolinfócito e um Linfócito Normal.
              </figcaption>
            </figure>
            <li className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Linfócito Maduro</li>
            <p className="indent-8 pl-8 not-format text-base text-justify">
              O núcleo apresenta um tamanho considerável em relação ao das células (alta relação N/C), com cromatina nuclear distribuída em porções. Nucléolos e granulações citoplasmáticas são geralmente ausentes na maioria das células. O citoplasma dos linfócitos contém diversas enzimas, com destaque para a fosfatase ácida, que se distribui de maneira característica nas células T, sendo considerada um marcador citoquímico para esses linfócitos, sendo positiva tanto em células normais quanto malignas desse tipo. Os linfócitos B também apresentam um marcador enzimático, a 5-nucleotidase, presente na membrana citoplasmática, embora sua visualização ao microscópio óptico seja desafiadora e não seja rotineiramente utilizada, sendo mais comum em observações ao microscópio eletrônico. Além disso, marcadores imunológicos são empregados para diferenciar linfócitos T e B, sendo a imunofenotipagem a abordagem atual para essa distinção e diferenciação dos granulócitos e monócitos. Plasmócitos, proplasmócitos e plasmoblastos são classificados como linfócitos B, originando-se de diferentes estágios de diferenciação dessas células. O estágio menos diferenciado é denominado proplasmócito, enquanto o estágio com nucléolos visíveis é chamado de plasmoblasto, sendo este último comum em proliferações malignas como o mieloma múltiplo (MM).
            </p>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Referências</h2>
            <p className="not-format text-base">
              BARBALATO, L.; PILLARISETTY, L. S. Histology, Red Blood Cell. <strong>StatPearls</strong> 2022. Disponível em: <a href="https://www.ncbi.nlm.nih.gov/books/NBK539702/">https://www.ncbi.nlm.nih.gov/books/NBK539702/</a>. Acesso em 05 mai 2024.<br/>
              HOFFBRAND, A. V.; MOSS, P. A. H. <strong>Fundamentos em hematologia de Hoffbrand.</strong> 7º Edição. Tradução e revisão: Renato Failace. Porto Alegre: Artmed, 2018.<br/>
              HOFFBRAND, A. V.; STEENSMA, D. P. <strong>Hoffbrand&apos;s Essential Haematology,</strong> 8th Edition. Hoboken: Wiley. 2019.<br/>
              KUHN, V. et al. Red Blood Cell Function and Dysfunction: Redox Regulation, Nitric Oxide Metabolism, Anemia. <strong>Antioxid Redox Signal</strong>, 2017;26(13):718-742.<br/>
              LORENZI, T. F. <strong>Manual de Hematologia: Procedência e clínica</strong>, 4º Edição. Rio de Janeiro: Guanabara Koogan, 2006.<br/>
              PRINYAKUPT, J.; PLUEMPITIWIRIYAWEJ, C. Segmentation of white blood cells and comparison of cell morphology by linear and naïve Bayes classifiers. <strong>Biomed Eng Online,</strong> 2015;14(1):1–19. doi: <a href="https://www.doi.org/10.1186/s12938-015-0037-1">10.1186/s12938-015-0037-1</a>.<br/>
              RENA, C. L. et al. Estudo revisional sobre a morfologia e as funções dos leucócitos. <strong>HU Revista da UFJF,</strong> v. 27, n. 1, jan./dez. 2001.<br/>
              SILVA, P. H.; et al. <strong>Hematologia laboratorial</strong> - Teoria e procedimentos. Porto Alegre: Artmed, 2016.<br/>
              ZAGO, M A.; FALCÃO, R. P.; PASQUINI, R. <strong>Tratado de Hematologia.</strong> São Paulo: Atheneu, 2013.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
};

export default ArticlePage;
