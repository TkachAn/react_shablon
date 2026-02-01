
import { AutoNav } from "../../../../components/structure/autoNav/AutoNav";
import s from "./bar.module.css";

export function SidePanel() {
  return (
    <aside className={s.side_panel}>
      {/* Твои другие элементы (логотип, юзер) */}

      <AutoNav />

      {/* Твои кнопки-иконки снизу */}
    </aside>
  );
}
