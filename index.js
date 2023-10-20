let nome, sobrenome, nomecompleto
nome = prompt ("Digite seu primeiro nome: ")
sobrenome = prompt (`${nome}, Digite seu segundo nome: ` )
nomecompleto = nome + sobrenome
alert (`Nome completo: ${nomecompleto}`)
alert (`Nome de catálogo: ${sobrenome.toUpperCase()}, ${nome}`)