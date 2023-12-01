function tabuada(){
  let num =  window.document.getElementById('txtn')
  let tab = window.document.getElementById('seltab')
  if(Number.Value.length == 0 ){
    window.alert('por favor digite um numero')


  }else{
   let = (num.Value)
   let c= 1
   tab.innerhtml = ``
   while (c<=10){
    let item = document.createElement('option')
    item.text = `${n} x ${n} = ${n*c}`
    item.value =`tab${c}`
    tab.appendChild(item)
    c++
   }
  }
}