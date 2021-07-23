
const numberList =  [1,2,3,4,5,6,7,8,9];
const colorCodeList = ['#000000','#2B8EAD','#333333','#696969','#EFEFEF','#72C3DC','#6F98A8','#BFBFBF','#2F454E'];
function generateRandomCard(){
    let numbers = JSON.parse(JSON.stringify(numberList));
    let randomList = [];
    let index = numbers.length;
    while(index--){
        const randomNumber = Math.floor(Math.random() * (index+1));
        randomList.push(numbers[randomNumber]);
        numbers.splice(randomNumber,1);
    }
    return randomList
}
function Shuffle(){
    createHtml(generateRandomCard());
}
function Sort(){
    createHtml(numberList);
}
function createHtml(numberList){
    let cardContent = document.querySelector('.card-content-wrapper');
    cardContent.innerHTML = '';
    numberList.forEach(num=>{        
        let div = document.createElement('div');
        div.className = 'card'
        if(window.innerWidth >375){
            div.setAttribute('style', 'background-color:'+colorCodeList[num-1]);
        } else{
            div.setAttribute('style', 'border-left: 5px solid '+colorCodeList[num-1]);
        }
        div.textContent = num;
        cardContent.appendChild(div);
    })
}