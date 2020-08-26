const { User, Journey } = require("../models");

exports.showJourney = async (req, res) => {
  try {
    const journey = await Journey.findAll({
      include: {
        model: User,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      },
      attributes: {
        exclude: ["updatedAt"],
      },
      order: [["id", "DESC"]],
    });

    res.status(200).send({
      message: "response success",
      data: journey,
    });
  } catch (err) {
    console.log(err);
    response.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.showJourneyDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const detailJourney = await Journey.findOne({
      where: {
        id,
      },
      include: {
        model: User,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      },
    });

    if (!detailJourney)
      return res.status(400).send({
        message: `Journey with id: ${id} is not existed`,
      });

    res.status(200).send({
      message: "response Success",
      data: detailJourney,
    });
  } catch (error) {
    console.log(err);
    response.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.journeyUser = async (req, res) => {
  try {
    const { jnUserId } = req.params;
    const userJourney = await Journey.findAll({
      include: {
        model: User,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      },
      where: {
        jnUserId: jnUserId,
      },
    });

    if (!userJourney)
      return res.status(400).send({
        message: `Journey with id: ${id} is not existed`,
      });

    res.status(200).send({
      message: "response Success",
      data: userJourney,
    });
  } catch (error) {
    console.log(err);
    response.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.createJourney = async (req, res) => {
  try {
    const { journeyImg } = req.files;
    const imageJourneyName = journeyImg.name;
    await journeyImg.mv(`./uploads/${imageJourneyName}`);

    const addJourney = await Journey.create({
      ...req.body,
      jnImg: imageJourneyName,
    });
    res.status(200).send({
      message: "Journey has been Created",
      data: addJourney,
    });
  } catch (error) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.updateJourney = async (req, res) => {
  try {
    const { id } = req.params;

    const editJourney = await Journey.update(req.body, {
      where: {
        id,
      },
    });
    res.status(200).send({
      message: "Journey has been Updated",
      data: {
        editJourney,
      },
    });
  } catch (error) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.deleteJourney = async (req, res) => {
  const { id } = req.params;
  try {
    await Journey.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({
      message: `Journey id : ${id} has been successfully deleted.`,
    });
  } catch (error) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};
