import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    // Delete all existing data
    await Promise.all([
      db.delete(schema.userProgress),
      db.delete(schema.challenges),
      db.delete(schema.units),
      db.delete(schema.lessons),
      db.delete(schema.courses),
      db.delete(schema.challengeOptions),
      db.delete(schema.userSubscription),
    ]);

    // Insert courses
    const courses = await db
      .insert(schema.courses)
      .values([{ title: "Hematopoese", imageSrc: "/red-blood-cells.png" }])
      .returning();

    const units = await db
      .insert(schema.units)
      .values([
        {
          courseId: courses[0].id,
          title: "Unidade 1 - Conceitos Gerais",
          description: `Aprenda o básico sobre ${courses[0].title}`,
          order: 1,
        },
        {
          courseId: courses[0].id,
          title: "Unidade 2 - Regulação e Fatores de Crescimento",
          description: `Aprenda o intermediário sobre ${courses[0].title}`,
          order: 2,
        },
      ])
      .returning();
      
      // #region Funções de inicialização
      const lessons = await db
        .insert(schema.lessons)
        .values([
          { unitId: units[0].id, title: "Composição e Funções do Sangue", order: 1 },
          { unitId: units[0].id, title: "Células-Tronco Hematopoéticas", order: 2 },
          { unitId: units[0].id, title: "Desenvolvimento Embrionário e Localização da Hematopoese", order: 3 },
          { unitId: units[0].id, title: "Unidades Formadoras de Colônias e Diferenciação Celular", order: 4 },
        ])
        .returning();

      const challenges = await db
        .insert(schema.challenges)
        .values([
          {
            lessonId: lessons[0].id,
            type: "ASSIST",
            question: 'Qual dos seguintes componentes NÃO faz parte da fase líquida do sangue?',
            order: 1,
          },
          {
            lessonId: lessons[0].id,
            type: "ASSIST",
            question: 'Qual é a principal função dos eritrócitos no sangue?',
            order: 2,
          },
          {
            lessonId: lessons[0].id,
            type: "ASSIST",
            question: 'Qual das funções abaixo é desempenhada pelas plaquetas no sangue?',
            order: 3,
          },
          {
            lessonId: lessons[0].id,
            type: "ASSIST",
            question: 'Qual dos seguintes elementos figurados do sangue é responsável pela defesa do organismo?',
            order: 4,
          },
          {
            lessonId: lessons[0].id,
            type: "ASSIST",
            question: 'Qual dos seguintes componentes NÃO é uma função do sangue?',
            order: 5,
          },
        ])
        .returning();

      for (const challenge of challenges) {
        if (challenge.order === 1) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Eletrólitos",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Proteínas",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "Eritrócitos",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Glicídeos",
            },
          ]);
        }

        if (challenge.order === 2) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Defesa do organismo",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Manutenção da hemostasia",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "Oxigenação dos tecidos",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Eliminação de resíduos metabólicos",
            },
          ]);
        }

        if (challenge.order === 3) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Transporte de oxigênio",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Defesa contra infecções",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "Manutenção da hemostasia",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Eliminação de resíduos metabólicos",
            },
          ]);
        }

        if (challenge.order === 4) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Plaquetas",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "Leucócitos",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Eritrócitos",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Megacariócitos",
            },
          ]);
        }

        if (challenge.order === 5) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Transporte de nutrientes",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "Produção de hormônios",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Eliminação de resíduos metabólicos",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Defesa do organismo",
            },
          ]);
        }
    }

    const challengesLesson2 = await db
      .insert(schema.challenges)
      .values([
        {
          lessonId: lessons[1].id,
          type: "ASSIST",
          question: 'As células-tronco hematopoéticas têm a capacidade de:',
          order: 1,
        },
        {
          lessonId: lessons[1].id,
          type: "ASSIST",
          question: 'Qual das seguintes afirmações sobre a LT-HSC (Long Term Hematopoietic Stem Cell) é CORRETA?',
          order: 2,
        },
        {
          lessonId: lessons[1].id,
          type: "ASSIST",
          question: 'A autorrenovação das células-tronco hematopoéticas garante:',
          order: 3,
        },
        {
          lessonId: lessons[1].id,
          type: "ASSIST",
          question: 'O processo de auto-renovação das células-tronco hematopoéticas permite:',
          order: 4,
        },
      ])
      .returning();

    for (const challenge of challengesLesson2) {
      if (challenge.order === 1) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: true,
            text: "Auto-renovação e diferenciação em diversas linhagens celulares",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Diferenciação em apenas uma linhagem celular específica",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Produzir apenas plaquetas",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Auto-renovação mas sem capacidade de diferenciação",
          },
        ]);
      }

      if (challenge.order === 2) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "Tem um potencial de proliferação maior que a ST-HSC",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Dá origem a células maduras diretamente",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "Mantém o pool hematopoiético imaturo e indiferenciado",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Produz exclusivamente granulócitos e monócitos",
          },
        ]);
      }

      if (challenge.order === 3) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "A extinção gradual do pool de CTHs",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "A manutenção do estoque de células-tronco ao longo do tempo",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "A produção exclusiva de plaquetas",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "A produção apenas de células maduras",
          },
        ]);
      }

      if (challenge.order === 4) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "A diferenciação direta em células maduras sem intermediários",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "A manutenção contínua do pool de células-tronco",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "A eliminação rápida de células-tronco antigas",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "A produção exclusiva de linfócitos",
          },
        ]);
      }
    }

    const challengesLesson3 = await db
      .insert(schema.challenges)
      .values([
        {
          lessonId: lessons[2].id,
          type: "ASSIST",
          question: 'A hematopoese na medula óssea é iniciada por qual tipo de célula?',
          order: 1,
        },
        {
          lessonId: lessons[2].id,
          type: "ASSIST",
          question: 'Durante o desenvolvimento embrionário, onde ocorre a hematopoese pela primeira vez?',
          order: 2,
        },
        {
          lessonId: lessons[2].id,
          type: "ASSIST",
          question: 'Qual é a principal mudança na localização da hematopoese durante a vida intrauterina?',
          order: 3,
        },
        {
          lessonId: lessons[2].id,
          type: "ASSIST",
          question: 'Durante qual fase do desenvolvimento embrionário a medula óssea se torna o principal local de produção de células hematopoéticas?',
          order: 4,
        },
        {
          lessonId: lessons[2].id,
          type: "ASSIST",
          question: 'Durante o desenvolvimento embrionário, a fase definitiva/adulta da hematopoese se inicia em qual local?',
          order: 5,
        },
        {
          lessonId: lessons[2].id,
          type: "ASSIST",
          question: 'Durante a vida intrauterina, após a quinta semana de gestação, qual órgão se torna um importante local de hematopoese antes da medula óssea?',
          order: 6,
        },
      ])
      .returning();

    for (const challenge of challengesLesson3) {
      if (challenge.order === 1) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: true,
            text: "LT-HSC",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "CFU-GM",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Progenitor Mieloide",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Megacariócito",
          },
        ]);
      }

      if (challenge.order === 2) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "Medula óssea",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "Saco vitelínico",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Fígado fetal",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Placenta",
          },
        ]);
      }

      if (challenge.order === 3) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "Da medula óssea para o saco vitelínico",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "Da placenta para a medula óssea",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Do fígado fetal para a AGM",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Do baço para o fígado fetal",
          },
        ]);
      }

      if (challenge.order === 4) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "Primeira semana de gestação",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Quarta semana de gestação",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "Décima segunda semana de gestação",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Décima sexta semana de gestação",
          },
        ]);
      }

      if (challenge.order === 5) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "Medula óssea",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Saco vitelínico",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "Mesoderme da região AGM",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Placenta",
          },
        ]);
      }

      if (challenge.order === 6) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "Baço",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Coração",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "Fígado fetal",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Pulmões",
          },
        ]);
      }
    }

    const challengesLesson4 = await db
      .insert(schema.challenges)
      .values([
        {
          lessonId: lessons[3].id,
          type: "ASSIST",
          question: 'A CFU-GM (Colony-Forming Unit – Granulocytic/Monocytic) é responsável pela produção de:',
          order: 1,
        },
        {
          lessonId: lessons[3].id,
          type: "ASSIST",
          question: 'Qual dos seguintes é um exemplo de unidade formadora de colônias (CFU) que produz apenas granulócitos?',
          order: 2,
        },
        {
          lessonId: lessons[3].id,
          type: "ASSIST",
          question: 'As células progenitoras hematopoéticas comprometidas têm:',
          order: 3,
        },
        {
          lessonId: lessons[3].id,
          type: "ASSIST",
          question: 'A ST-HSC (Short Term Hematopoietic Stem Cell) é caracterizada por:',
          order: 4,
        },
      ])
      .returning();

    for (const challenge of challengesLesson4) {
      if (challenge.order === 1) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "Eritrócitos e megacariócitos",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Apenas granulócitos",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "Granulócitos e monócitos",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Granulócitos e linfócitos",
          },
        ]);
      }

      if (challenge.order === 2) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "CFU-E",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "CFU-GM",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "CFU-G",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "CFU-Meg",
          },
        ]);
      }

      if (challenge.order === 3) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "Capacidade de auto-renovação indefinida",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "Potencial de desenvolvimento restrito",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Capacidade de se diferenciar em todas as linhagens celulares",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Nenhuma função na homeostase hematopoiética",
          },
        ]);
      }

      if (challenge.order === 4) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "Manutenção do pool hematopoiético imaturo e indiferenciado",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "Maior potencial de proliferação e comprometimento para gerar precursores",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Produção de todas as linhagens celulares do sangue",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Auto-renovação indefinida",
          },
        ]);
      }
    }

    // #endregion

      // #region Funções de inicialização
      const lessons2 = await db
        .insert(schema.lessons)
        .values([
          { unitId: units[1].id, title: "Fatores de Transcrição e Diferenciação Celular", order: 1 },
          { unitId: units[1].id, title: "Hormônios e Fatores de Crescimento", order: 2 },
          { unitId: units[1].id, title: "Citocinas e Hematopoese", order: 3 },
        ])
        .returning();

      const challenges2 = await db
        .insert(schema.challenges)
        .values([
          {
            lessonId: lessons2[0].id,
            type: "ASSIST",
            question: 'Qual fator de transcrição está envolvido na diferenciação eritropoética e megacariocítica?',
            order: 1,
          },
          {
            lessonId: lessons2[0].id,
            type: "ASSIST",
            question: 'Qual fator de transcrição interage com GATA-1 para a diferenciação eritropoética e megacariocítica?',
            order: 2,
          },
          {
            lessonId: lessons2[0].id,
            type: "ASSIST",
            question: 'Qual fator de transcrição está envolvido na regulação da sobrevivência das células-tronco hematopoéticas?',
            order: 3,
          },
          {
            lessonId: lessons2[0].id,
            type: "ASSIST",
            question: 'Quais fatores de transcrição direcionam as células para a linhagem mielóide leucocitária?',
            order: 4,
          },
          {
            lessonId: lessons2[0].id,
            type: "ASSIST",
            question: 'Quais fatores de transcrição são fundamentais para a diferenciação para a linhagem mielóide leucocitária?',
            order: 5,
          },
        ])
        .returning();

      for (const challenge of challenges2) {
        if (challenge.order === 1) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "PU.1",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "CEBP",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "GATA-1",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "NOTCH-1",
            },
          ]);
        }

        if (challenge.order === 2) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "SCL",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "NOTCH-1",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "FOG-1",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "PU.1",
            },
          ]);
        }

        if (challenge.order === 3) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "GATA-1",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "SCL",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "PU.1",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "CEBP",
            },
          ]);
        }

        if (challenge.order === 4) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "SCL e NOTCH-1",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "GATA-1 e FOG-1",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "PU.1 e CEBP",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "GATA-2 e FLT-L",
            },
          ]);
        }

        if (challenge.order === 5) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "GATA-2 e NOTCH-1",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "PU.1 e CEBP",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "GATA-1 e FOG-1",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "SCL e GATA-2",
            },
          ]);
        }
    }

    const challengesLesson22 = await db
      .insert(schema.challenges)
      .values([
        {
          lessonId: lessons2[1].id,
          type: "ASSIST",
          question: 'Qual hormônio glicoproteico é 90% sintetizado no rim?',
          order: 1,
        },
        {
          lessonId: lessons2[1].id,
          type: "ASSIST",
          question: 'Qual fator de crescimento é principalmente produzido no fígado?',
          order: 2,
        },
        {
          lessonId: lessons2[1].id,
          type: "ASSIST",
          question: 'Qual dos seguintes fatores de crescimento é conhecido por aumentar a produção de granulócitos e monócitos em resposta à infecção ou inflamação?',
          order: 3,
        },
        {
          lessonId: lessons2[1].id,
          type: "ASSIST",
          question: 'Qual das seguintes combinações de fatores de crescimento tem atividades parcialmente sobrepostas e é multipotente?',
          order: 4,
        },
        {
          lessonId: lessons2[1].id,
          type: "ASSIST",
          question: 'Quais fatores de crescimento aumentam os efeitos de SCF, FLT-L, IL-3 e GM-CSF na sobrevivência e diferenciação das células hematopoéticas primitivas?',
          order: 5,
        },
      ])
      .returning();

    for (const challenge of challengesLesson22) {
      if (challenge.order === 1) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: true,
            text: "Eritropoetina",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Trombopoetina",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "IL-3",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "GM-CSF",
          },
        ]);
      }

      if (challenge.order === 2) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "Eritropoetina",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "SCF",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "Trombopoetina",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "G-CSF",
          },
        ]);
      }

      if (challenge.order === 3) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "IL-3",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "G-CSF",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "FLT-L",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "IL-1",
          },
        ]);
      }

      if (challenge.order === 4) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "SCF e FLT-L",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "IL-3 e GM-CSF",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "G-CSF e eritropoetina",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "M-CSF e IL-5",
          },
        ]);
      }

      if (challenge.order === 4) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: true,
            text: "G-CSF e trombopoetina",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "IL-5 e eritropoetina",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "M-CSF e TNF",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "TGF-β e IFN-γ",
          },
        ]);
      }
    }

    const challengesLesson32 = await db
      .insert(schema.challenges)
      .values([
        {
          lessonId: lessons2[2].id,
          type: "ASSIST",
          question: 'Qual das citocinas pode ter um efeito negativo na hematopoese e está associada ao desenvolvimento de anemia aplástica?',
          order: 1,
        },
        {
          lessonId: lessons2[2].id,
          type: "ASSIST",
          question: 'Qual dos seguintes fatores de crescimento pode inibir a hematopoese?',
          order: 2,
        },
        {
          lessonId: lessons2[2].id,
          type: "ASSIST",
          question: 'Os fatores de crescimento hematopoéticos podem atuar de várias maneiras. Qual das alternativas a seguir NÃO é uma dessas maneiras?',
          order: 3,
        },
      ])
      .returning();

    for (const challenge of challengesLesson32) {
      if (challenge.order === 1) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "IL-1",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "TNF",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "TGF-β",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "GM-CSF",
          },
        ]);
      }

      if (challenge.order === 2) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "IL-1",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "TNF",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "IFN-γ",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "GM-CSF",
          },
        ]);
      }

      if (challenge.order === 3) {
        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenge.id,
            correct: false,
            text: "Localmente, por contato célula a célula",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Circulando pelo plasma",
          },
          {
            challengeId: challenge.id,
            correct: false,
            text: "Ligando-se à matriz extracelular",
          },
          {
            challengeId: challenge.id,
            correct: true,
            text: "Alterando diretamente a sequência de DNA das células",
          },
        ]);
      }
    }

    // #endregion

    console.log("Banco de dados preenchido com sucesso");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

void main();
