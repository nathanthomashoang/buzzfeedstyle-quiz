const quizCard = document.querySelector('#quizCard')
const resultCard = document.querySelector('#resultCard')
const titleCard = document.querySelector('#titleCard')
const startBtn = document.querySelector('#startBtn')

const quizImgs = document.querySelectorAll('#quizForm img');
const quizForm = document.querySelector('#quizForm');
const quizQuestion = document.querySelector('#questionDisplay');
const quizProgress = document.querySelector('.progress')
const counterHeader = document.querySelector('#counterHeader');

const quizContent = [
    {
        q: 'Choose something to have for breakfast...',
        answers: [
            {
                id: 'acaibowl',
                img: 'images/questions/q1_1.jpeg'
            },
            {
                id: 'bagel',
                img: 'images/questions/q1_2.jpeg'
            },
            {
                id: 'pancakes',
                img: 'images/questions/q1_3.jpeg'
            },
            {
                id: 'avocadotoast',
                img: 'images/questions/q1_4.jpeg'
            }
        ],
        category: 'breakfast'      
    },
    {
        q: 'Choose a beverage to go with your breakfast...',
        answers: [
            {
                id: 'coffee',
                img: 'images/questions/q2_1.jpeg'
            },
            {
                id: 'tea',
                img: 'images/questions/q2_2.jpeg'
            },
            {
                id: 'juice',
                img: 'images/questions/q2_3.jpeg'
            },
            {
                id: 'hotchocolate',
                img: 'images/questions/q2_4.jpeg'
            }
        ],
        category: 'breakfastbev'      
    },
    {
        q: 'Choose something to have for lunch...',
        answers: [
            {
                id: 'salad',
                img: 'images/questions/q3_1.jpeg'
            },
            {
                id: 'sandwich',
                img: 'images/questions/q3_2.jpeg'
            },
            {
                id: 'pasta',
                img: 'images/questions/q3_3.jpeg'
            },
            {
                id: 'soup',
                img: 'images/questions/q3_4.jpeg'
            }
        ],
        category: 'lunch'      
    },
    {
        q: 'Choose a midday snack...',
        answers: [
            {
                id: 'popcorn',
                img: 'images/questions/q4_1.jpeg'
            },
            {
                id: 'chocolate',
                img: 'images/questions/q4_2.jpeg'
            },
            {
                id: 'nuts',
                img: 'images/questions/q4_3.jpeg'
            },
            {
                id: 'fruit',
                img: 'images/questions/q4_4.jpeg'
            }
        ],
        category: 'snack'      
    },
    {
        q: 'Choose something to have for dinner...',
        answers: [
            {
                id: 'sushi',
                img: 'images/questions/q5_1.jpeg'
            },
            {
                id: 'burger',
                img: 'images/questions/q5_2.jpeg'
            },
            {
                id: 'steak',
                img: 'images/questions/q5_3.jpeg'
            },
            {
                id: 'tacos',
                img: 'images/questions/q5_4.jpeg'
            }
        ],
        category: 'dinner'      
    },
    {
        q: 'Choose a beverage to have with your dinner...',
        answers: [
            {
                id: 'coke',
                img: 'images/questions/q6_1.jpeg'
            },
            {
                id: 'wine',
                img: 'images/questions/q6_2.jpeg'
            },
            {
                id: 'juice',
                img: 'images/questions/q6_3.jpeg'
            },
            {
                id: 'water',
                img: 'images/questions/q6_4.jpeg'
            }
        ],
        category: 'dinnerbev'      
    },
    {
        q: 'Choose a dessert to top off your day...',
        answers: [
            {
                id: 'icecream',
                img: 'images/questions/q7_1.jpeg'
            },
            {
                id: 'cookies',
                img: 'images/questions/q7_2.jpeg'
            },
            {
                id: 'cupcakes',
                img: 'images/questions/q7_3.jpeg'
            },
            {
                id: 'donuts',
                img: 'images/questions/q7_4.jpeg'
            }
        ],
        category: 'dessert'      
    }
]

const quizResult = (score) => {
    if (score <= 11) {
        return {
            img: 'images/results/japan.jpeg',
            name: 'Japan',
            description: 'You should visit Japan! Taste authentic sushi, go shopping in Shibuya, visit some of the many temples, take a ride on the bullet train (try to catch a glimpse of Mt. Fuji!), and have a special, cuddly encounter at an animal cafe. *Don\'t forget to sample treats in the unique vending machines!'
        }
    }
    else if (11 < score && score <= 16) {
        return {
            img: 'images/results/france.jpeg',
            name: 'France',
            description: 'You should visit France! Explore the many museums, spend a night in a french chateau, enjoy macarons in a Paris cafe, and take in the sights of the Eiffel Tower.  *Buy a beret for the perfect souvenir of your French holiday!'
        }
    }
    else if (16 < score && score <= 21) {
        return {
            img: 'images/results/hawaii.jpeg',
            name: 'Hawaii',
            description: 'You should visit Hawaii! Soak up the sun in the many, beautiful beaches, encounter manta rays while scuba diving along the island, hike up a volcano, and snorkel with sea turtles. *Take a tour of the Dole Plantation and taste their delicious Dole Whip!'
        }
    }
    else if (score > 21) {
        return {
            img: 'images/results/disneyworld.jpeg',
            name: 'Walt Disney World',
            description: 'You should visit Disneyworld! Experience feeling like a kid again in the happiest place on Earth! Get your thrill on while riding your favorite rides including Space Mountain, Expedition Everest, and Rock \'n\' Rollercoaster. Sample your way through unique treats from around the world in Disney\'s Epcot World Pavilion. *Buy a pair of Mickey ears to match all of your outfit!'
        }
    }
}

const renderQuestion = (index => {
    const content = quizContent[index];
    quizQuestion.innerHTML = content.q;
    for (i = 0; i < 4; i++){
        quizImgs[i].src = content.answers[i].img;
        // render images
        quizForm[i].labels[0].htmlFor = content.answers[i].id;
        quizForm[i].id = content.answers[i].id;
        quizForm[i].name = content.category;
        // update form information
    };
})

const displayResult = (result) => {
    const resultImg = document.querySelector('#resultImg');
    const resultName = document.querySelector('#resultName');
    const resultDescription = document.querySelector('#resultDescription');
    resultImg.src = result.img;
    resultName.innerHTML = result.name;
    resultDescription.innerHTML = result.description;
}

const quizStart = (() => {
    let questionCounter = 0;
    let scoreCounter = 0;
    const quizLength = quizContent.length;
    const progressIncrement = 100/quizLength;
    // calculate how much progress bar should increase based on quiz length
    renderQuestion(0);
    counterHeader.innerHTML = `Question 1 of ${quizLength}`;
    for (input of quizForm) {
        input.addEventListener('input', (e) => {
            const answer = document.querySelector('input:checked');
            const selectedImg = document.querySelector('input:checked + label img');
            selectedImg.classList.toggle('selected');
            questionCounter += 1;
            //track question #
            scoreCounter += parseInt(answer.value);
            // add to score total
            for (input of quizForm) {
                input.setAttribute('disabled','');
            }
            // disable the rest of inputs to prevent multiple clicks
            setTimeout(function() {
                if (questionCounter < quizLength) {
                    renderQuestion(questionCounter);
                    // render next question
                    counterHeader.innerHTML = `Question ${questionCounter + 1} of ${quizLength}`;
                    quizProgress.value += progressIncrement;
                    // update quiz progress on bar and header
                    answer.checked = false;
                    // uncheck input
                    selectedImg.classList.toggle('selected');
                    // remove selected img
                    for (input of quizForm) {
                        input.removeAttribute('disabled');
                    }
                    // remove disabled attribute from inputs
                } else {
                    const result = quizResult(scoreCounter);    
                    displayResult(result);
                    quizCard.classList.toggle('is-hidden');
                    resultCard.classList.toggle('is-hidden');
                }
            }, 700)
        });
    }
})

startBtn.addEventListener('click', (e) => {
    titleCard.classList.toggle('is-hidden')
    quizStart();
    quizCard.classList.toggle('is-hidden')
})
