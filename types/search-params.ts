export interface SearchParams {
  contactSort?: string
  contactOrder?: string
  newsletterSort?: string
  newsletterOrder?: string
  [key: string]: string | string[] | undefined
}
