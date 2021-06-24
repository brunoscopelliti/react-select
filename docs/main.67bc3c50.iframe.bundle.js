(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1660:function(module,exports,__webpack_require__){__webpack_require__(1661),__webpack_require__(1837),__webpack_require__(1838),__webpack_require__(2725),__webpack_require__(2726),__webpack_require__(2729),__webpack_require__(2730),__webpack_require__(2728),__webpack_require__(2727),__webpack_require__(2731),__webpack_require__(2546),__webpack_require__(2673),__webpack_require__(2732),module.exports=__webpack_require__(2697)},1728:function(module,exports){},1838:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1052)},2586:function(module,exports){},2588:function(module,exports){},2599:function(module,exports){},2601:function(module,exports){},2626:function(module,exports){},2628:function(module,exports){},2629:function(module,exports){},2634:function(module,exports){},2636:function(module,exports){},2655:function(module,exports){},266:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return stateful_select}));__webpack_require__(964),__webpack_require__(1599),__webpack_require__(974),__webpack_require__(1600),__webpack_require__(1601),__webpack_require__(981),__webpack_require__(1602),__webpack_require__(982),__webpack_require__(611),__webpack_require__(983),__webpack_require__(1603),__webpack_require__(1604),__webpack_require__(1605),__webpack_require__(2715),__webpack_require__(2716),__webpack_require__(2718),__webpack_require__(2720),__webpack_require__(1598),__webpack_require__(2721),__webpack_require__(2722),__webpack_require__(610);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),index_es=__webpack_require__(263),dist_index_es=__webpack_require__(1635),package_dist_index_es=__webpack_require__(264),use_forward_ref_package_dist_index_es=__webpack_require__(317),use_id_package_dist_index_es=__webpack_require__(316);var use_scroll_selected_into_view=function useScrollSelectedIntoView(parentEl){Object(react.useEffect)((function(){var childEl=null==parentEl?void 0:parentEl.querySelector("[aria-selected]");childEl&&parentEl.scrollHeight>parentEl.clientHeight&&function scrollIntoView(parentEl,childEl){var childOffsetTop=childEl.offsetTop+childEl.offsetHeight;childOffsetTop>parentEl.clientHeight+parentEl.scrollTop?parentEl.scrollTop=childOffsetTop-parentEl.clientHeight:childEl.offsetTop<parentEl.scrollTop&&(parentEl.scrollTop=childEl.offsetTop)}(parentEl,childEl)}))},jsx_runtime=__webpack_require__(41),_excluded=["className","label","options","onChange","placeholder","renderHook","renderOption","scrollable","value"];function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var findOptionIndex=function findOptionIndex(options,value){return null==value?-1:options.findIndex((function(option){return(option.value||option.id)===value}))},rxAlphaNumericChar=/^[a-z0-9]$/i,Select=react_default.a.forwardRef((function(props,maybeRef){var _ref$current2,className=props.className,label=props.label,options=props.options,onChange=props.onChange,placeholder=props.placeholder,_props$renderHook=props.renderHook,renderHook=void 0===_props$renderHook?function(activeOption){return(null==activeOption?void 0:activeOption.label)||placeholder||options[0].label}:_props$renderHook,_props$renderOption=props.renderOption,renderOption=void 0===_props$renderOption?function(option){return option.label}:_props$renderOption,scrollable=props.scrollable,value=props.value,dropdownProps=_objectWithoutProperties(props,_excluded),ref=Object(use_forward_ref_package_dist_index_es.a)(maybeRef),instanceId=Object(use_id_package_dist_index_es.a)({prefix:"select"}),formatOptionId=function formatOptionId(option){return"".concat(instanceId,"-").concat(option.id)},labelId=instanceId+"-label",initiallyActiveOptionIndex=findOptionIndex(options,value),_useState2=_slicedToArray(Object(react.useState)(initiallyActiveOptionIndex),2),activeOptionIndex=_useState2[0],setActiveOptionIndex=_useState2[1];Object(react.useEffect)((function(){setActiveOptionIndex(findOptionIndex(options,value))}),[options,value]);var _useBool2=_slicedToArray(Object(package_dist_index_es.a)(!1),3),visible=_useBool2[0],show=_useBool2[1],hide=_useBool2[2],hideAndRestoreFocus=function hideAndRestoreFocus(){var _ref$current;hide(),function focusButton(button){button&&button.focus()}(null===(_ref$current=ref.current)||void 0===_ref$current?void 0:_ref$current.querySelector("button"))},onChangeInternal=function onChangeInternal(option,optionIdx){hideAndRestoreFocus(),setActiveOptionIndex(optionIdx),"function"==typeof onChange&&(option.value||option.id)!==value&&onChange(option,optionIdx)},refTime=Object(react.useRef)(null),refQuery=Object(react.useRef)(""),selectByQuery=function selectByQuery(){var query=refQuery.current;refQuery.current="",refTime.current=null,setActiveOptionIndex(function findOptionIndexByLabel(options,startingIndex,query){var queryRx=new RegExp("^"+query,"i"),currentIndex=startingIndex;do{if(currentIndex=currentIndex+1===options.length?0:currentIndex+1,queryRx.test(options[currentIndex].label))return currentIndex}while(currentIndex!==startingIndex);return 0}(options,activeOptionIndex,query))};return use_scroll_selected_into_view(null===(_ref$current2=ref.current)||void 0===_ref$current2?void 0:_ref$current2.querySelector("[role='listbox']")),0===options.length?null:Object(jsx_runtime.jsxs)("div",{ref:ref,className:Object(index_es.a)("ui-select",className,{"ui-scrollable":scrollable}),children:[Object(jsx_runtime.jsx)("div",{className:"ui-label",id:labelId,children:label}),Object(jsx_runtime.jsx)(dist_index_es.a,Object.assign({},dropdownProps,{"aria-activedescendant":-1===activeOptionIndex?void 0:formatOptionId(options[activeOptionIndex]),"aria-labelledby":labelId,hide:hide,label:renderHook(options[initiallyActiveOptionIndex],props),onBlur:hide,onKeyDown:function onKeydown(event){switch(event.code){case"ArrowDown":case"PageDown":event.preventDefault(),activeOptionIndex<options.length-1&&setActiveOptionIndex(activeOptionIndex+1);break;case"ArrowUp":case"PageUp":event.preventDefault(),activeOptionIndex>0&&setActiveOptionIndex(activeOptionIndex-1);break;case"End":event.preventDefault(),setActiveOptionIndex(options.length-1);break;case"Home":event.preventDefault(),setActiveOptionIndex(0);break;case"Enter":event.preventDefault(),onChangeInternal(options[activeOptionIndex],activeOptionIndex);break;case"Escape":event.preventDefault(),event.stopPropagation(),hideAndRestoreFocus();break;default:rxAlphaNumericChar.test(event.key)&&function scheduleSelectByChar(_char){refTime.current&&clearTimeout(refTime.current),refQuery.current+=_char,refTime.current=setTimeout(selectByQuery,250)}(event.key)}},role:"listbox",show:function showAndInitActiveOption(){-1===activeOptionIndex&&setActiveOptionIndex(0),show()},visible:visible,children:options.map((function(option,i){return Object(jsx_runtime.jsx)("div",{"aria-selected":i===activeOptionIndex?"true":void 0,id:formatOptionId(option),onClick:function onClick(){onChangeInternal(option,i)},onMouseOver:function onMouseOver(){setActiveOptionIndex(i)},role:"option",children:renderOption(option)},option.id)}))}))]})})),OptionShape=prop_types_default.a.exact({id:prop_types_default.a.string.isRequired,label:prop_types_default.a.string.isRequired,value:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.number])});Select.propTypes={className:prop_types_default.a.string,disabled:prop_types_default.a.bool,label:prop_types_default.a.string.isRequired,options:prop_types_default.a.arrayOf(OptionShape).isRequired,onChange:prop_types_default.a.func,placeholder:prop_types_default.a.string,renderHook:prop_types_default.a.func,renderOption:prop_types_default.a.func,scrollable:prop_types_default.a.bool,value:prop_types_default.a.string},Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{className:{type:{name:"string"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},label:{type:{name:"string"},required:!0,description:""},options:{type:{name:"arrayOf",value:{name:"custom",raw:"OptionShape"}},required:!0,description:""},onChange:{type:{name:"func"},required:!1,description:""},placeholder:{type:{name:"string"},required:!1,description:""},renderHook:{type:{name:"func"},required:!1,description:""},renderOption:{type:{name:"func"},required:!1,description:""},scrollable:{type:{name:"bool"},required:!1,description:""},value:{type:{name:"string"},required:!1,description:""}}};var src_select=Select;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["package/src/select.js"]={name:"Select",docgenInfo:Select.__docgenInfo,path:"package/src/select.js"});var stateful_select_excluded=["onChange","value"];function stateful_select_slicedToArray(arr,i){return function stateful_select_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function stateful_select_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function stateful_select_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return stateful_select_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return stateful_select_arrayLikeToArray(o,minLen)}(arr,i)||function stateful_select_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function stateful_select_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function stateful_select_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function stateful_select_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var stateful_select_StatefulSelect=function StatefulSelect(props){var _onChange=props.onChange,initialValue=props.value,selectProps=stateful_select_objectWithoutProperties(props,stateful_select_excluded),_useState2=stateful_select_slicedToArray(Object(react.useState)(initialValue),2),value=_useState2[0],setValue=_useState2[1];return Object(jsx_runtime.jsx)(src_select,Object.assign({},selectProps,{onChange:function onChange(option,optionIdx){setValue(option.value||option.id),"function"==typeof _onChange&&_onChange(option,optionIdx)},value:value}))};stateful_select_StatefulSelect.displayName="StatefulSelect",stateful_select_StatefulSelect.propTypes=src_select.propTypes,stateful_select_StatefulSelect.__docgenInfo={description:"",methods:[],displayName:"StatefulSelect",composes:["./select"]};var stateful_select=stateful_select_StatefulSelect;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["package/src/stateful-select.js"]={name:"StatefulSelect",docgenInfo:stateful_select_StatefulSelect.__docgenInfo,path:"package/src/stateful-select.js"});__webpack_exports__.b=src_select},2667:function(module,exports){},2670:function(module,exports){},2693:function(module,exports,__webpack_require__){var api=__webpack_require__(977),content=__webpack_require__(2694);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2694:function(module,exports,__webpack_require__){(exports=__webpack_require__(978)(!1)).push([module.i,':root {\n  --main-color: black;\n  --main-bg-color: white;\n  --dropdown-hook-border-color: #000;\n  --dropdown-hook-disabled-border-color: #bababa;\n  --dropdown-border-color: #bababa;\n  --modal-backdrop-bg-color: rgba(0, 0, 0, .2);\n  --modal-border-color: rgba(0, 0, 0, .2);\n  --modal-internal-border-color: #dee2e6;\n  --select-caret: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABjklEQVR4Xu2XsS6FQRCFv1tIlHQeQiNEJRIVrYdR6RVeRk+iQkKh8xAqWoWQm7it2NkzuzZ7br1zZs63Z+6fXTD5bzG5fwzACZicgFdg8gD4T9Ar4BWYnIBXYPIA+CvgFfAKTE7AKzB5APwV8Ap4BeoIbAEbdRLV1W/Aa1SlZgUugbNoY3HdBXAe0YwC2AGeIw0Ta7aBl1L9KIAj4La0WfL5A+C+tEcUwBpwB+yXNkw6/wAcAp+l+lEAyz6bwA2wW9pUfP4JOAbeI7o1AP4DhCrzSwO1AHpCqDavAtADgsS8EkBLCDLzagAtIEjNZwDIhCA3nwUgA0KK+UwASghp5rMBKCCkmm8BoAZCuvlWACIQmphvCaAEQjPzrQH8BUJT8z0A/AahufleAFYQroG9nyfsI3ASfdJGnsGrGsVrMNp/HTgFvoAr4CMqVFPXE0DN3LJaA5ChHFTICRj04mRjOwEylIMKOQGDXpxsbCdAhnJQISdg0IuTje0EyFAOKuQEDHpxsrGdABnKQYWmT8A3HU4+QTeTaKwAAAAASUVORK5CYII=");\n  --select-active-option-bg-color: #eaeaea; }\n\nbody.ui-modal-open {\n  overflow: hidden; }\n\n.ui-modal {\n  position: fixed;\n  z-index: 99999;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  outline: none; }\n\n.ui-modal-backdrop {\n  position: fixed;\n  z-index: 99998;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background: var(--modal-backdrop-bg-color); }\n\n.ui-modal-dialog {\n  max-width: 500px;\n  margin: 1.75rem auto;\n  pointer-events: none; }\n\n.ui-modal-content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: var(--main-bg-color);\n  background-clip: padding-box;\n  border: 1px solid var(--modal-border-color);\n  border-radius: 2px;\n  color: var(--main-color); }\n\n.ui-modal-header,\n.ui-modal-body,\n.ui-modal-footer {\n  padding: 1rem; }\n\n.ui-modal-header,\n.ui-modal-footer {\n  display: flex; }\n\n.ui-modal-header {\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--modal-internal-border-color, #dee2e6); }\n\n.ui-modal-title {\n  font-size: 1rem;\n  margin: 0; }\n\n.ui-modal-close {\n  background: none;\n  border: 0;\n  cursor: pointer;\n  font-size: 24px; }\n\n.ui-modal-body {\n  position: relative;\n  flex: 1 1 auto; }\n\n.ui-modal-footer {\n  justify-content: flex-end;\n  border-top: 1px solid var(--modal-internal-border-color, #dee2e6); }\n\n/**\n * Scrollable\n */\n.ui-modal-dialog.ui-scrollable {\n  height: calc(100% - 3.5rem); }\n  .ui-modal-dialog.ui-scrollable .ui-modal-content {\n    max-height: 100%;\n    overflow: hidden; }\n  .ui-modal-dialog.ui-scrollable .ui-modal-body {\n    overflow-y: auto; }\n\n/**\n * Centered vertically\n */\n.ui-modal-dialog.ui-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 3.5rem); }\n\n/**\n * Fullscreen\n */\n.ui-modal-dialog.ui-fullscreen {\n  width: 100vw;\n  height: 100%;\n  margin: 0;\n  max-width: none; }\n  .ui-modal-dialog.ui-fullscreen .ui-modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0; }\n\nbody {\n  margin: 0;\n  font-family: "Nunito", sans-serif;\n  font-size: 16px;\n  line-height: 24px; }\n\n.ui-select [aria-haspopup="listbox"],\n.ui-select [role="listbox"] {\n  min-width: 120px; }\n',""]),module.exports=exports},2695:function(module,exports,__webpack_require__){var api=__webpack_require__(977),content=__webpack_require__(2696);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2696:function(module,exports,__webpack_require__){(exports=__webpack_require__(978)(!1)).push([module.i,'.ui-dropdown > button {\n  background: none;\n  border: 0; }\n\n.ui-dropdown > button:not([disabled]) {\n  cursor: pointer; }\n\n.ui-dropdown > [role]:not([hidden]) {\n  background: var(--main-bg-color);\n  border: 1px solid var(--dropdown-border-color, var(--main-color, #000));\n  box-sizing: border-box;\n  color: var(--main-color);\n  margin-top: .2rem;\n  outline: none;\n  position: absolute;\n  z-index: 999; }\n\n.ui-select button {\n  border: 1px solid var(--dropdown-hook-disabled-border-color);\n  padding: .2rem .5rem;\n  text-align: left; }\n\n.ui-select button:not([disabled]) {\n  border-color: var(--dropdown-hook-border-color);\n  padding-right: .25rem;\n  background-image: var(--select-caret);\n  background-size: 16px;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  background-position: center right; }\n\n.ui-select [role="listbox"] {\n  background: var(--main-bg-color);\n  color: var(--main-color);\n  padding: .2rem 0; }\n\n.ui-select [role="option"] {\n  cursor: pointer;\n  padding: .1rem .75rem; }\n\n.ui-select [aria-selected] {\n  background: var(--select-active-option-bg-color); }\n\n.ui-select.ui-scrollable [role="listbox"] {\n  max-height: calc(2rem * 5);\n  overflow-y: auto; }\n',""]),module.exports=exports},2697:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(1052).configure)([__webpack_require__(2698)],module,!1)}).call(this,__webpack_require__(117)(module))},2698:function(module,exports,__webpack_require__){var map={"./index.stories.js":2699,"./modal.stories.js":2724};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2698},2699:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SimpleSelect",(function(){return SimpleSelect})),__webpack_require__.d(__webpack_exports__,"ScrollableSelect",(function(){return ScrollableSelect})),__webpack_require__.d(__webpack_exports__,"SelectWithPlaceholder",(function(){return SelectWithPlaceholder})),__webpack_require__.d(__webpack_exports__,"DisabledSelect",(function(){return DisabledSelect})),__webpack_require__.d(__webpack_exports__,"StatefulSelect",(function(){return StatefulSelect})),__webpack_require__.d(__webpack_exports__,"SelectWithCustomRenders",(function(){return SelectWithCustomRenders})),__webpack_require__.d(__webpack_exports__,"SelectWithManyEntries",(function(){return SelectWithManyEntries}));__webpack_require__(610),__webpack_require__(2701),__webpack_require__(2703),__webpack_require__(981),__webpack_require__(982),__webpack_require__(611),__webpack_require__(983),__webpack_require__(1598),__webpack_require__(0);var _src__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(266),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(41);__webpack_exports__.default={title:"Select",component:_src__WEBPACK_IMPORTED_MODULE_9__.b};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_src__WEBPACK_IMPORTED_MODULE_9__.b,Object.assign({},args,{onChange:function onChange(option){alert('Option selected: "'.concat(option.label,'"'))}}))};Template.displayName="Template";var SimpleSelect=Template.bind({});SimpleSelect.args={label:"Pick a fruit",options:[{id:"a",label:"Apple"},{id:"b",label:"Banana"},{id:"c",label:"Cherry"}]};var ScrollableSelect=Template.bind({});ScrollableSelect.args={label:"Pick a fruit",options:[{id:"a",label:"Apple"},{id:"b",label:"Banana"},{id:"c",label:"Cherry"},{id:"d",label:"Damson"},{id:"e",label:"Emu Berry Fruit"},{id:"f",label:"Feijoa"},{id:"g",label:"Grapes"},{id:"h",label:"Honeysuckle"},{id:"i",label:"Indian Fig Fruit"}],scrollable:!0};var SelectWithPlaceholder=Template.bind({});SelectWithPlaceholder.args={label:"Pick a fruit",options:[{id:"a",label:"Apple"},{id:"b",label:"Banana"},{id:"c",label:"Cherry"}],placeholder:"Fruits"};var DisabledSelect=Template.bind({});DisabledSelect.args={label:"Pick a fruit",disabled:!0,options:[{id:"a",label:"Apple"},{id:"b",label:"Banana"},{id:"c",label:"Cherry"}]};var TemplateStatefulSelect=function TemplateStatefulSelect(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_src__WEBPACK_IMPORTED_MODULE_9__.a,Object.assign({},args))};TemplateStatefulSelect.displayName="TemplateStatefulSelect";var StatefulSelect=TemplateStatefulSelect.bind({});StatefulSelect.args={label:"Pick a fruit",onChange:function onChange(option){alert('Option selected: "'.concat(option.label,'"'))},options:[{id:"a",label:"Apple"},{id:"b",label:"Banana"},{id:"c",label:"Cherry"}]};var EmojiMap=new Map([["a","🍎"],["b","🍌"],["c","🍒"]]),SelectWithCustomRenders=TemplateStatefulSelect.bind({});SelectWithCustomRenders.args={label:"Pick a fruit",options:[{id:"a",label:"Apple"},{id:"b",label:"Banana"},{id:"c",label:"Cherry"}],renderHook:function renderHook(selectedOption,props){return selectedOption=selectedOption||props.options[0],"".concat(EmojiMap.get(selectedOption.id)," ").concat(selectedOption.label)},renderOption:function renderOption(option){return"".concat(EmojiMap.get(option.id)," ").concat(option.label)}};var SelectWithManyEntries=Template.bind({});SelectWithManyEntries.args={label:"Pick a fruit",options:[{id:"o1",label:"Airplane"},{id:"o2",label:"Apple"},{id:"o3",label:"Boat"},{id:"o4",label:"Car"},{id:"o5",label:"Cart"},{id:"o6",label:"Eggplant"},{id:"o7",label:"Elephant"},{id:"o8",label:"Tree"}]},SimpleSelect.parameters=Object.assign({storySource:{source:'(args) => {\n  return (\n    <Select\n      {...args}\n      onChange={\n        (option) => {\n          alert(`Option selected: "${option.label}"`);\n        }\n      }\n    />\n  );\n}'}},SimpleSelect.parameters),ScrollableSelect.parameters=Object.assign({storySource:{source:'(args) => {\n  return (\n    <Select\n      {...args}\n      onChange={\n        (option) => {\n          alert(`Option selected: "${option.label}"`);\n        }\n      }\n    />\n  );\n}'}},ScrollableSelect.parameters),SelectWithPlaceholder.parameters=Object.assign({storySource:{source:'(args) => {\n  return (\n    <Select\n      {...args}\n      onChange={\n        (option) => {\n          alert(`Option selected: "${option.label}"`);\n        }\n      }\n    />\n  );\n}'}},SelectWithPlaceholder.parameters),DisabledSelect.parameters=Object.assign({storySource:{source:'(args) => {\n  return (\n    <Select\n      {...args}\n      onChange={\n        (option) => {\n          alert(`Option selected: "${option.label}"`);\n        }\n      }\n    />\n  );\n}'}},DisabledSelect.parameters),StatefulSelect.parameters=Object.assign({storySource:{source:"(args) => <StatefulSelect_ {...args} />"}},StatefulSelect.parameters),SelectWithCustomRenders.parameters=Object.assign({storySource:{source:"(args) => <StatefulSelect_ {...args} />"}},SelectWithCustomRenders.parameters),SelectWithManyEntries.parameters=Object.assign({storySource:{source:'(args) => {\n  return (\n    <Select\n      {...args}\n      onChange={\n        (option) => {\n          alert(`Option selected: "${option.label}"`);\n        }\n      }\n    />\n  );\n}'}},SelectWithManyEntries.parameters)},2724:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ModalContainingSelect",(function(){return ModalContainingSelect}));__webpack_require__(610),__webpack_require__(0);var _bscop_react_modal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1633),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(266),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(41);__webpack_exports__.default={title:"Modal",component:_src__WEBPACK_IMPORTED_MODULE_3__.b};var ModalContainingSelect=function ModalContainingSelect(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_bscop_react_modal__WEBPACK_IMPORTED_MODULE_2__.a,{renderContent:function renderContent(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.b,{label:"Pick a fruit",options:[{id:"a",label:"Apple"},{id:"b",label:"Banana"},{id:"c",label:"Cherry"},{id:"d",label:"Damson"}]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href:"#",children:"Nam luctus"}),", enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus"]})]})},renderHook:function renderHook(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",Object.assign({type:"button"},props,{children:"Show modal"}))},rootId:"modal-root",title:"Modal title"})};ModalContainingSelect.displayName="ModalContainingSelect",ModalContainingSelect.parameters=Object.assign({storySource:{source:'() => {\n    return (\n      <Modal\n        renderContent={\n          () => {\n            return (\n              <div>\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec\n                  pharetra ultricies, ante erat imperdiet velit.\n                </p>\n                <Select\n                  label="Pick a fruit"\n                  options={\n                    [\n                      {\n                        id: "a",\n                        label: "Apple",\n                      },\n                      {\n                        id: "b",\n                        label: "Banana",\n                      },\n                      {\n                        id: "c",\n                        label: "Cherry",\n                      },\n                      {\n                        id: "d",\n                        label: "Damson",\n                      },\n                    ]\n                  }\n                />\n                <p>\n                  <a href="#">Nam luctus</a>, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat\n                  mi leo sit amet lectus\n                </p>\n              </div>\n            );\n          }\n        }\n        renderHook={\n          (props) => {\n            return (\n              <button type="button" {...props}>Show modal</button>\n            );\n          }\n        }\n        rootId="modal-root"\n        title="Modal title"\n      />\n    );\n  }'}},ModalContainingSelect.parameters),ModalContainingSelect.__docgenInfo={description:"",methods:[],displayName:"ModalContainingSelect"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["package/stories/modal.stories.js"]={name:"ModalContainingSelect",docgenInfo:ModalContainingSelect.__docgenInfo,path:"package/stories/modal.stories.js"})},2732:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(964),__webpack_require__(974),__webpack_require__(2684),__webpack_require__(2685),__webpack_require__(2686),__webpack_require__(2687),__webpack_require__(2688),__webpack_require__(2689),__webpack_require__(2690);var client_api=__webpack_require__(174),esm=__webpack_require__(5),parameters=(__webpack_require__(2691),__webpack_require__(2693),__webpack_require__(2695),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[1660,2,3]]]);