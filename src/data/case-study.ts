export type AssetTagVariant = "screenshot" | "decision" | "copy"

export type AssetTag = {
  label: string
  variant: AssetTagVariant
}

export type CaseStudySection = {
  number: number
  title: string
  description: string
  tags: AssetTag[]
  /** Placeholder slots shown as image blocks */
  placeholderCount?: number
}

export type CaseStudy = {
  title: string
  subtitle: string
  sections: CaseStudySection[]
}
