/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3495314148")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.body.user.id = @request.auth.id",
    "deleteRule": "@request.auth.id != \"\" && @request.auth.id = user.id",
    "listRule": "",
    "updateRule": "\n@request.auth.id != \"\" && @request.auth.id = user.id && @request.body.user.id = @request.auth.id",
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3495314148")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
