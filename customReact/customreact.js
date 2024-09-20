function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    */
    
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement = {
    type : 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    Children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);