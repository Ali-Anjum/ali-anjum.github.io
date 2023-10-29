
function enable_js (){
    document.getElementById('body').classList.remove('d-none')
}
enable_js ()

var func1 = (e) => {
    var innerChildren = e.target.children;
    for (var i = 0; i < innerChildren.length; i++) {
        innerChildren[i].classList.add('animate__animated', 'animate__flipInX', 'animate__slower');
    }
}

var headerLinks = document.querySelectorAll('.texts-2');

function header_link(event) {
    headerLinks.forEach(link => {
        link.classList.remove('selected');
    });
    event.target.classList.add('selected');
}

var case_studies_select=document.querySelectorAll('.type-web-item')
 function case_studies_link(event){
        case_studies_select.forEach(link => {
            link.classList.remove('bg-white' ,'drop-1','selected','head4');
        });
        event.target.classList.add('bg-white' ,'drop-1','selected','head4');
    }
    
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    function showinfo(selector) {
        var innerChildren = document.getElementById(selector);
        
        if(innerChildren.classList !='1'){
            innerChildren.classList.add('1')
        // Select elements using the provided selector
        
        // Loop through selected elements and remove the 'd-none' class
     for(let i=0; i<innerChildren.childElementCount;i++){
        
            innerChildren.children[i].classList.remove('d-none')
            
            
     } 
     
     
    }     else{
        innerChildren.classList.remove('1')
        for(let i=1; i<innerChildren.childElementCount;i++){
        
            innerChildren.children[i].classList.add('d-none')
            
            
     } 

    }


    }
    