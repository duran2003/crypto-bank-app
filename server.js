const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const sequelize = new Sequelize(
    "crypto_bank",
    "root",
    "apple123apple321",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

const UserModel = require("./models/User");
const InvestmentModel = require("./models/Investment");

const User = UserModel(sequelize);
const Investment = InvestmentModel(sequelize);

sequelize.authenticate()
    .then(() => {
        console.log("Connected to MySQL!");
    })
    .catch((err) => {
        console.error("Database connection failed:", err);
    });

sequelize.sync()
    .then(() => {
        console.log("Database synced!");
    });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/register", async (req, res) => {
    try {
        const { userid, password, username, email, zipcode } = req.body;

        const user = await User.create({
            userid,
            password,
            username,
            email,
            zipcode,
            type: "Customer"
        });

        await Investment.create({
            userid,
            bitcoin: 0.01,
            ethereum: 0.25,
            solana: 2,
            dogecoin: 100
        });

        res.json({
            message: "User created successfully!",
            user: user
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Error creating user"
        });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { userid, password } = req.body;

        const user = await User.findOne({
            where: {
                userid: userid,
                password: password
            }
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid username or password"
            });
        }

        res.json({
            message: "Login successful!",
            user: user
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Error logging in"
        });
    }
});

app.get("/investments/:userid", async (req, res) => {
    try {
        const userid = req.params.userid;

        const investments = await Investment.findOne({
            where: {
                userid: userid
            }
        });

        if (!investments) {
            return res.status(404).json({
                message: "No investments found for this user"
            });
        }

        res.json(investments);

    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Error loading investments"
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});