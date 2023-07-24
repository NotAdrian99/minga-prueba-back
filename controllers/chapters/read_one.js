import Chapter from "../../models/Chapter.js";

const readOneController = async (req, res) => {
  try {
    const mangaId = req.query.manga_id;
    const chapterId = req.params.id;
    const page = parseInt(req.query.page) || 1; // obtiene  numero de pagina que se quiere ver o usa 1 por defecto

    // Obtener los capítulos de la página actual
    const chapter = await Chapter.find({ manga_id: mangaId, _id: chapterId }); //busca capitulos en la db usando ids como parametros de busqueda y lo guarda en la variable chapter
    // .select("-_id -manga_id -pages ")
    // .sort({ order: 1 }) // Ordenar los capítulos por "order" de forma ascendente
    // .skip((page - 1) * limit); // Saltar los capítulos anteriores a la página actual
    // .limit(limit); // Limitar el número de capítulos a mostrar por página

    const nextChapter = await Chapter.findOne({
      //busca el sig. chapter del mismo manga order +1 secuencialmente
      manga_id: mangaId,
      order: chapter[0].order + 1,
    });
    const responseData = {
      title: chapter[0].title,
      pages: chapter[0].pages,
      mangaId: chapter[0].manga_id,
    };
    console.log(chapter, "responsedata");
    if (!nextChapter) {
      res.status(200).json({ chapter: responseData, nextChapter: null });
    }

    res.status(200).json({ chapter: responseData, nextChapter: nextChapter._id });

    // , nextChapter: nextChapter._id
    // })(req, res);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error });
  }
};

export default readOneController;
