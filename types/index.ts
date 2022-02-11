// ?

export type ChapterNavItem = {
  link: string
  icon: string
  label: string
}

// ? CONTEXT TYPES

export type LanguageContextType = {
  lang: string
  switchLang: (lng: string) => void
  currentLangData: object
}
