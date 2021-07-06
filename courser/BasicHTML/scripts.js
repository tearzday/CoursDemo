const DATA = [    //сюда будет все сохраняться // в {} задаем массив в которому будут лежать объекты(1 объект-1 вопрос)
    {
        //Первый вопрос
        //Первый вопрос
        //Первый вопрос
        question: "Укажите правильное объявление языка:", //1 вопрос , а ответы answers массив из нескольких ответов
        answers: [

            {
                id: '1' , //уникальный для всех ответов
                value: '&lt;head lang=&quot;&quot;&gt;', //ответ
                correct: false, //Ключ отвечающий за то , верный ответ или нет
            },

            {
                id: '2' , //уникальный для всех ответов
                value: '&lt;body lang=&quot;&quot;&gt;', //ответ
                correct: false, //Ключ отвечающий за то , верный ответ или нет
            },

            {
                id: '3' , //уникальный для всех ответов
                value: '&lt;html&gt; &lt;lang&gt;=&quot;&quot;&lt;/html&gt;', //ответ
                correct: false, //Ключ отвечающий за то , верный ответ или нет
            },

            {
                id: '4' , //уникальный для всех ответов
                value: '&lt;html lang=&quot;&quot;&gt;', //ответ
                correct: true, //Ключ отвечающий за то , верный ответ или нет
            },

            {
                id: '5' , //уникальный для всех ответов
                value: '&lt;!DOCTYPE lang=&quot;&quot;&gt;', //ответ
                correct: false, //Ключ отвечающий за то , верный ответ или нет
            }
        ]
    },
    {
        //Второй вопрос
        //Второй вопрос
        //Второй вопрос
    question: 'Тег &lt;header&gt;: ', //пока 1 вопрос , а ответы answers массив из нескольких ответов
        answers: [

            {
                id: '6' , //уникальный для всех ответов
                value: 'Является шапкой сайта и располагается в body', //ответ
                correct: true, //Ключ отвечающий за то , верный ответ или нет
            },

            {
                id: '7' , //уникальный для всех ответов
                value: 'Является шапкой сайта и располагается в head', //ответ
                correct: false, //Ключ отвечающий за то , верный ответ или нет
            },

            {
                id: '8' , //уникальный для всех ответов
                value: 'Хранит элементы , цель которых помочь - помочь браузеру в работе с данными', //ответ
                correct: false, //Ключ отвечающий за то , верный ответ или нет
            }
        ]
    },

    {
        //Третий вопрос
        //Третий вопрос
        //Третий вопрос
    question: 'Тег &lt;div&gt;: ', 
        answers: [

            {
                id: '9' , 
                value: 'Строчный тег , используемый для выделения текста курсивом', 
                correct: false,
            },

            {
                id: '10' ,
                value: 'Блочный тег , использующийся для крупных смысловых разделов', 
                correct: false, 
            },

            {
                id: '11' ,
                value: 'Тег div обозначает самостоятельный фрагмент информации', 
                correct: false, 
            },

            {
                id: '12' ,
                value: 'Тег div используется с целью изменения вида содержимого и является блочным', 
                correct: true, 
            }
        ]
    },

    {
        //Четвертый вопрос
    question: 'Для чего нужен атрибут charset тега &lt;meta&gt;?', 
        answers: [

            {
                id: '13' , 
                value: 'Для подачи инструкции по управлению маштабами', 
                correct: false,
            },

            {
                id: '14' ,
                value: 'Для указания кодировки страницы', 
                correct: true, 
            },

            {
                id: '15' ,
                value: 'Для подключения файла', 
                correct: false, 
            },

            {
                id: '16' ,
                value: 'Для указания пути к файлу', 
                correct: false, 
            }
        ]
    },

    {
        //Пятый вопрос
    question: 'Для чего нужен тег &lt;link&gt;?', 
        answers: [

            {
                id: '17' , 
                value: 'Для указания ссылки на сайт', 
                correct: false,
            },

            {
                id: '18' ,
                value: 'Для навигации', 
                correct: false, 
            },

            {
                id: '19' ,
                value: 'Для подключения шрифтов , файлов и т.п', 
                correct: true, 
            },

            {
                id: '20' ,
                value: 'Для выделения текста курсивом', 
                correct: false, 
            }
        ]
    },
    {
        //Шестой вопрос
    question: 'Какой тег предназначен для разметки абзацев?', 
        answers: [

            {
                id: '21' , 
                value: '&lt;p&gt;', 
                correct: true,
            },

            {
                id: '22' ,
                value: '&lt;i&gt;', 
                correct: false, 
            },

            {
                id: '23' ,
                value: '&lt;a&gt;', 
                correct: false, 
            },

            {
                id: '24' ,
                value: '&lt;b&gt;', 
                correct: false, 
            }
        ]
    },
    {
        //Седьмой вопрос
    question: 'Тег &lt;del&gt; используется для:', 
        answers: [

            {
                id: '25' , 
                value: 'Задания курсива тексту', 
                correct: false,
            },

            {
                id: '26' ,
                value: 'Подчеркивания текста', 
                correct: false, 
            },

            {
                id: '27' ,
                value: 'Зачеркивания текста', 
                correct: true, 
            }
        ]
    },
    {
        //Восьмой вопрос
    question: 'Какие тег используются для создани списка описания:', 
        answers: [

            {
                id: '28' , 
                value: '&lt;ol&gt; &lt;li&gt; &lt;lt&gt;', 
                correct: false,
            },

            {
                id: '29' ,
                value: '&lt;dl&gt; &lt;dt&gt; &lt;dr&gt;', 
                correct: false, 
            },

            {
                id: '30' ,
                value: '&lt;dl&gt; &lt;dt&gt; &lt;dd&gt;', 
                correct: true, 
            }
        ]
    },
    {
        //Девятый вопрос
    question: 'При помощи какого атрибута задается адрес ссылки?', 
        answers: [

            {
                id: '31' , 
                value: '&lt;href&gt;', 
                correct: true,
            },

            {
                id: '32' ,
                value: '&lt;alt&gt;', 
                correct: false, 
            },

            {
                id: '33' ,
                value: '&lt;type&gt;', 
                correct: false, 
            },

            {
                id: '34' ,
                value: '&lt;class&gt;', 
                correct: false, 
            }
        ]
    },
    {
        //Десятый вопрос
    question: 'Укажите правильный вариант:', 
        answers: [

            {
                id: '35' , 
                value: '&lt;img scr=&quot;&quot; &gt;', 
                correct: false,
            },

            {
                id: '36' ,
                value: '&lt;img src=&quot;&quot; &gt;', 
                correct: true, 
            },

            {
                id: '37' ,
                value: '&lt;img lang=&quot;&quot; &gt;', 
                correct: false, 
            },

            {
                id: '38' ,
                value: '&lt;a alt=&quot;&quot; &gt;', 
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
            //реагирует на кнопки далее либо же с начала.
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