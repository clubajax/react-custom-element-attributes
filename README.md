#react-custom-element-attributes

Allow data objects to be passed to custom elements as attributes.

##Install

    npm install clubajax/react-custom-element-attributes --save
    
In your app code, as early as possible:
```jsx
import 'react-custom-element-attributes';
```
##Usage

React uses attribites to pass data around, but HTML does not allow complex objects in attributes, it only allows strings.
In your custon element, set up a getter/setter (primarily the setter) to coincide with this attribute.
```jsx
<my-custom data={this.props.data}></mycustom

class MyCustom extends HTMLElement {
    set data (value) {
        this.value = value;
        // do something very data-like
    }
}
```

##License

Free. As in beer. [MIT](./LICENSE)