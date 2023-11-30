const oracledb = require("oracledb");
const dbConfig = require("./dbconfig.js");
const dbconfig = require("./dbconfig.js");

oracledb.autoCommit = true; // 자동으로 commit 되게

function init(){
    /* 설치된 경로 */
    oracledb.initOracleClient({libDir:"C:\\Users\\acorn\\Downloads\\instantclient-basic-windows.x64-21.12.0.0.0dbru\\instantclient_21_12"});
}

/** oracledb.getConnection(DB연결정보, (성공, 실패했을때 인자)콜백함수); **/
init();
oracledb.getConnection({
    user: dbConfig.user,
    password: dbConfig.password,
    connectString: dbconfig.connectString
}, (err, conn)=>{
    console.log("Oracle DB 연결 성공 : " + conn
    )
});
