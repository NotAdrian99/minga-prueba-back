import Manga from "../../models/Manga.js";

let get_me = async (req, res, next) => {
  try {
    console.log(req.body, "reqBodyssssssssssssssssss");
    const mangas = await Manga.find({ author_id: req.body.author_id }).populate("author_id", "name -_id").populate("category_id");
    if (mangas) {
      console.log(mangas, "mangas");
      return res.status(200).json({
        succes: true,
        response: mangas,
      });
    }
    return res.status(404).json({
      repsonse: "el manga no esta ",
    });
  } catch (error) {
    next(error);
  }
};

export default get_me;

// import Manga from "../../models/Manga.js";

// let get_me = async (req, res, next) => {
//   try {
//     console.log(req.params);
//     let myMangas = await Manga.find({ author_id: req.params.author_id });
//     return res.status(200).json({
//       success: true,
//       response: myMangas,
//     });
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// };

// export default get_me;
