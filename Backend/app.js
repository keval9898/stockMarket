const express = require('express');
const sequelize = require('./dbConnection/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/api', userRoutes);

sequelize.authenticate()
  .then(() => console.log('✅ DB connected'))
  .catch(err => console.error('❌ DB error:', err));

sequelize.sync()
  .then(() => console.log('✅ Models synced'))
  .catch(err => console.error('❌ Sync error:', err));

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
