let sifreCreate = document.querySelector('button');



sifreCreate.addEventListener('click',sifreOlustur)


function sifreOlustur(){
    let sifre = "12334567890*-qwertyuıopğüasdfghjklş,.çömnbvcxz<";
    document.querySelector('p').innerHTML = '';
    document.querySelector('.sifreOlustur').style.transition = '1s ease-out'
    document.querySelector('.sifreOlustur').style.bottom = '-200px'
    let basariSesi = new Audio('sifreolusturuldu.mp3');
    basariSesi.play()
    
    for(let i = 0; i < sifre.length; i++){
        document.querySelector('p').innerHTML += `${sifre[parseInt(Math.random() * sifre.length)]}` // Şifre değişkeninin içerisindeki stringin uzunluğu kadar 0 ile 47 arasında sayı.
    }
}