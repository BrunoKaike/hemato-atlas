import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";

const sql = neon(process.env.DATABASE_URL);

const db = drizzle(sql, { schema });

const getCourseById = async (courseId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(schema.courses.id, courseId),
    with: {
      units: {
        orderBy: (units, { asc }) => [asc(schema.units.order)],
        with: {
          lessons: {
            orderBy: (lessons, { asc }) => [asc(schema.lessons.order)],
          },
        },
      },
    },
  });
  return data;
}

  

const main = async () => {
  try {
    console.log("Seeding database");

    //@ts-ignore: Object is possibly 'null'.
    const courseNull = await getCourseById(19);
    const course = courseNull!
    const lesson = course.units.find(unit => unit.title === 'Unidade 2 - Leucócitos')!.lessons.find(lesson => lesson.title === 'Vacuolização Citoplasmática')!;

    console.log(lesson.title);
    
      const challenges = await db
        .insert(schema.challenges)
        .values([
          {
            lessonId: lesson.id,
            type: "ASSIST",
            question: 'O que indica a presença de vacúolos no citoplasma dos neutrófilos?',
            order: 1,
          },
          {
            lessonId: lesson.id,
            type: "ASSIST",
            question: 'Em que condição são mais comumente observados vacúolos citoplasmáticos nos neutrófilos?',
            order: 2,
          },/*
          {
            lessonId: lesson.id,
            type: "ASSIST",
            question: 'Qual dos seguintes não é uma característica dos linfócitos grandes granulares?',
            order: 3,
          },
          {
            lessonId: lesson.id,
            type: "ASSIST",
            question: 'Qual condição clínica está associada ao pontilhado basófilo grosso?',
            order: 4,
          },
          {
            lessonId: lesson.id,
            type: "ASSIST",
            question: 'Em quais condições os anéis de Cabot podem ser observados nos eritrócitos?',
            order: 5,
          },
          {
            lessonId: lesson.id,
            type: "ASSIST",
            question: 'O que causa a formação de hemácias mordidas?',
            order: 6,
          },
          {
            lessonId: lesson.id,
            type: "ASSIST",
            question: 'Onde são observados os corpúsculos de Pappenheimer?',
            order: 7,
          },
          {
            lessonId: lesson.id,
            type: "ASSIST",
            question: 'Em quais condições os corpúsculos de Pappenheimer podem ser encontrados?',
            order: 8,
          },
          {
            lessonId: lesson.id,
            type: "ASSIST",
            question: 'O que caracteriza um esferócito?',
            order: 9,
          },
          {
            lessonId: lesson.id,
            type: "ASSIST",
            question: 'Qual é a condição característica dos esferócitos?',
            order: 10,
          },
          {
            lessonId: lesson.id,
            type: "ASSIST",
            question: 'O que caracteriza um estomatócito?',
            order: 11,
          },
          {
            lessonId: lesson.id,
            type: "ASSIST",
            question: 'Quais são as causas comuns de estomatócitos?',
            order: 12,
          },*/
        ])
        .returning();
        
      for (const challenge of challenges) {
        if (challenge.order === 1) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: true,
              text: "Núcleo redondo com cromatina densa sem nucléolo visível.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Núcleo irregular com cromatina condensada e nucléolos grandes.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Núcleo oval com cromatina moderadamente densa e citoplasma vacuolado.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Núcleo bilobulado com citoplasma contendo granulações finas.",
            },
          ]);
        }

        if (challenge.order === 2) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Infecções bacterianas crônicas.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Anemias hemolíticas.",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "Doenças autoimunes e infecções virais.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Deficiência de ferro.",
            },
          ]);
        }
        /*
        if (challenge.order === 3) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Citoplasma claro ou levemente basofílico.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Grânulos azurofílicos grandes.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Núcleo redondo e cromatina densa sem nucléolo visível.",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "Núcleo bilobulado com cromatina moderadamente densa.",
            },
          ]);
        }
        
        if (challenge.order === 4) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Anemias hemolíticas.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Intoxicação por chumbo.",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "Talassemias.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Deficiência de vitamina B12.",
            },
          ]);
        }
        
        if (challenge.order === 5) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Deficiência de ferro.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Síndrome nefrótica.",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "Anemias hemolíticas.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Hiperesplenismo.",
            },
          ]);
        }
        
        if (challenge.order === 6) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Retenção de ferro.",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "Dano mecânico.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Alterações semicirculares da membrana.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Excesso de RNA.",
            },
          ]);
        }
        
        
        if (challenge.order === 7) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Na membrana dos eritrócitos.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "No núcleo dos eritrócitos.",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "No citoplasma dos eritrócitos.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "No plasma sanguíneo.",
            },
          ]);
        }
        
        if (challenge.order === 8) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Deficiência de vitamina B12.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Leucemia.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Anemia aplástica.",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "Sobrecarga de ferro.",
            },
          ]);
        }
        
        if (challenge.order === 9) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Presença de uma mancha central de hemoglobina.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Forma de foice.",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "Forma esférica.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Presença de uma fenda semelhante a uma boca na célula.",
            },
          ]);
        }
        
        if (challenge.order === 10) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Talassemias.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Hepatopatias graves.",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "Esferocitose hereditária.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Anemias megaloblásticas.",
            },
          ]);
        }

        if (challenge.order === 11) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Presença de uma mancha central de hemoglobina.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Forma de boca na região central da célula.",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "Presença de uma fenda semelhante a uma boca na célula.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Forma esférica.",
            },
          ]);
        }

        if (challenge.order === 12) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "Anemia falciforme.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Deficiência de ferro.",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "Abuso de álcool e hepatopatia alcoólica.",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "Talassemias.",
            },
          ]);
        }*/

    }
    // #endregion

    console.log("Banco de dados preenchido com sucesso");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

void main();
