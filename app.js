const app = new Vue({
    el: "#app", 
    data: {
        fase: 1, 
        numberOfWords: 1, 
        currentWord: '', 
        counter: 0, 
        words: [],
        answers: [], 
        correctAnswer: false
    }, 
    methods: {
        updateFase(){
            this.fase++;
            this.otherWord();
        }, 
        getWord(){
            const index = Math.floor(Math.random() * ((dictionary.length - 0) + 0));
            return dictionary[index]; 
        },
        saveWord(){
            this.words.push(this.currentWord); 
            if(this.words.length === (this.numberOfWords * 1)){
                this.fase++;
            }else{
                this.currentWord = this.getWord();
            }
        }, 
        otherWord(){
            this.currentWord = this.getWord();
        },
        compare(){
            const div3 = document.querySelector('#divFase3');
            const inputs = [...div3.querySelectorAll('input')]; 
            for (let index = 0; index < (this.numberOfWords * 1); index++) {
                const originalWord = this.words[index].toLowerCase().trim();                                                                             
                const myWord = this.answers[index].toLowerCase().trim() ?? ''; 
                const result = originalWord == myWord || myWord == ''; 
                const styleClass = result ? 'correct' : 'incorrect'; 
                inputs[index].classList.add(styleClass); 
            }
            this.correctAnswer = true; 
        }
} });  
