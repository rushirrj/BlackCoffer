const express = require("express");
const router = express.Router();
const Data = require("./model/Data");
const jsonData = require("./jsondata.json");

router.get("/data/", async (req, res) => {
  try {
    const data = await Data.find();
    return res.status(200).json({ data, message: "Data fetched successfully" });
  } catch (err) {
    console.log(err);
  }
});

router.get("/data/:id", async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    return res.status(200).json({ data, message: "Data fetched successfully" });
  } catch (err) {
    console.log(err);
  }
})



// router.get("/generate", async (req, res) => {
//   try {
//     jsonData?.map(async (d) => {
//       const newData = new Data({
//         end_year: d.end_year,
//         intensity: d.intensity,
//         sector: d.sector,
//         topic: d.topic,
//         insight: d.insight,
//         url: d.url,
//         region: d.region,
//         start_year: d.start_year,
//         impact: d.impact,
//         added: d.added,
//         published: d.published,
//         country: d.country,
//         relevance: d.relevance,
//         pestle: d.pestle,
//         source: d.source,
//         title: d.title,
//         likelihood: d.likelihood,
//       });
//       await newData.save();
//     });
//     return res.status(200).json({ message: "Data generated successfully" });
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
