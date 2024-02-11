import selectPropertyAction from "./redux.js";

// create slides

export const createTest = (start,end)=>{
    const elementList = [];

    for (let index = start ; index <= end ; index++) {
        
        elementList.push(index)
    }

   return  elementList
}

// add to local storage

export const addToLocalStorage = (type , elements , btn)=>{

    btn.addEventListener('click' , e =>{
     
        elements.forEach(element => {

          if (element.classList.contains('active')) {
            
              const value = element.getAttribute('data-value');
      
              const info = selectPropertyAction({
                type:type,
                payload:+value || value
              })
      
              localStorage.setItem('test', JSON.stringify(info))
          }
        })

      })
}