/*const grandparent=document.getElementById('grandparent');
const parent=document.getElementById('parent');
const child=document.getElementById('child');

// event bubbling and capture
child.addEventListener('click',()=>{
    console.log("child clicked");
},true)
parent.addEventListener('click',()=>{
    console.log("parent clicked");
},true)
grandparent.addEventListener('click',()=>{
    console.log("grandparent clicked");
},true)*/



const root=document.getElementById('root');
root.addEventListener('click',(event)=>{
    if(event.target.tagName==='BUTTON')
    document.body.style.backgroundColor=event.target.id;
    // console.log(event.target);
})