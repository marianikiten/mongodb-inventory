const dotenv = require("dotenv")
const mongoose = require("mongoose")
const Item = require("./models/Item")
const express = require("express")

const PORT = 5000
dotenv.config()

const app = express()
app.use(express.json())
app.post("/items", async (req, res) => {
  try {
    const newItem = await Item.create({
      ...req.body,
    })
    res.json(newItem)
  } catch (e) {
    res.status(500).json({
      message: "Unexpected error",
    })
  }
})
app.get("/items", async (req, res) => {
  try {
    const items = await Item.find()
    res.status(200).json(items)
  } catch (e) {
    res.status(500).json({
      message: "Unexpected error",
    })
  }
})
const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DBLOGIN}:${process.env.DBPASSWORD}@myfirstcluster.suethdk.mongodb.net/`
    )

    app.listen(PORT, () => {
      console.log(`App started on http://localhost:${PORT}`)
    })
  } catch (e) {
    console.error(e)
  }
}
connect()