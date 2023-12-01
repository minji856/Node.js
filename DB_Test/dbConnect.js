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
    // console.log("Oracle DB 연결 여부 : " + conn); // undefined 뜨면 실패
    let sql;

    // SELECT
    /*
    sql = "select empno, ename, job, hiredate from emp";
    conn.execute(sql, [], (err, result)=>{
        if(err){
            throw err;
        }
        console.log(result.rows); // 객체로 받아왔기 때문에 행별로 결과 출력
        doRelease(conn);
    */

    // CREATE
    /*
    sql = `create table nodeUser(
                id varchar2(10),
                password varchar2(10),
                name varchar2(10),
                age number)`;
    conn.execute(sql);
    console.log("테이블 생성 완료");
    */

    // INSERT
    sql = "insert into nodeUser values(:id, :pw, :name, :age)";
    
    /* 값을 1개만 넣을때 */
    // let binds = [["a1", "1111", "홍길동", 20]]

    /* 값을 여러개 넣을때 */
    /*
    let binds = [["b1", "1111", "Tom", 21],
                ["c1", "1111", "Jane", 22],
                ["d1", "1111", "John", 23]];

    conn.executeMany(sql, binds, {}); // 여러개
    */

    // UPDATE
    /*
    sql = `update nodeUser 
            set password= :pw, name=: name,age=: age
            where id=:id`;
    conn.executeMany(sql, [["2222", "marry", 30, "c1"]])
    */

    // DELETE
    sql = "delete nodeUser where id=:id";
    conn.execute(sql, ["b1"]);

    sql = "select * from nodeUser";
    conn.execute(sql, [], (err, result)=>{
        console.log(result.rows);
        doRelease(conn);
    })
    });

    const doRelease = (conn) => {
        conn.release((err)=>{
            if(err) throw err;
        }); // close 역할
    };

