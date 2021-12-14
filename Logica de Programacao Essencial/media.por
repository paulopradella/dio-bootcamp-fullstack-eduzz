//Programa para calcular a média e um aluno em portugol

programa {
	funcao inicio() {
	    
		real nota1, nota2, nota3, nota4, media
		cadeia aluno
		
		escreva("Digite o nome do aluno:\n")
		leia(aluno)
		escreva("O nome do aluno é: " + aluno +"\n")
		
		escreva("Digite a primeira nota:\n")
		leia(nota1)
		escreva("Digite a primeira nota:\n")
		leia(nota2)
		escreva("Digite a primeira nota:\n")
		leia(nota3)
		escreva("Digite a primeira nota:\n")
		leia(nota4)
		
		media = (nota1 + nota2 + nota3 + nota4)/4
		
		se(media >= 7){
		    escreva("\nSua média foi: " + media + "\nParabéns você foi aprovado")
		}
		senao{
		    escreva("\nSua média foi: " + media + "\nVocê foi reprovado")
		}
	}
}
