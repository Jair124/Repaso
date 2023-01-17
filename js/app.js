console.log('Conectado...')

const productData = [
    {
        index: '01', 
        name: 'yellow tracksuit',
        image: 'img1.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat temporibus est placeat veritatis doloribus sequi mollitia voluptatem voluptatibus cupiditate, amet culpa quibusdam laudantium! Dolor optio dicta iure non obcaecati!'
    },
    {
        index: '02', 
        name: 'designer outfit',
        image: 'img2.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat temporibus est placeat veritatis doloribus sequi mollitia voluptatem voluptatibus cupiditate, amet culpa quibusdam laudantium! Dolor optio dicta iure non obcaecati!'
    },
    {
        index: '03', 
        name: 'chilling mood',
        image: 'img3.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat temporibus est placeat veritatis doloribus sequi mollitia voluptatem voluptatibus cupiditate, amet culpa quibusdam laudantium! Dolor optio dicta iure non obcaecati!'
    }
]

const nextBtn = document.querySelector('.next-btn')
let smImgContainer = document.querySelector('.sm-product-img-container')
let productIndex = document.querySelector('.product-index')
let smProductDes = document.querySelector('.sm-product-des')
let productImgCotainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.product-img')
let backdropImg = document.querySelector('backdrop-img')
let productDetail = document.querySelector('.detail-product')
let productName = document.querySelector('.product-name')
let productDes = document.querySelector('.product-des')
//console.log('Boton', nextBtn)

let currentProduct = 0

nextBtn.addEventListener('click', () =>{
    //alert('Hola')
    if (currentProduct >= productData.length - 1){
        currrentProduct = 0
    }else{
        currentProduct++
    }
    productIndex.innerHTML = productData[currentProduct].index
    smProductDes.innerHTML = productData[currentProduct].des.slice(0, 80)
    smImgContainer.classList.add('slide')
    productImgCotainer.classList.add('slide')
    backdropImg.classList.add('fade')
    productDetail.classList.add('fade')

    setTimeout(()=>
    {
        //Se espera 500 milisegundos y despues se ejecuta este codigo
        productName.innerHTML = productData[currentProduct].name
        productDes.innerHTML = productData[currentProduct].des
        smImg.src = productImg.src = backdropImg.src = `img/${productData[currentProduct].image}`
    }, 500)

    setTimeout(()=>{
        //quitamos las clases de la animacion
        smImgContainer.classList.remove('slide')
        productImgCotainer.classList.remove('slide')
        backdropImg.classList.remove('fade')
        productDetail.classList.remove('fade')
    
    }, 1000)

})