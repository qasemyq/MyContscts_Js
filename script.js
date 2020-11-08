// grab input 
let inp = document.getElementById('filter-Input');


 function filterNames(){
     // get value of input and make it upperCase 
     let filterValue = document.getElementById('filter-Input').value.toUpperCase();
     // get names ul 
     let ul = document.getElementById('names');
     // get lis from ul with querySelectorAll, with querySelectorAll we can get anything based on calss name 
    let li = ul.querySelectorAll('li.c-item')
    // loop throw c-item lis 
    for(let i = 0;i < li.length; i++){
        // li[i] current iteration of li, [0] current link of a ro mikham   
        let a = li[i].getElementsByTagName('a')[0]
        // if matching
        // a.innerHTML harchizi ke tuye tage a bashe ro grab mikone yani un esmayi ke behesh dadam ro grab mikone
        // be indexOf migam filterValue ro bebin va harchi bozorgtar bud az -1 yani age chizi match shod   
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            // 
            li[i].style.display = '';
        } else {
            //
            li[i].style.display = 'none';
        }
    }
 }
