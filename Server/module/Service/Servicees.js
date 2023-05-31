
const ServiceModule = require("./Service");

module.exports = {
  // get all service
  getAllService: async (req, res) => {
    try {
      const data = await ServiceModule.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // get one service by id
  getOneServiceById: async (req, res) => {
    try {
      const data = await ServiceModule.findByPk(req.params.id);
      if (!data) res.status(200).json("entry not found by id: ", req.params.id);
      else res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // create new service
  createNewService: async (req, res) => {
    try {
      const data = await ServiceModule.create(req.body);
      res.status(201).json("new entry created successfully...");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // update service by id
  updateServiceById: async (req, res) => {
    try {
      const data = await ServiceModule.update(req.body, {
        where: {
          service_id: req.params.id,
        },
      });
      if (data[0] == 1) res.status(200).json("updated successfully...");
      else res.status(200).json("already updated...");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // delete service by id
  deleteServiceById: async (req, res) => {
    try {
      const data = await ServiceModule.destroy({
        where: {
          service_id: req.params.id,
        },
      });
      if (data == 0)
        res.status(200).json("entry not found with id: ", req.params.id);
      else res.status.json("deleted successfully...");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
