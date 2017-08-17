/**
 * Created by Administrator on 2016/12/8.
 */
;(function () {
    axios.defaults.timeout = 5000;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
   // axios.defaults.baseURL = 'http://192.168.1.120:8080/arbmanager';

    var dataForm = new Vue({
        el: "#dataform",
        data: {
            name: "郭嘉",
            age: 24,
            gender: 1
        }
    })
    document.querySelector("#addbtn").onclick = function () {
        axios.post('/user/add-post', {
            name: dataForm.name,
            age: dataForm.age,
            gender: dataForm.gender
        }).then(function (res) {
            if (res.data.code === 200) {
                alert("success")
            } else {
                alert(res.errmsg);
            }
        }).catch(function (err) {
            console.log(err.errmsg);
        })

    };

})();