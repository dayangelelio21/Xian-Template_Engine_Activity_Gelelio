import express from "express";

import {
    homePage,
    dashboardPage,
    usersPage,
    productsPage,
    ordersPage,
    reportsPage,
    settingsPage
} from "../controllers/homeController.js";

import { test } from "../controllers/test.js";

const router = express.Router();

router.get("/", homePage);

router.get("/dashboard", dashboardPage);

router.get("/users", usersPage);

router.get("/products", productsPage);

router.get("/orders", ordersPage);

router.get("/reports", reportsPage);

router.get("/settings", settingsPage);

// Activity from the class demonstration
router.get("/test", test.index);

// Optional alias
router.get("/activity", test.index);

export default router;