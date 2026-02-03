/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3069637536")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select3130199401",
    "maxSelect": 4,
    "name": "profession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Acteur",
      "Réalisateur",
      "Producteur",
      "Scénariste"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3069637536")

  // remove field
  collection.fields.removeById("select3130199401")

  return app.save(collection)
})
