const items = [
    {
        id:0,
        nome:'camiseta',
        img: 'camisa.jpg',
        quantidade: 0,
        preco: 'R$20,99'
    },
    {
        id:1,
        nome:'short',
        img: 'short.png',
        quantidade: 0,
        preco: 'R$20,99'
    },
    {
        id:2,
        nome:'sapato',
        img: 'tenis2.png',
        quantidade: 0,
        preco: 'R$20,99'
    },
    
]



inicializarLoja = () => {
    let containerProdutos = document.getElementById("produtos");
    items.map((val)=>{
     containerProdutos.innerHTML += `

     <div class="produto-single">
     <img src="`+val.img+`"/>
     <p>`+val.nome+`</p> 
     <a key="`+val.id+`" href="#">Adicionar ao carrinho!<a/>
     </div>
     `;
    })
}

inicializarLoja ();

atualizarCarrinho = () => {
 let containerCarrinho = document.getElementById("carrinho");
 containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0 ){
     containerCarrinho.innerHTML += `
            <div class="info-single-checkout">
              <p style="float:left;">Produto:`+val.nome+`</p>  
              <p style="float:right;">Quantidade:`+val.quantidade+`</p>
              <p style="float:center-right;">Preço:`+val.preco+`</p>
              <div style="clear:both"></div>
                  
             <hr>
               </div>   
     `;   
         }
    })
}

let links = document.getElementsByTagName('a');

for(let i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
     let key = this.getAttribute('key');
     items[key].quantidade++;
     atualizarCarrinho();
     return false;
    })
}

