let name = `Josh`
let language = `Ember.js`

let introduction = name => {
    return(`Hi, my name is ${name}.`)
}

let introductionWithLanguage = (name,language) => {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

let introductionWithLanguageOptional = (name, language = `JavaScript`) => {
    if (language === `JavaScript`) {
        return(`Hi, my name is Gracie and I am learning to program in ${language}.`)
    } if (language === `Python`) {
        return(`Hi, my name is ${name} and I am learning to program in Python.`)
    }
}

