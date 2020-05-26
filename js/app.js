/**
 * Main javascript file to dynamically generate the navigation bar 
 * and supporting functions to style the page
 */

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
const createAHrefElementForNav = ( hrefTo, innerHTMLStr, attrObj ) => {
  let aHrefElementForNav = document.createElement('a');
  aHrefElementForNav.href = hrefTo;
  aHrefElementForNav.innerHTML = innerHTMLStr;
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
    const selectedElement = document.querySelector( hrefTo );
    selectedElement.style.backgroundColor = '#FACA9A';
  };
  aHrefElementForNav.setAttribute( 'aria-label', attrObj['aria-label']);
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
  
  let liElementSummary = createLiElementForNav();
  const aHrefSummaryAriaLabel = { 'aria-label': 'Link to Summary section' };
  const ahrefSummary = createAHrefElementForNav( '#summary', 'The Quest', aHrefSummaryAriaLabel );
  liElementSummary.appendChild(ahrefSummary);
  ulElement.appendChild(liElementSummary);

  let liElementFeaturedBlogs = createLiElementForNav();
  const aHrefFeaturedBlogsAriaLabel = { 'aria-label': 'Link to Featured Blogs section' };
  let ahrefFeaturedBlogs = createAHrefElementForNav( '#featuredBlogs', 'Featured Blogs', aHrefFeaturedBlogsAriaLabel );
  liElementFeaturedBlogs.appendChild(ahrefFeaturedBlogs);
  ulElement.appendChild(liElementFeaturedBlogs);

  let liElementAbout = createLiElementForNav();
  const aHrefAboutAriaLabel = { 'aria-label': 'Link to About section' };
  let ahrefAbout = createAHrefElementForNav( '#authorInfo', 'About', aHrefAboutAriaLabel );
  liElementAbout.appendChild(ahrefAbout);
  ulElement.appendChild(liElementAbout);

  let liElementSubscribe = createLiElementForNav();
  const aHrefSubscribeAriaLabel = { 'aria-label': 'Link to Subscribe Form' };
  let ahrefSubscribe = createAHrefElementForNav( '#subscribe', 'Subscribe', aHrefSubscribeAriaLabel );
  liElementSubscribe.appendChild(ahrefSubscribe);
  ulElement.appendChild(liElementSubscribe);

  navbar.appendChild(ulElement);
};

/**
 * Function to highlight the section that has been selected (links are from the navigation bar)
 */
const styleSelectedStateForSections = () => {
  let sections = [ '#summary', '#featuredBlogs', '#subscribe', '#authorInfo' ];
  for( let i=0; i<sections.length; i++ ) {
    let sectionElement = document.querySelector( sections[i] );
    sectionElement.onmouseout = () => {
      sectionElement.style.backgroundColor = 'white';
      sectionElement.color = '#000';
    };
  }
};


createDynamicNavbar();
styleSelectedStateForSections();
