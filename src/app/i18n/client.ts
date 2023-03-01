'use client'

import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { getOptions } from './config'

i18next
  .use(initReactI18next)
  .use(resourcesToBackend((language: string, _namespace: string) => import(`./locales/${language}.json`)))
  .init(getOptions())

export function useTranslation(lng: string, ns = '', options: { keyPrefix?: string } = {}) {
  if (i18next.resolvedLanguage !== lng) i18next.changeLanguage(lng)

  return useTranslationOrg(ns, options)
}
