/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3069637536")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select2663700287",
    "maxSelect": 1,
    "name": "nationalite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "FR",
      "GB",
      "US",
      "CA",
      "AT"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3069637536")

  // remove field
  collection.fields.removeById("select2663700287")

  return app.save(collection)
})
