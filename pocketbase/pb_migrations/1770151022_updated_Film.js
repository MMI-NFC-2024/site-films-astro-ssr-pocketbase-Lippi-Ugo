/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select2834031894",
    "maxSelect": 4,
    "name": "genres",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Comédie",
      "Romance",
      "Action",
      "Policier"
    ]
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select165074778",
    "maxSelect": 1,
    "name": "pays_origine",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "FR",
      "US"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("select2834031894")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select165074778",
    "maxSelect": 1,
    "name": "pays_origine",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "FR",
      "US",
      "GB",
      "CA",
      "AT"
    ]
  }))

  return app.save(collection)
})
