

declare namespace UserFindOneOutput {
  interface InventoryItem {
    id: string
    name: string
    quantity: number
    createdAt: Date
    tradeable: boolean
  }
  interface Record {
    id: string
    email: string
    firstName: string
    lastName: string
    createdAt: Date
    inventory: InventoryItem[]
  }
}
interface UserFindOneOutput {
  record: UserFindOneOutput.Record
}


declare namespace UserFindManyOutput {

  interface InventoryItem {
    id: string
    name: string
  }

  interface Record {
    id: string
    email: string
    inventory: InventoryItem[]
  } 
}
interface UserFindManyOutput {
  records: Array<UserFindManyOutput.Record>
  total: number
}