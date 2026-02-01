import s from './s.module.css';
import { EmailInput, NoteInput, PhoneInput, PriceInput } from '../../../components/base/inputs/inputsMod';
import { Section } from '../../../components/structure/main/sections/section';

export function Article2Content() {
  return (
    <article className={s.article}>
      <EmailInput label="email" placeholder="Введите email" />
      <NoteInput label="Заметки" placeholder="Введите заметки" />
      <PhoneInput label="Телефон" placeholder="Введите телефон" />
      <PriceInput label="Цена" placeholder="Введите цену" />
<Section title="Nested Section">
      <p>This is content inside a nested section.</p>
</Section>
      <p>This is the content of the article.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quos iusto, cumque atque culpa amet maxime exercitationem natus magni, perferendis tempore officia laudantium veritatis consequuntur corrupti nam, error dolore? Odit?
      </p>
    </article>
  );
}
