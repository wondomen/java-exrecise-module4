/* here is step 1 to step 3
fetch('https://api.tvmaze.com/search/shows?q=girls').
    then(response => response.json()).
    then(data => showinfo(data)).
      catch(error => console.log(error));
const target = document.querySelector('#pictures');
const body = document.querySelector('body');
const section = document.createElement('section');
body.appendChild(section);
const article = document.createElement('article');
section.appendChild(article);

function showinfo(data) {
  for (const danda in data) {
    console.log(data[danda]);
    const h1 = document.createElement('h1');
    h1.innerHTML = data[danda]['show']['name'];
    article.appendChild(h1);
    const h6 = document.createElement('h6');
    h6.innerHTML = 'Genres: ';
    const span = document.createElement('span');
    const genres = data[danda]['show']['genres'];
    const separetor = genres.join(' | ');
    span.textContent = separetor;
    h6.appendChild(span);
    article.appendChild(h6);
    const ab = document.createElement('a');
    article.appendChild(ab);
    const attr = document.createAttribute('href');
    attr.value = data[danda]['show']['url'];
    ab.setAttributeNode(attr);
    const bal = document.createAttribute('target');
    bal.value = '_blank';
    ab.setAttributeNode(bal);
    ab.innerHTML = data[danda]['show']['url'];
    const img = document.createElement('img');
    img.src = data[danda]['show']['image']['medium'];
    img.alt = 'This is a image';
    img.addEventListener('error', function(event) {
      event.target.src = 'https://via.placeholder.com/100x200?text=text+here';
      event.onerror = null;
    });
    article.appendChild(img);
    const p = document.createElement('p');
    p.innerHTML = data[danda]['show']['summary'];
    article.appendChild(p);

  }

}

 */

'use strict';
const form = document.querySelector('form');
const name = document.querySelector('input[name=q]');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  fetch(`https://api.tvmaze.com/search/shows?q=${name.value}`).
      then(response => response.json()).
      then(data => showinfo(data)).
      catch(error => console.log(error));

  const body = document.querySelector('main');
  const section = document.createElement('section');
  body.appendChild(section);
  const article = document.createElement('article');
  section.appendChild(article);

  function showinfo(data) {
    for (const danda in data) {
      console.log(data[danda]);

      const h1 = document.createElement('h1');
      h1.innerHTML = data[danda]['show']['name'];
      article.appendChild(h1);
      const h6 = document.createElement('h6');
      h6.innerHTML = 'Genres: ';
      const span = document.createElement('span');
      const genres = data[danda]['show']['genres'];
      const separetor = genres.join(' | ');
      span.textContent = separetor;
      h6.appendChild(span);
      article.appendChild(h6);

      const m = data[danda]['show']['image'];
      const img = document.createElement('img');
      img.src = 'https://via.placeholder.com/200x200?text=text+here';
      if (m != null) {
        img.src = m['medium'];
      } else {
        img.addEventListener('error', function(event) {
          event.target.src = 'https://via.placeholder.com/100x200?text=text+here';
          event.onerror = null;
        });
      }

      article.appendChild(img);
      const p = document.createElement('p');
      p.innerHTML = data[danda]['show']['summary'];
      article.appendChild(p);
      const dilog = document.createElement('dialog');
      article.appendChild(dilog);

    }

  }

});
