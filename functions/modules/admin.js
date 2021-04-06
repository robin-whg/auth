const functions = require("firebase-functions");
const cors = require("cors")({ origin: "*" });
const admin = require("firebase-admin");

exports.getUser = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const userRecord = await admin.auth().getUser(req.body.uid);
        res.json(userRecord);
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error);
      }
    });
  });
