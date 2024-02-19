const express = require("express");
const router = express.Router();
const { Userid } = require("../models");
const { PositionT } = require('../models')
const { CandidateT } = require('../models')
const { VoterT } = require('../models')
const { Admin } = require('../models')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');

var sequelize = require('sequelize');





router.post("/signup", async(req, res) => {
    const { username, password, roll, phonenumber } = req.body;
    Userid.create({
        username: username,
        password: password,
        roll: roll,
        phonenumber: phonenumber,
    });

    console.log(req.body);
    res.json({
        message: "SUCCESS"
    });

});



router.post('/phonevalidation/:id', async(req, res) => {
    const id = req.params.id
    const pv = await Userid.findOne({ where: { phonenumber: id } })
    if (pv == null) {
        res.json({
            status: "fail"
        });
    }
})






router.post("/posenter", async(req, res) => {


    const { description, dt, month, year, Hours, Minutes, seconds } = req.body;



    PositionT.create({

        description: description,
        Month: month,
        Date: dt,
        Year: year,
        Hours: Hours,
        Minutes: Minutes,
        Seconds: seconds



    });
    console.log(req.body)
    res.json({
        message: "SUCCESS"
    });

});




router.post("/candidateenter", async(req, res) => {

    const { name, photo, description, PositionTId } = req.body;
    var imgsrc = 'http://127.0.0.1:3000/images/' + photo


    CandidateT.create({

        name: name,
        photo: imgsrc,
        description: description,
        PositionTId: PositionTId

    });
    console.log(req.body)
    res.json({
        message: "SUCCESS"
    });

});

router.get('/position', async(req, res) => {
    const position = await PositionT.findAll({ where: { Status: null } })
    res.json(position);
})
router.get('/positionad', async(req, res) => {
    const position = await PositionT.findAll();
    res.json(position);
})
router.get('/positioni', async(req, res) => {
    const position = await PositionT.findAll({ where: { Status: 'completed' } })
    res.json(position);
})

router.post('/posone/:id', async(req, res) => {
    const id = req.params.id
    const position = await PositionT.findAll({ where: { id: id } })
    res.json(position);
})



router.get('/positioncount', async(req, res) => {
    const position = await PositionT.findAndCountAll()
    res.json({
        pcount: position.count
    });


})

router

router.get('/cand/:id', async(req, res) => {
    const id = req.params.id
    const candidate = await CandidateT.findAll({ where: { PositionTId: id } })
    res.json(candidate);


})




router.get('/candphoto/:id', async(req, res) => {
    const cid = req.params.id
    const candidate = await CandidateT.findOne({ where: { id: cid } })
    res.json({
        photo: candidate.photo,
        name: candidate.name
    });


})

router.get('/posalt/:id', async(req, res) => {
    const pid = req.params.id
    const updatedRows = await PositionT.update({
        Status: "completed",
    }, {
        where: { id: pid },
    });
    console.log(updatedRows)

})




router.post('/candelete/:id', async(req, res) => {
    const pid = req.params.id
    const candelete = await CandidateT.destroy({ where: { id: pid } })
    res.json(candelete);


})

router.get('/pd/:id', async(req, res) => {
    const pid = req.params.id
    const posdelete = await PositionT.destroy({ where: { id: pid } })
    res.json(posdelete);


})






router.post("/Votes", async(req, res) => {
    const {
        CandidateTId,
        PositionTId,
        UseridId


    } = req.body;

    await VoterT.create({
        CandidateTId: CandidateTId,
        PositionTId: PositionTId,
        UseridId: UseridId
    });
    res.json({ ok: 'success' });
    const counta = await VoterT.findAndCountAll({ where: { CandidateTId: CandidateTId } })
        // const Cs = await CandidateT.findOne({ where: { id: CandidateTId } });
    const updatedvotes = await CandidateT.update({
        votes: counta.count
    }, {
        where: { id: CandidateTId },
    });





    // if (counta === null) {
    //     res.json({
    //         counte: 0,

    //     })
    //     console.log(counta)

    // } else {

    //     res.json({
    //         count: counta.count
    //     });
    //     console.log(counta.count)
    // }


});


router.post("/Vc", async(req, res) => {



    const counta = await VoterT.findAndCountAll()


    if (counta === null) {
        res.json({
            count: 0,

        })
        console.log(counta)

    } else {

        res.json({
            count: counta.count
        });
        console.log(counta.count)
    }


});


router.get('/count/:id', async(req, res) => {
    const id = req.params.id
    const counta = await VoterT.findAndCountAll({ where: { CandidateTId: id } })


    if (counta === null) {
        res.json({
            count: 0,

        })
        console.log(counta)

    } else {

        res.json({
            count: counta.count
        });
        console.log(counta.count)
    }



})


// router.put("/update", async(req, res) => {
//     const {
//         id,
//         result
//     } = req.body;

//     CandidateT.update({
//         votes: result,
//     }, {
//         where: { id: id },
//     });
// })

router.post('/voted/:id/:uid', async(req, res) => {
    const pid = req.params.id
    const uid = req.params.uid
    const voted = await VoterT.findOne({ where: { UseridId: uid, PositionTId: pid } })
    if (voted == null) {
        res.json({
            s: 'fail',

        })

    } else {

        res.json({
            ok: 'success',
            cId: voted.CandidateTId
        });
        console.log(voted.CandidateTId)
    }


})






router.post("/login", async(req, res) => {
    const { username, password } = req.body;

    const user = await Userid.findOne({ where: { username: username } });

    if (!user) {
        res.json({ auth: false, error: "no user exists" });
    } else {


        if (password == user.password) {
            const id = user.id;

            console.log(id);

            const token = jwt.sign({ id }, "jwtSecret", {
                expiresIn: 30000,
            })


            res.json({ auth: true, token: token, result: user });







        } else {

            res.json({ auth: false, error: "Wrong Username And Password Combination" });

        };
    }

});




router.post("/adminlogin", async(req, res) => {
    const { username, password } = req.body;

    const user = await Admin.findOne({ where: { username: username } });

    if (!user) {
        res.json({ auth: false, error: "no user exists" });
    } else {


        if (password == user.password) {
            const id = user.id;

            console.log(id);

            const token = jwt.sign({ id }, "jwtSecret", {
                expiresIn: 30000,
            })


            res.json({ auth: true, token: token, result: user });







        } else {

            res.json({ auth: false, error: "Wrong Username And Password Combination" });

        };
    }

});



const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        res.send("we need a token");
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "u failed" });
            } else {
                req.userId = decoded.id;
                next();


            }
        })
    }
}


router.get('/isUserAuth', verifyJWT, (req, res) => {

    res.send({ m: 'ok' });
})





router.get('/Result/:id', async(req, res) => {
    const id = req.params.id
    const counta = await CandidateT.findAll({
        // attributes: [
        //     'name', [sequelize.fn('MAX', sequelize.col('votes')), 'Maxvotes']
        // ],


        where: {
            PositionTId: id
        },

        order: [
            ['votes', 'DESC']
        ],

    })


    if (counta === null) {
        res.json({
            count: 0,

        })
        console.log(counta)

    } else {

        res.json({
            count: counta,
            counte: 1
        });
        console.log(JSON.stringify(counta, null, 2))

    }

    // const counta = await VoterT.findAll({

    //     attributes: [
    //         'CandidateTId', [sequelize.literal(`(SELECT COUNT(*) FROM VoterT WHERE PositionTId = ${id}) GROUP BY CandidateTId`), 'PostCount']
    //     ],
    //     order: [
    //         [sequelize.literal('PostCount'), 'DESC']
    //     ],
    //     // include: [{
    //     //     attributes: ['CandidateTId'],
    //     //     model: CandidateT,
    //     //     required: false
    //     // }],
    //     // group: ['CandidateTId'],
    //     // order: [
    //     //     ['count', 'DESC']
    //     // ]
    // });



    // if (counta === null) {
    //     res.json({
    //         counte: 0,

    //     })
    //     console.log(counta)

    // } else {

    //     res.json({
    //         count: counta.count,
    //         row: counta.rows,
    //         counte: 1
    //     });
    //     console.log(JSON.stringify(counta, null, 2))
    //     console.log(counta.count[0].count)
    // }





})



module.exports = router;
module.exports = router;