var express = require('express');
var router = express.Router();
var recomments_dao=require("../dao/recomments_dao").recommentsDao;


//=======================书
//=============================插入回复
router.post('/insertrecom', function(request, response, next) {
    var recom=request.body;
    console.log(recom);
    if(recom){
    recomments_dao.insertBkRecom(recom.user_id,recom.recom_content,recom.bookcom_id,function (result) {
        if (result == "e004") {response.json({"statusCode": result});}
        else  {
            if (result.affectedRows==1) {
                response.json({"statusCode":118});
            } else {
                response.json({"statusCode":119});
            }
        }
    });
    }
});


//=============================一本书下查看回复
router.post('/showrecom', function(request, response, next) {
    var recom=request.body;
    console.log(recom);
    if(recom){
    recomments_dao.showBkRecom(recom.bookcom_id,function (result) {
        if (result == "e004") {response.json({"statusCode": result});}
        else  {
            if (result[0].length==0) {
                response.json({"statusCode":120});
            } else {
                response.json(result[0]);
            }
        }
    });
    }
});

//=============================用户查看书下的回复数
router.post('/userbknum', function(request, response, next) {
    var recom=request.body;
    console.log(recom);
    if(recom){
    recomments_dao.userbknum(recom.user_id,function (result) {
        if (result == "e004") {response.json({"statusCode": result});}
        else  {
            if (result[0][0].newnum==0) {
                response.json({"statusCode":123});
            } else {
                response.json(result[0][0]);
            }
        }
    });
    }
});




//====================================文章
//=============================插入回复
router.post('/insertartrecom', function(request, response, next) {
    var recom=request.body;
    console.log(recom);
    if(recom){
        recomments_dao.insertArtRecom(recom.user_id,recom.recom_content,recom.artcom_id,function (result) {
            if (result == "e004") {response.json({"statusCode": result});}
            else  {
                if (result.affectedRows==1) {
                    response.json({"statusCode":121});
                } else {
                    response.json({"statusCode":122});
                }
            }
        });
    }
});


//=============================查看回复
router.post('/showartrecom', function(request, response, next) {
    var recom=request.body;
    console.log(recom);
    if(recom){
        recomments_dao.showArtRecom(recom.articlecom_id,function (result) {
            if (result == "e004") {response.json({"statusCode": result});}
            else  {
                if (result[0].length==0) {
                    response.json({"statusCode":120});
                } else {
                    response.json(result[0]);
                }
            }
        });
    }
});

//=============================用户查看文章下的回复数
router.post('/userartnum', function(request, response, next) {
    var recom=request.body;
    console.log(recom);
    if(recom){
        recomments_dao.userartnum(recom.user_id,function (result) {
            if (result == "e004") {response.json({"statusCode": result});}
            else  {
                if (result[0][0].newnum==0) {
                    response.json({"statusCode":123});
                } else {
                    response.json(result[0][0]);
                }
            }
        });
    }
});



module.exports = router;
