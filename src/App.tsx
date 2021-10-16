import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import React, { useState } from 'react';
import TranslationEn from './lang/en/index';
import TranslationDe from './lang/de/index';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TranslationEn
      },
      de: {
        translation: TranslationDe
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

const App = () => {
  const [x, setX] = useState(0)
  const { t } = useTranslation()

  const onChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>{t("menu.HOME")}</li>
            <li>{t("menu.PLAY")}</li>
            <li>{t("menu.PLAYERS")}</li>
            <li>{t("menu.PROFILE")}</li>
          </ul>
        </nav>
        <p>{t("general.WELCOME", { count: x })}</p>
        <p>{x}</p>
        <button onClick={() => setX(x + 1)}>Click</button>
        <select name="language" onChange={onChangeLanguage}>
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </select>
      </header>
    </div>
  );
}

export default App;
