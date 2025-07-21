const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const imageData = {
  imageUrl: 'https://via.placeholder.com/500', // Replace with a real satellite image URL
  metadata: {
    acquisitionDate: '2024-01-01'
  }
};

app.get('/api/image', (req, res) => {
  let filteredImageData = imageData;
  if (req.query.date) {
    // Bug: Doesn't actually filter, just returns the same data
    // Should compare req.query.date with imageData.metadata.acquisitionDate
      filteredImageData = imageData
  }

  res.json(filteredImageData);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
