const express = require("express");
const router = express.Router();
const Data = require("./model/Data");
const jsonData = require("./jsondata.json");

router.get("/data/", async (req, res) => {
  try {
    const data = await Data.find();
    return res
      .status(200)
      .json({ data: data, message: "Data fetched successfully" });
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
});

router.get("/query/:type", async (req, res) => {
  try {
    // const data = await Data.find();
    const type = req.params.type;
    const data = await Data.count({ region: "Western Africa" });
    Data.aggregate([
      {
        $group: {
          _id: `$${type}` ,
          count: { $sum: 1 },
        },
      },
    ]).then((result) => {
      return res
        .status(200)
        .json({ data: result, message: "Data fetched successfully" });
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/dashboard/intensity", async (req, res) => {
  const data = await Data.find();
  let mapData = {};
  mapData[0] = 0;
  data?.forEach((item) => {
    if (mapData[item.intensity]) {
      mapData[item.intensity] += 1;
    } else if (item.intensity === null) {
      mapData[0] += 1;
    } else {
      mapData[item.intensity] = 1;
    }
  });
  return res.status(200).json({ data: mapData, message: "Data fetched" });
});
router.get("/dashboard/likelihood", async (req, res) => {
  const data = await Data.find();
  let mapData = {};
  mapData[0] = 0;
  data?.forEach((item) => {
    if (mapData[item.likelihood]) {
      mapData[item.likelihood] += 1;
    } else if (item.likelihood === null) {
      mapData[0] += 1;
    } else {
      mapData[item.likelihood] = 1;
    }
  });
  return res.status(200).json({ data: mapData, message: "Data fetched" });
});

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
