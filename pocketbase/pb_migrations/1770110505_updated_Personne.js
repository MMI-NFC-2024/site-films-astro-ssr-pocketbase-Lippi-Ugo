/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3069637536")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.body.user.id = @request.auth.id",
    "deleteRule": "@request.auth.id != \"\" && @request.auth.id = user.id",
    "updateRule": "@request.auth.id != \"\" && @request.auth.id = user.id && @request.body.user.id = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3069637536")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\"",
    "deleteRule": null,
    "updateRule": null
  }, collection)

  return app.save(collection)
})
