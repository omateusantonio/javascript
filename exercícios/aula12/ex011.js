var idade = 70
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) { // else if = se não x e se y
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}
