# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: (https://github.com/MuminaA/advice-generator)
- Live Site URL: (https://muminaa.github.io/advice-generator/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

For this project it was less about learning and more on practicing what i have learned. I was able to practice my knowledge of useState and api intigration.

```js
const [advice, setAdvice] = useState("Here's your advice");
const [id, setId] = useState(null);

  function handleClick() {
    setAdvice("Loading...");

    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        /* update state */
        setAdvice(response.data.slip.advice);
        setId(response.data.slip.id);
      })
  }
```

### Continued development

I want to continue developing my knowledge about intigrating different apis and utalizing them in the front-end.

## Author

- Website - [Mumina Abdi](https://www.your-site.com)
- Frontend Mentor - [@MuminaA](https://www.frontendmentor.io/profile/MuminaA)
- GitHub - [MuminaA](https://github.com/MuminaA)
