const perguntas = [
    {
      pergunta: "Qual foi o primeiro single lançado pelos Beatles?",
      respostas: [
        "Hey Jude",
        "Love Me Do",
        "Twist and Shout"
      ],
      correta: 1
    },
    {
      pergunta: "Quem foi o principal compositor das músicas dos Beatles?",
      respostas: [
        "Ringo Starr",
        "George Harrison",
        "John Lennon e Paul McCartney"
      ],
      correta: 2
    },
    {
      pergunta: "Qual álbum dos Beatles foi lançado em 1967 e é famoso por sua capa psicodélica?",
      respostas: [
        "Abbey Road",
        "Rubber Soul",
        "Sgt. Pepper's Lonely Hearts Club Band"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a música mais vendida dos Beatles?",
      respostas: [
        "Hey Jude",
        "Let It Be",
        "I Want to Hold Your Hand"
      ],
      correta: 2
    },
    {
      pergunta: "Qual membro dos Beatles foi assassinado em 1980?",
      respostas: [
        "Ringo Starr",
        "John Lennon",
        "Paul McCartney"
      ],
      correta: 1
    },
    {
      pergunta: "Qual foi o último álbum de estúdio lançado pelos Beatles?",
      respostas: [
        "Let It Be",
        "Abbey Road",
        "Revolver"
      ],
      correta: 0
    },
    {
      pergunta: "Qual era o nome original dos Beatles?",
      respostas: [
        "The Quarrymen",
        "The Silver Beetles",
        "The Quarryboys"
      ],
      correta: 1
    },
    {
      pergunta: "Qual integrante dos Beatles foi o último a entrar na banda?",
      respostas: [
        "Ringo Starr",
        "John Lennon",
        "George Harrison"
      ],
      correta: 0
    },
    {
      pergunta: "Quantos membros originais dos Beatles ainda estão vivos?",
      respostas: [
        "2",
        "1",
        "0"
      ],
      correta: 0
    },
    {
      pergunta: "Qual foi o último álbum gravado pelos Beatles, mas lançado antes de 'Let It Be'?",
      respostas: [
        "Help!",
        "The White Album",
        "Abbey Road"
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    //Remove a Resposta A, escrita no html
    quizItem.querySelector('dl dt').remove()
  
    //Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  