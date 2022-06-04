import { createElement } from './react/index.js'

const styled = {}

const elements = [
  'h1',
  'p',
  'div',
  'img',
  'article',
  'footer',
  'header',
  'section',
  'form',
  'input',
  'button',
  'select'
]

function buildStyles(strings, dynamicValues, props){
    let newStrings = strings.slice()
    strings.forEach((style, index) => {
        const styleDinamic = dynamicValues[index] ? dynamicValues[index] : ''
        const value = typeof styleDinamic === "function" ? styleDinamic(props) : styleDinamic
        newStrings += `${style} ${value}`
    })
    return newStrings
}


elements.forEach((tag) => {
  styled[tag] = function (strings, ...dynamicValues) {
    return function (props={}, content) {
        const style = buildStyles(strings, dynamicValues, props)
        return createElement(tag, {
          ...props,
          style,
        }, content)
    }
  }
})



// elements.forEach(tag => {
//     const taggedTemplate = (styles, ...dynamicValues) => {
//         let newStyles = styles.slice()
//         return (props = {}) => {    
//             styles.forEach((style, index) => {
//                 const styleDinamic = dynamicValues[index] ? dynamicValues[index] : ''
//                 const value = typeof styleDinamic === "function" ? styleDinamic(props) : styleDinamic
//                 newStyles += `${style} ${value}`
//             })
//             return (content = '') => {
//                 if(tag === 'img'){
//                     return `<${tag} style='${newStyles}' src='${props.src}'/>`
//                 }
//                 return `
//                     <${tag} style='${newStyles}'>
//                         ${content}
//                     </${tag}>
//                 `
//             }
//         }
//     }

//     styled[tag] = taggedTemplate
// })

export default styled