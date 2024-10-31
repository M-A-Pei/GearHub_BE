const router = require("express").Router();
const upload = require("../middleware/fileUpload");
const { createProduct, getProducts, getProductsByCategory, searchProduct } = require("../service/product");


router.post("/", upload.single('image') ,async(req, res) => {
    const x = {...req.body, image: req.file.filename}
    const result = await createProduct(x)
    res.json(result);
});

router.get("/", async(req, res) => {
    const result = await getProducts()
    res.json(result);
});

router.get("/byCategory/:category", async(req, res) => {
    const category = req.params.category
    const result = await getProductsByCategory(category)
    res.json(result);
});

router.get("/bySearch/:search", async(req, res) => {
    const result = await searchProduct(req.params.search)
    res.json(result);
});

module.exports = router;