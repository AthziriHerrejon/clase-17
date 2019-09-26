const express= require ("express")
const app = express ();
const router= express.Router ();

router.get("/login", function(req, res) {
res.send ("this is login throught auth path");
});

router.get("logout",(req, res) => {
    res.send("you are out!");
});
