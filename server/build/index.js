"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listings_1 = require("./listings");
const app = (0, express_1.default)();
const port = 4000;
const one = 1;
const two = 2;
app.get("/", (_req, res) => {
    res.send(`1 + 2 = ${one + two}`);
});
app.get("/listings", (req, res) => {
    res.send(listings_1.listings);
});
app.listen(port);
console.log(`[app]: http://localhost:${port}`);
