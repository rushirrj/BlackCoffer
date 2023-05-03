const express = require("express");
const router = express.Router();
const Data = require("./model/Data");
const jsonData = require("./jsondata.json");

router.get("/feeds", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const data = await Data.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await Data.countDocuments();
    return res.json({
      data,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    console.error(err.message);
  }
});

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
    const data = await Data.find();
    const type = req.params.type;
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
router.get("/dashboard/:type", async (req, res) => {
  const data = await Data.find();
  const type = req.params.type;
  let mapData = {};
  mapData[0] = 0;
  data?.forEach((item) => {
    if (mapData[item[type]]) {
      mapData[item[type]] += 1;
    } else if (mapData[item[type]] === null) {
      mapData[0] += 1;
    } else {
      mapData[item[type]] = 1;
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
