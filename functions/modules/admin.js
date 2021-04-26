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
        res.send({
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
        res.send({
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
        res.send({
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

        const data = req.body.data
        const getUsersResult = await admin.auth().getUsers(data);
        res.send({
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

        const data = req.body.data

        const userRecord = await admin.auth().createUser({
          uid: data.uid,
          email: data.email,
          emailVerified: data.emailVerified,
          phoneNumber: data.phoneNumber,
          password: data.password,
          displayName: data.displayName,
          photoURL: data.photoURL,
          disabled: data.disabled,
        });
        res.send({
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

        const data = req.body.data;

        const userRecord = await admin.auth().updateUser(data.uid, {
          email: data.email,
          emailVerified: data.emailVerified,
          phoneNumber: data.phoneNumber,
          password: data.password,
          displayName: data.displayName,
          photoURL: data.photoURL,
          disabled: data.disabled,
        });
        res.send({
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

        await admin.auth().deleteUser(req.body.data.uid);
        res.send({
          status: "success",
          data: `Successfully deleted user ${req.body.data.uid}`,
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
        res.send({
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

        const data = req.body.data || {};
        const userRecords = await admin
          .auth()
          .listUsers(data.maxResults || 1000, data.pageToken || undefined);
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

        const data = req.body.data
        await admin.auth().setCustomUserClaims(data.uid, data.claims);
        res.send({
          status: "success",
          data: `User claims ${data.claims} set`,
        });
      } catch (error) {
        functions.logger.error(error);
        res.status(500).json(error.message);
      }
    });
  });
