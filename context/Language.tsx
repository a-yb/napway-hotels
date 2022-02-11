import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import { langData } from '../data/langData'
import { LanguageContextType } from '../types'

const defaultState: LanguageContextType = {
  lang: '',
  switchLang: () => {},
  currentLangData: {},
}

const LanguageContext = createContext<LanguageContextType>(defaultState)

export function LanguageProvider(props: PropsWithChildren<{}>) {
  const [lang, setLang] = useState('tr-TR')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const selectedLang = window.localStorage.getItem('uiLang')
      if (selectedLang) {
        setLang(selectedLang)
      }
    }
  }, [lang])

  const switchLang = (ln: string) => {
    setLang(ln)
    window.localStorage.setItem('uiLang', ln)
  }

  return (
    <LanguageContext.Provider
      value={{
        lang,
        switchLang,
        currentLangData: langData[lang as keyof typeof langData],
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  )
}
