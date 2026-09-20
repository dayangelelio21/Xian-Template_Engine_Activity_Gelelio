export const homePage = (req, res) => {
    res.render("home", {
        title: "XianFire Home"
    });
};

export const dashboardPage = (req, res) => {
    res.render("dashboard", {
        title: "Dashboard"
    });
};

export const usersPage = (req, res) => {
    res.render("users", {
        title: "Users"
    });
};

export const productsPage = (req, res) => {
    res.render("products", {
        title: "Products"
    });
};

export const ordersPage = (req, res) => {
    res.render("orders", {
        title: "Orders"
    });
};

export const reportsPage = (req, res) => {
    res.render("reports", {
        title: "Reports"
    });
};

export const settingsPage = (req, res) => {
    res.render("settings", {
        title: "Settings"
    });
};