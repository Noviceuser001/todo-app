const app = require("./app");
const PORT = process.env.PORT || 6969;

// listen server
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});