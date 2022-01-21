
function checkUsername(){
    var name = document.getElementById("username").value;
    var regname = /^[A-Za-z]{5,10}[0-9]{1,5}$/;

    if (regname.test(name) == false) {
        document.getElementById("err1").innerText = "* tên đăng nhập phải từ 6-15 ký tự, bắt đầu bằng chữ và kết thúc bằng số !!";
        return false;
    }
    else {
        document.getElementById("err1").innerText = " ";
        return true;
    }
}
function checkPassword() {
    var psword = document.getElementById("psw").value;
    var regpsword = /^[A-Za-z0-9]{6,15}$/;

    if (regpsword.test(psword) == false) {
        document.getElementById("err2").innerText = "* mật khẩu phải từ 6-15 ký tự";  
        return false;
    }
    else {
        document.getElementById("err2").innerText = " ";
        return true;
    }
}
function checkConfirmPSW() {
    var confirmpsw = document.getElementById("confirmpsw").value;
    var psw = (document.getElementById("psw").value);


    if (psw.localeCompare(confirmpsw) != 0) {
        document.getElementById("err3").innerText = "Không khớp!";
       
    }
    esle
    {
        document.getElementById("err3").innerText = " ";
    }
}

function checkMail() {
    var mail = document.getElementById("email").value;
    var regmail = /^[A-Za-z]{1,10}\w{0,5}\@+(gmail|yahoo|hotmail)+\.+(com)+(vn)*$/;

    if (mail == '') {
        document.getElementById("err4").innerText = "* bắt buộc nhập";
        return false;
    }
    else if (regmail.test(mail)) {
        document.getElementById("err4").innerText = '';
        return true;
    }
    else {
        document.getElementById("err4").innerText = "* địa chỉ email chỉ được dùng gmail/hotmail/yahoomail";
        return false;
    }
}
function checkTel() {
    var tel = document.getElementById("tel").value;
    var regtel = /^(09){1}[0-9]{8}$/;

    if (tel == '') {
        document.getElementById("err5").innerText = "* bắt buộc nhập";
        return false;
    }
    else if (regtel.test(tel)) {
        document.getElementById("err5").innerText = '';
        return true;
    }
    else {
        document.getElementById("err5").innerText = "* số điện thoại chỉ được dùng đầu số 09 và gồm 10 chữ số";
        return false;
    }
}
function dangky() {
    if (checkUsername() == true && checkPassword() == true && checkMail() == true && checkTel() == true) {
        alert('Đăng ký thành công');
        $("#btndky").click(function () {
            $("#subscribemodal").modal("hide");
        });
    }
    else {
        checkUsername();
        checkPassword();
        checkMail();
        checkTel();
    }

}
function checkUserLogin() {
    var namelogin = document.getElementById("usernamelogin").value;
    var regnamelogin = /^[A-Za-z]{5,10}[0-9]{1,5}$/;

    if (regnamelogin.test(namelogin) == false) {
        document.getElementById("err6").innerText = "* Tài khoản không hợp lệ!";
        return false;
    }
    else {
        document.getElementById("err6").innerText = " ";
        return true;
    }
}
function checkPasswordLogin() {
    var psword = document.getElementById("pswlogin").value;
    var regpsword = /^[A-Za-z0-9]{6,15}$/;

    if (regpsword.test(psword) == false) {
        document.getElementById("err7").innerText = "* mật khẩu phải từ 6-15 ký tự";
        return false;
    }
    else {
        document.getElementById("err7").innerText = " ";
        return true;
    }
}
function dangnhap() {
    if (checkUserLogin() == true && checkPasswordLogin() == true) {
        $("#buttonlogin").click(function () {
            $("#loginmodal").modal("hide");
        });
        alert("Đăng nhập thành công");
    }
    else {
        checkUserLogin();
        checkPasswordLogin();
    }
}
function confirmPay() {
    $("#btnconfirmpay").click(function () {
        document.getElementById("cpay").innerText = "Đặt hàng thành công";
    });
    alert("Hoàn tất đặt hàng");
}
function