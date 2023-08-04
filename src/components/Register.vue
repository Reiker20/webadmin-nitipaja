<template>
    <div class="login-box">
        <div class="login-header">
            <img :src="imageUrl" alt="Gambar dari Jaringan" height="240" width="250">
            <header>REGISTER</header>
        </div>
        <div class="input-box">
            <input type="text" class="input-field" placeholder="Nama Depan" autocomplete="off" required>
        </div>
        <div class="input-box">
            <input type="text" class="input-field" placeholder="Email" autocomplete="off" required>
        </div>
        <div class="input-box">
            <input type="int" class="input-field" placeholder="Nomor Telepon" autocomplete="off" required>
        </div>
        <div class="input-box">
            <input type="date" class="input-field" placeholder="Tanggal Lahir" autocomplete="off" required>
        </div>
        <div class="input-box">
            <input type="password" class="input-field" placeholder="Password" autocomplete="off" required>
        </div>
        <div class="input-submit">
            <button class="submit-btn" @click="handleSignIn"></button>
            <label for="submit">Daftar</label>
        </div>   
        <div class="login-with-google">
            <p>atau</p>
            <button class="login-google-btn" @click="loginWithGoogle">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" width="20" height="20">
                Google
            </button>
        </div>
        <br>
        <div class="sign-up-link">
            <p>Sudah punya akun? <a @click="goToLogin">Masuk</a></p>
        </div>
    </div>
</template>
<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const handleClick = () => {
        router.push('/dashboard');
    };
    const handleSignIn = () => {
        router.push('/Sidebar');
    };
    const goToLogin = () => {
        router.push('/Login');
    };
    const loginWithGoogle = () => {
        router.push('/google');
    };
    const imageUrl = 'https://shopper.nitipaja.online/storage/images/nitipaja.png';
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins',sans-serif;
    }
    .login-box{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 440px;
        height: 480px;
        padding: 30px;
        margin-bottom: 100px;
    }
    .login-header{
        text-align: center;
        margin: 20px 0 40px 0;
    }
    .login-header header{
        color: #333;
        font-size: 30px;
        font-weight: 600;
    }
    .login-header h1 {
        color: #333;
        font-size: 30px;
        font-weight: 600;
        margin-top: 10px;
    }
    .input-box .input-field{
        width: 90%;
        height: 50px;
        font-size: 17px;
        padding: 0 25px;
        margin-bottom: 15px;
        border-radius: 30px;
        border: none;
        box-shadow: 0px 5px 10px 1px rgba(0,0,0, 0.05);
        outline: none;
        transition: .3s;
        margin-left: 13px;
    }
    ::placeholder{
        font-weight: 500;
        color: #373737;
    }
    .input-field:focus{
        width: 90%;
    }
    .forgot{
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
        align-items: center;
    }
    section{
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #555;
    }
    #check{
        margin-right: 10px;
    }
    a{
        text-decoration: none;
        color: #555;
    }
    a:hover{
        text-decoration: underline;
    }
    section a{
        color: #555;
    }
    .text-button{
        cursor: pointer;
    }
    .login-with-google {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .login-google-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 40px;
        background-color: #fff;
        color: #000;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
    }
    .login-google-btn img {
        margin-right: 10px;
    }
    .submit-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 60px;
        background: #4677D5;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        transition: .3s;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
    }
    .input-submit {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .submit-btn:hover{
        background: #4677D5;
        transform: scale(1.05,1);
    }
    .submit-btn:hover{
        background: #4677D5;
        transform: scale(1.05,1);
    }
    .sign-up-link{
        text-align: center;
        font-size: 15px;
        margin-top: 20px;
    }
    .sign-up-link a{
        color: #4677D5;
        font-weight: 600;
    }
    .login-header h1 {
        color: #333;
        font-size: 30px;
        font-weight: 600;
    }
    .input-submit {
        margin-top: 30px;
    }
    .login-with-google {
        margin-top: 20px;
    }
    .login-with-google p {
        font-size: 16px;
        color: #555;
        margin-bottom: 10px;
        }
    P{
        cursor: pointer;
    }
</style>