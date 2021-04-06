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

exports.getUserByEmail = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const userRecord = await admin.auth().getUserByEmail(req.body.email);
        res.json(userRecord);
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error);
      }
    });
  });

exports.getUserByPhoneNumber = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const userRecord = await admin
          .auth()
          .getUserByPhoneNumber(req.body.phoneNumber);
        res.json(userRecord);
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error);
      }
    });
  });

exports.getUsers = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const getUsersResult = await admin.auth().getUsers(req.body);
        res.json(getUsersResult);
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error);
      }
    });
  });

exports.createUser = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const userRecord = await admin.auth().createUser({
          uid: req.body.uid,
          email: req.body.email,
          emailVerified: req.body.emailVerified,
          phoneNumber: req.body.phoneNumber,
          password: req.body.password,
          displayName: req.body.displayName,
          photoURL: req.body.photoURL,
          disabled: req.body.disabled,
        });
        res.json(userRecord);
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error);
      }
    });
  });

exports.updateUser = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const userRecord = await admin.auth().updateUser(req.body.uid, {
            email: req.body.email,
            emailVerified: req.body.emailVerified,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password,
            displayName: req.body.displayName,
            photoURL: req.body.photoURL,
            disabled: req.body.disabled,
          });
          res.json(userRecord);
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error);
      }
    });
  });

exports.deleteUser = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        await admin.auth().deleteUser(req.body.uid);
        res.json({ message: `Successfully deleted user ${ req.body.uid }` });
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error);
      }
    });
  });

exports.deleteUsers = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const deleteUsersResult = await admin.auth().deleteUsers(req.body);
        res.json(deleteUsersResult);
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error);
      }
    });
  });

exports.listUsers = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const userRecords = await admin.auth().listUsers();
        res.json(userRecords);
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error);
      }
    });
  });

exports.setCustomUserClaims = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        await admin.auth().setCustomUserClaims(req.body.uid, req.body.claims);
        res.json({ message: `Successfully set claims ${ req.body.claims }` });
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error);
      }
    });
  });
