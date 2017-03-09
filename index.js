let DomPropertyOperations = require('react-dom/lib/DOMPropertyOperations');

DomPropertyOperations._setValueForAttribute = DomPropertyOperations.setValueForAttribute;
DomPropertyOperations.setValueForAttribute = function (node, name, value) {
	if(node.localName.indexOf('-') > -1){
		// custom element
		if(typeof value === 'object'){
			node[name] = value;
		}else{
			node.setAttribute(name, value);
		}
		return;
	}
	this._setValueForAttribute(node, name, value);
};