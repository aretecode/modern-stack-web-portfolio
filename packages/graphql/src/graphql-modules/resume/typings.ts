export interface BasicLocation {
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

export interface Profile {
  network: string
  username: string
  url: string
}

export interface Basics {
  name: string
  label: string
  picture: string
  email: string
  phone: string
  website: string
  summary: string
  location: BasicLocation
  profiles: Profile[]
}

export interface Work {
  company: string
  position: string
  website: string
  startDate: string
  endDate: string
  summary: string
  highlights: string[]
}

export interface Resume {
  basics: Basics
  work: Work[]
}
