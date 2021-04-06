const functions = require("firebase-functions");
const cors = require("cors")({ origin: "*" });
const admin = require("firebase-admin");

const errorMsg = {
  code: "admin/insufficient-permission",
  message: "User has insufficient persmissions.",
};

function validateHeader(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    return req.headers.authorization.split("Bearer ")[1];
  }
}

exports.getUser = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const authToken = validateHeader(req);
        if (!authToken) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        const claims = await admin.auth().verifyIdToken(authToken);
        if (!claims.admin === true) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        const userRecord = await admin.auth().getUser(req.body.uid);
        req.send({
          status: "success",
          data: userRecord,
        });
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error.message);
      }
    });
  });

exports.getUserByEmail = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const authToken = validateHeader(req);
        if (!authToken) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        const claims = await admin.auth().verifyIdToken(authToken);
        if (!claims.admin === true) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        const userRecord = await admin.auth().getUserByEmail(req.body.email);
        req.send({
          status: "success",
          data: userRecord,
        });
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error.message);
      }
    });
  });

exports.getUserByPhoneNumber = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const authToken = validateHeader(req);
        if (!authToken) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        const claims = await admin.auth().verifyIdToken(authToken);
        if (!claims.admin === true) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        const userRecord = await admin
          .auth()
          .getUserByPhoneNumber(req.body.phoneNumber);
        req.send({
          status: "success",
          data: userRecord,
        });
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error.message);
      }
    });
  });

exports.getUsers = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const authToken = validateHeader(req);
        if (!authToken) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        const claims = await admin.auth().verifyIdToken(authToken);
        if (!claims.admin === true) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        const getUsersResult = await admin.auth().getUsers(req.body);
        req.send({
          status: "success",
          data: getUsersResult,
        });
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error.message);
      }
    });
  });

exports.createUser = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const authToken = validateHeader(req);
        if (!authToken) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        const claims = await admin.auth().verifyIdToken(authToken);
        if (!claims.admin === true) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

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
        req.send({
          status: "success",
          data: userRecord,
        });
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error.message);
      }
    });
  });

exports.updateUser = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const authToken = validateHeader(req);
        if (!authToken) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        const claims = await admin.auth().verifyIdToken(authToken);
        if (!claims.admin === true) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        const userRecord = await admin.auth().updateUser(req.body.uid, {
          email: req.body.email,
          emailVerified: req.body.emailVerified,
          phoneNumber: req.body.phoneNumber,
          password: req.body.password,
          displayName: req.body.displayName,
          photoURL: req.body.photoURL,
          disabled: req.body.disabled,
        });
        req.send({
          status: "success",
          data: userRecord,
        });
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error.message);
      }
    });
  });

exports.deleteUser = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const authToken = validateHeader(req);
        if (!authToken) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        const claims = await admin.auth().verifyIdToken(authToken);
        if (!claims.admin === true) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        await admin.auth().deleteUser(req.body.uid);
        req.send({
          status: "success",
          data: `Successfully deleted user ${req.body.uid}`,
        });
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error.message);
      }
    });
  });

exports.deleteUsers = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const authToken = validateHeader(req);
        if (!authToken) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        const claims = await admin.auth().verifyIdToken(authToken);
        if (!claims.admin === true) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        const deleteUsersResult = await admin.auth().deleteUsers(req.body);
        req.send({
          status: "success",
          data: deleteUsersResult,
        });
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error.message);
      }
    });
  });

exports.listUsers = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const authToken = validateHeader(req);
        if (!authToken) {
          res.status(403).send(errorMsg);
        }

        const claims = await admin.auth().verifyIdToken(authToken);
        if (!claims.admin === true) {
          res.status(403).send(errorMsg);
        }

        const userRecords = await admin.auth().listUsers();
        res.send({
          status: "success",
          data: userRecords,
        });
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error.message);
      }
    });
  });

exports.setCustomUserClaims = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const authToken = validateHeader(req);
        if (!authToken) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        const claims = await admin.auth().verifyIdToken(authToken);
        if (!claims.admin === true) {
          functions.logger.warn(errorMsg);
          res.status(403).send(errorMsg);
        }

        await admin.auth().setCustomUserClaims(req.body.uid, req.body.claims);
        req.send({
          status: "success",
          data: `User claims ${req.body.claims} set`,
        });
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error.message);
      }
    });
  });
