<template>
    <div class="login-box">
        <div class="login-header">
            <img :src="imageUrl" alt="Gambar dari Jaringan" height="240" width="250">
            <header>Atur Ulang Kata</header>
            <header>Sandi</header>
            <br>
        </div>
        <div class="input-box">
            <input type="password" class="input-field" placeholder="Masukkan Password Baru" autocomplete="off" required>
        </div>
        <h5>Bantu kami untuk melindungi data anda dengan membuat kata sandi yang kuat, minimal 8 karakter, mengandung huruf kecil, huruf besar, dan angka.</h5>
        <br>
        <div class="input-box">
            <input type="password" class="input-field" placeholder="Konfirmasi Password Baru" autocomplete="off" required>
        </div>
        <br><br>
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
        router.push('/Login');
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
    h5{
        font-size: 12px;
        font-weight: 500;
        color: #555;
        margin-left: 20px;
    }
    ::placeholder{
        font-weight: 500;
        color: #373737;
    }
    .input-field:focus{
        width: 90%;
    }
    section{
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #555;
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
</style>