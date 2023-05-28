export type Workspace = {
  name: string
  version: string
}

export type User = {
  id: string
  name: string
  email: string
  familyId: string | null
}

export type Family = {
  id: string
  name: string
  users: User[]
}
