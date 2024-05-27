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
              Alterações
            </h1>
          </header>
          <section>
            <QuestionBubble question={"Alterações nos componentes do sangue são mudanças nas células sanguíneas ou no plasma, que podem indicar doenças ou condições médicas. São variações na quantidade, tamanho, forma ou funcionalidade das células. Exemplos são anemia, leucocitose e trombocitopenia."}></QuestionBubble>
          </section> 
          <section> 
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Eritrócitos</h2>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Eritrócitos normais</h3>
            <p className="indent-8 not-format text-base text-justify">
              Os eritrócitos têm uma forma característica de disco bicôncavo e um diâmetro médio de 7,5 μm. No esfregaço de sangue periférico corado, aparecem arredondados com uma área central mais clara que ocupa cerca de um terço da célula. Para manter sua fluidez e função na circulação, é crucial que a membrana dos eritrócitos esteja íntegra, que o conteúdo enzimático seja suficiente para gerar energia e proteger a célula contra a oxidação, e que a hemoglobina esteja em quantidade e qualidade adequadas. Qualquer perturbação nesses componentes, devido a doenças hereditárias ou adquiridas, exposição a agentes nocivos (como produtos químicos, radiações, reações imunológicas, infecções ou parasitas) ou uso de certos medicamentos, pode alterar o tamanho, a forma, a coloração e a distribuição dos eritrócitos no esfregaço de sangue, podendo também resultar na presença de inclusões celulares.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Eritrócito_normal_(normócito).png"
                alt="Em destaque presença de Eritrócito normal (normócito)"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 1.</strong> Em destaque presença de Eritrócito normal (normócito).
              </figcaption>
            </figure>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Anisocitose - Alteração de tamanho</h3>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Anisocitose.png"
                alt="Esfregaço sanguíneo com presença de Anisocitose"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 2.</strong> Esfregaço sanguíneo com presença de Anisocitose.
              </figcaption>
            </figure>
            <ul className="list-disc ml-12 text-base">
              <li><strong>Microcitose:</strong> Microcitose é o termo usado para descrever eritrócitos menores que o normal, com diâmetro inferior a 7 μm. Condições como anemia ferropriva, talassemia e anemia sideroblástica são associadas a microcitose. Anemias decorrentes de doenças crônicas também podem apresentar eritrócitos ligeiramente microcíticos quando são severas.</li>
              <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Microcitose.png"
                  alt="Em destaque presença de Microcitose"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 3.</strong> Em destaque presença de Microcitose.
                </figcaption>
              </figure>
              <li><strong>Macrocitose:</strong> Macrocitose refere-se a eritrócitos maiores que o normal, com diâmetro superior a 9 μm e bem hemoglobinizados. A presença de macrocitose pode resultar de reticulocitose, pois os reticulócitos são maiores que as hemácias maduras. Em casos sem reticulocitose elevada, macrocitose pode ser causada por deficiência de vitamina B12 ou ácido fólico, frequentemente apresentando macro-ovalócitos. Outras causas incluem doenças endócrinas (especialmente hipotireoidismo), doenças hepáticas e distúrbios da medula óssea, como insuficiências medulares.</li>
            </ul>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Anisocromia - Alteração de cor</h3>
            <ul className="list-disc ml-12 text-base">
              <li><strong>Hipocromia:</strong> Hipocromia refere-se a eritrócitos com coloração mais pálida devido à redução do conteúdo de hemoglobina, aumentando a área de palidez central. A hemoglobina, composta por quatro grupos heme (contendo ferro) e quatro cadeias globínicas, diminui na síntese de heme ou cadeias globínicas, resultando em hemácias hipocrômicas. A causa mais comum desta condição é a deficiência de ferro, que reduz a síntese de heme.</li>
              <li><strong>Policromasia:</strong> Policromasia é o termo usado para descrever a coloração róseo-azulada dos eritrócitos imaturos, especialmente os reticulócitos jovens. Essas células absorvem simultaneamente corantes básicos e eosina devido à presença de RNA ribossômico e hemoglobina.</li>
            </ul>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Poiquilocitose - Alteração de forma</h3>
            <ul className="list-disc ml-12 text-base">
              <li><strong>Células espiculadas:</strong> Células espiculadas são eritrócitos que apresentam projeções na membrana e são classificadas em três tipos principais: equinócitos, acantócitos e esquizócitos. Os equinócitos, ou hemácias crenadas, são caracterizados por espículas regulares e a causa mais comum é artefato de estocagem, embora também possam ocorrer em pacientes urêmicos e em estado crítico. Os acantócitos apresentam espículas irregulares em comprimento e distribuição, sendo observados na abetalipoproteinemia, doenças hepáticas e pós-esplenectomia, devido a alterações no conteúdo lipídico da membrana celular. Já os esquizócitos são fragmentos eritrocitários, muitos dos quais espiculados, e são detectáveis pelo exame do esfregaço de sangue. Eles são característicos das anemias hemolíticas microangiopáticas, mas podem ser encontrados em várias condições, incluindo anemia megaloblástica, coagulação intravascular disseminada, queimaduras graves, dentre outras.</li>
              <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Esquizócito.png"
                  alt="Em destaque um Esquizócito"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 4.</strong> Em destaque um Esquizócito.
                </figcaption>
              </figure>
              <li><strong>Codócito (célula em alvo):</strong> A distribuição anormal de hemoglobina pode resultar na formação de uma célula com uma mancha central de hemoglobina cercada por uma área de palidez, conhecida como célula em alvo. Essas células são formadas devido a um excesso de membrana em relação ao volume do citoplasma. Isso pode ocorrer quando há excesso de lipídios na membrana, como na icterícia obstrutiva e nas hepatopatias graves, ou quando há redução do conteúdo citoplasmático sem redução da membrana, como ocorre nas talassemias, na deficiência de ferro e em algumas hemoglobinopatias.</li>
              <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Codócito (hemácia em alvo).png"
                  alt="Em destaque presença de Codócito (célula em alvo)"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 5.</strong> Em destaque presença de Codócito (célula em alvo).
                </figcaption>
              </figure>
              
              <li><strong>Dacriócitos (em lágrima):</strong> As hemácias em forma de lágrima, conhecidas como dacriócitos, aparecem em casos de fibrose da medula óssea ou diseritropoese grave. Elas também podem ocorrer em algumas anemias hemolíticas e anemias megaloblásticas. Os dacriócitos são característicos da mielofibrose, seja ela idiopática ou secundária a infiltrações na medula óssea.</li>
              <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Dacriócito.png"
                  alt="Em destaque presença de Dacriócitos (em lágrima)"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 6.</strong> Em destaque presença de Dacriócitos (em lágrima).
                </figcaption>
              </figure>

              <div className='flex gap-x-8'>
                <figcaption className='text-xs mx-auto max-w-6xl text-justify not-format'>
                  <strong className='text-gray-900 not-format'>Figura 7.</strong> Em destaque presença de Eritrócito normal (normócito).
                </figcaption>
                <figcaption className='text-xs mx-auto max-w-6xl text-justify not-format'>
                  <strong className='text-gray-900 not-format'>Figura 8.</strong> Em destaque presença de Dacriócitos (em lágrima).
                </figcaption>
              </div>
              <li><strong>Drepanócito (falciforme):</strong> Essas células são observadas nas doenças falciformes. A desoxi-hemoglobina S tem propensão a formar polímeros que se organizam em fibras paralelas, as quais tencionam a membrana do eritrócito, levando-o a adquirir uma forma de foice ou crescente, característica dessas condições.</li>
              <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Drepanócito.png"
                  alt="Em destaque presença de Drepanócito (falciforme)"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 9.</strong> Em destaque presença de Drepanócito (falciforme).
                </figcaption>
              </figure>
              <li><strong>Eliptócito ou ovalócito:</strong> Essas células podem ser encontradas em várias condições, tanto hereditárias quanto adquiridas. Quando presentes em grande quantidade, geralmente são associadas à eliptocitose hereditária, uma condição causada por uma alteração genética na membrana dos glóbulos vermelhos.</li>
              <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Eliptócito.png"
                  alt="Esfregaço sanguíneo com presença de Eliptócitos"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 10.</strong> Esfregaço sanguíneo com presença de Eliptócitos.
                </figcaption>
              </figure>
              <li><strong>Esferócito:</strong> Os esferócitos possuem forma esférica devido à perda de porções de sua membrana. Como mantêm o mesmo conteúdo com um invólucro menor, perdem a típica área central pálida e parecem mais densamente corados no esfregaço sanguíneo, aparentando ter um diâmetro menor. Esta condição é característica da esferocitose hereditária, uma condição onde ocorre um defeito no citoesqueleto da membrana dos glóbulos vermelhos. Além disso, pode ocorrer em condições adquiridas, como anemias imuno-hemolíticas.</li>
              <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Esferócito.png"
                  alt="Em destaque presença de Esferócito"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 11.</strong> Em destaque presença de Esferócito.
                </figcaption>
              </figure>
              <li><strong>Estomatócito:</strong> Os estomatócitos são células que apresentam uma fenda semelhante a uma boca na região central da célula. Embora possam ocorrer esporadicamente em indivíduos saudáveis, são observados com maior frequência em diversas condições clínicas. Entre as causas mais comuns estão o abuso de álcool e a hepatopatia alcoólica.</li>
              <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Estomatócito.png"
                  alt="Em destaque presença de Estomatócito"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 12.</strong> Em destaque presença de Estomatócito.
                </figcaption>
              </figure>
            </ul>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Inclusões eritrocitárias</h3>
            <ul className="list-disc ml-12 text-base">
              <li><strong>Howell Jolly:</strong> Os corpúsculos de Howell-Jolly são pequenas estruturas basofílicas presentes dentro dos eritrócitos, representando resíduos nucleares. Geralmente únicos, esses corpúsculos são normalmente eliminados pelo baço. No entanto, podem ser encontrados no sangue periférico em situações como a ausência do baço após uma esplenectomia ou em condições de baixa função esplênica, como no hipoesplenismo ou na asplenia funcional, que podem ocorrer em certas doenças falciformes.</li>
              <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Howell-Jolly.png"
                  alt="Em destaque presença de Howell-Jolly"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 13.</strong> Em destaque presença de Howell-Jolly.
                </figcaption>
              </figure>
              <li><strong>Pontilhado basófilo:</strong> Pequenas inclusões dispersas de RNA no citoplasma dos eritrócitos constituem o pontilhado basófilo. Essas inclusões podem ser finas ou grossas, dependendo da condição clínica. O pontilhado fino pode ocorrer em anemias hemolíticas, megaloblásticas e diseritropoéticas, dentre outras. Já o pontilhado grosseiro é característico de talassemias, hemoglobinas instáveis, e intoxicação por chumbo e outros metais pesados.</li>
              <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Pontilhado basófilo.png"
                  alt="Em destaque presença de Pontilhado basófilo"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 14.</strong> Em destaque presença de Pontilhado basófilo.
                </figcaption>
              </figure>
              <li><strong>Anel de cabot:</strong> Pequenas estruturas em forma de anel de cor azulada, conhecidas como anéis de Cabot, são restos nucleares presentes nos eritrócitos. Podem ser observados em condições como anemias megaloblásticas, anemias hemolíticas e após a esplenectomia.</li>
              <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Anel de cabot.png"
                  alt="Em destaque presença de Anel de cabot"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 15.</strong> Em destaque presença de Anel de cabot.
                </figcaption>
              </figure>
              <li><strong>Hemácia mordida:</strong> São células com alterações de forma semicircular da membrana (mordida) causada pela retirada de Corpos de Heinz pelos macrófagos sendo uma característica da hemólise oxidativa. A anemia microangiopática ou o dano mecânico podem causar alterações idênticas. A recomendação é a de quantificar estas células.</li>
              <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Hemácia mordida (fragmentada).png"
                  alt="Em destaque presença de Hemácia Mordida(Fragmentada)"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 16.</strong> Em destaque presença de Hemácia Mordida(Fragmentada).
                </figcaption>
              </figure>
              <li><strong>Corpúsculos de Pappenheimer:</strong> Pequenas inclusões basofílicas compostas de hemossiderina, conhecidas como corpúsculos de Pappenheimer, são observadas na periferia dos eritrócitos. Esses corpúsculos são representativos dos grânulos sideróticos dos siderócitos. Podem ser encontrados em casos de sobrecarga de ferro e em condições de hipoesplenismo.</li>
              <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Corpúsculos de Pappenheimer.png"
                  alt="Em destaque presença de Corpúsculos de Pappenheimer"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 17.</strong> Em destaque presença de Corpúsculos de Pappenheimer.
                </figcaption>
              </figure>
            </ul>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Organização eritrocitárias</h3>
            <ul className="list-disc ml-12 text-base">
              <li><strong>Aglutinação eritrocitária:</strong> Quando os eritrócitos são revestidos por anticorpos, eles podem se aglutinar, formando aglomerados. Esse fenômeno de aglutinação pode ser observado em anemias hemolíticas autoimunes, especialmente aquelas causadas por anticorpos frios. Nestes casos, os resultados de índices hematimétricos como o Volume Corpuscular Médio (VCM) e a Hemoglobina Corpuscular Média (HCM) obtidos por contadores eletrônicos podem ser falsamente elevados, pois os glóbulos aglutinados são contados como uma única célula.</li>
              <li><strong>Rouleaux:</strong> Quando as proteínas plasmáticas de alto peso molecular estão aumentadas, as hemácias podem se agrupar formando pilhas semelhantes a pilhas de moedas. Esse fenômeno é conhecido como rouleaux, uma palavra em francês que significa &quot;cilindros&quot; ou &quot;rolos&quot;.</li>
              <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Rouleaux.png"
                  alt="Organização de Eritrócitos em Rouleaux"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 18.</strong> Organização de Eritrócitos em Rouleaux.
                </figcaption>
              </figure>
            </ul>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Leucócitos</h2>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Linfócitos reativos (plasmocitoide e amebóide)</h3>
            <ul className="list-disc ml-12 text-base">
              <li><strong>Plasmocitóide:</strong> Possuem um núcleo redondo ou oval com cromatina moderadamente densa e raramente mostram nucléolos. O citoplasma é abundante, com coloração azul acinzentada, e às vezes exibe uma região clara ao redor do núcleo.</li>
              <li><strong>Amebóide:</strong> Têm contornos irregulares, um núcleo aumentado com cromatina menos condensada, tamanho celular aumentado com citoplasma abundante e basofilia na periferia, onde se conectam com outras células.</li>
              <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Linfócito reativo.png"
                  alt="Linfócito reativo amebóide"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 19.</strong> Linfócito reativo amebóide.
                </figcaption>
              </figure>
            </ul>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Linfócito grande granular</h3>
            <p className="indent-8 not-format text-base text-justify">
              Essas células são grandes, com núcleo redondo e cromatina densa sem nucléolo visível. O citoplasma é moderado ou abundante, claro ou levemente basofílico, contendo grânulos azurofílicos grandes e desigualmente distribuídos. Presentes em pequena quantidade em indivíduos normais, mas aumentam em certas condições reativas.
            </p>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Vacuolização citoplasmática</h3>
            <p className="indent-8 not-format text-base text-justify">
              Vacúolos no citoplasma dos neutrófilos são observados em infecções e indicam fagocitose de bactérias na corrente sanguínea, refletindo uma bacteremia ou septicemia.
            </p>
            <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Vacuolização.png"
                  alt="Presença de Vacuolização Citoplasmática"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 20.</strong> Presença de Vacuolização Citoplasmática.
                </figcaption>
              </figure>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Corpúsculo de dohle</h3>
            <p className="indent-8 not-format text-base text-justify">
              Corpúsculos de Döhle são inclusões no retículo endoplasmático rugoso, associadas à grande proliferação celular. Eles aparecem junto com granulações tóxicas em infecções bacterianas graves.
            </p>
            <figure className='max-w-7xl my-8'>
                <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                  src="/img_conteudos/Corpúsculos de Döhle.png"
                  alt="Em destaque presença de Corpúsculo de Döhle"
                />
                <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                  <strong className='text-gray-900 not-format'>Figura 21.</strong> Em destaque presença de Corpúsculo de Döhle.
                </figcaption>
              </figure>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Neutrófilos hipersegmentados</h3>
            <p className="indent-8 not-format text-base text-justify">
              Definidos por apresentarem 6 ou mais lóbulos, os neutrófilos hipersegmentados são significativos quando ≥ 5% dos neutrófilos contados no sangue periférico têm essa característica. Encontrados em condições como anemia megaloblástica, uso de corticoides, mielodisplasias, quimioterapia e, raramente, anemia ferropriva e uremia.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Neutrófilos hipersegmentados.png"
                alt="Presença de Neutrófilos hipersegmentados"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 22.</strong> Presença de Neutrófilos hipersegmentados.
              </figcaption>
            </figure>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Granulação grosseira</h3>
            <p className="indent-8 not-format text-base text-justify">
              A granulação grosseira refere-se à visualização das granulações primárias em metamielócitos e neutrófilos. Em situações fisiológicas, essas granulações não são reveladas, mas aparecem em septicemias devido à abreviação da mitose na proliferação dos neutrófilos.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Granulação grosseira.png"
                alt="Presença de Granulação grosseira"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 23.</strong> Presença de Granulação grosseira.
              </figcaption>
            </figure>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Linfócitos anomalos</h3>
            <p className="indent-8 not-format text-base text-justify">
              Linfócitos anômalos têm características morfológicas distintas e são encontrados em doenças linfoproliferativas crônicas. Sua presença pode indicar diagnósticos específicos e são um ponto crucial de análise em exames laboratoriais, sugerindo possíveis origens malignas.
            </p>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Hairy cells</h3>
            <p className="indent-8 not-format text-base text-justify">
              Na leucemia de Hairy Cells, uma neoplasia crônica de linhagem B, os linfócitos são maiores que o normal, com citoplasma abundante e acinzentado, e finas projeções semelhantes a fios de cabelo. O núcleo pode ser redondo, oval, em forma de feijão ou bilobulado.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Hairy cells.png"
                alt="Presença de Hairy cells"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 24.</strong> Presença de Hairy cells.
              </figcaption>
            </figure>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Harlequin cells</h3>
            <p className="indent-8 not-format text-base text-justify">
              Eosinófilos displásicos com grânulos metacromáticos, basofílicos e alaranjados, associados a neoplasias mieloides como leucemia mieloide aguda e crônica. No entanto, esses eosinófilos imaturos também podem aparecer na medula óssea normal ou reativa.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Harlequin cells.png"
                alt="Presença de célula Harlequin"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 25.</strong> Presença de célula Harlequin.
              </figcaption>
            </figure>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Flower cells</h3>
            <p className="indent-8 not-format text-base text-justify">
              Linfócitos atípicos com núcleos em forma de pétalas de flor, típicos na leucemia de células T adultas induzida pelo HTLV-1, associada a um imunofenótipo CD4+/CD25+. Também podem ser encontrados em portadores assintomáticos do HTLV-1.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Flower cell.png"
                alt="Presença de célula Flower"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 26.</strong> Presença de célula Flower.
              </figcaption>
            </figure>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Cristais da morte</h3>
            <p className="indent-8 not-format text-base text-justify">
            Inclusões azul-esverdeadas brilhantes no citoplasma de neutrófilos, formadas pela liberação de lipofuscina, um pigmento rico em gordura, devido ao desgaste das células do fígado. Esses cristais se tornam visíveis no esfregaço sanguíneo e coloração da lâmina.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Cristal da morte.png"
                alt="Em destaque presença de Cristal da morte"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 27.</strong> Em destaque presença de Cristal da morte.
              </figcaption>
            </figure>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Plaquetas</h2>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Macroplaqueta</h3>
            <p className="indent-8 not-format text-base text-justify">
              Macroplaquetas são plaquetas maiores do que o normal, mas não chegam a ser classificadas como gigantes. A presença de macroplaquetas está associada a várias condições patológicas, incluindo infarto do miocárdio, septicemia, gravidez, diabetes mellitus, hipertireoidismo, tuberculose, leucemia mieloide crônica, talassemia heterozigota, entre outras.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Macroplaqueta.png"
                alt="Em destaque presença de Macroplaqueta"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 28.</strong> Em destaque presença de Macroplaqueta.
              </figcaption>
            </figure>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Macroplaqueta (2).png"
                alt="Em destaque presença de Macroplaqueta"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 29.</strong> Em destaque presença de Macroplaqueta.
              </figcaption>
            </figure>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Plaqueta gigante</h3>
            <p className="indent-8 not-format text-base text-justify">
              Em casos de plaquetas gigantes, o volume plaquetário médio (VPM) geralmente excede 20 fL, fazendo com que as plaquetas sejam do tamanho ou maiores do que os eritrócitos. A presença de um grande número de plaquetas gigantes pode sugerir a possibilidade de mielofibrose. Os analisadores hematológicos que utilizam o princípio da impedância podem ter dificuldade em contar e medir essas plaquetas devido ao seu volume exceder o limiar de diferenciação entre plaquetas e eritrócitos microcíticos.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Plaqueta gigante.png"
                alt="Presença de Plaquetas gigantes"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 30.</strong> Presença de Plaquetas gigantes.
              </figcaption>
            </figure>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Satelitismo plaquetário</h3>
            <p className="indent-8 not-format text-base text-justify">
              O satelitismo plaquetário ocorre quando as plaquetas se agregam ao redor de neutrófilos e monócitos, formando uma estrutura conhecida como &quot;roseta&quot;. Essa formação é geralmente observada em extensões de sangue coletadas em EDTA.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Satelitismo plaquetário.png"
                alt="Presença de Satelitismo plaquetário"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 31.</strong> Presença de Satelitismo plaquetário.
              </figcaption>
            </figure>
            <h3 className=" indent-8 text-2xl font-bold text-gray-800 dark:text-white my-4">Agregação plaquetária</h3>
            <p className="indent-8 not-format text-base text-justify">
              A agregação plaquetária é caracterizada pela ligação cruzada das plaquetas através de receptores ativos de GPIIb/IIIa com pontes de fibrinogênio. Quando uma plaqueta é estimulada, há um aumento nas moléculas de GPIb/IIa, permitindo a ligação cruzada das plaquetas via fator de von Willebrand (VWF) e pontes de fibrinogênio.
            </p>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Referências</h2>
            <p className="not-format text-base">
              CHABOT-RICHARDS, D. S.; GEORGE, T. I. Leukocytosis. <strong>Int J Lab Hematol</strong>, v. 36, n. 3, p. 279-288, junho, 2014. doi: <a href="https://www.doi.org/10.1111/ijlh.12212">10.1111/ijlh.12212</a>.<br/>
              CLÍNICO DA PRESENÇA DOS GR NULOS DA MORTE?. <strong>Hematology, transfusion and cell terapy</strong>, v. 42, n. s2, novembro, 2020. doi: <a href="https://www.doi.org/10.1016/j.htct.2020.10.728">10.1016/j.htct.2020.10.728</a>.<br/>
              FAILACE, R.; FERNANDES, F. <strong>Hemograma - manual de interpretação.</strong> 6º Edição. Porto Alegre: Artmed, 2015.<br/>
              Flower cells of leukemia. <strong>Blood work</strong>, v. 115, n. 9, p. 1668, março, 2010. doi: <a href="https://www.doi.org/10.1182/blood-2009-09-245233">10.1182/blood-2009-09-245233</a>.<br/>
              Hematology and Clinical Microscopy Glossary. <strong>College of American Pathologists</strong>, 2019. Disponível em: <a href="https://documents.cap.org/documents/2019-hematology-clinical-microscopy-glossary.pdf">https://documents.cap.org/documents/2019-hematology-clinical-microscopy-glossary.pdf</a>. Acesso em: 20 mar 2024.<br/>
              HOFFBRAND, A. V.; MOSS, P. A. H. <strong>Fundamentos em hematologia de Hoffbrand.</strong> 7º Edição. Tradução e revisão: Renato Failace. Porto Alegre: Artmed, 2018.<br/>
              LEAL, B. C. et al. GR NULOS VERDES EM NEUTRÓFILOS: QUAL O SIGNIFICADO LORENZI, T. F. <strong>Manual de Hematologia: Procedência e clínica,</strong> 4º Edição. Rio de Janeiro: Guanabara Koogan, 2006.<br/>
              LORENZI, T. F. <strong>Manual de Hematologia: Procedência e clínica</strong>, 4º Edição. Rio de Janeiro: Guanabara Koogan, 2006.<br/>
              PALMER, L. et al. ICSH recommendations for the standardization of nomenclature and grading of peripheral blood cell morphological features. <strong>Int J Lab Hematol</strong>, v. 37, n. 3, p. 287 - 303, junho, 2015. doi: <a href="https://www.doi.org/10.1111/ijlh.12327">10.1111/ijlh.12327</a>.<br/>
              SILVA, P. H.; et al. <strong>Hematologia laboratorial</strong> - Teoria e procedimentos. Porto Alegre: Artmed, 2016.<br/>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
};

export default ArticlePage;
