<template>
    <div class="login-box">
        <div class="login-header">
            <img :src="imageUrl" alt="Gambar dari Jaringan" height="240" width="250">
            <header>Atur Ulang Kata</header>
            <header>Sandi</header>
            <br>
            <h5>Masukkan email yang terdaftar untuk mengatur ulang kata sandi</h5>
        </div>
        <div class="input-box">
            <input type="text" class="input-field" placeholder="Email" autocomplete="off" required>
        </div>
        <div class="input-submit">
            <button class="submit-btn" @click="handleSend"></button>
            <label for="submit">Kirim</label>
        </div>   
        <br>
    </div>
</template>
<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const handleSend = () => {
        router.push('/ConfirmPassword');
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
    h5{
        font-size: 15px;
        font-weight: 500;
        color: #555;
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
    .input-box{
        position: relative;
        width: 100%;
        margin-bottom: 20px;
    }
    .input-box .input-field{
        width: 90%;
        height: 50px;
        font-size: 17px;
        padding: 0 25px;
        margin-bottom: 15px;
        border-radius: 30px;
        border: none;
        background-color: #f2f2f2;
    }
    ::placeholder{
        font-weight: 500;
        color: #373737;
    }
    .input-field:focus{
        width: 95%;
    }
    .input-box .submit-btn{
        position: absolute;
        top: 8px;
        right: 0;
        width: 120px;
        height: 40px;
        font-size: 17px;
        font-weight: 500;
        color: #fff;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        background-color: #333;
    }
    .input-box .submit-btn:hover{
        background-color: #111;
    }
    .input-box label{
        position: absolute;
        top: 8px;
        right: 0;
        width: 120px;
        height: 40px;
        font-size: 17px;
        font-weight: 500;
        color: #fff;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        background-color: #333;
    }
    .submit-btn{
        width: 90%;
        height: 50px;
        background: #4677D5;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        transition: .3s;
    }
    .input-submit label{
        position: absolute;
        top: 45%;
        left: 50%;
        color: #fff;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        cursor: pointer;
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
</style>