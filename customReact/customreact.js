function customRender(reactElement, container) {
  /*
    //step1 create an element
    const domElement= document.createElement(reactElement.type)
    //set text
    domElement.innerHTML = reactElement.children
    //set attribute
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
    */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  //loop through the props
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

// document.getElementById('root')
const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
