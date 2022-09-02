let axios = require("axios")

//-----------------------Get All Memes---------------------
let getAllMemes = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}
//-----------------------Create All Memes---------------------
let createMeme = async function (req, res) {
    try {
        let template_id = req.query.template_id;
        let text0 = req.query.text0
        let text1 = req.query.text1
        let text2 = req.query.text2
        let username = req.query.username;
        let password = req.query.password;

        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&text2=${text2}&username=${username}&password=${password}`
        }
        let result = await axios(options);
        res.status(200).send({ msg: result.data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.createMeme=createMeme
module.exports.getAllMemes=getAllMemes