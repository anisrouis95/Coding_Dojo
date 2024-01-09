const StoresController = require ("../controllers/store.controller");

module.exports = (app) => {
    app.post("/api/stores/add", StoresController.createNewStore)
    app.get("/api/stores", StoresController.findAllStores);
    app.get("/api/stores/:id", StoresController.findOneSingleStore)
    app.patch("/api/stores/edit/:id", StoresController.updateExistingStore)
    app.delete("/api/stores/:id", StoresController.deleteAnExistingStore)
}