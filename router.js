const router = require('express').Router();
const { setContent, updateContent, getContent, validator } = require("./controllers/contentController")



router.post('/add_content',validator, setContent);

router.post('/update_content/:id', updateContent);

router.get('/get_content', getContent);




module.exports = router;