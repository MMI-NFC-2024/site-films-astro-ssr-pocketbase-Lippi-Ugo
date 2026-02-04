/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3069637536",
    "hidden": false,
    "id": "relation4264581662",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "scenariste",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3069637536",
    "hidden": false,
    "id": "relation2128342544",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "producteur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3069637536",
    "hidden": false,
    "id": "relation4264581662",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "scenariste",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3069637536",
    "hidden": false,
    "id": "relation2128342544",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "producteur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
