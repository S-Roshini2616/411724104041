const api="http://localhost:5000/notes";


loadNotes();


// Load Notes

function loadNotes(){

fetch(api)

.then(res=>res.json())

.then(data=>{

let output="";

data.forEach(note=>{

output+=`

<div class="note">

<h3>${note.title}</h3>

<p>${note.content}</p>

<button onclick="editNote(${note.id})">
Edit
</button>

<button onclick="deleteNote(${note.id})">
Delete
</button>

</div>

`;

});

document.getElementById("notes").innerHTML=output;

});

}



// Save or Update

function saveNote(){

const id=document.getElementById("noteId").value;

const title=document.getElementById("title").value;

const content=document.getElementById("content").value;

const note={title,content};

if(id==""){

fetch(api,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(note)
})
.then(()=>{
clearForm();
loadNotes();
});

}
else{

fetch(api+"/"+id,{
method:"PUT",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(note)
})
.then(()=>{
clearForm();
loadNotes();
});

}

}



// Edit

function editNote(id){

fetch(api+"/"+id)

.then(res=>res.json())

.then(note=>{

document.getElementById("noteId").value=note.id;

document.getElementById("title").value=note.title;

document.getElementById("content").value=note.content;

});

}



// Delete

function deleteNote(id){

fetch(api+"/"+id,{
method:"DELETE"
})
.then(()=>{

loadNotes();

});

}



// Clear Form

function clearForm(){

document.getElementById("noteId").value="";

document.getElementById("title").value="";

document.getElementById("content").value="";

}