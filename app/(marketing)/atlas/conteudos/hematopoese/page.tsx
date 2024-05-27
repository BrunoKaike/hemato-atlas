import React from 'react';
import { QuestionBubble } from "@/app/lesson/question-bubble";
import { Separator } from "@/components/ui/separator";
import { ChaveBubble } from "@/app/lesson/pontos-chave";

const ArticlePage: React.FC = () => {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-slate-800 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-800 lg:mb-6 lg:text-4xl dark:text-white">
              Hematopoese
            </h1>
          </header>
          <section>
            <QuestionBubble question={"Hematopoese é o processo de formação, desenvolvimento e maturação das células sanguíneas a partir das células-tronco hematopoéticas na medula óssea."}></QuestionBubble>
            <p className="indent-8 not-format text-base text-justify">
              A <strong>hematopoese</strong> é responsável pela renovação contínua do sangue, um tecido líquido que permeia todo o organismo. O sangue tem uma <strong>composição complexa</strong> que inclui:
            </p>
            <ul className="list-disc ml-12 text-base">
              <li><strong>Fase líquida:</strong> água, eletrólitos, sais minerais, proteínas, glicídeos e lipídeos</li>
              <li><strong>Elementos figurados:</strong> eritrócitos, leucócitos e plaquetas</li>
            </ul>
            <p className="indent-8 not-format text-base text-justify">
              O sangue desempenha várias <strong>funções vitais</strong>, incluindo:
            </p>
            <ul className="list-disc ml-12 text-base">
              <li>Transporte de nutrientes e oxigênio para os tecidos</li>
              <li>Eliminação de resíduos metabólicos</li>
              <li>Oxigenação dos tecidos (eritrócitos)</li>
              <li>Defesa do organismo (leucócitos)</li>
              <li>Manutenção da hemostasia (plaquetas)</li>
            </ul>
            <p className="indent-8 not-format text-base text-justify">
              Essa complexa interação entre os componentes sanguíneos é crucial para a saúde e o funcionamento adequado do organismo como um todo.
            </p>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Processo de Hematopoese</h2>
            <p className="indent-8 not-format text-base text-justify">
              A hematopoese tem início com uma <strong>célula-tronco pluripotente</strong>, a mais imatura na hierarquia de diferenciação para células sanguíneas. Características principais:
            </p>
            <ul className="list-disc ml-12 text-base">
              <li>Capacidade de auto-renovação</li>
              <li>Diferenciação em diversas linhagens celulares</li>
            </ul>
            <p className="indent-8 not-format text-base text-justify">
              As células-tronco dão origem a <strong>progenitores hematopoéticos comprometidos</strong>, responsáveis por:
            </p>
            <ul className="list-disc ml-12 text-base">
              <li>Potencial de desenvolvimento mais restrito</li>
              <li>Origem das distintas linhagens celulares do sangue</li>
            </ul>
            <p className="indent-8 not-format text-base text-justify">
              A existência de células progenitoras separadas para cada linhagem é fundamental para a <strong>homeostase hematopoiética</strong> e a funcionalidade do sistema imunológico.
            </p>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Tipos de Células-Tronco Hematopoéticas</h2>
            <p className="indent-8 not-format text-base text-justify">
              As <strong>Células-Tronco Hematopoéticas (CTHs)</strong> consistem em duas subpopulações distintas:
            </p>
            <ul className="list-disc ml-12 text-base">
              <li><strong><em>LT-HSC (Long Term Hematopoietic Stem Cell</em>):</strong> manutenção do pool hematopoiético imaturo e indiferenciado.</li>
              <li><strong><em>ST-HSC (Short Term Hematopoietic Stem Cell</em>):</strong> origem de divisões celulares assimétricas da LT-HSC, com maior potencial de proliferação e comprometimento para gerar precursores.</li>
            </ul>
            <p className="indent-8 not-format text-base text-justify">
              Esses precursores são conhecidos como <strong>unidades formadoras de colônias (<em>CFU</em>)</strong>, com exemplos como:
            </p>
            <ul className="list-disc ml-12 text-base">
              <li><strong><em>CFU-G (Colony-Forming Unit – Granulocytic</em>):</strong> produz apenas granulócitos.</li>
              <li><strong><em>CFU-GM (Colony-Forming Unit – Granulocytic/Monocytic</em>):</strong> produz granulócitos e monócitos.</li>
            </ul>
            <p className="indent-8 not-format text-base text-justify">
              Quanto mais diferenciado o precursor, menor é o número de tipos celulares aos quais pode dar origem.
            </p>
          </section>
          <figure className='max-w-7xl my-8'>
            <img className='not-format h-auto mx-auto max-w-full rounded-lg'
              src="/img_conteudos/diagramaHematopoese.PNG"
              alt="Diagrama de hematopoese"
            />
            <figcaption className='text-xs mx-auto max-w-6xl text-justify not-format'>
              <strong className='text-gray-900 not-format'>Figura 1.</strong> Diagrama mostrando a célula-tronco pluripotente da medula óssea e as linhagens celulares que dela se originam. Várias células progenitoras podem ser identificadas por cultura em meio semissólido pelo tipo de colônia que formam. É possível que um progenitor eritroide/megacariocítico seja formado antes de o progenitor linfoide comum divergir do progenitor mieloide misto granulocítico/monocítico/eosinofílico. Baso, basófilo; BFU, unidade formadora explosiva; CFU, unidade formadora de colônia; E, eritroide; Eo, eosinófila; GEMM, granulocítica, eritroide, monocítica e megacariocítica; GM, granulócito, monócito; Meg, megacariócito; NK, natural killer. Fonte: Hoffbrand; Steensma, 2019.
            </figcaption>
          </figure>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Produção e Autorrenovação</h2>
            <p className="indent-8 not-format text-base text-justify">
              As CTHs são responsáveis pela produção de cerca de <strong>10<sup>9</sup> glóbulos vermelhos e 10<sup>8</sup> leucócitos</strong> em média por hora, além de contribuírem para a produção de plaquetas e outras linhagens celulares. 
            </p>
            <p className="indent-8 not-format text-base text-justify">
              Surpreendentemente, essa alta atividade proliferativa não leva à extinção do pool de CTHs, graças ao mecanismo de <strong>autorrenovação</strong>:
            </p>
            <ul className="list-disc ml-12 text-base">
              <li>Divisão celular gera células-filhas que mantêm características das CTHs</li>
            </ul>
            <p className="indent-8 not-format text-base text-justify">
              Esse mecanismo garante a continuidade da hematopoese e a manutenção do estoque de células-tronco ao longo do tempo.
            </p>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Desenvolvimento Embrionário da Hematopoese</h2>
            <p className="indent-8 not-format text-base text-justify">
              Em humanos, o processo de hematopoese tem início aproximadamente <strong>trinta dias após a formação do embrião</strong>. Fases principais:
            </p>
            <ul className="list-disc ml-12 text-base">
              <li><strong>Fase primitiva:</strong> CTHs no saco vitelínico, capacidade de gerar apenas eritrócitos.</li>
              <li><strong>Fase definitiva/adulta:</strong> surge na quarta semana de gestação, com CTHs gerando todas as linhagens hematopoéticas e autorrenovação, localizada na mesoderme (regiões da Aorta-Gônadas-Mesonefro - AGM).</li>
            </ul>
            <p className="indent-8 not-format text-base text-justify">
              Durante a vida intrauterina, por volta da <strong>quinta semana de gestação</strong>, a hematopoese migra da AGM para a <strong>placenta e o fígado fetal</strong>. Posteriormente, por volta da <strong>décima segunda semana de gestação</strong>, a <strong>medula óssea</strong> torna-se o principal local de produção de células hematopoéticas. Após o nascimento, a medula óssea assume exclusivamente essa função, embora em alguns casos patológicos, possa ocorrer <strong>metaplasia</strong>, que é a expansão do tecido hematopoético para regiões extramedulares, como baço e fígado.
            </p>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Desenvolvimento Embrionário da Hematopoese</h2>
            <p className="indent-8 not-format text-base text-justify">
              Em humanos, o processo de hematopoese tem início aproximadamente <strong>trinta dias após a formação do embrião</strong>. Fases principais:
            </p>
            <ul className="list-disc ml-12 text-base">
              <li><strong>Fase primitiva:</strong> CTHs no saco vitelínico, capacidade de gerar apenas eritrócitos.</li>
              <li><strong>Fase definitiva/adulta:</strong> surge na quarta semana de gestação, com CTHs gerando todas as linhagens hematopoéticas e autorrenovação, localizada na mesoderme (regiões da Aorta-Gônadas-Mesonefro - AGM).</li>
            </ul>
            <p className="indent-8 not-format text-base text-justify">
              Durante a vida intrauterina, por volta da <strong>quinta semana de gestação</strong>, a hematopoese migra da AGM para a <strong>placenta e o fígado fetal</strong>. Posteriormente, por volta da <strong>décima segunda semana de gestação</strong>, a <strong>medula óssea</strong> torna-se o principal local de produção de células hematopoéticas. Após o nascimento, a medula óssea assume exclusivamente essa função, embora em alguns casos patológicos, possa ocorrer <strong>metaplasia</strong>, que é a expansão do tecido hematopoético para regiões extramedulares, como baço e fígado.
            </p>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Regulação Molecular da Hematopoese</h2>
            <p className="indent-8 not-format text-base text-justify">
              A hematopoese começa com a divisão da célula-tronco em duas, uma das quais se auto renova enquanto a outra se compromete com a diferenciação. Essas células progenitoras, comprometidas de forma precoce, expressam baixos níveis de fatores de transcrição que as direcionam para linhagens específicas. A escolha da linhagem de diferenciação pode ser influenciada tanto por alocação aleatória quanto por sinais externos recebidos pelas células progenitoras. Diversos fatores de transcrição regulam a sobrevivência das células-tronco, como <strong>SCL</strong>, <strong>GATA-2</strong> e <strong>NOTCH-1</strong>, enquanto outros fatores estão envolvidos na diferenciação para as principais linhagens celulares. Por exemplo, <strong>PU.1</strong> e a família <strong>CEBP</strong> direcionam células para a linhagem mielóide leucocitária, enquanto <strong>GATA-2</strong>, seguido por <strong>GATA-1</strong> e <strong>FOG-1</strong>, desempenham um papel crucial na diferenciação eritropoética e megacariocítica. Esses fatores de transcrição interagem de forma que o fortalecimento de um programa de transcrição pode suprimir o de outra linhagem. Os fatores de transcrição induzem a síntese de proteínas específicas para cada linhagem celular. Por exemplo, os genes específicos para a síntese de globina e heme nas células eritróides possuem sítios de ligação para GATA-1.
            </p>

            <ChaveBubble question={"Se liga nos pontos chave"}></ChaveBubble>
            <ul className="list-disc pl-8">
              <li><strong>Divisão Celular:</strong> Uma célula-tronco se auto renova e outra se diferencia.</li>
              <li><strong>Baixos Níveis de Fatores de Transcrição:</strong> Direcionam as células para linhagens específicas.</li>
              <li><strong>Regulação da Sobrevivência:</strong> <em>SCL</em>, <em>GATA-2</em>, <em>NOTCH-1</em>.</li>
              <li><strong>Diferenciação Mielóide Leucocitária:</strong> <em>PU.1</em>, família <em>CEBP</em>.</li>
              <li><strong>Diferenciação Eritropoética:</strong> <em>GATA-2</em>, <em>GATA-1</em>, <em>FOG-1</em>.</li>
              <li><strong>Interações:</strong> Um programa de transcrição pode suprimir outro.</li>
              <li><strong>Diferenciação Eritróides:</strong> Sítios de ligação para <em>GATA-1</em> nos genes de globina e heme.</li>
            </ul>
          </section>

          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Fatores de Crescimento da Hematopoese</h2>
            <p className="indent-8 not-format text-base text-justify">
              Os fatores de crescimento hematopoéticos são hormônios glicoproteicos que regulam a proliferação, diferenciação das células progenitoras hematopoéticas e a função das células sanguíneas maduras. Eles podem atuar localmente, por contato célula a célula, ou circular pelo plasma. Além disso, podem se ligar à matriz extracelular, criando nichos aos quais células-tronco e progenitoras se aderem. Esses fatores não apenas promovem a proliferação celular, mas também estimulam a diferenciação, maturação, previnem a apoptose e influenciam as funções das células maduras. Compartilhando várias propriedades, esses fatores agem em diferentes estágios da hematopoese. As células do estroma são as principais fontes de fatores de crescimento, exceto a eritropoetina, que é 90% sintetizada no rim, e a trombopoetina, produzida principalmente no fígado.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white my-2">Características dos Fatores de Crescimento:</h3>
            <ul className="list-disc pl-8">
              <li><strong>Proliferação e Diferenciação:</strong> Regulam desde a célula-tronco até células maduras.</li>
              <li><strong>Local de Ação:</strong> Localmente ou via plasma, ligação à matriz extracelular.</li>
              <li><strong>Funções:</strong> Estímulo à diferenciação, maturação, prevenção de apoptose.</li>
              <li><strong>Fontes:</strong> Principalmente células do estroma, exceto <em>eritropoetina</em> (rim) e <em>trombopoetina</em> (fígado).</li>
            </ul>

            <p className="indent-8 not-format text-base text-justify">
              Um aspecto crucial é que os fatores de crescimento podem atuar sinergicamente para estimular a proliferação ou diferenciação de uma célula específica. Além disso, a ação de um fator de crescimento em uma célula pode induzir a produção de outro fator ou receptor de fator. <strong>SCF</strong> e <strong>FLT-L</strong> atuam localmente em células-tronco pluripotentes e progenitores primitivos mielóides e linfóides. A <strong>interleucina-3 (IL-3)</strong> e o <strong>GM-CSF</strong> são fatores multipotentes com atividades parcialmente sobrepostas. <strong>G-CSF</strong> e <strong>trombopoetina</strong> aumentam os efeitos de SCF, FLT-L, IL-3 e GM-CSF na sobrevivência e diferenciação das células hematopoéticas primitivas. Esses fatores mantêm um pool de células-tronco e progenitoras hematopoéticas, sobre o qual agem os fatores de ação tardia, como <strong>eritropoetina</strong>, <strong>G-CSF</strong>, <strong>M-CSF (fator estimulador de colônias de macrófagos)</strong>, <strong>IL-5</strong> e <strong>trombopoetina</strong>, para aumentar a produção de uma determinada linhagem conforme as necessidades do organismo. A formação de granulócitos e monócitos, por exemplo, pode ser estimulada por infecção ou inflamação através da liberação de <strong>IL-1</strong> e <strong>fator de necrose tumoral (TNF)</strong>, que, por sua vez, estimulam as células do estroma a produzirem fatores de crescimento em uma rede interativa. Por outro lado, citocinas como o <strong>fator de crescimento transformador-β (TGF-β)</strong> e o <strong>interferon-γ (IFN-γ)</strong> podem ter um efeito negativo na hematopoese, podendo desempenhar um papel no desenvolvimento de anemia aplástica.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white my-2">Ação Sinérgica dos Fatores de Crescimento:</h3>
            <ul className="list-disc pl-8">
              <li><strong>Fatores Locais:</strong> <em>SCF</em>, <em>FLT-L</em> (células-tronco e progenitores mielóides/linfóides).</li>
              <li><strong>Fatores Multipotentes:</strong> <em>IL-3</em>, <em>GM-CSF</em>.</li>
              <li><strong>Fatores de Ação Tardia:</strong> <em>eritropoetina</em>, <em>G-CSF</em>, <em>M-CSF</em>, <em>IL-5</em>, <em>trombopoetina</em>.</li>
              <li><strong>Estímulo por Infecção/Inflamação:</strong> <em>IL-1</em>, <em>TNF</em> (ação no estroma).</li>
              <li><strong>Citocinas Inibidoras:</strong> <em>TGF-β</em>, <em>IFN-γ</em> (efeito negativo na hematopoese).</li>
            </ul>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Referências</h2>
            <p className="not-format text-base">
              HOFFBRAND, A. V.; STEENSMA, D. P. <strong>Hoffbrand&apos;s Essential Haematology, 8th Edition.</strong> Hoboken: Wiley. 2019.<br/>
              HOFFBRAND, A. V.; MOSS, P. A. H. <strong>Fundamentos em hematologia de Hoffbrand.</strong> 7º Edição. Tradução e revisão: Renato Failace. Porto Alegre: Artmed, 2018.<br/>
              LORENZI, T. F. <strong>Manual de Hematologia: Procedência e clínica,</strong> 4º Edição. Rio de Janeiro: Guanabara Koogan, 2006.<br/>
              ZAGO, M A.; FALCÃO, R. P.; PASQUINI, R. <strong>Tratado de Hematologia.</strong> São Paulo: Atheneu, 2013.
            </p>
          </section>

        </article>
      </div>
    </main>
  );
};

export default ArticlePage;
