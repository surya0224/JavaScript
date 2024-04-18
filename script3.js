

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal')
const btnOpenModal=document.querySelectorAll('.show-modal')




for (let i=0;i<btnOpenModal.length;i++){
    console.log(btnOpenModal[i])
    btnOpenModal[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}


function closeModal(e){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnCloseModal.addEventListener('click',closeModal)


document.addEventListener('keydown',function(e){
    if (e.key==="Escape"){
        if (!modal.classList.contains('hidden')){closeModal()}
    }
})
