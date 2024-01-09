const Store = require("../models/store.model");
// Copy Paste CRUD to the exam controller 
module.exports = {
    // Read All
    findAllStores: (req, res) => {
        Store.find()
        .then((stores) => {
            res.json(stores);
        })
        .catch(err => {
            res.json(err);
        });
    },

    // Read One 
    findOneSingleStore:(req, res) => {
        Store.findOne({ _id: req.params.id })
        .then((oneSingleStore) => {
            res.json(oneSingleStore);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    // Create 
    createNewStore: (req, res) => {
        Store.create(req.body)
            .then((newlyCreatedStore) => {
                res.json(newlyCreatedStore);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    // Update 
    updateExistingStore: (req, res) => {
        Store.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
        .then((updatedStore) => {
            res.json(updatedStore);
            console.log(req.param.id);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    // Delete 
    deleteAnExistingStore: (req, res) => {
        Store.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },
};