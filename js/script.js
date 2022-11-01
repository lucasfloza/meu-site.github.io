//Letreiro
function typeWrite(elemento){
    const textoArray = elemento.textContent.split("");
    elemento.textContent = "";

      textoArray.forEach((letra,i) =>{

        setTimeout(()=>elemento.textContent += letra,100*i)

      })

  }
  const titulo = document.querySelector("#title-main");
  typeWrite(titulo)


//Scroll

const itens = document.querySelectorAll("[data-anime]");

const animeScroll = () =>{
    const windowTop = window.pageYOffset + window.innerHeight * 0.9;

    itens.forEach(  
        (item) => {
        if(windowTop > item.offsetTop){
            item.classList.add("animate");
        }else{
            item.classList.remove("animate");

        }
    });
};

animeScroll();

window.addEventListener("scroll",()=>{animeScroll();})
   
