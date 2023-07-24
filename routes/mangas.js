import Router from "express";
import read_one from "../controllers/mangas/read_one.js";
import read from "../controllers/mangas/read.js";
import createMangaController from "../controllers/mangas/create.js";
import passport from "../middlewares/passport.js";
import validator from "../middlewares/validator.js";
import has_permission from "../middlewares/has_permission.js";
import mangaCreate from "../schemas/auth/createManga.js";
import mangaExists from "../middlewares/mangaExists.js";
import get_me from "../controllers/mangas/get_me.js";
import finds_id from "../middlewares/finds_id.js";
import update from "../controllers/mangas/update.js";
import mangaUpdate from "../schemas/auth/mangaUpdate.js";
import is_active from "../middlewares/isActive.js";
import is_property_of from "../middlewares/isPropertyOf.js";
import destroy from "../controllers/mangas/destroy.js";
// import mangasFromAuthor from "../middlewares/get_mangas_from_author.js";

const manga_router = Router();

// manga_router.post()
manga_router.get("/me", passport.authenticate("jwt", { session: false }), finds_id, get_me);
manga_router.get("/:id", read_one);
// manga_router.post() //crea un autor
manga_router.get("/", passport.authenticate("jwt", { session: false }), read); //leer uno o todos
manga_router.post("/", validator(mangaCreate), passport.authenticate("jwt", { session: false }), has_permission, mangaExists, createMangaController);
//passport.authenticate("jwt", { session: false }),
//
manga_router.put("/:id", passport.authenticate("jwt", { session: false }), validator(mangaUpdate), finds_id, is_active, is_property_of, update);
manga_router.delete("/:id", passport.authenticate("jwt", { session: false }), finds_id, is_active, is_property_of, destroy);
export default manga_router;
