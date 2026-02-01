import { NormButton } from "../../../../components/base/buttons/buttons";
import { Article, Flex, Section } from "../../../../components/structure/main/sections/sections";
//import s from "./s.module.css";

export function AnatomyOfaPage() {
  return (
    <Section title="Как устроен этот конструктор" id="architecture">
      <Article title="Модульная структура">
        <p>
          Каждый элемент на этом сайте — это независимый компонент. Мы
          используем строгую иерархию для обеспечения семантики и чистоты кода:
        </p>
        <ul>
          <li>
            <strong>Section</strong> — логический блок страницы с заголовком.
          </li>
          <li>
            <strong>Article</strong> — самостоятельная единица контента внутри
            секции.
          </li>
          <li>
            <strong>Flex</strong> — инструмент для управления расположением
            элементов.
          </li>
        </ul>
        
      </Article>
      <Article title="Попробуйте в действии">
        <p>
          Нажмите на кнопку ниже, чтобы увидеть границы наших структурных
          компонентов:
        </p>

        <Flex gap="15px">
          {/* Используем нашу новую NormButton! */}
          <NormButton
            status="accent"
            onClick={() => document.body.classList.toggle("show-debug")}
          >
            Подсветить структуру
          </NormButton>

          <NormButton status="normal">Узнать больше</NormButton>
        </Flex>
      </Article>
    </Section>
  );
    }