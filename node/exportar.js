console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

// exporta algo para fora
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports) // quem retorna

// Não será retornado por que module.exports que retorna
exports = {
  nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }
