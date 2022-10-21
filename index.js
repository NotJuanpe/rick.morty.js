class App{ 

    obtenerInfoApi({info = "character", page = 1, name = "", status = "", species = "", gender = ""} = {}){

        
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
          };
          
          fetch(`https://rickandmortyapi.com/api/${info}/?page=${page}&name=${name}&status=${status}&species=${species}&gender=${gender}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.info)         
                result.results.forEach(element => {
                    if(info === 'character'){
                        this.characters(element)
                    }else if(info === 'location'){
                        this.locations(element)
                    }else{
                        this.episodes(element)
                    }
                });
            })
            .catch(error => console.log('error', error));
    }
    
    characters(personaje){

        let contenedor = document.createElement('div')
        contenedor.classList.add("card-container", "m-3")

        contenedor.innerHTML= `
        <span class="pro">${personaje.status}</span>
        <img class="round" src=${personaje.image} alt=${personaje.name}  />
        <h3>${personaje.name}</h3>
        <h6>${personaje.location.name}</h6>
        <p>User interface designer and <br/> front-end developer</p>
    
        <div class="skills">
            <ul>
                <li>Specie: ${personaje.species}</li>
                <li>Gender: ${personaje.gender}</li>
            </ul>
        </div>
        `
        
        let padre = document.querySelector('#home')
        padre.appendChild(contenedor)
    }

    locations(lugar){
        let contenedor = document.createElement('div')
        contenedor.classList.add("card-container", "m-3")

        contenedor.innerHTML= `
        <span class="pro">${lugar.id}</span>
   
        <h3>${lugar.name}</h3>
        <h6>${lugar.dimension}</h6>
        <p>User interface designer and <br/> front-end developer</p>
    

        `
        
        let padre = document.querySelector('#locations')
        padre.appendChild(contenedor)
    }

    episodes(episodio){
        console.log(episodio) 
        let contenedor = document.createElement('div')
        contenedor.innerHTML= `<h2>${episodio.name}<h2>`
        
        let padre = document.querySelector('#home')
        padre.appendChild(contenedor)
    }
    
    paginacion(){

        let page = 1

        $('.prev').on('click',e => {
            console.log('po')
            let padre = document.querySelector('#home')
            padre.innerHTML = ""
            page = page <= 1 ? 1 : page - 1
            this.obtenerInfoApi({info : 'character',page : page})
            
        })

        $('.next').on('click',e => {
            console.log('po')
            let padre = document.querySelector('#home')
            padre.innerHTML = ""
            page = page + 1
            this.obtenerInfoApi({info : 'character',page : page})
        })
    }

    filtro(){
        $('.dead').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({status:'dead'})
        })
        $('.alive').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({status:'alive'})  
        })
        $('.unknown').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({status:'unknown'})  
        })
        $('.human').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({species:'human'})  
        })
        $('.alien').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({species:'alien'})  
        })
        $('.humanoid').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({species:'humanoid'})  
        })
        $('.poopybutthole').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({species:'poopybutthole'})  
        })
        $('.mythological').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({species:'mythological'})  
        })
        $('.unknown').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({species:'unknown'})  
        })
        $('.animal').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({species:'animal'})  
        })
        $('.disease').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({species:'disease'})  
        })
        $('.robot').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({species:'robot'})  
        })
        $('.cronenberg').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({species:'cronenberg'})  
        })
        $('.female').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({gender:'female'})  
        })
        $('.male').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({gender:'male'})  
        })
        $('.genderless').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({gender:'genderless'})  
        })
        $('.unknown').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({gender:'unknown'})  
        })
        $('.clear').on('click',e =>{
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({gender:'',species:'',status:''})  
        })
    }

    buscar(){
        $('.search').on('click',e =>{
            let value = $('.search_input').val()
            console.log(value)
            document.querySelector('#home').innerHTML =''
            this.obtenerInfoApi({name:value})
        })
    }


}

const app = new App()

app.obtenerInfoApi({info:'character'})
app.obtenerInfoApi({info:'location'})
app.paginacion()
app.filtro()
app.buscar()
