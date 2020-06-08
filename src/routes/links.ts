import { Router } from "express";
import {
  getLinks,
  createLinks,
  deleteLink,
} from "../controllers/link_controller";
import authenticate from "./auth";

const router = Router();

router.post("/", async (req: any, res) => {
  const body = req.body;
  const { id } = req.user;
  const link = await createLinks(body, id);
  res.json({ data: link });
});

router.get("/", async (req, res) => {
  const links = await getLinks();
  res.json({ data: links });
});

router.delete("/:id", async (req, res) => {
  const deleted = await deleteLink(Number(req.params.id));
  res.json({ data: deleted });
});

export default router;
