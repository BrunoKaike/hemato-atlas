import React from 'react';
import { QuestionBubble } from "@/app/lesson/question-bubble";
import { ChaveBubble } from "@/app/lesson/pontos-chave";
import { Separator } from "@/components/ui/separator";

const ArticlePage: React.FC = () => {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-slate-800 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-800 lg:mb-6 lg:text-4xl dark:text-white">
              Eritrocitos
            </h1>
          </header>
          <section>
            <QuestionBubble question={"Os eritrócitos são a célula em maior percentagem no sangue e também são chamados hemácia ou glóbulo vermelho."}></QuestionBubble>
            <p className="indent-8 not-format text-base text-justify">
              Os eritrócitos, conhecidos como glóbulos vermelhos ou <em>Red Blood Cells (RBCs)</em>, têm um papel crucial no corpo humano, transportando gases e nutrientes por todo o organismo. Graças à sua forma e composição únicas, essas células especializadas realizam suas funções de maneira eficiente. Os eritrócitos são essenciais para investigar uma variedade de processos patológicos que afetam diferentes sistemas corporais. Com uma forma bicôncava e discóide, os eritrócitos maduros são anucleados e têm uma vida útil de cerca de <strong>120 dias</strong>. Durante esse tempo, eles:
            </p>
            <ul className="list-disc ml-8 text-base text-justify">
              <li>Transportam oxigênio dos pulmões para os tecidos periféricos, auxiliando em processos metabólicos como a síntese de ATP.</li>
              <li>Removem dióxido de carbono dos tecidos para eliminá-lo pelos pulmões.</li>
            </ul>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/Eritrócito_normal_(normócito).png"
                alt="Em destaque presença de Eritrócito normal (normócito)"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format align-center'>
                <strong className='text-gray-900 not-format'>Figura 1.</strong> Em destaque presença de Eritrócito normal (normócito).
              </figcaption>
            </figure>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Processo de Eritropoese</h2>
            <p className="indent-8 not-format text-base text-justify">
              A <strong>eritropoese</strong> é um processo complexo que envolve uma variedade de células em diferentes estágios de maturação. O conjunto total dessas células eritróides é chamado de <em>éritron</em>, destacando a unidade funcional das células envolvidas nesse processo. Em um adulto saudável, aproximadamente <strong>200 bilhões</strong> de hemácias são produzidas diariamente, substituindo as células destruídas e mantendo a massa total de hemácias estável. Essa produção e destruição diária de hemácias equivale a cerca de <strong>0,83%</strong> do total, e, em condições normais, ocorre exclusivamente na medula óssea.
            </p>
            <p className="indent-8 not-format text-base text-justify">
              As técnicas de cultura de precursores hematopoéticos reconhecem dois precursores eritróides:
            </p>
            <ul className="list-disc ml-8 text-base text-justify">
              <li>Unidade formadora de crescimento rápido-eritróide (<em>BFU-E = Burst-Forming Unit-Erythroid</em>)</li>
              <li>Unidade formadora de colônia-eritróide (<em>CFU-E = Colony-Forming Unit-Erythroid</em>)</li>
            </ul>
            <p className="indent-8 not-format text-base text-justify">
              Ambas não apresentam diferenciação eritróide no que diz respeito à morfologia e só podem ser classificadas do ponto de vista funcional. As BFU-E dão origem às CFU-E, que representam o estágio seguinte da maturação. A partir deste ponto, temos o primeiro precursor eritróide reconhecível por microscopia de luz, o <strong>proeritroblasto</strong>.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg'
                src="/img_conteudos/esquemaEritropoese.PNG"
                alt="Esquema ilustrativo da Eritropoese. Fonte: Lorenzi, 2006."
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format'>
                <strong className='text-gray-900 not-format'>Figura 2.</strong> Esquema da Eritropoese. Fonte: Lorenzi, 2006.
              </figcaption>
            </figure>
            <p className="indent-8 not-format text-base text-justify">
              O <i>proeritroblasto</i> é o tipo celular mais imaturo que pode ser identificado como pertencente a essa linhagem; esse é uma célula jovem, grande, nucleada, e não tem capacidade de síntese de hemoglobina porque seus genes não foram ativados. A partir dele, observa-se o amadurecimento dos precursores dos glóbulos vermelhos. Em seguida, surge o <i>eritroblasto basófilo</i>, assim denominado devido às suas características de coloração, já que o citoplasma cora-se intensamente com azul de metileno, um corante básico. Isso ocorre devido à intensa síntese de RNA mensageiro presente no citoplasma. Conforme ocorre a maturação, o RNA mensageiro é traduzido em proteína, resultando na formação da hemoglobina, que é a principal proteína produzida e acumulada pelos eritroblastos. Essa proteína tem grande afinidade com a eosina, um corante acidófilo. Neste estágio, observa-se uma grande quantidade de RNA mensageiro e hemoglobina, o que caracteriza o <i>eritroblasto policromático</i>, pois a hemoglobina e o RNA possuem afinidade por corantes distintos. O núcleo é bem organizado. Praticamente todo o RNA mensageiro é convertido em hemoglobina, originando, assim, o <i>eritroblasto ortocromático</i>. A morfologia dos precursores eritróides reflete essas duas características fundamentais: a capacidade proliferativa e a intensa síntese de hemoglobina. Assim, a célula mais primitiva tem núcleo mais imaturo, volumoso e cromatina fina. À medida que amadurece, o núcleo vai diminuindo de volume e a cromatina fica mais condensada até o núcleo tornar-se picnótico, correspondendo à célula que perdeu a capacidade de se dividir. Os precursores eritróides têm capacidade proliferativa intensa, assim, cada proeritroblasto origina de 8 a 32 eritroblastos ortocromáticos; essas células, por sua vez, não têm mais capacidade de dividir-se e perdem o núcleo transformando-se em <i>reticulócito</i>, que é uma &quot;célula&quot; anucleada. Essa célula já pode circular, mas necessita ainda de um certo polimento ou acabamento, pois ela ainda conserva no citoplasma alguns resquícios de organelas, como RNA e mitocôndrias. Cerca de 10 a 20% da síntese de hemoglobina completa-se neste estágio e, como ainda conserva mitocôndrias, têm certa capacidade de respiração aeróbica. Os resíduos do RNA permanecem por pouco tempo, cerca de 4 dias. Ao atravessar os sinusóides do baço, os reticulócitos sofrem a ação dos macrófagos esplênicos, tornando-se eritrócitos maduros. Os macrófagos esplênicos têm a função de retirar os corpúsculos intracitoplasmáticos e o excesso de membrana dos reticulócitos. Esses processos são denominados <i>pitting</i> e <i>remodeling</i>, respectivamente. Após isso, esses resíduos são eliminados e podemos chamar, assim, a célula de <i>eritrócito</i>. Os <i>eritrócitos</i> são lançados na circulação sanguínea, como uma hemácia madura.
            </p>
            <figure className='max-w-7xl my-8'>
              <img className='not-format h-auto mx-auto max-w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
                src="/img_conteudos/Eritropoese.png"
                alt="Esquema da Eritropoese. 1- Proeritroblasto; 2- Eritroblasto basófilo; 3- Eritroblasto policromático; 4- Eritroblasto ortocromático; 5- Reticulócito; 6- Eritrócito"
              />
              <figcaption className='text-xs mx-auto max-w-6xl text-center not-format'>
                <strong className='text-gray-900 not-format'>Figura 3.</strong> Esquema da Eritropoese. 1- proeritroblasto; 2- eritroblasto basófilo; 3- eritroblasto policromático; 4- eritroblasto ortocromático; 5- reticulócito; 6- eritrócito
              </figcaption>
            </figure>
            <ChaveBubble question={"Se liga nos pontos chave"}></ChaveBubble>
            <ul className="list-disc ml-8 text-base text-justify">
              <li><strong>Proeritroblasto:</strong> Tipo celular mais imaturo da linhagem eritróide. Jovem, grande, nucleado, sem capacidade de síntese de hemoglobina.</li>
              <li><strong>Eritroblasto Basófilo:</strong> Primeiro estágio de maturação. Cora-se intensamente com azul de metileno devido à síntese de RNA mensageiro.</li>
              <li><strong>Eritroblasto Policromático:</strong> Intensa presença de RNA mensageiro e hemoglobina. Núcleo bem organizado.</li>
              <li><strong>Eritroblasto Ortocromático:</strong> Todo o RNA mensageiro é convertido em hemoglobina. Núcleo picnótico, perdendo capacidade de divisão.</li>
              <li><strong>Reticulócito:</strong> Célula anucleada, precursora do eritrócito maduro. Contém resquícios de organelas como RNA e mitocôndrias.</li>
              <li><strong>Macrófagos Esplênicos:</strong> Removem corpúsculos intracitoplasmáticos e excesso de membrana dos reticulócitos através de <i>pitting</i> e <i>remodeling</i>.</li>
              <li><strong>Eritrócito:</strong> Hemácia madura lançada na circulação sanguínea.</li>
            </ul>
            <p className="indent-8 not-format text-base text-justify">
              Existe um sistema complexo que retém as células eritróides na medula óssea até que estejam prontas para serem liberadas na circulação, envolvendo o estroma medular, macrófagos produtores de fibronectina e os receptores de fibronectina nas células eritróides em maturação. Quando os eritrócitos atingem a maturidade, os receptores de fibronectina desaparecem, permitindo que as células sejam liberadas na corrente sanguínea.
            </p>
            <p className="indent-8 not-format text-base text-justify">
              Uma pequena porcentagem de eritroblastos sempre é destruída ou lisada na medula óssea, não chegando a amadurecer completamente. Denomina-se eritropoese ineficiente essa perda de células que ocorre durante sua maturação. Em algumas doenças, a eritropoese ineficiente existe em grau acentuado, fazendo parte da patogenia de certas anemias graves. Quando o baço está anatomicamente alterado ou ausente (esplenectomia), os eritrócitos podem circular defeituosos, com os corpúsculos intracitoplasmáticos que não foram retirados pelos macrófagos da polpa esplênica. Exemplos de situações em que há aumento da eritropoese ineficaz: anemias megaloblásticas, talassemias, síndromes mielodisplásicas, eritroleucemia.
            </p>
            <p className="indent-8 not-format text-base text-justify">
              Cerca de 10% dos eritrócitos são renovados diariamente pela medula óssea, sendo a oxigenação dos tecidos o principal regulador desse processo. Em condições de baixa oxigenação, como em regiões elevadas, há estímulo para a produção de glóbulos vermelhos, enquanto o aumento da oxigenação a suprime. Isso ocorre para garantir um transporte eficiente de oxigênio para os tecidos, especialmente em situações de hipóxia.
            </p>
            <p className="indent-8 not-format text-base text-justify">
              A produção de hemácias é controlada principalmente por fatores de crescimento que agem sobre as células precursoras e estimulam seu desenvolvimento e maturação, como a eritropoetina e a Interleucina 3 (IL-3), e os hormônios tireoidianos e andrógenos, pelo seu efeito sobre o metabolismo. A eritropoetina é o principal fator de crescimento que regula a produção de hemácias. Trata-se de um hormônio glicoproteico com peso molecular de 34kDa. A principal fonte de eritropoetina no organismo é o tecido renal, provavelmente as células intersticiais peritubulares renais, que produzem cerca de 90% do hormônio, sendo os 10% restantes produzidos por hepatócitos que rodeiam as veias centrais no fígado. A parcela produzida pelo rim é altamente sensível ao nível de oxigenação do sangue renal ou a outros mecanismos que causam redução da oxigenação dos tecidos renais, como a anemia. Nessas circunstâncias, a produção de eritropoetina pode aumentar até mil vezes. O hormônio liga-se ao Receptor de Eritropoetina (EpoR) expresso especificamente em precursores eritróides, estimulando a sua proliferação e diferenciação, levando a um aumento da massa eritrocitária. Em suas funções, ela estimula a proliferação de células indiferenciadas medulares, estimula a diferenciação celular, estimula a síntese da hemoglobina e aumenta o número de reticulócitos circulantes.
            </p>
            <p className="indent-8 not-format text-base text-justify">
              Vários fatores nutricionais são essenciais para a eritropoiese, sendo os mais importantes o ferro, a vitamina B12 e os folatos. Além desses, outros componentes também são cruciais para a eritropoiese normal, embora sua deficiência raramente cause anemia. Esses componentes incluem carboidratos, lipídeos, aminoácidos, vitaminas e sais minerais.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Ferro</h3>
            <p className="indent-8 not-format text-base text-justify">
              O ferro é fornecido ao organismo pela dieta habitual. Ele pode estar na forma inorgânica (Fe+++ ou Fe++) ou como heme, ligado à mioglobina da carne. No estômago, o ferro se liga a proteínas e polissacarídeos, mas o suco gástrico ácido mantém uma parte dele solúvel. 
            </p>
            <p className="indent-8 not-format text-base text-justify">
              A absorção do ferro ocorre na parte superior do intestino delgado pelas células da mucosa. O ferro inorgânico e o ferro ligado ao heme são absorvidos por mecanismos diferentes. O ferro inorgânico é absorvido pelas células da mucosa intestinal, sendo parte utilizada por elas e o restante transportado para a circulação sanguínea. O ferro heme é absorvido diretamente pelas células intestinais, onde é separado do heme pela enzima hemeoxigenase e segue a mesma via do ferro inorgânico. Quando há maior necessidade de ferro, as moléculas de ferritina nas células intestinais diminuem, permitindo que mais ferro passe para a circulação. Quando a demanda de ferro é menor, mais ferritina é produzida para reter o ferro nas células intestinais, evitando seu excesso na circulação.
            </p>
            <p className="indent-8 not-format text-base text-justify">
              As técnicas de cultura de precursores hematopoéticos reconhecem dois precursores eritróides:
            </p>
            <ul className="list-disc ml-8 text-base text-justify">
              <li>O ferro da dieta é transformado pela enzima ferroredutase de Fe<sup>+++</sup> para Fe<sup>++</sup>;</li>
              <li>O Fe<sup>++</sup> se liga à proteína DMT1 (<em>divalent metal transporter 1</em>), que o transporta para dentro dos enterócitos;</li>
              <li>Dentro dos enterócitos, o ferro pode ser transferido para o plasma ou armazenado como ferritina. </li>
              <li>A transferência do ferro para o plasma requer a ação das proteínas IRP (<em>iron regulatory proteins</em>) na membrana basal dos enterócitos.</li>
              <li>O ferro retido nos enterócitos é eliminado nas fezes com a descamação da mucosa.</li>
            </ul>
            <p className="indent-8 not-format text-base text-justify">
              A quantidade de ferro absorvida é regulada por:
            </p>
            <ul className="list-disc ml-8 text-base text-justify">
              <li><strong>Ingestão de ferro:</strong> Quando a dieta contém excesso de ferro, a absorção é reduzida devido ao acúmulo de ferritina.</li>
              <li><strong>Estoques de ferro:</strong> O acúmulo de ferro nos estoques reduz sua absorção.</li>
              <li><strong>Necessidade de ferro para a eritropoese:</strong> Nas anemias, há um estímulo da medula óssea que aumenta a absorção de ferro.</li>
            </ul>
            <p className="indent-8 not-format text-base text-justify">
              A eritropoese requer mais ferro do que o fornecido pela ingestão diária. A maior parte do ferro provém do reaproveitamento dos eritrócitos destruídos, sendo armazenado por macrófagos e fornecido às células precursoras na medula óssea. Após ser absorvido pela mucosa intestinal, o ferro entra na circulação ligado a uma proteína transportadora chamada transferrina ou siderofilina, uma glicoproteína sintetizada no fígado. A transferrina pode ligar-se a dois átomos de ferro e transportá-los para os eritroblastos na medula óssea ou para outros tecidos de armazenamento, evitando a presença de ferro livre no plasma. Os receptores nas membranas dos eritroblastos captam o ferro da transferrina, e o número desses receptores varia conforme a necessidade das células. Os receptores de ferro na transferrina têm diferentes funções: um fornece ferro aos eritroblastos e à placenta, e o outro aos órgãos de armazenamento, como o fígado. Embora todas as células necessitem de ferro, os eritroblastos e as células placentárias são as que mais precisam, absorvendo cerca de 90% do ferro transportado pela transferrina no plasma.
            </p>
            <p className="indent-8 not-format text-base text-justify">
              O ferro, uma vez absorvido pelo intestino, não tem uma via de excreção específica no organismo, havendo um mecanismo específico para sua conservação e armazenamento. A absorção do ferro depende da atividade das células intestinais, da dieta, da eritropoese e do estado funcional dos depósitos de ferro. A quantidade de ferritina nas células intestinais indica o grau de absorção do ferro, e essa variação reflete a demanda de ferro pela medula óssea. Em homens, aproximadamente um quarto do ferro absorvido é armazenado, enquanto nas mulheres, os depósitos são menores devido às perdas menstruais. O ferro se armazena ligado a duas proteínas: ferritina e hemossiderina. A maior parte está ligada à ferritina, que é mais facilmente liberada quando a necessidade de ferro aumenta. A hemossiderina é formada por agregados de ferritina e representa uma forma mais estável e menos acessível de ferro. O nível de ferritina plasmática varia conforme a quantidade de ferro nos depósitos. A Ferritina e hemossiderina são as principais formas de armazenamento de ferro no organismo, usadas para a formação do heme, parte integrante da hemoglobina. A ferritina é a forma mais abundante e lábil de armazenamento de ferro. Existem diferentes tipos de ferritina, denominadas iso-ferritinas, que variam pelos focos isoelétricos. A apoferritina é uma forma de ferritina desprovida de ferro. A estrutura da ferritina permite a entrada e saída livre de ferro. A hemossiderina, em contrapartida, é uma forma menos solúvel e mais estável de armazenamento de ferro, formada por agregados de ferritina. O ferro ligado à hemossiderina varia menos em quantidade em comparação ao ferro ligado à ferritina, sendo proporcionalmente maior na forma de hemossiderina devido à perda de parte da proteína da ferritina na sua formação.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Vitamina B12</h3>
            <p className="indent-8 not-format text-base text-justify">
              A vitamina B12, ou cobalamina, está presente principalmente em alimentos de origem animal, como leite, carnes e ovos, com pouca quantidade em alimentos vegetais. 
            </p>
            <p className="indent-8 not-format text-base text-justify">
              A vitamina B12 chega ao estômago ligada às proteínas dos alimentos, que são digeridas pela pepsina, liberando a cobalamina. Esta se liga a uma proteína chamada R-proteína. No duodeno, as proteases pancreáticas degradam a R-proteína, liberando a cobalamina, que então se liga ao fator intrínseco, uma proteína secretada pelas células parietais do estômago. Esse complexo vitamina B12-fator intrínseco é resistente às enzimas intestinais e é absorvido na mucosa do íleo, onde receptores específicos facilitam sua entrada nas células intestinais. No interior dos enterócitos, o fator intrínseco é degradado, e a cobalamina se liga à transcobalamina II, sua proteína transportadora, permitindo sua entrada na circulação plasmática. Outra proteína transportadora, a transcobalamina I, também está presente, mas tem menor afinidade pela vitamina B12. A deficiência congênita de transcobalamina II pode levar a anemia megaloblástica severa.
            </p>
            <p className="indent-8 not-format text-base text-justify">
              A vitamina B12 é crucial para a produção normal das células sanguíneas e para o funcionamento do tecido nervoso. Seu metabolismo está interligado ao do ácido fólico, e ambos desempenham papéis complementares. A vitamina B12 atua como coenzima em duas principais vias metabólicas:
            </p>
            <ul className="list-disc ml-8 text-base text-justify">
              <li><strong>Conversão da Homocisteína em Metionina:</strong> A vitamina B12 transforma-se em metilcobalamina ao receber um grupo metila do metiltetrahidrofolato. A metilcobalamina, por sua vez, transfere esse grupo metila à homocisteína, convertendo-a em metionina, essencial para várias funções corporais.</li>
              <li><strong>Metabolismo dos Ácidos Graxos Tricarboxílicos:</strong> A vitamina B12 facilita a conversão do ácido metilmalônico em ácido succínico, um componente importante no ciclo do ácido cítrico.</li>
            </ul>
            <p className="indent-8 not-format text-base text-justify">
              Além dessas funções, a vitamina B12 influencia a absorção e utilização dos folatos pelas células da medula óssea, sendo essencial para a eritropoese. A deficiência de vitamina B12 compromete a utilização dos folatos, impactando negativamente a produção de células sanguíneas.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Folatos</h3>
            <p className="indent-8 not-format text-base text-justify">
              Os folatos são compostos que têm como estrutura básica o ácido pteroilglutâmico. Amplamente presentes em alimentos de origem animal e vegetal, como verduras, vísceras e laticínios, podem ser sensíveis ao calor durante o preparo. O organismo humano armazena normalmente de 10 a 20 miligramas de folatos, mas, ao contrário da vitamina B12, são facilmente destruídos por fatores como oxidação, calor, cozimento e exposição à luz ultravioleta. 
            </p>
            <p className="indent-8 not-format text-base text-justify">
              Os folatos são principalmente absorvidos na porção superior do intestino delgado através de um processo ativo mediado pelas células da mucosa. Esse processo é influenciado por várias enzimas que promovem a redução ou metilação dos diferentes compostos folatos. Uma pequena quantidade de folato é armazenada nas células hepáticas na forma de poliglutamato. O ciclo êntero-hepático permite a troca entre o folato armazenado no fígado e os tecidos, garantindo níveis plasmáticos normais mesmo na ausência temporária de ingestão dietética de folatos. Embora os folatos possam se ligar a algumas proteínas plasmáticas, seu papel como transportadoras não está completamente esclarecido.
            </p>
            <p className="indent-8 not-format text-base text-justify">
            Os folatos desempenham um papel crucial como coenzimas em várias vias metabólicas celulares. O metiltetrahidrofolato, principal forma de folato na dieta, atua como doador de grupos metila, essenciais na formação de metionina, um aminoácido vital para o metabolismo proteico. Essa conversão da homocisteína em metionina é catalisada pela metionina sintetase, na qual a vitamina B12 atua como cofator. Deficiências tanto de cobalamina quanto de ácido fólico podem resultar em hiper-homocisteinemia, associada a distúrbios neurológicos, tumores e doenças cardiovasculares, além de anemia. O tetraidrofolato resultante da doação do grupo metila é essencial para a síntese de purinas, pirimidinas e aminoácidos, como glicina, em processos metabólicos fundamentais para a medula óssea e outras células em constante renovação.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Hemoglobina</h3>
            <p className="indent-8 not-format text-base text-justify">
            A função primordial dos eritrócitos é transportar oxigênio para os tecidos e devolver dióxido de carbono dos tecidos aos pulmões. Para essa troca gasosa, os eritrócitos são equipados com uma proteína especializada chamada hemoglobina. Cada molécula de hemoglobina A (Hb A), predominante no sangue adulto após os 3 a 6 meses de idade, é composta por quatro cadeias polipeptídicas α<sub>2</sub>β<sub>2</sub>, cada uma contendo seu próprio grupo heme. Além da Hb A, o sangue adulto também contém quantidades menores de duas outras formas de hemoglobina - Hb F e Hb A<sub>2</sub>. A síntese de heme ocorre principalmente nas mitocôndrias, através de uma série de reações bioquímicas iniciadas pela condensação de glicina e succinil-coenzima A, mediada pela enzima ácido δ-aminolevulínico-sintase (ALA), que requer piridoxal-fosfato (vitamina B6) como coenzima. No final, a protoporfirina se combina com ferro ferroso (Fe<sup>2+</sup>) para formar o heme. Este se une em um tetrâmero de cadeias globina, cada uma alojando seu próprio grupo heme em um &quot;bolso&quot;, constituindo uma molécula de hemoglobina. Nos eritrócitos do sangue arterial, o oxigênio é transportado dos pulmões para os tecidos e, no sangue venoso, o dióxido de carbono é levado de volta aos pulmões. Conforme a hemoglobina carrega e libera o oxigênio, suas cadeias globínicas se movem umas em relação às outras. 
            </p>
          </section>
          <section>
            <Separator className="mb-8 mt-8 h-0.5 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">Referências</h2>
            <p className="not-format text-base">
              FAILACE, R.; FERNANDES, F. <strong>Hemograma - manual de interpretação.</strong> 6º Edição. Porto Alegre: Artmed, 2015.<br/>
              HOFFBRAND, A. V.; MOSS, P. A. H. <strong>Fundamentos em hematologia de Hoffbrand.</strong> 7º Edição. Tradução e revisão: Renato Failace. Porto Alegre: Artmed, 2018.<br/>
              HOFFBRAND, A. V.; STEENSMA, D. P. <strong>Hoffbrand&apos;s Essential Haematology,</strong> 8th Edition. Hoboken: Wiley. 2019.<br/>
              LORENZI, T. F. <strong>Manual de Hematologia: Procedência e clínica</strong>, 4º Edição. Rio de Janeiro: Guanabara Koogan, 2006.<br/>
              ZAGO, M A.; FALCÃO, R. P.; PASQUINI, R. <strong>Tratado de Hematologia.</strong> São Paulo: Atheneu, 2013.
            
            </p>
          </section>
        </article>
      </div>
    </main>
  );
};

export default ArticlePage;
