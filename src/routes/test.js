const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /example:
 *   get:
 *     description: Example route
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/test-example", (req, res) => {
  res.status(200).send("Example route");
});

module.exports = router;
