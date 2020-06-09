import { Router } from "express";
import {
  getLinks,
  createLinks,
  deleteLink,
} from "../controllers/link_controller";
import authenticate from "./auth";

const router = Router();

router.post("/", authenticate, async (req: any, res) => {
  const body = req.body;
  const { id } = req.user;
  const link = await createLinks(body, id);
  res.json({ data: link });
});

router.get("/", authenticate, async (req: any, res) => {
  const { id } = req.user;
  const links = await getLinks(Number(id));
  res.json({ data: links });
});

router.delete("/:id", authenticate, async (req, res) => {
  const deleted = await deleteLink(Number(req.params.id));
  res.json({ data: deleted });
});

export default router;
