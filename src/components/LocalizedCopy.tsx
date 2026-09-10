'use client'

import { useLanguage } from '@/components/LanguageProvider'

type CopyId =
  | 'shopBadge' | 'shopTitlePrefix' | 'shopTitleHighlight' | 'shopDescription'
  | 'shopAllServices' | 'shopFilterDescription' | 'shopDbError'
  | 'shopBenefitsLabel' | 'shopBenefitsTitle' | 'shopBenefitsHighlight' | 'shopBenefitsSubtitle'
  | 'shopCtaTitle' | 'shopCtaHighlight' | 'shopCtaDescription' | 'contactUs' | 'aboutApproach'
  | 'appointmentBadge' | 'appointmentTitlePrefix' | 'appointmentTitleHighlight'
  | 'appointmentDescription' | 'appointmentConfidential' | 'appointmentResponse' | 'appointmentReading'
  | 'appointmentForm' | 'adminDashboard' | 'adminAppointments' | 'adminProducts' | 'adminMessages'

export default function LocalizedCopy({ id }: { id: CopyId }) {
  const { t } = useLanguage()
  const copy: Record<CopyId, string> = {
    shopBadge: t.home.ourAstrology,
    shopTitlePrefix: t.home.guidanceYouCan,
    shopTitleHighlight: t.home.trust,
    shopDescription: t.home.servicesSubtitle,
    shopAllServices: t.home.services,
    shopFilterDescription: t.home.servicesSubtitle,
    shopDbError: t.home.finalDescription,
    shopBenefitsLabel: t.home.whyChooseUs,
    shopBenefitsTitle: t.home.guidanceYouCan,
    shopBenefitsHighlight: t.home.trust,
    shopBenefitsSubtitle: t.home.whyChooseSubtitle,
    shopCtaTitle: t.home.readyToFind,
    shopCtaHighlight: t.home.cosmicDirection,
    shopCtaDescription: t.home.finalDescription,
    contactUs: t.common.contactUs,
    aboutApproach: t.nav.about,
    appointmentBadge: t.home.bookConsultation,
    appointmentTitlePrefix: t.home.readyToFind,
    appointmentTitleHighlight: t.home.cosmicDirection,
    appointmentDescription: t.home.finalDescription,
    appointmentConfidential: t.home.confidential,
    appointmentResponse: t.home.experiencedGuidance,
    appointmentReading: t.home.personalised,
    appointmentForm: t.common.appointmentForm,
    adminDashboard: t.common.dashboard,
    adminAppointments: t.common.appointments,
    adminProducts: t.common.products,
    adminMessages: t.common.messages,
  }
  return <>{copy[id]}</>
}
