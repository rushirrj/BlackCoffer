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
          _id: `$${type}`,
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
router.get("/dashboard/relevance", async (req, res) => {
  const data = await Data.find();
  let mapData = {};
  mapData[0] = 0;
  data?.forEach((item) => {
    if (mapData[item.relevance]) {
      mapData[item.relevance] += 1;
    } else if (item.relevance === null) {
      mapData[0] += 1;
    } else {
      mapData[item.relevance] = 1;
    }
  });
  return res.status(200).json({ data: mapData, message: "Data fetched" });
});
router.get("/dashboard/start_year", async (req, res) => {
  const data = await Data.find();
  let mapData = {};
  // mapData["N.A"] = 0;
  data?.forEach((item) => {
    if (mapData[item.start_year]) {
      mapData[item.start_year] += 1;
    } else if (item.start_year === null || item.start_year === "") {
      // mapData["N.A"] += 1;
    } else {
      mapData[item.start_year] = 1;
    }
  });
  return res.status(200).json({ data: mapData, message: "Data fetched" });
});
router.get("/dashboard/end_year", async (req, res) => {
  const data = await Data.find();
  let mapData = {};
  // mapData["N.A"] = 0;
  data?.forEach((item) => {
    if (mapData[item.end_year]) {
      mapData[item.end_year] += 1;
    } else if (item.end_year === null || item.end_year === "") {
      // mapData["N.A"] += 1;
    } else {
      mapData[item.end_year] = 1;
    }
  });
  return res.status(200).json({ data: mapData, message: "Data fetched" });
});
router.get("/dashboard/topic", async (req, res) => {
  const data = await Data.find();
  let mapData = {};
  mapData["N.A"] = 0;
  data?.forEach((item) => {
    if (mapData[item.topic]) {
      mapData[item.topic] += 1;
    } else if (item.topic === null || item.topic === "") {
      mapData["N.A"] += 1;
    } else {
      mapData[item.topic] = 1;
    }
  });
  return res.status(200).json({ data: mapData, message: "Data fetched" });
});
router.get("/dashboard/country", async (req, res) => {
  const data = await Data.find();
  let mapData = {};
  // mapData["N.A"] = 0;
  data?.forEach((item) => {
    if (mapData[item.country]) {
      mapData[item.country] += 1;
    } else if (item.country === null || item.country === "") {
      // mapData["N.A"] += 1;
    } else if (item.topic == "world") {
      mapData["World"] += 1;
    } else {
      mapData[item.country] = 1;
    }
  });
  return res.status(200).json({ data: mapData, message: "Data fetched" });
});
router.get("/dashboard/region", async (req, res) => {
  const data = await Data.find();
  let mapData = {};
  // mapData["N.A"] = 0;
  data?.forEach((item) => {
    if (mapData[item.region]) {
      mapData[item.region] += 1;
    } else if (item.topic == "world") {
      mapData["World"] += 1;
    } else if (item.region === null || item.region === "") {
      // mapData["N.A"] += 1;
    } else {
      mapData[item.region] = 1;
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
