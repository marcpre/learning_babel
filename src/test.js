testFunc()

function testFunc() {
    let res = [];
    for (let i = 0; i < 100; i++) {
        res.push(i);
    }
    console.log(JSON.stringify(res));

    return res
}
/* 
module.exports = {
    testFunc()
} */