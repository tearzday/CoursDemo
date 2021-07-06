const DATA = [    //сюда будет все сохраняться // в {} задаем массив в которому будут лежать объекты(1 объект-1 вопрос)
    {
        //Первый вопрос
        //Первый вопрос
        //Первый вопрос
        question: "Выберите правильный вариант:", //пока 1 вопрос , а ответы answers массив из нескольких ответов
        answers: [

            {
                id: '1' , //уникальный для всех ответов
                value: '.head { color-red; }', //ответ
                correct: false, //Ключ отвечающий за то , верный ответ или нет
            },

            {
                id: '2' , //уникальный для всех ответов
                value: 'p { text-align:left }', //ответ
                correct: false, //Ключ отвечающий за то , верный ответ или нет
            },

            {
                id: '3' , //уникальный для всех ответов
                value: 'header { backfon: red; }', //ответ
                correct: false, //Ключ отвечающий за то , верный ответ или нет
            },



            {
                id: '4' , //уникальный для всех ответов
                value: 'div { width:100%; }', //ответ
                correct: true, //Ключ отвечающий за то , верный ответ или нет
            }
        ]
    },
    {
        //Второй вопрос
        //Второй вопрос
        //Второй вопрос
    question: 'Как задается стиль по id?', //пока 1 вопрос , а ответы answers массив из нескольких ответов
        answers: [

            {
                id: '5' , //уникальный для всех ответов
                value: '#id', //ответ
                correct: true, //Ключ отвечающий за то , верный ответ или нет
            },

            {
                id: '6' , //уникальный для всех ответов
                value: '.id', //ответ
                correct: false, //Ключ отвечающий за то , верный ответ или нет
            },

            {
                id: '7' , //уникальный для всех ответов
                value: 'id', //ответ
                correct: false, //Ключ отвечающий за то , верный ответ или нет
            }
        ]
    },

    {
        //Третий вопрос
        //Третий вопрос
        //Третий вопрос
    question: 'Если к одному блоку применяются два разных стиля и их селекторы имеют одинаковую специфичность , то какой стиль спецефичнее?', 
        answers: [

            {
                id: '8' , 
                value: 'Тот , который в коде задается первее', 
                correct: false,
            },

            {
                id: '9' ,
                value: 'Тот , который будет в коде ниже', 
                correct: true, 
            }
        ]
    },

    {
        //Четвертый вопрос
    question: 'Какое значение может иметь свойство font-size?', 
        answers: [

            {
                id: '10' , 
                value: 'red', 
                correct: false,
            },

            {
                id: '11' ,
                value: 'line', 
                correct: false, 
            },

            {
                id: '12' ,
                value: 'px', 
                correct: true, 
            },

            {
                id: '13' ,
                value: 'italic', 
                correct: false, 
            }
        ]
    },

    {
        //Пятый вопрос
    question: 'Какой способ задаст тексту курсив?', 
        answers: [

            {
                id: '14' , 
                value: 'font-weight:italic;', 
                correct: false,
            },

            {
                id: '15' ,
                value: 'font-style:italic;', 
                correct: true, 
            },

            {
                id: '16' ,
                value: 'font-family: bold;', 
                correct: false, 
            },


            {
                id: '17' ,
                value: 'font-style:oblique;', 
                correct: false, 
            }
        ]
    },
    {
        //Шестой вопрос
    question: 'Cвойство text-align преднозначено для...', 
        answers: [


            {
                id: '18' ,
                value: 'Выравнивания текста по горизонтали', 
                correct: false, 
            },

            {
                id: '19' ,
                value: 'Выравнивания всех букв по размеру', 
                correct: false, 
            },

            {
                id: '20' ,
                value: 'Того , чтобы каждое слово было с заглавной буквы', 
                correct: false, 
            },

            {
                id: '21' , 
                value: 'Выравнивания текста по вертикали', 
                correct: true,
            }
        ]
    },
    {
        //Седьмой вопрос
    question: 'Какое свойство увеличивает расстояние между словами?', 
        answers: [

            {
                id: '22' , 
                value: 'letter-spacing', 
                correct: false,
            },

            {
                id: '23' ,
                value: 'worl-spacing', 
                correct: false, 
            },

            {
                id: '24' ,
                value: 'word-spacing', 
                correct: true, 
            }
        ]
    },
    {
        //Восьмой вопрос
    question: 'Что будет , если свойству display указать значение none?', 
        answers: [

            {
                id: '25' , 
                value: 'Элемент станет блочным', 
                correct: false,
            },

            {
                id: '26' ,
                value: 'Элемент станет невидемым пользователю', 
                correct: true, 
            },

            {
                id: '27' ,
                value: 'Элемент станет строчным', 
                correct: false, 
            }

        ]
    },
    {
        //Девятый вопрос
    question: 'За что отвечает padding?', 
        answers: [

            {
                id: '28' , 
                value: 'Внутренний отступ', 
                correct: true,
            },

            {
                id: '29' ,
                value: 'Внешний отступ', 
                correct: false, 
            }
        ]
    },

];













//тут мы храним то , что пользователь отвечает
let localResults = {};

const test = document.getElementById('test');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');
const btnTema = document.getElementById('btn-tema');

const renderQuestions = (index) => {//отвечает за рендер вопросов. По index из наших данных берем определенные эл-ты
    //функция рендерит ответы относящиеся к определенному вопросу
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;
    
    const renderAnswers = () =>DATA[index].answers
        .map((answer) =>  `
            <li>
                <label>
                    <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                     ${answer.value}
                </label>
            </li>
        `)
        .join('');

    //тут вставляем наши вопросы
    questions.innerHTML = `
        <div class="test-questions-item">
            <div class="test-questions-item_question">${DATA[index].question}</div>
            <ul class="test-questions-item_answers">${renderAnswers()}</ul>
        </div> 
    `;
}; 

const renderResults = () => {//отвечает за рендер ответов
    let content ='';

    const getClassname = (answer, questionIndex) => {
        let classname='';

        if(!answer.correct && answer.id === localResults[questionIndex]){//если ответ не правильный
            classname = 'answer-invalid';
        }
        else if (answer.correct && answer.id === localResults[questionIndex]){//eсли ответ правильный
            classname = 'answer-valid';
        }

        return classname;
    }


    const getAnswers = (questionIndex) =>  DATA[questionIndex].answers
        .map((answer) => `<li class=${getClassname(answer, questionIndex)}>${answer.value}</li>`)
        .join('');

    DATA.forEach((question, index) => {
        content +=`
        <div class="test-results-item"><!--Блок с результатами-->
            <div class="test-results-item_question">${question.question}</div><!--Блок с вопросом-->
            <ul class="test-results-item_answers">${getAnswers(index)}</ul> <!--Блок с ответом-->
        </div>
        `;
    });



    results.innerHTML = content;
}; 

const renderIndicator = (currentStep) => {//отвечает за рендер индикаторов
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
}; 

test.addEventListener('change', (event) => {//слушатели , которые реагируют на определенные события
            //логика , когда отмечается какой-то вариант ответа
    if (event.target.classList.contains('answer-input')) {//проверка содержит ли определенный класс (кнопка далее) кнопка , которую мы нажимаем
        console.log('input');
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;
    }  
});

test.addEventListener('click', (event) => {//слушатели , которые реагируют на определенные события
            //реагирует на кнопки далее либо же с начала.Используем делегирование
    if (event.target.classList.contains('btn-next')) {//проверка содержит ли определенный класс (кнопка далее) кнопка , которую мы нажимаем
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
        

        if(DATA.length === nextQuestionIndex){//переход к результатам //тут у нас появление кнопки в самом конце
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('results--visible');
            btnNext.classList.add('btn-next--hidden');
            btnRestart.classList.add('btn-restart--visible');

            renderResults();
        }
        else{ //переход к след.вопросу
            renderQuestions(nextQuestionIndex);//рендер вопроса
        }


        btnNext.disabled = true;//для того , чтобы кнопка на каждом вопросе была неактивна
    }  

    if (event.target.classList.contains('btn-restart')) {//проверка содержит ли определенный класс (кнопка с начала) кнопка , которую мы нажимаем
        localResults = {};
        results.innerHTML = '';

        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('results--visible');
        btnNext.classList.remove('btn-next--hidden');
        btnRestart.classList.remove('btn-restart--visible');

        renderQuestions(0);
    }  
});


renderQuestions(0);