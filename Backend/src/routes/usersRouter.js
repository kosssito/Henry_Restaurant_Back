const { Router } = require("express");
const { check } = require("express-validator");
const {
  getUser,
  postUser,
  putUser,
  delteUser,
	activateAccount,
	updateUser,
} = require("../controllers/usersContoller");
const { existsEmail, existsUserById } = require("../helpers/db-validators");
const { validatorMiddlewere } = require("../middlewares/validator-middleweres");

const router = Router();

router.get("/activateAccount", activateAccount);

router.get("/", getUser);

router.post(
  "/",
  [
    check("fullName", "fullName required ").not().isEmpty(),
    check("password", "password min length are 6 characthers").isLength({
      min: 6,
    }),
    check("email", "email need format example@mail.com").isEmail(),
    check("email").custom(existsEmail),
    check("country", "country required").not().isEmpty(),
    validatorMiddlewere,
  ],
  postUser
);

router.put(
  "/:id",
  [
    check("id", "Is not ID valid").isMongoId(),
    check("id").custom(existsUserById),
    validatorMiddlewere,
  ],
  putUser
);

router.patch("/updateUser/:id", updateUser)

router.delete(
  "/:id",
  [
    check("id", "Is not ID valid").isMongoId(),
    check("id").custom(existsUserById),
    validatorMiddlewere,
  ],
  delteUser
);

module.exports = router;
