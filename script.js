

const element1 = document.querySelector("#img1")
const element2 = document.querySelector("#img2")
const element3 = document.querySelector("#img3")
const element4 = document.querySelector("#img4")

function typeWriter(elementId, text, delay = 100) {
    let i = 0;
    
    const targetElement = document.getElementById(elementId)

    function type() {
        if (i < text.length) {
            targetElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }

    }
    
    type();
}

function untype(elementId, text, delay = 100) {
    let i = text.length;

    const targetElement = document.getElementById(elementId)

    function backspace() {
        if (i >= 0) {
            targetElement.textContent = text.substring(0, i)
            i--;
            setTimeout(backspace, delay);
        }
    }
    
    backspace();
}


let element1typed = false

element1.addEventListener('click', event => {

    if (!element1typed)  {
        typeWriter("text1", "wisdoms_path_is_a_narrow_one·");  
        element1typed = true;
    }
    else {
        untype("text1", "wisdoms_path_is_a_narrow_one·");
        element1typed = false;
    }
},)


let element2typed = false

element2.addEventListener('click', event => {

    if (!element2typed)  {
        typeWriter("text2", "nothing_worth_having_comes_easily·");
        element2typed = true;
    }
    else {
        untype("text2", "nothing_worth_having_comes_easily·");
        element2typed = false;
    }
})


let element3typed = false

element3.addEventListener('click', event => {

    if (!element3typed)  {
        typeWriter("text3", "knowledge_blooms_in_abundance·you_are_never_unwelcome·");
        element3typed = true;
    }
    else {
        untype("text3", "knowledge_blooms_in_abundance·you_are_never_unwelcome·");
        element3typed = false;
    }
},)


let element4typed = false

element4.addEventListener('click', event => {

    if (!element4typed)  {
        typeWriter("text4", "some_things_are_made·other_things_are·");
        element4typed = true;
    }
    else {
        untype("text4", "some_things_are_made·other_things_are·");
        element4typed = false;
    }
},)





