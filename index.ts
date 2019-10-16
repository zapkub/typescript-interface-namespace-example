


class UserRepository {
  findMany(): UserFindManyOutput {
    const defaultInventory: UserFindManyOutput.InventoryItem = {
      id: "inventory-id",
      name: "Luna sword"
    }
    return {
      records: [{
        email: "test@me.com",
        id: "test-id",
        inventory: [
          defaultInventory,
        ]
      }],
      total: 0
    }
  }

  findOne(): UserFindOneOutput {
    const defaultInventory: UserFindOneOutput.InventoryItem = {
      id: "inventory-id",
      name: "Luna sword",
      createdAt: new Date(),
      quantity: 20,
      tradeable: false
    }
    return {
      record: {
        id: "test-id",
        createdAt: new Date(),
        email: "test@me.com",
        firstName: "Testname",
        lastName: "Testlastname",
        inventory: [
          defaultInventory,
        ],
      },
    }
  }

}
