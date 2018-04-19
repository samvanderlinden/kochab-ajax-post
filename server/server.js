const express=require('express');
const app=express(); // this creates an instance of the express server
const PORT=5000;

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log(`up and running on port: ${PORT}`);
});
