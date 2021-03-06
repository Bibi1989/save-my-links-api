const models = require("../../database/models/");

const { User, Url } = models;

interface linksInterface {
  title: string;
  link: string;
  userId?: number;
}

export const createLinks = async (link: linksInterface, id: number) => {
  const findLink = await Url.findOne({
    where: {
      title: link.title,
    },
  });
  if (findLink) {
    return {
      status: "error",
      error: "You have add this link already, you can update it",
    };
  }
  try {
    const links = await Url.create({
      ...link,
      userId: Number(id),
    });
    return { status: "success", data: links };
  } catch (error) {
    console.error(error);
    return { status: "error", error };
  }
};

export const getLinks = async (id: number) => {
  try {
    const links = await Url.findAll({
      where: { userId: id },
      include: [User],
    });
    return { status: "success", data: links };
  } catch (error) {
    return { status: "error", error };
  }
};

export const deleteLink = async (id: number) => {
  try {
    const findLink = await Url.findOne({
      where: {
        id,
      },
    });
    if (!findLink) return { status: "error", error: "Cant find this link" };
    console.log("here");
    await Url.destroy({
      where: {
        id,
      },
    });
    return { status: "success", data: "Link deleted!!!" };
  } catch (error) {
    return { status: "error", error };
  }
};
