"use strict";

const express = require("express");
const router = express.Router();

const middlewares = require("../middlewares");
const AnnouncementController = require("../controllers/announcement")

router.post("/list", AnnouncementController.getAnnouncement);
router.get("/", AnnouncementController.list);
router.get("/:id", AnnouncementController.read);
router.put("/:id", AnnouncementController.update);
router.post("/new", AnnouncementController.create);
router.delete("/:id", AnnouncementController.remove);

module.exports = router;