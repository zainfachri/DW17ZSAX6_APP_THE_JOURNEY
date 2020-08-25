const { Bookmark, Journey, User } = require("../models");

exports.showBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
        {
          model: Journey,
          as: "journey",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      order: [["id", "DESC"]],

      attributes: {
        exclude: ["bmUserId", "journeyId", "createdAt", "updatedAt"],
      },
    });
    res.status(200).send({
      message: "response success",
      data: bookmark,
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

exports.userBookmark = async (req, res) => {
  try {
    const { bmUserId } = req.params;
    const getbookmark = await Bookmark.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
        {
          model: Journey,
          as: "journey",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      order: [["id", "DESC"]],

      attributes: {
        exclude: ["bmUserId", "journeyId", "createdAt", "updatedAt"],
      },
      where: {
        bmUserId: bmUserId,
      },
      order: [["id", "DESC"]],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!getbookmark)
      return res.status(400).send({
        message: `Data not found`,
      });

    res.status(200).send({
      message: "response Success",
      data: getbookmark,
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

exports.deleteBookmark = async (req, res) => {
  const { id } = req.params;
  try {
    await Bookmark.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({
      message: `Bookmark id : ${id} has been successfully deleted.`,
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

exports.createBookmark = async (req, res) => {
  try {
    const addBookmark = await Bookmark.create(req.body);

    res.status(200).send({
      message: "Transaction has been Created",
      data: addBookmark,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};
