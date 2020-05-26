/**
 * Main javascript file to dynamically generate the navigation bar 
 * and supporting functions to style the page
 */

const elementsInNavBar = [
  [ '#summary', 'The Quest', 'Link to Summary section' ],
  [ '#featuredBlogs', 'Featured Blogs', 'Link to Featured Blogs section' ],
  [ '#authorInfo', 'About', 'Link to About section' ],
  [ '#subscribe', 'Subscribe', 'Link to Subscribe Form' ]
];

/**
 * Function to create an <li> element inside the <ul> element of the navigation bar
 */
const createLiElementForNav = () => {
  let liElementForNav = document.createElement('li');
  liElementForNav.style.listStyle = 'none';
  liElementForNav.style.display = 'inline-block';
  liElementForNav.style.padding = '20px';
  liElementForNav.style.backgroundColor = '#BF9259';
  liElementForNav.style.margin = '10px';
  liElementForNav.style.width = '200px';
  liElementForNav.style.textAlign = 'center';
  return liElementForNav;
};

/**
 * Function to create an <a> element inside each of the <li> elements of the navigation bar
 */
const createAHrefElementForNav = ( aHrefElementAttrArr ) => {
  let aHrefElementForNav = document.createElement('a');
  aHrefElementForNav.href = aHrefElementAttrArr[0];
  aHrefElementForNav.innerHTML = aHrefElementAttrArr[1];
  aHrefElementForNav.style.textDecoration = 'none';
  aHrefElementForNav.style.display = 'block';
  aHrefElementForNav.style.color = '#000';
  aHrefElementForNav.style.font = 'bold';
  aHrefElementForNav.onmouseover = () => {
    aHrefElementForNav.style.backgroundColor = '#F3F13F';
  };
  aHrefElementForNav.onmouseout = () => {
    aHrefElementForNav.style.backgroundColor = '#BF9259';
  };
  aHrefElementForNav.onclick = () => {
    const selectedElement = document.querySelector( aHrefElementAttrArr[0] );
    selectedElement.style.backgroundColor = '#FACA9A';
  };
  aHrefElementForNav.setAttribute( 'aria-label', aHrefElementAttrArr[2] );
  return aHrefElementForNav;
};

/**
 * createDynamicNavbar: function to create the nav bar in a dynamic way
 * Creates multiple ul elements with <a> elements inside each 
 * for linking to the individual sections in the page
 */
const createDynamicNavbar = () => {
  const navbar = document.querySelector('nav');
  let ulElement = document.createElement('ul');

  for( let i=0; i<elementsInNavBar.length; i++ ) {
    const liElement = createLiElementForNav();
    const aHrefElementAttr = elementsInNavBar[i];
    const ahrefElementInNavBar = createAHrefElementForNav( aHrefElementAttr );
    liElement.appendChild( ahrefElementInNavBar );
    ulElement.appendChild(liElement );
  }

  navbar.appendChild(ulElement);
};

/**
 * Function to highlight the section that has been selected (links are from the navigation bar)
 */
const styleSelectedStateForSections = () => {
  for( let i=0; i<elementsInNavBar.length; i++ ) {
    let sectionElement = document.querySelector( elementsInNavBar[i] );
    sectionElement.onmouseout = () => {
      sectionElement.style.backgroundColor = 'white';
      sectionElement.color = '#000';
    };
  }
};


window.addEventListener('DOMContentLoaded', (event) => {
  const t0 = performance.now();
  createDynamicNavbar();
  styleSelectedStateForSections();
  const t1 = performance.now();
  console.log( 'Page loaded in: ' + (t1-t0) );
});
